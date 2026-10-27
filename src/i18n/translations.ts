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
        'nav.privacy': 'Privacy Policy',

        // Meta
        'meta.home.description': 'Jakub Koláček — Senior Java Backend Engineer (Spring Boot, Kafka, microservices) with 13+ years of experience. Open to B2B contracts and senior/lead backend roles.',
        'meta.about.description': 'Learn more about Jakub Koláček, a senior Java backend engineer based in Czech Republic with 13+ years of experience in enterprise systems.',
        'meta.services.description': 'Java backend development, system integration, app maintenance and IoT automation services by Jakub Koláček.',
        'meta.projects.description': 'Portfolio of backend development projects by Jakub Koláček — event-driven platforms, identity management, FinTech, enterprise integration and IoT.',
        'meta.contact.description': 'Get in touch with Jakub Koláček for Java backend development, system integration, or consulting services.',
        'meta.privacy.description': 'Privacy Policy and Data Processing information for Jakub Koláček\'s portfolio website.',
        'meta.resume.description': 'Resume of Jakub Koláček — senior Java backend engineer with 13+ years of experience in event-driven microservices, identity management, payments and system integration.',

        // Hero Section
        'hero.role': 'Open to senior backend roles & B2B contracts',
        'hero.title': 'Robust Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-primary dark:to-emerald-200">Backends</span> for Complex Enterprises',
        'hero.description1': 'Senior Java Backend Engineer specializing in',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST APIs',
        'hero.and': ', and',
        'hero.description2': 'Delivering scalable and efficient solutions tailored to your business needs.',
        'hero.currently': 'Currently building event-driven microservices for a global travel company (contract) and my own products.',
        'hero.mapAlt': 'Map of Brno, Czech Republic',
        'hero.basedIn': 'Based in',
        'hero.location': 'Brno, CZ',
        'hero.since': 'Since 2013',
        'hero.experience': '13+ years of experience',
        'hero.sectors': 'Banking, Telecom, Travel, Energy & Public sector',
        'hero.techStack': 'Tech Stack',

        // Services Page
        'services.badge': 'SERVICES',
        'services.title': 'Reliable Backend Development & System Integration',
        'services.description': 'I deliver practical, robust software solutions without unnecessary over-engineering. My focus is on stability, maintainability, and direct business value through clean code and proven architecture.',
        'services.action': 'Start a Project',

        'services.card1.title': 'Java Backend Development',
        'services.card1.desc': 'Building scalable, enterprise-grade applications with modern Java (up to 25) and Spring Boot: secure, high-performance APIs and event-driven microservices that stay maintainable as your business grows.',
        'services.card1.feat1.title': 'Secure by Design',
        'services.card1.feat1.desc': 'OAuth2, JWT, and digital signatures (XAdES/PAdES).',
        'services.card1.feat2.title': 'High Performance',
        'services.card1.feat2.desc': 'Optimized JVM tuning and efficient Elasticsearch queries.',

        'services.card2.title': 'System Integration',
        'services.card2.desc': 'Seamlessly connecting disparate systems so your data flows without manual work. I have extensive experience integrating 3rd party services, from payment gateways to ERP and government systems.',
        'services.card2.bullet1': 'Payment Gateways (Barion)',
        'services.card2.bullet2': 'ERP Systems (SAP JCO / Helios)',
        'services.card2.bullet3': 'Government Data Boxes (Datové schránky)',

        'services.card3.title': 'App Maintenance & Support',
        'services.card3.desc': 'Keeping the lights on for critical systems. I stabilize legacy codebases, upgrade them to supported versions, and handle support tickets, so your portals keep running and your team can focus on new features.',
        'services.card3.tag1': 'Bug Fixing',
        'services.card3.tag2': 'Legacy Refactor',
        'services.card3.tag3': 'SLA Support',

        'services.card4.title': 'Automation & Hardware Communication',
        'services.card4.desc': 'Bridging the gap between digital software and physical hardware. I develop specialized communication layers for IoT devices and industrial equipment, turning them into reliable, remotely managed parts of your system.',
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
        'about.journey.p1': 'It all started at <strong class="text-slate-900 dark:text-white font-semibold">SPŠE IT Brno</strong>, a secondary technical school where I laid the groundwork for my engineering mindset. Since then, I\'ve spent 13+ years shipping production systems. I don\'t just write code; I engineer solutions that last.',
        'about.journey.p2': 'For years, I honed my craft at <strong class="text-slate-900 dark:text-white font-semibold">IBA CZ</strong> and <strong class="text-slate-900 dark:text-white font-semibold">Hartmann Rico</strong>, navigating the complexities of large-scale corporate environments. These experiences taught me the value of rigor, process, and reliability.',
        'about.journey.p3': 'Since <strong class="text-slate-900 dark:text-white font-semibold">June 2025</strong>, I\'ve been working independently (B2B). A <strong class="text-slate-900 dark:text-white font-semibold">global travel company</strong> I\'ve worked with since 2022 remains a long-running contract client, and alongside it I build my own products. I believe in proven tools—<strong class="text-emerald-700 dark:text-primary font-mono">Java</strong>, <strong class="text-emerald-700 dark:text-primary font-mono">Spring</strong>, and <strong class="text-emerald-700 dark:text-primary font-mono">SQL</strong> are my weapons of choice because they work, and they scale. I\'m open to both B2B contracts and senior/lead backend roles.',
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
        'resume.description': 'Specializing in event-driven microservices, identity & access management, and system integration. Building production systems with Java 25, Spring Boot 4, Kafka, and Kubernetes.',

        'resume.actions.download': 'Download PDF',

        'resume.experience.title': 'Professional Experience',

        // Job 0
        'resume.job0.role': 'Senior Java Backend Developer',
        'resume.job0.company': 'Freelance (self-employed)',
        'resume.job0.date': '06/2025 — Present',
        'resume.job0.bullet1': 'Global travel company (contract continuing a 2022 engagement): further development of a platform of ~45 event-driven Spring Boot microservices for supplier messaging, automatic guide assignment, document sharing and reporting (Kafka, Kafka Streams, Avro, OpenSearch, gRPC).',
        'resume.job0.bullet2': 'Led the platform-wide Spring Boot 4 / Java 25 migration with reusable OpenRewrite recipes.',
        'resume.job0.bullet3': 'Maintain the shared parent POM, libraries and service archetypes the whole team builds on, and run most production deployments (Kubernetes, Helm, ArgoCD).',
        'resume.job0.bullet4': 'Own products (in development): Gatlo (gatehouse operations SaaS) and Bidaro (AI budget analysis for construction & public procurement).',

        // Job 1
        'resume.job1.role': 'Senior Java Developer',
        'resume.job1.company': 'IBA CZ',
        'resume.job1.date': '06/2015 — 05/2025',
        'resume.job1.bullet1': 'Global travel company (2022–2025): partner and supplier portal platform on event-driven microservices (Kafka Streams, REST and gRPC, OpenSearch). Started several new services, created the shared libraries and maintained the service archetypes.',
        'resume.job1.bullet2': 'midPoint identity-management connectors (REST and SOAP) for banks including a central bank, a building society and a state road agency; IAM with Keycloak / Red Hat SSO and my own annotation-driven AbstractRestConnector framework.',
        'resume.job1.bullet3': 'Payment gateway for a major telecom operator: implementation and customization, Barion payments, recurring payments and an export module synchronized with SAP.',
        'resume.job1.bullet4': 'M2M adapter connecting payment terminals with prepaid SIM top-up services.',
        'resume.job1.bullet5': 'Data-box importer for an energy group, with a REST API to search and verify Czech government data boxes.',
        'resume.job1.bullet6': 'Maintained a legislative helpdesk used by a central government office.',
        'resume.job1.bullet7': 'Document management (DeCM, Activiti workflows) and a trusted archive with XAdES/PAdES signatures and time stamps.',

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
        'resume.sidebar.tech.identity': 'Identity & Access',

        'resume.sidebar.education.title': 'EDUCATION',
        'resume.sidebar.education.school': 'Secondary Technical School of Electrical Engineering and IT, Brno',
        'resume.sidebar.education.degree': 'Information Technology — PC applications, information and database systems',
        'resume.sidebar.education.date': '2009 — 2013',

        'resume.sidebar.connect.title': 'LET\'S CONNECT',
        'resume.sidebar.connect.text': 'Looking for a senior backend engineer, as a contractor or a team member? I\'m open to B2B contracts and senior/lead roles.',

        // Projects Page
        'projects.badge': 'PORTFOLIO',
        'projects.title': 'Selected Projects',
        'projects.description': 'A curated list of technical challenges I\'ve solved: event-driven platforms, identity & access management, payments, system integration, and IoT.',

        'projects.section1.title': 'FinTech & Payments',
        'projects.card1.title': 'Payment Gateway Customization',
        'projects.card1.desc': 'Implementation and customization of a payment gateway for a major telecom operator: secure transaction handling via Barion, recurring payments, and an export module synchronized with SAP.',
        'projects.card2.title': 'M2M Payment Adapters',
        'projects.card2.desc': 'Designed middleware connecting payment terminals with prepaid SIM top-up services, enabling automated transactions without human intervention.',

        'projects.section2.title': 'Enterprise Systems & Integration',
        'projects.card3.title': 'Event-Driven Travel Platform',
        'projects.card3.desc': 'A large event-driven platform for a global travel company: ~45 Spring Boot microservices for supplier messaging, automatic guide assignment, document sharing and reporting, communicating over Kafka and Kafka Streams (Avro + Schema Registry), with OpenSearch-powered search and REST/gRPC APIs. I started many of the services, created the shared libraries and maintain the service archetypes the team builds on, and led the Spring Boot 4 / Java 25 migration.',
        'projects.card3.diagram.label': 'Simplified architecture: clients reach ~45 Spring Boot microservices through an Istio ingress secured by Auth0; the services exchange events over Kafka and Kafka Streams and store data in OpenSearch and PostgreSQL; everything runs on Kubernetes, deployed with Helm and ArgoCD.',
        'projects.card3.diagram.caption': 'Simplified architecture',
        'projects.card4.title': 'Data Box Importer',
        'projects.card4.desc': 'Automated parsing and ingestion of government data box messages into internal DB. Includes a REST interface for verification.',
        'projects.card5.title': 'Government Helpdesk',
        'projects.card5.desc': 'Backend logic for a high-traffic citizen support portal, handling ticket routing and status tracking.',

        'projects.card11.title': 'Spring Boot 4 / Java 25 Migration',
        'projects.card11.desc': 'Led the platform-wide upgrade of ~45 services to Spring Boot 4 and Java 25, automated with reusable OpenRewrite recipes and rolled out through the shared service archetypes.',

        'projects.section5.title': 'Identity & Access Management',
        'projects.card12.title': 'midPoint Identity Connectors',
        'projects.card12.desc': 'Identity & access management on Evolveum midPoint for banks (including a central bank), a building society and a state road agency. REST and SOAP connectors (ConnId) to systems such as SAP SuccessFactors, Microsoft Graph and Jira, built on my own annotation-driven AbstractRestConnector framework, with IAM on Keycloak / Red Hat SSO.',

        'projects.section3.title': 'IoT & Logistics',
        'projects.card6.title': 'Vending Machine Management',
        'projects.card6.desc': 'Telemetry solution for tobacco vending machines. Server backend for logistics planning + Android app for drivers.',
        'projects.card7.title': 'Attendance Terminal',
        'projects.card7.desc': 'Android-based chip card reader serving as an attendance terminal. Syncs entry/exit data via WebServices.',

        'projects.section6.title': 'Own Products',
        'projects.card13.title': 'Gatlo',
        'projects.card13.desc': 'Multi-tenant SaaS for gatehouse and security operations, built on Java 25 and Spring Boot 4 and running on Kubernetes.',
        'projects.card14.title': 'Bidaro',
        'projects.card14.desc': 'AI tool for budget analysis in construction and public procurement: a reactive Quarkus API, a Python data pipeline with vector search and named-entity recognition, and a Next.js UI with Clerk authentication.',

        'projects.section4.title': 'Experiments',
        'projects.card8.title': 'Smart Camera Dashboard',
        'projects.card8.desc': 'Video stream analysis using OpenCV and YOLO DNN for object detection and license-plate recognition (ANPR); my own trained YOLO weights plus Tesseract replaced the unmaintained OpenALPR.',
        'projects.section4.also': 'Also in the lab: <strong class="text-slate-900 dark:text-white">Evil Things</strong>, a C / Rust / PHP systems-programming experiment (low-level WinAPI, Symfony control server).',
        'projects.card10.title': 'MidPoint CodeGen',
        'projects.card10.desc': 'Developer tool automating the generation of boilerplate code via a maven plugin for Evolveum MidPoint Identity Management connectors.',

        'projects.techstack.title': 'TECHNOLOGIES I WORK WITH',

        // Contact Page
        'contact.badge': 'CONTACT',
        'contact.title': '<Contact />',
        'contact.description': 'Looking for a robust backend architecture, or hiring a senior backend engineer? Let\'s discuss how I can help.',
        'contact.form.name': '// Full Name',
        'contact.form.email': '// Email Address',
        'contact.form.category': '// Project Category',
        'contact.form.category.general': 'General Inquiry',
        'contact.form.category.backend': 'Backend Development',
        'contact.form.category.integration': 'System Integration',
        'contact.form.category.consulting': 'Consulting',
        'contact.form.category.job': 'Job Opportunity',
        'contact.form.message': '// Project Brief',
        'contact.form.submit': 'Initialize Connection ->',
        'contact.form.submitting': 'Transmitting...',
        'contact.form.success': 'Connection established. Message transmitted successfully.',
        'contact.form.error': 'Connection failed. Please try again.',
        'contact.form.consent': 'By submitting the form, you agree to the processing of <a href="/privacy" class="underline hover:text-primary transition-colors">personal data</a>.',

        'contact.status.title': 'Available for B2B projects & senior roles',
        'contact.status.version': 'v1.0.4 - Operational',
        'contact.network.title': 'Network Protocol',
        'contact.direct.title': 'Direct Connect',

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
        'nav.privacy': 'Ochrana osobních údajů',

        // Meta
        'meta.home.description': 'Jakub Koláček — senior Java backend vývojář (Spring Boot, Kafka, mikroslužby) s více než 13 lety zkušeností. K dispozici pro B2B spolupráci i seniorní a vedoucí backendové pozice.',
        'meta.about.description': 'Zjistěte více o Jakubu Koláčkovi, senior Java backend vývojáři z Brna s více než 13 lety zkušeností v enterprise systémech.',
        'meta.services.description': 'Vývoj Java backendů, systémová integrace, údržba aplikací a IoT automatizace od Jakuba Koláčka.',
        'meta.projects.description': 'Portfolio backendových projektů Jakuba Koláčka — event-driven platformy, správa identit, FinTech, enterprise integrace a IoT.',
        'meta.contact.description': 'Kontaktujte Jakuba Koláčka ohledně vývoje Java backendů, systémové integrace nebo konzultací.',
        'meta.privacy.description': 'Zásady ochrany osobních údajů a zpracování dat pro webové stránky Jakuba Koláčka.',
        'meta.resume.description': 'Životopis Jakuba Koláčka — senior Java backend vývojáře s více než 13 lety zkušeností s event-driven mikroslužbami, správou identit, platbami a systémovou integrací.',

        // Hero Section
        'hero.role': 'K dispozici pro senior pozice i B2B spolupráci',
        'hero.title': 'Robustní Java <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-primary dark:to-emerald-200">backendy</span> pro náročné enterprise systémy',
        'hero.description1': 'Senior Java backend vývojář se specializací na',
        'hero.tech1': 'Spring Boot',
        'hero.tech2': 'Microservices',
        'hero.tech3': 'REST API',
        'hero.and': ' a',
        'hero.description2': 'Tvořím škálovatelná řešení na míru vašemu byznysu.',
        'hero.currently': 'Aktuálně stavím event-driven mikroslužby pro globální cestovní společnost (kontrakt) a vlastní produkty.',
        'hero.mapAlt': 'Mapa Brna',
        'hero.basedIn': 'Sídlo',
        'hero.location': 'Brno',
        'hero.since': 'Od roku 2013',
        'hero.experience': '13+ let zkušeností',
        'hero.sectors': 'Bankovnictví, telekomunikace, cestovní ruch, energetika & veřejný sektor',
        'hero.techStack': 'Tech stack',

        // Services Page
        'services.badge': 'SLUŽBY',
        'services.title': 'Spolehlivý vývoj backendu a systémová integrace',
        'services.description': 'Dodávám praktická a robustní softwarová řešení bez zbytečného over-engineeringu. Zaměřuji se na stabilitu, udržitelnost a přímou obchodní hodnotu prostřednictvím čistého kódu a osvědčené architektury.',
        'services.action': 'Zahájit spolupráci',

        'services.card1.title': 'Vývoj Java backendů',
        'services.card1.desc': 'Tvorba škálovatelných enterprise aplikací v moderní Javě (až po verzi 25) a Spring Bootu: bezpečná a výkonná API a event-driven mikroslužby, které zůstanou udržitelné i s růstem vašeho byznysu.',
        'services.card1.feat1.title': 'Bezpečnostní architektura',
        'services.card1.feat1.desc': 'OAuth2, JWT a digitální podpisy (XAdES/PAdES).',
        'services.card1.feat2.title': 'Vysoký výkon',
        'services.card1.feat2.desc': 'Optimalizované ladění JVM a efektivní dotazy v Elasticsearch.',

        'services.card2.title': 'Systémová integrace',
        'services.card2.desc': 'Bezproblémové propojení různorodých systémů, aby vaše data tekla bez ruční práce. Mám rozsáhlé zkušenosti s integrací služeb třetích stran, od platebních bran po ERP a státní systémy.',
        'services.card2.bullet1': 'Platební brány (Barion)',
        'services.card2.bullet2': 'ERP systémy (SAP JCO / Helios)',
        'services.card2.bullet3': 'Datové schránky',

        'services.card3.title': 'Údržba a podpora aplikací',
        'services.card3.desc': 'Udržování kritických systémů v chodu. Stabilizuji legacy kód, převádím ho na podporované verze a řeším tikety podpory, aby vaše portály běžely hladce a váš tým se mohl soustředit na nové funkce.',
        'services.card3.tag1': 'Opravy chyb',
        'services.card3.tag2': 'Refaktoring legacy kódu',
        'services.card3.tag3': 'SLA podpora',

        'services.card4.title': 'Automatizace a komunikace s hardwarem',
        'services.card4.desc': 'Přemostění propasti mezi digitálním softwarem a fyzickým hardwarem. Vyvíjím specializované komunikační vrstvy pro IoT zařízení a průmyslové vybavení, díky kterým se z nich stávají spolehlivé a vzdáleně spravované součásti vašeho systému.',
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
        'about.journey.p1': 'Vše začalo na <strong class="text-slate-900 dark:text-white font-semibold">SPŠE IT Brno</strong>, střední průmyslové škole, kde jsem získal základy inženýrského myšlení. Od té doby už přes 13 let dodávám produkční systémy. Mým cílem není jen psát kód, ale tvořit trvanlivá a udržitelná řešení.',
        'about.journey.p2': 'Své zkušenosti jsem sbíral v <strong class="text-slate-900 dark:text-white font-semibold">IBA CZ</strong> a <strong class="text-slate-900 dark:text-white font-semibold">Hartmann Rico</strong>, kde jsem se naučil pohybovat v komplexním korporátním prostředí. Díky tomu vím, jak důležitá je preciznost, nastavené procesy a spolehlivost.',
        'about.journey.p3': 'Od <strong class="text-slate-900 dark:text-white font-semibold">června 2025</strong> pracuji jako nezávislý vývojář (B2B). <strong class="text-slate-900 dark:text-white font-semibold">Globální cestovní společnost</strong>, se kterou spolupracuji od roku 2022, zůstává mým dlouhodobým klientem a vedle toho stavím vlastní produkty. Sázím na ověřené technologie—<strong class="text-emerald-700 dark:text-primary font-mono">Java</strong>, <strong class="text-emerald-700 dark:text-primary font-mono">Spring</strong> a <strong class="text-emerald-700 dark:text-primary font-mono">SQL</strong> jsou mé hlavní nástroje, protože jednoduše fungují a dobře se škálují. Jsem otevřený B2B spolupráci i seniorním a vedoucím backendovým pozicím.',
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
        'resume.description': 'Specializace na event-driven mikroslužby, správu identit a přístupů a systémovou integraci. Produkční systémy stavím na Javě 25, Spring Boot 4, Kafce a Kubernetes.',

        'resume.actions.download': 'Stáhnout PDF',

        'resume.experience.title': 'Pracovní zkušenosti',

        // Job 0
        'resume.job0.role': 'Senior Java backend vývojář',
        'resume.job0.company': 'Freelance (OSVČ)',
        'resume.job0.date': '06/2025 — Současnost',
        'resume.job0.bullet1': 'Globální cestovní společnost (navazuje na spolupráci od roku 2022): další rozvoj platformy zhruba 45 event-driven Spring Boot mikroslužeb pro komunikaci s dodavateli, automatické přiřazování průvodců, sdílení dokumentů a reporty (Kafka, Kafka Streams, Avro, OpenSearch, gRPC).',
        'resume.job0.bullet2': 'Vedení migrace celé platformy na Spring Boot 4 / Java 25 pomocí znovupoužitelných OpenRewrite receptů.',
        'resume.job0.bullet3': 'Správa společného parent POM, sdílených knihoven a archetypů služeb, na kterých staví celý tým, a většina produkčních nasazení (Kubernetes, Helm, ArgoCD).',
        'resume.job0.bullet4': 'Vlastní produkty (ve vývoji): Gatlo (SaaS pro provoz vrátnic a ostrahy) a Bidaro (AI analýza rozpočtů ve stavebnictví a veřejných zakázkách).',

        // Job 1
        'resume.job1.role': 'Senior Java Developer',
        'resume.job1.company': 'IBA CZ',
        'resume.job1.date': '06/2015 — 05/2025',
        'resume.job1.bullet1': 'Globální cestovní společnost (2022–2025): platforma partnerských a dodavatelských portálů na event-driven mikroslužbách (Kafka Streams, REST a gRPC, OpenSearch). Založení řady nových služeb, tvorba sdílených knihoven a správa archetypů služeb.',
        'resume.job1.bullet2': 'Konektory pro správu identit v midPointu (REST a SOAP) pro banky včetně centrální banky, stavební spořitelnu a státní organizaci pro správu silnic; IAM s Keycloak / Red Hat SSO a vlastní anotační framework AbstractRestConnector.',
        'resume.job1.bullet3': 'Platební brána pro velkého telekomunikačního operátora: implementace a customizace, placení přes Barion, opakované platby a exportní modul se synchronizací do SAP.',
        'resume.job1.bullet4': 'M2M adaptér propojující platební terminály se službami pro dobíjení předplacených SIM karet.',
        'resume.job1.bullet5': 'Importér datových schránek pro energetickou skupinu s REST API pro jejich vyhledávání a ověření.',
        'resume.job1.bullet6': 'Údržba legislativního helpdesku pro ústřední orgán státní správy.',
        'resume.job1.bullet7': 'Správa dokumentů (DeCM, workflow v Activiti) a důvěryhodný archiv s podpisy a časovými razítky dle XAdES/PAdES.',

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
        'resume.sidebar.tech.identity': 'Identity a přístupy',

        'resume.sidebar.education.title': 'VZDĚLÁNÍ',
        'resume.sidebar.education.school': 'Střední průmyslová škola elektrotechnická a informačních technologií Brno',
        'resume.sidebar.education.degree': 'Informační technologie — aplikace osobních počítačů, informační a databázové systémy',
        'resume.sidebar.education.date': '2009 — 2013',

        'resume.sidebar.connect.title': 'SPOJME SE',
        'resume.sidebar.connect.text': 'Hledáte seniorního backend vývojáře, externě nebo do týmu? Jsem otevřený B2B spolupráci i seniorním a vedoucím pozicím.',

        // Projects Page
        'projects.badge': 'PORTFOLIO',
        'projects.title': 'Vybrané projekty',
        'projects.description': 'Výběr technických výzev a řešení, která jsem realizoval: event-driven platformy, správa identit a přístupů, platby, systémová integrace a IoT.',

        'projects.section1.title': 'FinTech a platby',
        'projects.card1.title': 'Úprava platební brány',
        'projects.card1.desc': 'Implementace a customizace platební brány pro velkého telekomunikačního operátora: bezpečné zpracování transakcí přes Barion, opakované platby a exportní modul se synchronizací do SAP.',
        'projects.card2.title': 'M2M platební adaptéry',
        'projects.card2.desc': 'Návrh middleware propojujícího platební terminály se službami pro dobíjení předplacených SIM karet, umožňující automatizované transakce bez lidského zásahu.',

        'projects.section2.title': 'Enterprise systémy a integrace',
        'projects.card3.title': 'Event-driven platforma pro cestovní ruch',
        'projects.card3.desc': 'Rozsáhlá event-driven platforma pro globální cestovní společnost: zhruba 45 Spring Boot mikroslužeb pro komunikaci s dodavateli, automatické přiřazování průvodců, sdílení dokumentů a reporty, propojených přes Kafku a Kafka Streams (Avro + Schema Registry), s vyhledáváním nad OpenSearch a REST/gRPC API. Založil jsem řadu služeb, vytvořil sdílené knihovny, spravuji archetypy služeb, na kterých tým staví, a vedl jsem migraci na Spring Boot 4 / Java 25.',
        'projects.card3.diagram.label': 'Zjednodušená architektura: klienti přistupují ke zhruba 45 Spring Boot mikroslužbám přes Istio ingress zabezpečený Auth0; služby si vyměňují události přes Kafku a Kafka Streams a ukládají data do OpenSearch a PostgreSQL; vše běží na Kubernetes a nasazuje se pomocí Helmu a ArgoCD.',
        'projects.card3.diagram.caption': 'Zjednodušená architektura',
        'projects.card4.title': 'Importér datových schránek',
        'projects.card4.desc': 'Automatizované parsování a ukládání zpráv z vládních datových schránek do interní databáze. Zahrnuje REST rozhraní pro ověřování.',
        'projects.card5.title': 'Vládní helpdesk',
        'projects.card5.desc': 'Backendová logika pro portál podpory občanů s vysokou návštěvností, zpracování směrování tiketů a sledování stavu.',

        'projects.card11.title': 'Migrace na Spring Boot 4 / Java 25',
        'projects.card11.desc': 'Vedení upgradu zhruba 45 služeb celé platformy na Spring Boot 4 a Javu 25, automatizovaného pomocí znovupoužitelných OpenRewrite receptů a zavedeného přes sdílené archetypy služeb.',

        'projects.section5.title': 'Správa identit a přístupů',
        'projects.card12.title': 'Konektory pro midPoint',
        'projects.card12.desc': 'Správa identit a přístupů na platformě Evolveum midPoint pro banky (včetně centrální banky), stavební spořitelnu a státní organizaci pro správu silnic. REST a SOAP konektory (ConnId) na systémy jako SAP SuccessFactors, Microsoft Graph a Jira, postavené na mém vlastním anotačním frameworku AbstractRestConnector, a IAM s Keycloak / Red Hat SSO.',

        'projects.section3.title': 'IoT a logistika',
        'projects.card6.title': 'Správa prodejních automatů',
        'projects.card6.desc': 'Telemetrické řešení pro automaty na tabákové výrobky. Serverová část pro plánování logistiky + Android aplikace pro řidiče.',
        'projects.card7.title': 'Docházkový terminál',
        'projects.card7.desc': 'Čtečka čipových karet na bázi Androidu sloužící jako docházkový terminál. Synchronizuje data o příchodech/odchodech přes WebServices.',

        'projects.section6.title': 'Vlastní produkty',
        'projects.card13.title': 'Gatlo',
        'projects.card13.desc': 'Multi-tenant SaaS pro provoz vrátnic a bezpečnostních služeb, postavený na Javě 25 a Spring Boot 4 a provozovaný na Kubernetes.',
        'projects.card14.title': 'Bidaro',
        'projects.card14.desc': 'AI nástroj pro analýzu rozpočtů ve stavebnictví a veřejných zakázkách: reaktivní API v Quarkusu, datová pipeline v Pythonu s vektorovým vyhledáváním a rozpoznáváním entit (NER) a UI v Next.js s autentizací přes Clerk.',

        'projects.section4.title': 'Experimenty',
        'projects.card8.title': 'Chytrý kamerový dashboard',
        'projects.card8.desc': 'Analýza video streamu pomocí OpenCV a YOLO DNN pro detekci objektů a rozpoznávání SPZ (ANPR); vlastní natrénované váhy YOLO s Tesseractem nahradily neudržovaný OpenALPR.',
        'projects.section4.also': 'Dále v laboratoři: <strong class="text-slate-900 dark:text-white">Evil Things</strong>, experiment se systémovým programováním v C / Rustu / PHP (nízkoúrovňové WinAPI, řídicí server v Symfony).',
        'projects.card10.title': 'MidPoint CodeGen',
        'projects.card10.desc': 'Vývojářský nástroj automatizující generování boilerplate kódu pomocí maven pluginu pro konektory Evolveum MidPoint Identity Management.',

        'projects.techstack.title': 'TECHNOLOGIE, SE KTERÝMI PRACUJI',

        // Contact Page
        'contact.badge': 'KONTAKT',
        'contact.title': '<Contact />',
        'contact.description': 'Hledáte robustní backendovou architekturu nebo seniorního backend vývojáře do týmu? Pojďme probrat, jak vám mohu pomoci.',
        'contact.form.name': '// Celé jméno',
        'contact.form.email': '// Emailová adresa',
        'contact.form.category': '// Kategorie projektu',
        'contact.form.category.general': 'Obecný dotaz',
        'contact.form.category.backend': 'Vývoj backendu',
        'contact.form.category.integration': 'Systémová integrace',
        'contact.form.category.consulting': 'Konzultace',
        'contact.form.category.job': 'Pracovní nabídka',
        'contact.form.message': '// Popis projektu',
        'contact.form.submit': 'Inicializovat spojení ->',
        'contact.form.submitting': 'Odesílání...',
        'contact.form.success': 'Spojení navázáno. Zpráva úspěšně přenesena.',
        'contact.form.error': 'Spojení selhalo. Zkuste to prosím znovu.',
        'contact.form.consent': 'Odesláním formuláře souhlasíte se <a href="/cs/privacy" class="underline hover:text-primary transition-colors">zpracováním osobních údajů</a>.',

        'contact.status.title': 'K dispozici pro B2B projekty i senior pozice',
        'contact.status.version': 'v1.0.4 - Funkční',
        'contact.network.title': 'Síťový protokol',
        'contact.direct.title': 'Přímý kontakt',

        // Footer
        'footer.copyright': '© {year} Jakub Koláček. Všechna práva vyhrazena.',
        'footer.joke': 'Postaveno na Javě... jen žertuji, Astro, TypeScript & Tailwind.'
    },
} as const;