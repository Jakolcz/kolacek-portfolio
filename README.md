# Jakub Koláček — Senior Java Backend Developer

[![Live Site](https://img.shields.io/badge/Live_Site-kolacek.dev-success?style=for-the-badge&logo=globe)](https://kolacek.dev)
[![Status](https://img.shields.io/badge/Status-Open_to_B2B_%26_senior_roles-blue?style=for-the-badge)](https://kolacek.dev/contact)

> **"Robust Java Backends for Complex Enterprises."**

Welcome to the source code of my personal portfolio. While this repository showcases a modern frontend implementation,
my professional focus is on building stable, scalable backend systems for the Fintech, Travel, Public sector, and Enterprise domains.

Based in **Brno, Czech Republic** | coding since **2013**.

---

## 👨‍💻 About Me

I am a **Senior Java Backend Engineer** specializing in **Spring Boot**, **Kafka / event-driven microservices**, and **identity & access management**. I
deliver practical, robust software solutions without unnecessary over-engineering. My focus is on stability,
maintainability, and direct business value through clean code.

With **12+ years of experience** in large-scale corporate environments (IBA CZ, Hartmann Rico), I have worked
independently (B2B) since June 2025. IBA CZ / Kuoni Tumlare remains a long-running contract client, and I build my own
products alongside it. I'm open to both **B2B contracts** and **senior/lead backend roles**.

### My Core Tech Stack (Backend)

* **Languages:** Java (up to 25), SQL, TypeScript (for tooling).
* **Frameworks:** Spring Boot 4, Quarkus, Kafka Streams, Hibernate.
* **Architecture:** Microservices, REST APIs, System Integration.
* **Security:** OAuth2, JWT, Digital Signatures (XAdES/PAdES).
* **Infrastructure:** Kubernetes, Helm, ArgoCD, Docker, CI/CD pipelines.

---

## 🚀 About This Project (The Frontend)

As a backend developer, I prefer efficient tools that get the job done. This portfolio website is a **static site**
built to be fast, responsive, and easy to maintain. It serves as a testing ground for modern AI-assisted development
workflows.

### How it was built

This project was constructed using a hybrid approach of manual coding and AI agents:

* **Framework:** [Astro](https://astro.build/) (Fast, content-focused).
* **Styling:** [Tailwind CSS](https://tailwindcss.com/).
* **Design:** Prototyped using **Google Stitch**.
* **AI Assistance:**
    * **Google Jules:** Used for code generation and architectural suggestions.
    * **GitHub Copilot:** Used for inline code completion and refactoring.
* **Deployment:** Connected to **Cloudflare Pages** for global edge hosting.

---

## 💼 Selected Projects

Here are a few technical challenges I've solved. For a full list, visit the [Projects Page](https://kolacek.dev/projects).

### 💳 FinTech & Payments

* **Payment Gateway Customization:** Extensive customization of a major payment gateway, implementing secure transaction
  handling and reconciliation logic.
* **M2M Payment Adapters:** Middleware for communication between payment terminals and SIM top-up services.

### 🏢 Enterprise Integration

* **Event-Driven Travel Platform:** ~40 Spring Boot microservices on Kafka / Kafka Streams with OpenSearch and gRPC for
  a global travel operator, including a platform-wide Spring Boot 4 / Java 25 migration.
* **Government Data Integration:** Automated parsing/ingestion of government data box messages (Datové schránky) into
  internal DBs.

### 🤖 IoT & Automation

* **Vending Machine Telemetry:** Server backend for logistics planning + Android app for drivers using the MDB protocol.
* **Computer Vision:** Smart camera dashboard using OpenCV and YOLO DNN for object detection.

---

## 🛠️ Local Development

If you want to run this portfolio locally to see how the internationalization (i18n) or Astro components work:

```bash
# Clone the repository
git clone https://github.com/Jakolcz/kolacek-portfolio.git

# Install dependencies
npm install

# Start the dev server
npm run dev