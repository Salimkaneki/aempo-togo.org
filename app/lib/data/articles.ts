// ─── Types ────────────────────────────────────────────────────────────────────

export interface ArticleSummary {
  slug: string;
  image: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  category: string;
}

export interface ArticleContent {
  introduction: string[];
  objectifs: string[];
  citation?: string;
  conclusion: string[];
}

export interface Article extends ArticleSummary {
  content: ArticleContent;
}

// ─── Constantes ───────────────────────────────────────────────────────────────

export const ARTICLE_CATEGORIES = [
  "Tout voir",
  "Vie associative",
  "Évènements",
  "Conseils & Études",
  "Santé publique",
] as const;

// ─── Données ──────────────────────────────────────────────────────────────────

export const allArticles: Article[] = [
  {
    slug: "lancement-plateforme-aempo",
    image: "/images/hero-about.png",
    date: "25 Juil. 2025",
    readTime: "12 minutes de lecture",
    title: "Lancement officiel de la plateforme de l'AEMPO",
    excerpt:
      "L'AEMPO-TOGO franchit une nouvelle étape avec le lancement de sa plateforme numérique officielle.",
    category: "Vie associative",
    content: {
      introduction: [
        "C'est une étape historique pour notre communauté. Dans une volonté constante d'innovation et d'accessibilité, l'AEMPO-TOGO est fière de vous présenter son tout nouveau support numérique. Conçu pour refléter nos valeurs et faciliter la communication, cet outil marque le début d'une ère nouvelle pour tous les étudiants de la Faculté et des Sciences de la Santé.",
      ],
      objectifs: [
        "Cette nouvelle plateforme n'est pas une simple vitrine institutionnelle. C'est un outil interactif pensé pour le quotidien des étudiants de la FSS. À travers ce projet concret, nous poursuivons notre mission de professionnels non seulement connectés entre eux mais aussi parfaitement connectés entre eux. Que vous soyez en première année ou en fin de cursus, ce portail devient votre centre de ressources de référence pour ne manquer aucune grande décision, des événements à venir et des opportunités de stage.",
        "Née d'une volonté commune d'unir les forces des futurs acteurs de la santé, l'AEMPO-TOGO rassemble la nouvelle génération de médecins, pharmaciens et chirurgiens-dentistes. Mais pour qu'une communauté de cette envergure puisse collaborer efficacement, il lui fallait des outils à la hauteur de ses ambitions. Jusqu'à présent, nos informations étaient dispersées, rendant parfois difficile l'implication des étudiants dans la vie associative. Ce lancement vient répondre à un besoin crucial : créer un espace unique, accessible, réservé à l'information, à la formation continue et à l'innovation sociale.",
      ],
      citation:
        '"Cet outil numérique est le fruit de plusieurs mois de travail acharné. Il reflète notre engagement à moderniser l\'AEMPO-TOGO et à donner à chaque étudiant les moyens de s\'impliquer concrètement pour la santé de notre population."',
      conclusion: [
        "Le déploiement de cette plateforme n'est que la première phase de notre transformation numérique. Nous envisageons, dans les mois à venir, un espace membre privé et des fonctionnalités enrichies. La plateforme sera enrichie progressivement. Nous invitons donc chacun, qu'il soit étudiant en Médecine, Pharmacie ou Odonto-Stomatologie, à s'approprier cet espace, à le parcourir et à s'y engager. L'excellence médicale togolaise commence ici, et elle évolue désormais avec vous, en un simple clic.",
      ],
    },
  },
  {
    slug: "campagne-sensibilisation",
    image: "/images/hero-about.png",
    date: "12 Octobre 2026",
    readTime: "3 minutes de lecture",
    title: "L'AEMPO-TOGO lance une nouvelle campagne de sensibilisation",
    excerpt:
      "Une nouvelle initiative pour promouvoir la santé dans les zones rurales du Togo avec l'appui de nos partenaires locaux.",
    category: "Santé publique",
    content: {
      introduction: [
        "Dans le cadre de sa mission de santé communautaire, l'AEMPO-TOGO déploie une vaste campagne de sensibilisation dans les zones rurales du pays. Cette initiative s'inscrit dans une dynamique de proximité avec les populations les plus vulnérables.",
      ],
      objectifs: [
        "L'objectif principal est de toucher au moins 2000 personnes dans les régions des Plateaux et de la Kara. Les équipes de terrain, composées d'étudiants bénévoles et de professionnels de santé, proposeront des consultations gratuites et des séances d'éducation sanitaire.",
        "Cette campagne met l'accent sur la prévention du paludisme, la sensibilisation aux maladies non transmissibles et l'importance de la vaccination. Des dépistages gratuits seront également proposés.",
      ],
      citation:
        '"Chaque action de terrain est une graine plantée pour un système de santé plus inclusif et plus proche des réalités de nos communautés."',
      conclusion: [
        "Cette campagne illustre parfaitement la vocation de l'AEMPO-TOGO : former des professionnels de santé engagés, capables d'aller au-delà des amphithéâtres pour servir directement la population.",
      ],
    },
  },
  {
    slug: "semaine-scientifique",
    image: "/images/hero-about.png",
    date: "10 Octobre 2026",
    readTime: "5 minutes de lecture",
    title: "Retour sur la semaine scientifique des étudiants en médecine",
    excerpt:
      "Des journées riches en échanges et en découvertes pour les futurs médecins de notre association.",
    category: "Évènements",
    content: {
      introduction: [
        "La semaine scientifique annuelle de l'AEMPO-TOGO s'est tenue du 3 au 7 octobre dans les locaux de la Faculté des Sciences de la Santé. Cet événement phare a réuni plus de 500 étudiants autour de thématiques médicales d'actualité.",
      ],
      objectifs: [
        "Au programme : des conférences magistrales, des ateliers pratiques et des présentations de travaux de recherche. Les intervenants, venus de différents horizons, ont partagé leur expertise sur des sujets allant de la médecine tropicale à l'intelligence artificielle en santé.",
        "Les étudiants ont également eu l'opportunité de présenter leurs propres projets de recherche devant un jury composé de professeurs et de praticiens hospitaliers.",
      ],
      conclusion: [
        "Cette édition a confirmé le rôle central de la semaine scientifique dans la formation complémentaire des futurs professionnels de santé. L'enthousiasme des participants laisse présager une prochaine édition encore plus ambitieuse.",
      ],
    },
  },
  {
    slug: "partenariat-ministere-sante",
    image: "/images/hero-about.png",
    date: "5 Octobre 2026",
    readTime: "4 minutes de lecture",
    title: "Nouveau partenariat avec le Ministère de la Santé",
    excerpt:
      "L'association signe un accord historique pour renforcer l'impact de ses actions sur le terrain.",
    category: "Santé publique",
    content: {
      introduction: [
        "L'AEMPO-TOGO et le Ministère de la Santé et de l'Hygiène Publique ont signé un protocole d'accord historique visant à renforcer la collaboration dans le domaine de la santé communautaire et de la formation des étudiants.",
      ],
      objectifs: [
        "Ce partenariat prévoit la mise en place de stages supervisés dans les centres de santé périphériques, l'accès à des données épidémiologiques pour la recherche étudiante et le co-financement de campagnes de sensibilisation.",
        "Il permettra également aux étudiants de participer activement aux programmes nationaux de vaccination et de lutte contre les maladies endémiques.",
      ],
      citation:
        '"Ce partenariat est la preuve que les institutions reconnaissent la valeur ajoutée de l\'engagement étudiant dans le système de santé togolais."',
      conclusion: [
        "Cet accord marque un tournant dans la relation entre le monde académique et les institutions de santé publique au Togo. Il ouvre la voie à une collaboration durable et mutuellement bénéfique.",
      ],
    },
  },
  {
    slug: "congres-annuel-defis-medecine",
    image: "/images/hero-about.png",
    date: "1 Octobre 2026",
    readTime: "6 minutes de lecture",
    title: "Congrès annuel : Les défis de la médecine moderne au Togo",
    excerpt:
      "Les experts se sont réunis pour discuter de l'avenir du système de santé et du rôle de la jeunesse.",
    category: "Évènements",
    content: {
      introduction: [
        "Le congrès annuel de l'AEMPO-TOGO a rassemblé cette année plus de 800 participants autour du thème « Les défis de la médecine moderne au Togo : quelle place pour la jeunesse ? ». Un rendez-vous incontournable pour la communauté médicale étudiante.",
      ],
      objectifs: [
        "Les sessions plénières ont abordé des sujets cruciaux comme la digitalisation du système de santé, l'accès aux soins en milieu rural et le rôle croissant de la télémédecine. Des tables rondes ont permis des échanges directs entre étudiants et professionnels.",
        "Le congrès a également été l'occasion de lancer plusieurs initiatives, dont un programme de mentorat reliant les jeunes diplômés aux étudiants en cours de formation.",
      ],
      conclusion: [
        "Ce congrès a démontré une fois de plus que la jeunesse médicale togolaise est prête à relever les défis du XXIe siècle. Les recommandations issues des travaux seront compilées dans un livre blanc qui sera présenté aux autorités sanitaires.",
      ],
    },
  },
  {
    slug: "don-de-sang-mobilisation",
    image: "/images/hero-about.png",
    date: "28 Septembre 2026",
    readTime: "2 minutes de lecture",
    title: "Don de sang : Une mobilisation exceptionnelle",
    excerpt:
      "Les étudiants de la faculté de médecine répondent présents pour pallier le manque dans les banques de sang nationales.",
    category: "Vie associative",
    content: {
      introduction: [
        "Face à la pénurie chronique de sang dans les hôpitaux togolais, l'AEMPO-TOGO a organisé une grande journée de don de sang sur le campus universitaire. La mobilisation a largement dépassé les attentes.",
      ],
      objectifs: [
        "Plus de 300 poches de sang ont été collectées en une seule journée, grâce à la participation massive des étudiants et du personnel universitaire. Cette collecte représente un apport significatif pour les banques de sang nationales.",
        "Au-delà de la collecte, l'événement a été l'occasion de sensibiliser la communauté universitaire sur l'importance du don de sang régulier et de déconstruire les mythes qui y sont associés.",
      ],
      conclusion: [
        "Cette mobilisation exceptionnelle confirme l'engagement solidaire de la communauté AEMPO-TOGO. Des collectes trimestrielles sont désormais prévues pour maintenir cet élan de générosité.",
      ],
    },
  },
  {
    slug: "atelier-premiers-secours",
    image: "/images/hero-about.png",
    date: "20 Septembre 2026",
    readTime: "4 minutes de lecture",
    title: "Atelier de formation sur les premiers secours",
    excerpt:
      "Renforcement des capacités des membres pour intervenir efficacement en cas d'urgence médicale.",
    category: "Conseils & Études",
    content: {
      introduction: [
        "L'AEMPO-TOGO a organisé un atelier intensif de deux jours consacré aux premiers secours. Animé par des urgentistes du CHU Sylvanus Olympio, cet atelier a permis de former une centaine d'étudiants aux gestes qui sauvent.",
      ],
      objectifs: [
        "Les participants ont été formés aux techniques de réanimation cardio-pulmonaire (RCP), à la prise en charge des traumatismes et à la gestion des situations d'urgence courantes. Des mises en situation réalistes ont permis de valider les acquis.",
        "Chaque participant ayant complété la formation avec succès a reçu une certification reconnue, renforçant ainsi leur profil professionnel.",
      ],
      conclusion: [
        "Ces ateliers pratiques sont essentiels pour compléter la formation théorique des étudiants. L'AEMPO-TOGO prévoit d'étendre ce programme à l'ensemble des promotions au cours de l'année académique.",
      ],
    },
  },
  {
    slug: "campagne-depistage-diabete",
    image: "/images/hero-about.png",
    date: "15 Septembre 2026",
    readTime: "3 minutes de lecture",
    title: "Campagne de dépistage gratuit du diabète",
    excerpt:
      "Une action de prévention majeure qui a permis de toucher et de dépister plus de 500 personnes.",
    category: "Santé publique",
    content: {
      introduction: [
        "Dans le cadre de la Journée mondiale du diabète, l'AEMPO-TOGO a déployé des équipes dans plusieurs quartiers de Lomé pour offrir des dépistages gratuits. Cette action de santé publique a mobilisé plus de 80 étudiants bénévoles.",
      ],
      objectifs: [
        "Plus de 500 personnes ont été dépistées au cours de cette campagne. Les cas suspects ont été orientés vers les structures de santé appropriées pour un suivi médical. Des conseils nutritionnels personnalisés ont également été prodigués.",
        "La campagne a mis en lumière l'ampleur du diabète non diagnostiqué dans la population, renforçant l'urgence d'actions de prévention régulières.",
      ],
      conclusion: [
        "Cette campagne illustre la capacité de l'AEMPO-TOGO à mener des actions de santé publique d'envergure. D'autres campagnes de dépistage sont déjà planifiées pour les prochains mois.",
      ],
    },
  },
  {
    slug: "election-bureau-executif",
    image: "/images/hero-about.png",
    date: "10 Septembre 2026",
    readTime: "5 minutes de lecture",
    title: "Élection du nouveau bureau exécutif",
    excerpt:
      "Une nouvelle équipe dynamique à la tête de l'AEMPO-TOGO pour diriger les projets de l'année à venir.",
    category: "Vie associative",
    content: {
      introduction: [
        "L'Assemblée Générale Élective de l'AEMPO-TOGO s'est tenue dans un climat de transparence et d'enthousiasme. Plus de 600 étudiants ont participé au vote pour élire le nouveau bureau exécutif qui dirigera l'association pour le mandat 2026-2027.",
      ],
      objectifs: [
        "Le nouveau bureau, composé de 15 membres représentant les différentes filières, a présenté un programme ambitieux axé sur la digitalisation, le renforcement des partenariats internationaux et l'amélioration des conditions d'études.",
        "Parmi les priorités annoncées : la création d'une bibliothèque numérique, le lancement d'un programme d'échanges avec des universités africaines et européennes, et le renforcement des activités communautaires.",
      ],
      conclusion: [
        "L'élection de ce nouveau bureau marque le début d'un nouveau chapitre pour l'AEMPO-TOGO. La passation de charges s'est déroulée dans un esprit de continuité et de renouveau.",
      ],
    },
  },
  {
    slug: "temoignages-jeunes-diplomes",
    image: "/images/hero-about.png",
    date: "5 Septembre 2026",
    readTime: "4 minutes de lecture",
    title: "Témoignages : Le parcours inspirant de nos jeunes diplômés",
    excerpt:
      "Des jeunes médecins partagent leur expérience, leurs défis et leurs précieux conseils pour la relève.",
    category: "Conseils & Études",
    content: {
      introduction: [
        "L'AEMPO-TOGO a organisé une soirée spéciale réunissant de jeunes diplômés en médecine, pharmacie et odonto-stomatologie. Ces anciens membres de l'association sont revenus partager leur parcours, leurs réussites et les obstacles qu'ils ont surmontés.",
      ],
      objectifs: [
        "Les témoignages ont couvert un large spectre d'expériences : de la spécialisation en chirurgie cardiaque à Paris aux consultations en brousse togolaise, en passant par la recherche en pharmacologie. Chaque récit a offert une perspective unique sur les possibilités de carrière.",
        "Les échanges informels qui ont suivi les présentations ont permis aux étudiants actuels de poser des questions pratiques et de tisser des liens avec leurs aînés, créant ainsi un réseau de mentorat naturel.",
      ],
      citation:
        '"Mon passage à l\'AEMPO-TOGO m\'a appris que la médecine, c\'est d\'abord un engagement humain. Les compétences techniques s\'acquièrent, mais la compassion et le leadership se cultivent au sein de communautés comme la nôtre."',
      conclusion: [
        "Cette soirée a confirmé l'importance du lien intergénérationnel au sein de la communauté médicale. L'AEMPO-TOGO prévoit d'institutionnaliser ces rencontres sous la forme d'un programme de mentorat structuré.",
      ],
    },
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns a short readTime (e.g. "3 min") from the full readTime string */
export function getShortReadTime(readTime: string): string {
  const match = readTime.match(/(\d+)/);
  return match ? `${match[1]} min` : readTime;
}

/** Returns article summaries (without content) for listing pages */
export function getArticleSummaries(): ArticleSummary[] {
  return allArticles.map(({ content: _, ...summary }) => summary);
}

/** Returns a full article by slug, or undefined */
export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

/** Returns related articles (excluding the given slug) */
export function getRelatedArticles(
  slug: string,
  count = 3
): ArticleSummary[] {
  return allArticles
    .filter((a) => a.slug !== slug)
    .slice(0, count)
    .map(({ content: _, ...summary }) => summary);
}
