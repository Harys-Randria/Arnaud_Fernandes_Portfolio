export const portfolioData = {
  personalInfo: {
    name: "Arnaud Fernandes",
    title: "Leader Technique Fullstack",
    subtitle: "Architecture microservices · .NET 8 · Go · Node.js",
    email: "arnaud.fernandes@tech-magister.com",
    phone: "+33 9 72 66 31 88",
    location: "France",
    website: "https://arnaudfernandes.com",
    calendlyUrl: "https://calendly.com/arnaud-fernandes",
  },

  about: {
    title: "À propos",
    description:
      "Fullstack Developer avec expertise en architecture microservices et développement d'applications scalables pour les secteurs transport, retail et services. Spécialisé en .NET 8, React, Node.js et Go, avec une expérience confirmée en leadership technique et coaching d'équipes onshore/offshore. Expert en architecture cloud Azure et pratiques DevOps avec Kubernetes/Docker. Maîtrise complète du cycle de développement : TDD, Event Sourcing et intégration CI/CD.",
    highlights: [
      "Architecture de systèmes complexes (10+ microservices, 5+ domaines applicatifs)",
      "Leadership technique & coaching d'équipes onshore/offshore",
      "Expert cloud Azure & DevOps (Kubernetes, Docker, CI/CD)",
      "Références clients : GetLink, Sage, Cdiscount",
    ],
  },

  skills: {
    title: "Compétences",
    categories: [
      {
        name: "Backend",
        skills: [
          "C# .NET 8",
          ".NET Core 3.1 / 5 / 6 / 7",
          ".NET 4.8",
          "Node.js",
          "Go",
          "Java (Spring Boot)",
        ],
      },
      {
        name: "Frontend",
        skills: [
          "ReactJS",
          "TypeScript",
          "WebAssembly (WASM)",
          "React Native",
          "React Admin",
        ],
      },
      {
        name: "Microservices & Orchestration",
        skills: [
          "Architecture microservices scalable",
          "Kubernetes (+ Rancher)",
          "Docker",
          "Event Sourcing",
        ],
      },
      {
        name: "Cloud Azure",
        skills: [
          "Azure Function",
          "Azure KeyVault",
          "Azure ServiceBus",
          "Azure Insight",
          "Azure SQL",
          "Azure Storage",
          "Azure App Service",
        ],
      },
      {
        name: "Bases de données",
        skills: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"],
      },
      {
        name: "Communication & Messaging",
        skills: [
          "REST",
          "Kafka (PubSub)",
          "Azure Service Bus",
          "Redis Stream",
          "WebSocket",
        ],
      },
      {
        name: "Testing",
        skills: [
          "TDD",
          "Gherkin / Specflow",
          "Xunit",
          "Playwright (E2E)",
          "Mock",
        ],
      },
      {
        name: "Sécurité",
        skills: [
          "OAuth2",
          "OpenId Connect",
          "Salt / Argon2",
          "Chiffrement asymétrique",
        ],
      },
      {
        name: "DevOps & Outils",
        skills: [
          "Git / GitHub",
          "GitHub Actions (CI/CD)",
          "TFS",
          "Storybook",
          "Prometheus",
          "Grafana",
          "OpenObserve",
        ],
      },
      {
        name: "Méthodologies",
        skills: ["Agile / SCRUM", "Feature Team", "Équipe produit"],
      },
    ],
  },

  experience: [
    {
      company: "GetLink",
      position: "Leader Technique Fullstack .NET Core (C#) / React",
      period: "Décembre 2022 - Présent",
      location: "France",
      description:
        "Projets Boarding PAX, EES (Entry-Exit System), DriverInfo et VehicleTracking pour le transport transmanche.",
      bullets: [
        "Projet Boarding PAX : mise à disposition en temps réel des plans de chargement des wagons pour validation du placement et gestion des incidents.",
        "Projet EES (Entry-Exit System) : architecture globale de la solution (10+ microservices, 2 frontaux, 5 domaines applicatifs) pour le système d'enregistrement automatisé des voyageurs non-européens — projet de la Commission européenne.",
        "Projets DriverInfo / VehicleTracking : développement de microservices innovants pour le suivi transmanche des camions, modernisation du tracking véhicules et refonte du back-office chauffeurs.",
      ],
      technologies: [
        "C# .NET 6/7/8",
        "ReactJS",
        "TypeScript",
        "React Admin",
        "Azure Function",
        "Azure KeyVault",
        "Azure ServiceBus",
        "Azure Insight",
        "Azure SQL",
        "Azure Storage",
        "Azure App Service",
        "Gherkin",
        "Specflow",
        "Xunit",
        "Mock",
        "REST",
        "PubSub",
      ],
    },
    {
      company: "Sage",
      position: "Développeur Fullstack .NET Core (C#) / React",
      period: "Juin 2021 - Décembre 2022",
      location: "France",
      description:
        "Équipe RH / API — modernisation du SI vers une architecture microservices.",
      bullets: [
        "Refactorisation et application des bonnes pratiques sur un ensemble de microservices, avec développement de nouvelles fonctionnalités et maintenance corrective (.NET 4.8 → .NET 6).",
        "R&D pour un système de notifications asynchrones : exploration WebSockets et Event Sourcing (Kafka).",
        "Gestion des synchronisations salariées et imports des régularisations de dossiers dans l'optique de modernisation vers une architecture microservices (.NET 6).",
      ],
      technologies: [
        "C# .NET 6/7",
        ".NET 4.8",
        "ReactJS",
        "TypeScript",
        "Azure Function",
        "Azure KeyVault",
        "Azure Insight",
        "Azure App Service",
        "Kafka (Event Sourcing)",
        "REST",
        "Kubernetes",
        "Docker",
        "SQL Server",
        "MongoDB",
      ],
    },
    {
      company: "Cdiscount",
      position: "Leader Technique Fullstack .NET Core / React",
      period: "Juin 2018 - Juin 2021",
      location: "Bordeaux, France",
      description:
        "Équipe produit Octopia et équipe projet. React Referent Reviewer (octobre 2019 — mars 2021).",
      bullets: [
        "Coaching, accompagnement et gestion des compétences des équipes techniques onshore/offshore : analyses de besoins, études de faisabilité, chiffrage et budgétisation.",
        "Rôle de React Referent Reviewer : révision de code React pour la direction et référent React au sein de la business unit.",
        "Projet Octopia : création du nouveau produit de gestion des interfaces de canaux de vente — supervision de 15+ microservices .NET Core, back-office React, OAuth2, encadrement onshore/offshore.",
        "Équipe projet : gestion de projets stratégiques (primes énergétiques, location longue durée, services B2B) avec remplacement du chef de projet pendant un trimestre.",
      ],
      technologies: [
        "C# .NET Core 3.1",
        ".NET 5",
        "Java (Spring Boot)",
        "ReactJS",
        "TypeScript",
        "Kubernetes",
        "Docker",
        "OAuth2",
        "OpenId Connect",
        "REST",
        "SQL Server",
        "Git",
        "TFS",
        "Agile",
        "SCRUM",
      ],
    },
    {
      company: "Cdiscount",
      position: "Développeur Fullstack .NET / Java / React",
      period: "Septembre 2017 - Juin 2018",
      location: "Bordeaux, France",
      description:
        "Feature Team Cdiscount à volonté — développement de l'offre d'abonnement multi-plateforme.",
      bullets: [
        "Développement de microservices Java (Spring Boot) pour l'offre d'abonnement.",
        "Enrichissement de l'offre sur le site PC (.NET, C#) et amélioration de l'expérience mobile et application (React JS, React Native).",
      ],
      technologies: [
        "C# .NET",
        "Java (Spring Boot)",
        "ReactJS",
        "React Native",
        "TypeScript",
        "Kubernetes",
        "Docker",
        "REST",
        "Git",
        "TFS",
      ],
    },
  ],

  education: [
    {
      school: "IMERIR — École Robotique et Informatique",
      degree: "Master Chef de projet Informatique et Robotique",
      period: "2009 - 2014",
      location: "Perpignan, France",
    },
    {
      school: "SUPINFO",
      degree: "Cycle préparatoire B1 / B2",
      period: "2009 - 2010",
      location: "France",
    },
  ],

  languages: [
    { language: "Français", level: "Natif" },
    { language: "Anglais", level: "Professionnel" },
  ],

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/arnaud-fernandes",
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/arnaud-fernandes",
      icon: "Github",
    },
    {
      name: "Site web",
      url: "https://arnaudfernandes.com",
      icon: "Globe",
    },
    {
      name: "Malt",
      url: "https://www.malt.fr/profile/arnauxfernandes",
      icon: "Briefcase",
    },
  ],

  contact: {
    title: "Me Contacter",
    subtitle:
      "Disponible pour des missions freelance ou des opportunités en CDI. Prenez un créneau ou envoyez-moi un message.",
    email: "arnaud.fernandes@tech-magister.com",
    phone: "+33 9 72 66 31 88",
  },
};