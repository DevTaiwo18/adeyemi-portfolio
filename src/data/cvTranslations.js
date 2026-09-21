// French translations for the Canada CV/Resume toggle.
// English content is derived directly from siteData.js at render time;
// this file is the FR mirror of the same content, kept in sync by hand.

export const cvFr = {
  docTitle: "CV",
  roleTagline: "Ingénieur Full-Stack | React, Node.js, TypeScript | Développement de plateformes web évolutives",
  labels: {
    summary: "Résumé",
    experience: "Expérience",
    skills: "Compétences",
    education: "Formation",
    achievements: "Réalisations",
    tech: "Technologies",
  },

  summary: (years) =>
    `Ingénieur Full-Stack avec ${years} ans d'expérience dans la conception de systèmes en production. Actuellement chez Obai (basé aux États-Unis), où j'ai livré plus de 20 fonctionnalités pour plus de 50 experts en évaluation actifs quotidiennement, tout en réduisant les bugs d'interface de 90 %. J'ai conçu et lancé une plateforme de vente successorale utilisée par 100 utilisateurs chez Kept House, avec un score PageSpeed de 92/100 et une sécurité conforme aux normes OWASP. 2e place au Wema Bank Hackaholics 6.0 (plus de 100 équipes).`,

  experiences: [
    {
      company: "Obai",
      role: "Ingénieur Full Stack",
      type: "Temps plein · Télétravail",
      period: "Sept. 2024 - Présent",
      highlights: [
        "Conception et maintenance d'une plateforme en production utilisée activement par plus de 50 experts en évaluation aux États-Unis",
        "Livraison de plus de 20 fonctionnalités d'interface majeures de bout en bout avec React, améliorant l'efficacité du flux de travail des utilisateurs actifs quotidiens",
        "Travail sur des fonctionnalités de vision par ordinateur pour la détection automatisée des dommages sur véhicules et l'étiquetage de photos",
        "Réduction des erreurs d'intégration API grâce à la standardisation de la gestion des requêtes et des limites d'erreur sur le frontend",
        "Mise en place d'un flux d'authentification RBAC prenant en charge 3 rôles d'utilisateurs distincts, sans incident de sécurité signalé",
        "Amélioration de la réactivité de l'application sur mobile et ordinateur, réduisant les bugs d'interface signalés de 90 %",
      ],
    },
    {
      company: "Kept House Estate Sales",
      role: "Développeur logiciel",
      type: "Contrat · Télétravail",
      period: "Sept. 2025 - Présent",
      highlights: [
        "Service à plus de 100 utilisateurs actifs répartis sur 3 rôles (agents, clients, fournisseurs) sur une plateforme en production",
        "Création d'une marketplace e-commerce complète traitant de vraies transactions Stripe avec panier, paiement et gestion des commandes",
        "Score Google PageSpeed de 92/100 obtenu grâce à la compression d'images, au découpage de code et à l'indexation de base de données",
        "Intégration d'un catalogage d'articles assisté par IA, réduisant le temps de saisie manuelle des stocks d'environ 60 %",
        "Conformité à la liste de contrôle de sécurité OWASP avec en-têtes CSP, HSTS et assainissement des entrées sur tous les points de terminaison",
        "Déploiement et gestion de l'infrastructure de production sur 2 plateformes (Vercel et Render) sans interruption de service",
      ],
    },
    {
      company: "Upwork",
      role: "Développeur Full Stack indépendant",
      type: "Travailleur autonome · Télétravail",
      period: "Juil. 2024 - Présent",
      highlights: [
        "Livraison de plus de 10 projets clients dans les domaines de la fintech, du e-commerce et de la gestion d'événements",
        "Conception et déploiement d'applications full-stack avec un délai moyen de moins de 2 semaines par projet",
        "Intégration de systèmes de paiement (Paystack, Stripe) sur plusieurs plateformes clientes traitant de vraies transactions",
        "Maintien d'une satisfaction client 5 étoiles en traduisant les besoins en code propre et documenté",
      ],
    },
  ],

  education: [
    {
      institution: "SQI College of ICT",
      degree: "Certificat, développement Full Stack Web",
      period: "Août 2023 - Janv. 2024",
      grade: "A1",
    },
    {
      institution: "Adejare International School",
      degree: "Série scientifique",
      period: "Sept. 2018 - Sept. 2023",
      grade: "A1",
    },
    {
      institution: "Adejare International School",
      degree: "West African Senior School Certificate (WAEC)",
      period: "2023",
      grade: "",
    },
    {
      institution: "Adejare International School",
      degree: "National Examinations Council (NECO)",
      period: "2022",
      grade: "",
    },
  ],

  achievements: [
    {
      title: "2e place - Wema Bank Hackaholics 6.0",
      description:
        "Conception d'IllumiTrust, une plateforme de vérification KYC destinée aux banques, combinant la vérification BVN et la confirmation d'adresse par GPS pour réduire le coût et les délais de l'intégration des clients. En compétition contre plus de 100 équipes.",
    },
  ],
};
