/* ==========================================================================
   PORTFOLIO DATA: edit this file to update the website content.
   Nothing here is rendered unless it has a value, so empty strings simply
   hide the related button/link.

   LANGUAGES: the main text is English. Each item can carry an optional
   `sq: { ... }` block with the Albanian version of any text field. Fields
   missing from `sq` fall back to the English text.
   Fixed interface text (menu, headings, buttons) lives in js/i18n.js.
   ========================================================================== */

window.PORTFOLIO = {

  /* ---------- CONTACT ------------------------------------------------------
     Fill in any of these and the matching link appears in the Contact section.
     Leave as "" to keep it hidden.
  ------------------------------------------------------------------------- */
  contact: {
    email: "gresapaci21@gmail.com",
    phone: "044 804 136",
    linkedin: "https://www.linkedin.com/in/gresa-paci",
    github: "https://github.com/gresapaci?tab=repositories",
    
  },

  /* ---------- SKILLS -------------------------------------------------------
     icon must be one of: code, server, database, pen, layout, spark
     sq.items must have the same number of entries as items.
  ------------------------------------------------------------------------- */
  skills: [
    {
      icon: "code", title: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Responsive Web Design"],
      sq: { title: "Zhvillim Frontend", items: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Dizajn Web Responsive"] }
    },
    {
      icon: "server", title: "Backend & APIs",
      items: ["PHP", "Laravel", "Node.js", "API Integration"],
      sq: { title: "Backend & API", items: ["PHP", "Laravel", "Node.js", "Integrim API"] }
    },
    {
      icon: "database", title: "Databases & Development Tools",
      items: ["MySQL", "SQL", "Docker"],
      sq: { title: "Baza të të dhënave & Mjete zhvillimi", items: ["MySQL", "SQL", "Docker"] }
    },
    {
      icon: "pen", title: "UI/UX Design",
      items: ["Figma", "Wireframing", "Prototyping", "Interface Design"],
      sq: { title: "Dizajn UI/UX", items: ["Figma", "Wireframing", "Prototipizim", "Dizajn ndërfaqesh"] }
    },
    {
      icon: "layout", title: "CMS & Website Builders",
      items: ["WordPress", "Elementor", "Webflow", "Framer"],
      sq: { title: "CMS & Ndërtues faqesh", items: ["WordPress", "Elementor", "Webflow", "Framer"] }
    },
    {
      icon: "spark", title: "AI & Digital Tools",
      items: ["AI Tools", "AI-Assisted Workflows", "Digital Productivity Tools"],
      sq: { title: "AI & Mjete digjitale", items: ["Mjete AI", "Punë e asistuar nga AI", "Mjete digjitale produktiviteti"] }
    }
  ],

  /* ---------- PROJECTS -----------------------------------------------------
     To publish a real project, fill in:
       image:   "assets/images/my-screenshot.jpg"  (real screenshot only)
       alt:     description of the screenshot
       visual:  placeholder illustration (schedule | calendar | code | frames), used only when no image
       tech:    ["HTML", "CSS", ...]   (only technologies actually used)
       live:    "https://..."          (shows a button; label = liveLabel or "Live site")
       github:  "https://github.com/..." (shows a "Source code" button)
       caseStudy: "Short note" (shows a highlighted note)
       stage:   optional badge such as "In Development"
     Empty values are hidden.
  ------------------------------------------------------------------------- */
  projects: [
    {
      title: "LuxDrive",
      subtitle: "Luxury Car Rental Mobile App",
      description: "A luxury car rental mobile app concept designed in Figma: vehicle browsing, detailed car views, booking, messaging and rental history.",
      status: "UI/UX Design · Personal project",
      tech: ["Figma", "UI/UX Design", "Mobile App Design", "Interactive Prototyping"],
      image: "assets/images/luxdrive-cover.png",
      alt: "LuxDrive luxury car rental mobile application UI/UX design showcasing three mobile screens.",
      live: "https://www.figma.com/design/gHsip11o03aL57LMZpirBj/Untitled?node-id=0-1&p=f&t=PrVspvoN4NeGAhOo-0",
      liveLabel: "View Figma Project",   // design prototype, not a deployed app
      github: "", caseStudy: "",
      sq: {
        subtitle: "Aplikacion mobil për qira të veturave luksoze",
        description: "Koncept aplikacioni mobil për qira të veturave luksoze, i dizajnuar në Figma: shfletim i automjeteve, pamje të detajuara, rezervime, mesazhe dhe historik qiramarrjesh.",
        status: "Dizajn UI/UX · Projekt personal",
        tech: ["Figma", "Dizajn UI/UX", "Dizajn aplikacionesh mobile", "Prototipizim interaktiv"],
        alt: "Dizajni UI/UX i aplikacionit mobil LuxDrive për qira të veturave luksoze, me tri ekrane mobile.",
        liveLabel: "Shiko projektin në Figma"
      }
    },
    {
      title: "Tesla Smart Cockpit",
      subtitle: "Interactive Vehicle Dashboard Concept",
      description: "A Tesla-inspired interactive vehicle dashboard concept designed in Figma, exploring in-car controls, climate, music, navigation and personalized settings.",
      status: "UI/UX Design · Personal concept",   // independent concept, not affiliated with Tesla
      tech: ["Figma", "UI/UX Design", "Dashboard Design", "Interactive Prototyping"],
      image: "assets/images/tesla-smart-cockpit-cover.png",
      alt: "Tesla Smart Cockpit interactive vehicle dashboard concept UI/UX design in Figma.",
      live: "https://www.figma.com/design/gHsip11o03aL57LMZpirBj/Untitled?node-id=73-2&t=PrVspvoN4NeGAhOo-1",
      liveLabel: "View Figma Project",
      github: "", caseStudy: "",
      sq: {
        subtitle: "Koncept i dashboard-it interaktiv të automjetit",
        description: "Koncept dashboard-i interaktiv i automjetit, i frymëzuar nga Tesla dhe i dizajnuar në Figma, që eksploron kontrollet brenda veturës, klimën, muzikën, navigimin dhe cilësimet e personalizuara.",
        status: "Dizajn UI/UX · Koncept personal",
        tech: ["Figma", "Dizajn UI/UX", "Dizajn dashboard-esh", "Prototipizim interaktiv"],
        alt: "Koncepti i dashboard-it interaktiv Tesla Smart Cockpit, dizajn UI/UX në Figma.",
        liveLabel: "Shiko projektin në Figma"
      }
    },
    {
      title: "TechnoX",
      subtitle: "Technology E-Commerce Website",
      description: "A technology e-commerce website built with WordPress, WooCommerce and Elementor, featuring a product catalog, detailed product pages, promotional offers, a shopping cart and a responsive interface.",
      status: "Web Development · WordPress e-commerce",
      tech: ["WordPress", "WooCommerce", "Elementor"],
      image: "assets/images/technox-cover.png",
      alt: "TechnoX technology e-commerce website built with WordPress, WooCommerce and Elementor.",
      live: "https://technox.page.gd/",
      liveLabel: "Visit Website",
      github: "", caseStudy: "",
      sq: {
        subtitle: "Faqe e-commerce për teknologji",
        description: "Faqe e-commerce për teknologji, e ndërtuar me WordPress, WooCommerce dhe Elementor, me katalog produktesh, faqe të detajuara produkti, oferta promocionale, shportë blerjesh dhe ndërfaqe responsive.",
        status: "Zhvillim Web · E-commerce me WordPress",
        alt: "Faqja e-commerce TechnoX për teknologji, e ndërtuar me WordPress, WooCommerce dhe Elementor.",
        liveLabel: "Vizito faqen"
      }
    },
    {
      title: "LM Academy",
      subtitle: "E-Learning Management Platform",
      description: "A web-based e-learning platform developed by a team during a software development bootcamp, where I took part as a team member. It is now used by Coding Training Academy to manage online courses, with administrator and student dashboards, course management, enrollment tracking, progress monitoring and performance statistics.",
      status: "Bootcamp Team Project",
      tech: ["Vue.js", "Laravel", "MySQL"],
      image: "assets/images/lm-academy-cover.png",
      alt: "LM Academy e-learning management platform showing administrator and student dashboards.",
      live: "https://lm-academy.codingtrainingacademy.com/",
      liveLabel: "Visit Live Platform",
      github: "",
      caseStudy: "Also features a scoreboard, interactive learning games, and course materials and modules.",
      sq: {
        subtitle: "Platformë për menaxhimin e e-learning",
        description: "Platformë e-learning në web, e zhvilluar nga një ekip gjatë një bootcamp-i të zhvillimit të softuerit, ku mora pjesë si anëtare e ekipit. Tash përdoret nga Coding Training Academy për menaxhimin e kurseve online, me dashboard-e për administratorët dhe studentët, menaxhim kursesh, ndjekje regjistrimesh, monitorim progresi dhe statistika performance.",
        status: "Projekt ekipor i bootcamp-it",
        alt: "Platforma e-learning LM Academy me dashboard-e për administratorët dhe studentët.",
        liveLabel: "Vizito platformën",
        caseStudy: "Përfshin gjithashtu tabelë renditjeje, lojëra interaktive mësimi, si dhe materiale e module kursesh."
      }
    },
    {
      title: "Enterprise DMS",
      subtitle: "Enterprise Document Management System",
      description: "An enterprise document management system under development, built to organize, upload, categorize and manage business documents on a centralized platform, with an administrative dashboard, document repository, upload interface and user management.",
      status: "Web Application",
      stage: "In Development",   // optional badge; remove when the project is finished
      tech: ["PHP", "MySQL", "Docker", "API Integration"],
      image: "assets/images/enterprise-dms-cover.png",
      alt: "Enterprise Document Management System dashboard, document repository, and upload interface.",
      live: "",     // add a real URL later to show a button
      github: "",   // add a real repository URL later to show a button
      caseStudy: "Designed and in progress: document categorization, department classification, sensitivity levels and dashboard statistics.",
      sq: {
        subtitle: "Sistem për menaxhimin e dokumenteve të ndërmarrjes",
        description: "Sistem për menaxhimin e dokumenteve të ndërmarrjes, aktualisht në zhvillim, për të organizuar, ngarkuar, kategorizuar dhe menaxhuar dokumente biznesi në një platformë të centralizuar, me dashboard administrativ, depo dokumentesh, ndërfaqe ngarkimi dhe menaxhim përdoruesish.",
        status: "Aplikacion web",
        stage: "Në zhvillim",
        tech: ["PHP", "MySQL", "Docker", "Integrim API"],
        alt: "Dashboard-i i sistemit të menaxhimit të dokumenteve të ndërmarrjes, depoja e dokumenteve dhe ndërfaqja e ngarkimit.",
        caseStudy: "Të dizajnuara dhe në proces: kategorizim dokumentesh, klasifikim sipas departamentit, nivele ndjeshmërie dhe statistika të dashboard-it."
      }
    }
  ],

  /* ---------- CERTIFICATES -------------------------------------------------
     file:  original in /qertifikata (opened in the lightbox and "Open original")
     thumb: small preview in /assets/thumbs
     group: one of the keys in certificateGroups below
     Only details visible on the certificate itself are listed.
     Official course titles are kept in English on purpose.
  ------------------------------------------------------------------------- */
  certificateGroups: {
    all: "All",
    tech: "Technology & Design",
    ai: "AI, Data & Innovation",
    teaching: "Teaching",
    english: "English",
    other: "Other courses",
    early: "Early achievements"
  },
  certificateGroupsSq: {
    all: "Të gjitha",
    tech: "Teknologji & Dizajn",
    ai: "AI, të dhëna & Inovacion",
    teaching: "Mësimdhënie",
    english: "Anglisht",
    other: "Kurse të tjera",
    early: "Arritje të hershme"
  },

  certificates: [
    {
      title: "Teaching and Learning with Generative AI", issuer: "Universum International College · Arizona State University",
      date: "January 21, 2026", detail: "12 hours · Online, self-paced", group: "ai", featured: true,
      file: "qertifikata/generativeAI.png", thumb: "assets/thumbs/generativeai.jpg",
      alt: "Certificate of completion: Teaching and Learning with Generative AI, January 21, 2026",
      sq: {
        date: "21 janar 2026", detail: "12 orë · Online, me ritëm vetanak",
        alt: "Certifikatë përfundimi: Teaching and Learning with Generative AI, 21 janar 2026"
      }
    },
    {
      title: "Figma Course", issuer: "Coding Training Academy",
      date: "March 5 – July 21, 2026", detail: "", group: "tech",
      file: "qertifikata/figma.png", thumb: "assets/thumbs/figma.jpg",
      alt: "Coding Training Academy certificate for the Figma course",
      sq: {
        title: "Kursi Figma", date: "5 mars – 21 korrik 2026",
        alt: "Certifikatë e Coding Training Academy për kursin Figma"
      }
    },
    {
      title: "Understanding Data Sources", issuer: "Universum International College · Arizona State University",
      date: "May 4, 2026", detail: "2 hours · Online, self-paced", group: "ai",
      file: "qertifikata/datasources.png", thumb: "assets/thumbs/datasources.jpg",
      alt: "Certificate of completion: Understanding Data Sources, May 4, 2026",
      sq: {
        date: "4 maj 2026", detail: "2 orë · Online, me ritëm vetanak",
        alt: "Certifikatë përfundimi: Understanding Data Sources, 4 maj 2026"
      }
    },
    {
      title: "ASU VentureX – Startup Certificate", issuer: "Arizona State University · J. Orin Edson Entrepreneurship + Innovation Institute",
      date: "March 16, 2026", detail: "", group: "ai",
      file: "qertifikata/venturex.png", thumb: "assets/thumbs/venturex.jpg",
      alt: "Arizona State University certificate of completion: ASU VentureX Startup Certificate",
      sq: {
        date: "16 mars 2026",
        alt: "Certifikatë përfundimi e Arizona State University: ASU VentureX Startup Certificate"
      }
    },
    {
      title: "WordPress Course", issuer: "Coding Training Academy",
      date: "Issued February 16, 2026", detail: "Sept 16, 2025 – Feb 16, 2026", group: "tech",
      file: "qertifikata/wordpress.png", thumb: "assets/thumbs/wordpress.jpg",
      alt: "Coding Training Academy certificate for the WordPress course",
      sq: {
        title: "Kursi WordPress", date: "Lëshuar më 16 shkurt 2026", detail: "16 shtator 2025 – 16 shkurt 2026",
        alt: "Certifikatë e Coding Training Academy për kursin WordPress"
      }
    },
    {
      title: "English Language – Intermediate 1", issuer: "Universum International College · Arizona State University",
      date: "January 21, 2026", detail: "", group: "english",
      file: "qertifikata/intermediate1.png", thumb: "assets/thumbs/intermediate1.jpg",
      alt: "Certificate of completion: English Language Intermediate 1",
      sq: {
        title: "Gjuha angleze – Intermediate 1", date: "21 janar 2026",
        alt: "Certifikatë përfundimi: Gjuha angleze, niveli Intermediate 1"
      }
    },
    {
      title: "English Language – Pre-Intermediate 2", issuer: "Universum International College · Arizona State University",
      date: "June 20, 2025", detail: "", group: "english",
      file: "qertifikata/pre-intermediate2.JPG", thumb: "assets/thumbs/pre-intermediate2.jpg",
      alt: "Certificate of completion: English Language Pre-Intermediate 2",
      sq: {
        title: "Gjuha angleze – Pre-Intermediate 2", date: "20 qershor 2025",
        alt: "Certifikatë përfundimi: Gjuha angleze, niveli Pre-Intermediate 2"
      }
    },
    {
      title: "English Language – Pre-Intermediate 1", issuer: "Universum International College · Arizona State University",
      date: "February 11, 2025", detail: "", group: "english",
      file: "qertifikata/pre-intermediate1.JPG", thumb: "assets/thumbs/pre-intermediate1.jpg",
      alt: "Certificate of completion: English Language Pre-Intermediate 1",
      sq: {
        title: "Gjuha angleze – Pre-Intermediate 1", date: "11 shkurt 2025",
        alt: "Certifikatë përfundimi: Gjuha angleze, niveli Pre-Intermediate 1"
      }
    },
    {
      title: "Foundations for Excellence in Teaching", issuer: "Universum International College · Arizona State University",
      date: "December 27, 2024", detail: "6 hours · Online, self-paced", group: "teaching",
      file: "qertifikata/teaching.JPG", thumb: "assets/thumbs/teaching.jpg",
      alt: "Certificate of completion: Foundations for Excellence in Teaching",
      sq: {
        date: "27 dhjetor 2024", detail: "6 orë · Online, me ritëm vetanak",
        alt: "Certifikatë përfundimi: Foundations for Excellence in Teaching"
      }
    },
    {
      title: "Getting to Know Earth", issuer: "Universum International College · Arizona State University",
      date: "December 27, 2024", detail: "18 hours · Online, self-paced", group: "other",
      file: "qertifikata/earth.JPG", thumb: "assets/thumbs/earth.jpg",
      alt: "Certificate of completion: Getting to Know Earth",
      sq: {
        date: "27 dhjetor 2024", detail: "18 orë · Online, me ritëm vetanak",
        alt: "Certifikatë përfundimi: Getting to Know Earth"
      }
    },
    {
      title: "English Language – Elementary 2", issuer: "Universum International College · Arizona State University",
      date: "July 15, 2024", detail: "", group: "english",
      file: "qertifikata/elementary2.JPG", thumb: "assets/thumbs/elementary2.jpg",
      alt: "Certificate of completion: English Language Elementary 2",
      sq: {
        title: "Gjuha angleze – Elementary 2", date: "15 korrik 2024",
        alt: "Certifikatë përfundimi: Gjuha angleze, niveli Elementary 2"
      }
    },
    {
      title: "What is Innovation?", issuer: "Arizona State University · School for the Future of Innovation in Society",
      date: "December 12, 2023", detail: "10 hours · Online", group: "ai",
      file: "qertifikata/innovation.JPG", thumb: "assets/thumbs/innovation.jpg",
      alt: "Arizona State University certificate of completion: What is Innovation?",
      sq: {
        date: "12 dhjetor 2023", detail: "10 orë · Online",
        alt: "Certifikatë përfundimi e Arizona State University: What is Innovation?"
      }
    },
    {
      title: "Art / English Program: Certificate of Achievement", issuer: "Lutfi Musiqi Learning Center · Peace Corps Kosovo",
      date: "April 30, 2019", detail: "Recognized for participation", group: "early",
      file: "qertifikata/english.JPG", thumb: "assets/thumbs/english.jpg",
      alt: "Certificate of Achievement for participation in the Lutfi Musiqi Learning Center Art/English Program, April 30, 2019",
      sq: {
        title: "Programi Art / Anglisht: Certifikatë arritjeje", date: "30 prill 2019", detail: "Njohje për pjesëmarrje",
        alt: "Certifikatë arritjeje për pjesëmarrje në programin Art/Anglisht të Qendrës Mësimore Lutfi Musiqi, 30 prill 2019"
      }
    }
  ],

  /* ---------- EXPERIENCE -------------------------------------------------- */
  experience: {
    role: "Frontend Development Instruction",
    org: "Coding Training Academy",
    duration: "More than one year",
    description: "Teaching frontend development fundamentals through practical lessons, guided exercises, and hands-on projects, helping beginner learners build foundational skills in HTML, CSS, and JavaScript. I also teach WordPress and Figma.",
    focus: ["HTML", "CSS", "JavaScript", "WordPress", "Figma"],
    sq: {
      role: "Mësimdhënie e zhvillimit frontend",
      duration: "Më shumë se një vit",
      description: "Mësimdhënie e bazave të zhvillimit frontend përmes mësimeve praktike, ushtrimeve të udhëhequra dhe projekteve praktike, duke ndihmuar nxënësit fillestarë të ndërtojnë aftësi themelore në HTML, CSS dhe JavaScript. Jap mësim edhe WordPress dhe Figma."
    },
    activities: {
      title: "Technology Activities",
      org: "Unity Tech Hub · Coding Training Academy",
      description: "Participation in technology-related activities associated with Unity Tech Hub and Coding Training Academy, including presenting a project to a jury member.",
      sq: {
        title: "Aktivitete teknologjike",
        description: "Pjesëmarrje në aktivitete teknologjike të lidhura me Unity Tech Hub dhe Coding Training Academy, përfshirë prezantimin e një projekti para një anëtari të jurisë."
      }
    }
  },

  /* ---------- EDUCATION --------------------------------------------------- */
  education: [
    {
      school: "Universum International College", field: "Computer Science",
      years: "2023 – 2026", note: "Graduated",
      sq: { field: "Shkenca Kompjuterike", note: "E diplomuar" }
    },
    {
      school: "Eqrem Çabej High School, Vushtrri", field: "Social Sciences",
      years: "2020 – 2023", note: "",
      sq: { school: "Gjimnazi “Eqrem Çabej”, Vushtrri", field: "Shkenca Shoqërore" }
    }
  ]
};
