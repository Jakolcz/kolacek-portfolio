export const languages = {
    en: 'English',
    cs: 'Čeština',
};

export const defaultLang = 'en';

export const translations = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.work': 'Work',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.resume': 'Resume',

        // Hero Section
        // TODO: Come up with something better
        'hero.role': 'Java Developer available for B2B cooperation',
        'hero.title': 'Robust Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 dark:to-emerald-200">Backends</span> for Complex Enterprises',
        'hero.description1': 'Senior Freelance Java Developer specializing in',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST APIs',
        'hero.description2': 'Delivering scalable and efficient solutions tailored to your business needs.',
        'hero.mapAlt': 'Map showing my location,',
        'hero.basedIn': 'Based in',
        'hero.location': 'Brno, CZ',
        'hero.since': 'Since 2013',
        'hero.experience': '10+ years of experience',
        'hero.sectors': 'Banking, Travel agencies & Telecom',
        'hero.techStack': 'Tech Stack',

        // Services Page
        'services.badge': 'SERVICES',
        'services.title': 'Reliable Backend Development & System Integration',
        'services.description': 'I deliver practical, robust software solutions without unnecessary over-engineering. My focus is on stability, maintainability, and direct business value through clean code and proven architecture.',
        'services.action': 'Start a Project',

        'services.card1.title': 'Java Backend Development',
        'services.card1.desc': 'Building scalable, enterprise-grade applications using modern Java (17+) and Spring Boot. I focus on creating secure, high-performance APIs and microservices.',
        'services.card1.feat1.title': 'Secure by Design',
        'services.card1.feat1.desc': 'OAuth2, JWT, and digital signatures (XAdES/PAdES).',
        'services.card1.feat2.title': 'High Performance',
        'services.card1.feat2.desc': 'Optimized JVM tuning and efficient Elasticsearch queries.',

        'services.card2.title': 'System Integration',
        'services.card2.desc': 'Seamlessly connecting disparate systems. I have extensive experience integrating 3rd party services to unify your data flow.',
        'services.card2.bullet1': 'Payment Gateways (O2 / Barion)',
        'services.card2.bullet2': 'ERP Systems (SAP JCO / Helios)',
        'services.card2.bullet3': 'Government Data Boxes (Datové schránky)',

        'services.card3.title': 'App Maintenance & Support',
        'services.card3.desc': 'Keeping the lights on for critical systems. I stabilize legacy codebases, manage helpdesk tickets, and ensure portals run smoothly.',
        'services.card3.tag1': 'Bug Fixing',
        'services.card3.tag2': 'Legacy Refactor',
        'services.card3.tag3': 'SLA Support',

        'services.card4.title': 'Automation & Hardware Communication',
        'services.card4.desc': 'Bridging the gap between digital software and physical hardware. I develop specialized communication layers for IoT devices and industrial equipment.',
        'services.card4.sub1.title': 'Vending',
        'services.card4.sub1.desc': 'MDB Protocol / Payment Systems',
        'services.card4.sub2.title': 'Terminals',
        'services.card4.sub2.desc': 'Card Reader Integration & Android',
        'services.card4.sub3.title': 'Vision',
        'services.card4.sub3.desc': 'Camera Stream Analysis / YOLO',

        'services.techstack.title': 'TECHNOLOGIES I WORK WITH',

        // About Page
        'about.badge': 'ABOUT ME',
        'about.title': 'Hi, I\'m Jakub.',
        'about.description': 'Senior Java Backend Developer based in Czech Republic. I build stable, scalable systems for enterprise and financial sectors.',
        'about.journey.title': 'The Journey',
        'about.journey.p1': 'It all started at <strong class="text-slate-900 dark:text-white font-semibold">SPŠE IT</strong>, where I laid the groundwork for my engineering mindset. I don\'t just write code; I engineer solutions that last.',
        'about.journey.p2': 'For years, I honed my craft at <strong class="text-slate-900 dark:text-white font-semibold">IBA CZ</strong> and <strong class="text-slate-900 dark:text-white font-semibold">Hartmann Rico</strong>, navigating the complexities of large-scale corporate environments. These experiences taught me the value of rigor, process, and reliability.',
        'about.journey.p3': 'In the <strong class="text-slate-900 dark:text-white font-semibold">middle of 2025</strong>, I transitioned to freelancing. Now, I bring that same enterprise-grade stability to my clients directly. I believe in proven tools—<strong class="text-primary font-mono">Java</strong>, <strong class="text-primary font-mono">Spring</strong>, and <strong class="text-primary font-mono">SQL</strong> are my weapons of choice because they work, and they scale.',
        'about.journey.tag1': 'Stability',
        'about.journey.tag2': 'Backend',
        'about.journey.tag3': 'Architecture',
        'about.stack.title': 'My Tech Stack',
        'about.stack.languages': 'LANGUAGES',
        'about.stack.frameworks': 'FRAMEWORKS',
        'about.stack.infrastructure': 'INFRASTRUCTURE',
        'about.stack.databases': 'DATABASES',
        'about.hobbies.title': 'When I\'m not coding',
        'about.hobbies.text': 'I\'m still tinkering with technology. You\'ll find me building hardware projects with <strong class="text-slate-900 dark:text-white font-semibold">Raspberry Pi</strong> or experimenting with training custom <strong class="text-slate-900 dark:text-white font-semibold">AI models</strong>.',
        'about.languages.title': 'Languages',
        'about.languages.cs': 'Czech',
        'about.languages.cs_level': 'Native',
        'about.languages.en': 'English',
        'about.languages.en_level': 'B2 / Proficient',
        'about.languages.note': 'Communication is key to successful delivery.',

        // Resume Page
        'resume.badge': 'AVAILABLE FOR WORK',
        'resume.title': 'Jakub Koláček',
        'resume.subtitle': 'Senior Java Backend Developer',
        'resume.description': 'Specializing in scalable microservices, system integration, and high-performance backend systems. Building robust solutions with Java 17+, Spring Boot, and Docker.',
        'resume.actions.share': 'Share',
        'resume.actions.download': 'Download PDF',

        'resume.experience.title': 'Professional Experience',

        // Job 1
        'resume.job1.role': 'Senior Java Developer',
        'resume.job1.company': 'IBA CZ',
        'resume.job1.date': '06/2015 — Present',
        'resume.job1.bullet1': 'Developed microservices for Kuoni Tumlare, exposing Elasticsearch data via REST.',
        'resume.job1.bullet2': 'Implemented payment gateway customization and EET libraries for O2 Czech Republic.',
        'resume.job1.bullet3': 'Created M2M adapter for payment terminals and SIM top-up services.',
        'resume.job1.bullet4': 'Built a government data box importer for ČEZ Group with REST interface.',
        'resume.job1.bullet5': 'Maintained the Legislative Government Helpdesk for the Czech Republic Office of the Government.',

        // Job 2
        'resume.job2.role': 'Java Developer',
        'resume.job2.company': 'Hartmann Rico',
        'resume.job2.date': '06/2013 — 05/2015',
        'resume.job2.bullet1': 'Developed internal workflow components (forms, requests) connecting to SAP via JCO.',
        'resume.job2.bullet2': 'Automated PDF generation using wkhtmltopdf and EMC Documentum integration.',

        // Job 3
        'resume.job3.role': 'Android Developer',
        'resume.job3.company': 'ANeT s.r.o.',
        'resume.job3.date': '11/2012 — 04/2013',
        'resume.job3.bullet1': 'Created an Android application serving as a chip card reader/attendance terminal.',
        'resume.job3.bullet2': 'Implemented data synchronization via WebServices to central databases.',

        'resume.sidebar.tech.title': 'TECHNICAL ARSENAL',
        'resume.sidebar.tech.backend': 'Backend Core',
        'resume.sidebar.tech.backend_level': 'Expert',
        'resume.sidebar.tech.infrastructure': 'Infrastructure',
        'resume.sidebar.tech.data': 'Data',

        'resume.sidebar.education.title': 'EDUCATION',
        'resume.sidebar.education.school': 'SPŠE IT Brno (Purkyňova 2832)',
        'resume.sidebar.education.degree': 'Information Technology & Database Systems',
        'resume.sidebar.education.date': '2009 — 2013',

        'resume.sidebar.certifications.title': 'CERTIFICATIONS',
        'resume.sidebar.connect.title': 'LET\'S CONNECT',
        'resume.sidebar.connect.text': 'Looking for a senior developer to lead your next big project? I\'m open to new opportunities.',

        // Projects Page
        'projects.badge': 'PORTFOLIO',
        'projects.title': 'Selected Projects',
        'projects.description': 'A curated list of technical challenges I\'ve solved. Delivering robust backend solutions and system integrations across FinTech, Enterprise, and IoT domains.',

        'projects.section1.title': 'FinTech & Payments',
        'projects.card1.title': 'Payment Gateway Customization',
        'projects.card1.desc': 'Extensive customization of a major payment gateway. Implemented secure transaction handling, recurring payments, and reconciliation logic.',
        'projects.card2.title': 'M2M Payment Adapters',
        'projects.card2.desc': 'Designed middleware for communication between payment terminals and SIM top-up services, enabling automated transactions without human intervention.',

        'projects.section2.title': 'Enterprise Systems & Integration',
        'projects.card3.title': 'Travel Microservices',
        'projects.card3.desc': 'Developed scalable microservices exposing Elasticsearch data via REST APIs for a leading global travel management company.',
        'projects.card4.title': 'Data Box Importer',
        'projects.card4.desc': 'Automated parsing and ingestion of government data box messages into internal DB. Includes a REST interface for verification.',
        'projects.card5.title': 'Government Helpdesk',
        'projects.card5.desc': 'Backend logic for a high-traffic citizen support portal, handling ticket routing and status tracking.',

        'projects.section3.title': 'IoT & Logistics',
        'projects.card6.title': 'Vending Machine Management',
        'projects.card6.desc': 'Telemetry solution for tobacco vending machines. Server backend for logistics planning + Android app for drivers.',
        'projects.card7.title': 'Attendance Terminal',
        'projects.card7.desc': 'Android-based chip card reader serving as an attendance terminal. Syncs entry/exit data via WebServices.',

        'projects.section4.title': 'Experiments & Open Source',
        'projects.card8.title': 'Smart Camera Dashboard',
        'projects.card8.desc': 'Video stream analysis using OpenCV and YOLO DNN for object detection and license plate recognition.',
        'projects.card9.title': 'Evil Things',
        'projects.card9.desc': 'A Rust and C based prank toolkit for colleagues who forget to lock their workstations. Manipulates Registry, system sounds, and input via WinAPI.',
        'projects.card10.title': 'MidPoint CodeGen',
        'projects.card10.desc': 'Developer tool automating the generation of boilerplate code via a maven plugin for Evolveum MidPoint Identity Management connectors.',

        'projects.techstack.title': 'TECHNOLOGIES I WORK WITH',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. All rights reserved.',
        'footer.joke': 'Built with Java... just kidding, Astro, TypeScript & Tailwind.'
    },
    cs: {
        // Navbar
        'nav.home': 'Domů',
        'nav.services': 'Služby',
        'nav.work': 'Práce',
        'nav.about': 'O mně',
        'nav.contact': 'Kontakt',
        'nav.resume': 'Životopis',

        // Hero Section
        'hero.role': 'Java vývojář pro B2B spolupráci',
        'hero.title': 'Robustní Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600 dark:to-emerald-200">backendy</span> pro náročné enterprise systémy',
        'hero.description1': 'Senior Java vývojář na volné noze se specializací na',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST API',
        'hero.description2': 'Tvořím škálovatelná řešení na míru vašemu byznysu.',
        'hero.mapAlt': 'Mapa ukazující mou polohu,',
        'hero.basedIn': 'Sídlo',
        'hero.location': 'Brno',
        'hero.since': 'Od roku 2013',
        'hero.experience': '10+ let zkušeností',
        'hero.sectors': 'Bankovnictví, Cestovní kanceláře & Telekomunikace',
        'hero.techStack': 'Tech stack',

        // Services Page
        'services.badge': 'SLUŽBY',
        'services.title': 'Spolehlivý vývoj backendu a systémová integrace',
        'services.description': 'Dodávám praktická a robustní softwarová řešení bez zbytečného over-engineeringu. Zaměřuji se na stabilitu, udržitelnost a přímou obchodní hodnotu prostřednictvím čistého kódu a osvědčené architektury.',
        'services.action': 'Zahájit spolupráci',

        'services.card1.title': 'Vývoj Java backendů',
        'services.card1.desc': 'Tvorba škálovatelných enterprise aplikací s využitím moderní Javy (17+) a Spring Boot. Zaměřuji se na bezpečné a výkonné API a mikroslužby.',
        'services.card1.feat1.title': 'Bezpečnostní architektura',
        'services.card1.feat1.desc': 'OAuth2, JWT a digitální podpisy (XAdES/PAdES).',
        'services.card1.feat2.title': 'Vysoký výkon',
        'services.card1.feat2.desc': 'Optimalizované ladění JVM a efektivní dotazy v Elasticsearch.',

        'services.card2.title': 'Systémová integrace',
        'services.card2.desc': 'Bezproblémové propojení různorodých systémů. Mám rozsáhlé zkušenosti s integrací služeb třetích stran pro sjednocení toku dat.',
        'services.card2.bullet1': 'Platební brány (O2 / Barion)',
        'services.card2.bullet2': 'ERP systémy (SAP JCO / Helios)',
        'services.card2.bullet3': 'Datové schránky',

        'services.card3.title': 'Údržba a podpora aplikací',
        'services.card3.desc': 'Udržování kritických systémů v chodu. Stabilizuji legacy kód, spravuji helpdesk tickety a zajišťuji hladký běh portálů.',
        'services.card3.tag1': 'Opravy chyb',
        'services.card3.tag2': 'Refaktoring legacy kódu',
        'services.card3.tag3': 'SLA podpora',

        'services.card4.title': 'Automatizace a komunikace s hardwarem',
        'services.card4.desc': 'Přemostění propasti mezi digitálním softwarem a fyzickým hardwarem. Vyvíjím specializované komunikační vrstvy pro IoT zařízení a průmyslové vybavení.',
        'services.card4.sub1.title': 'Automaty',
        'services.card4.sub1.desc': 'MDB protokol / Platební systémy',
        'services.card4.sub2.title': 'Terminály',
        'services.card4.sub2.desc': 'Integrace čteček karet & Android',
        'services.card4.sub3.title': 'Vize',
        'services.card4.sub3.desc': 'Analýza kamerového streamu / YOLO',

        'services.techstack.title': 'TECHNOLOGIE, SE KTERÝMI PRACUJI',

        // About Page
        'about.badge': 'O MNĚ',
        'about.title': 'Ahoj, jsem Jakub.',
        'about.description': 'Jsem senior Java backend vývojář z Brna. Zaměřuji se na vývoj stabilních a škálovatelných systémů pro enterprise a finanční sektor.',
        'about.journey.title': 'Moje cesta',
        'about.journey.p1': 'Vše začalo na <strong class="text-slate-900 dark:text-white font-semibold">SPŠE IT</strong>, kde jsem získal základy inženýrského myšlení. Mým cílem není jen psát kód, ale tvořit trvanlivá a udržitelná řešení.',
        'about.journey.p2': 'Své zkušenosti jsem sbíral v <strong class="text-slate-900 dark:text-white font-semibold">IBA CZ</strong> a <strong class="text-slate-900 dark:text-white font-semibold">Hartmann Rico</strong>, kde jsem se naučil pohybovat v komplexním korporátním prostředí. Díky tomu vím, jak důležitá je preciznost, nastavené procesy a spolehlivost.',
        'about.journey.p3': 'V <strong class="text-slate-900 dark:text-white font-semibold">polovině roku 2025</strong> jsem přešel na volnou nohu. Svým klientům nyní nabízím enterprise kvalitu a stabilitu napřímo. Sázím na ověřené technologie—<strong class="text-emerald-700 dark:text-primary font-mono">Java</strong>, <strong class="text-emerald-700 dark:text-primary font-mono">Spring</strong> a <strong class="text-emerald-700 dark:text-primary font-mono">SQL</strong> jsou mé hlavní nástroje, protože jednoduše fungují a dobře se škálují.',
        'about.journey.tag1': 'Stabilita',
        'about.journey.tag2': 'Backend',
        'about.journey.tag3': 'Architektura',
        'about.stack.title': 'Můj tech stack',
        'about.stack.languages': 'JAZYKY',
        'about.stack.frameworks': 'FRAMEWORKY',
        'about.stack.infrastructure': 'INFRASTRUKTURA',
        'about.stack.databases': 'DATABÁZE',
        'about.hobbies.title': 'Když zrovna neprogramuji',
        'about.hobbies.text': 'Technologie mě baví i ve volném čase. Hraji si s hardwarem na <strong class="text-slate-900 dark:text-white font-semibold">Raspberry Pi</strong> nebo experimentuji s trénováním vlastních <strong class="text-slate-900 dark:text-white font-semibold">AI modelů</strong>.',
        'about.languages.title': 'Jazyky',
        'about.languages.cs': 'Čeština',
        'about.languages.cs_level': 'Rodilý mluvčí',
        'about.languages.en': 'Angličtina',
        'about.languages.en_level': 'B2 / Pokročilý',
        'about.languages.note': 'Srozumitelná komunikace je základem úspěšného projektu.',

        // Resume Page
        'resume.badge': 'K DISPOZICI',
        'resume.title': 'Jakub Koláček',
        'resume.subtitle': 'Senior Java Backend Developer',
        'resume.description': 'Specializace na škálovatelné mikroslužby, systémovou integraci a výkonné backendové systémy. Tvorba robustních řešení s Java 17+, Spring Boot a Dockerem.',
        'resume.actions.share': 'Sdílet',
        'resume.actions.download': 'Stáhnout PDF',

        'resume.experience.title': 'Pracovní zkušenosti',

        // Job 1
        'resume.job1.role': 'Senior Java Developer',
        'resume.job1.company': 'IBA CZ',
        'resume.job1.date': '06/2015 — Současnost',
        'resume.job1.bullet1': 'Vývoj mikroslužeb pro Kuoni Tumlare, zpřístupnění dat z Elasticsearch přes REST.',
        'resume.job1.bullet2': 'Implementace customizace platební brány a EET knihoven pro O2 Czech Republic.',
        'resume.job1.bullet3': 'Tvorba M2M adaptéru pro platební terminály a dobíjení SIM karet.',
        'resume.job1.bullet4': 'Vývoj importéru datových schránek pro skupinu ČEZ s REST rozhraním.',
        'resume.job1.bullet5': 'Údržba Legislativního Helpdesku pro Úřad vlády ČR.',

        // Job 2
        'resume.job2.role': 'Java Developer',
        'resume.job2.company': 'Hartmann Rico',
        'resume.job2.date': '06/2013 — 05/2015',
        'resume.job2.bullet1': 'Vývoj interních workflow komponent (formuláře, žádosti) napojených na SAP přes JCO.',
        'resume.job2.bullet2': 'Automatizace generování PDF pomocí wkhtmltopdf a integrace s EMC Documentum.',

        // Job 3
        'resume.job3.role': 'Android Developer',
        'resume.job3.company': 'ANeT s.r.o.',
        'resume.job3.date': '11/2012 — 04/2013',
        'resume.job3.bullet1': 'Tvorba Android aplikace sloužící jako čtečka čipových karet/docházkový terminál.',
        'resume.job3.bullet2': 'Implementace synchronizace dat přes WebServices do centrálních databází.',

        'resume.sidebar.tech.title': 'TECHNICKÝ ARZENÁL',
        'resume.sidebar.tech.backend': 'Backend Core',
        'resume.sidebar.tech.backend_level': 'Expert',
        'resume.sidebar.tech.infrastructure': 'Infrastruktura',
        'resume.sidebar.tech.data': 'Data',

        'resume.sidebar.education.title': 'VZDĚLÁNÍ',
        'resume.sidebar.education.school': 'SPŠE IT Brno (Purkyňova 2832)',
        'resume.sidebar.education.degree': 'Informační technologie a databázové systémy',
        'resume.sidebar.education.date': '2009 — 2013',

        'resume.sidebar.certifications.title': 'CERTIFIKACE',
        'resume.sidebar.connect.title': 'SPOJME SE',
        'resume.sidebar.connect.text': 'Hledáte seniorního vývojáře pro vedení vašeho dalšího velkého projektu? Jsem otevřen novým příležitostem.',

        // Projects Page
        'projects.badge': 'PORTFOLIO',
        'projects.title': 'Vybrané projekty',
        'projects.description': 'Výběr technických výzev a řešení, která jsem realizoval. Dodávám robustní backendová řešení a systémové integrace v oblastech FinTech, Enterprise a IoT.',

        'projects.section1.title': 'FinTech a platby',
        'projects.card1.title': 'Úprava platební brány',
        'projects.card1.desc': 'Komplexní úpravy významné platební brány. Implementace bezpečného zpracování transakcí, opakovaných plateb a logiky pro odsouhlasování (reconcilliation).',
        'projects.card2.title': 'M2M platební adaptéry',
        'projects.card2.desc': 'Návrh middleware pro komunikaci mezi platebními terminály a službami pro dobíjení SIM, umožňující automatizované transakce bez lidského zásahu.',

        'projects.section2.title': 'Enterprise systémy a integrace',
        'projects.card3.title': 'Mikroslužby v cestovním ruchu',
        'projects.card3.desc': 'Vývoj škálovatelných mikroslužeb zpřístupňujících data z Elasticsearch přes REST API pro přední globální společnost v oblasti cestovního ruchu.',
        'projects.card4.title': 'Importér datových schránek',
        'projects.card4.desc': 'Automatizované parsování a ukládání zpráv z vládních datových schránek do interní databáze. Zahrnuje REST rozhraní pro ověřování.',
        'projects.card5.title': 'Vládní helpdesk',
        'projects.card5.desc': 'Backendová logika pro portál podpory občanů s vysokou návštěvností, zpracování směrování tiketů a sledování stavu.',

        'projects.section3.title': 'IoT a logistika',
        'projects.card6.title': 'Správa prodejních automatů',
        'projects.card6.desc': 'Telemetrické řešení pro automaty na tabákové výrobky. Serverová část pro plánování logistiky + Android aplikace pro řidiče.',
        'projects.card7.title': 'Docházkový terminál',
        'projects.card7.desc': 'Čtečka čipových karet na bázi Androidu sloužící jako docházkový terminál. Synchronizuje data o příchodech/odchodech přes WebServices.',

        'projects.section4.title': 'Experimenty a open source',
        'projects.card8.title': 'Chytrý kamerový dashboard',
        'projects.card8.desc': 'Analýza video streamu pomocí OpenCV a YOLO DNN pro detekci objektů a rozpoznávání SPZ.',
        'projects.card9.title': 'Evil Things',
        'projects.card9.desc': 'Sada nástrojů v Rustu a C na žerty pro kolegy, kteří si zapomínají zamknout počítač. Manipuluje s Registry, systémovými zvuky a vstupy přes WinAPI.',
        'projects.card10.title': 'MidPoint CodeGen',
        'projects.card10.desc': 'Vývojářský nástroj automatizující generování boilerplate kódu pomocí maven pluginu pro konektory Evolveum MidPoint Identity Management.',

        'projects.techstack.title': 'TECHNOLOGIE, SE KTERÝMI PRACUJI',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. Všechna práva vyhrazena.',
        'footer.joke': 'Postaveno na Javě... jen žertuji, Astro, TypeScript & Tailwind.'
    },
} as const;