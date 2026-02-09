from playwright.sync_api import sync_playwright
import time

def verify(page):
    print("Navigating to http://localhost:4321")
    try:
        page.goto("http://localhost:4321", timeout=60000)
    except Exception as e:
        print(f"Navigation failed: {e}")
        return

    # Wait for the tech stack section to be visible
    print("Waiting for Tech Stack text")
    try:
        page.wait_for_selector("text=Tech Stack", timeout=10000)
    except:
        print("Timeout waiting for 'Tech Stack' text. Dumping page content...")
        # print(page.content()) # Too verbose
        page.screenshot(path="verification/timeout.png")
        return

    # Find the scrolling containers
    print("Checking for animate-scroll elements")
    scroll_containers = page.locator(".animate-scroll")
    # Wait a bit for JS/hydration if needed (though this is static mostly)
    time.sleep(1)

    count = scroll_containers.count()
    print(f"Found {count} scrolling containers (expected 2)")

    if count != 2:
        print("ERROR: Expected 2 scrolling containers, found", count)

    # Check for duplicated items.
    java_items = page.locator("text=Java 25")
    java_count = java_items.count()
    print(f"Found {java_count} 'Java 25' items (expected 6)")

    if java_count != 6:
        print("ERROR: Expected 6 'Java 25' items, found", java_count)

    # Take screenshot of the Hero Section
    print("Taking screenshot")
    page.screenshot(path="verification/frontend_verification.png", full_page=True)
    print("Screenshot saved to verification/frontend_verification.png")

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    try:
        verify(page)
    except Exception as e:
        print("An error occurred:", e)
        page.screenshot(path="verification/error_exception.png")
    finally:
        browser.close()
