export interface Question {
  id: number;
  category: 'géographie' | 'histoire' | 'politique' | 'social';
  type: 'national' | 'cantonal';
  question: string;
  answer: string;
  isMultipleAnswer?: boolean;
  options?: string[]; // For multiple choice questions
  isMultipleChoice?: boolean;
}

export const questions: Question[] = [
  // GÉOGRAPHIE - QUESTIONS NATIONALES
  {
    id: 1,
    category: 'géographie',
    type: 'national',
    question: 'Quelle est la capitale de la Suisse ?',
    answer: 'Berne'
  },
  {
    id: 2,
    category: 'géographie',
    type: 'national',
    question: 'Citez les langues nationales suisses et un canton pour chacune de ces langues.',
    answer: 'Français: Genève, Vaud, Valais, Neuchâtel, Jura / Allemand: Zurich, Argovie, Berne, Soleure / Italien: Tessin, Grisons / Romanche: Grisons',
    isMultipleAnswer: true
  },
  {
    id: 3,
    category: 'géographie',
    type: 'national',
    question: 'Citez trois cantons qui composent la Suisse romande.',
    answer: 'Genève, Vaud, Neuchâtel, Valais, Fribourg, Jura, Berne (trois parmi ceux-ci)',
    isMultipleAnswer: true
  },
  {
    id: 4,
    category: 'géographie',
    type: 'national',
    question: "Environ combien d'habitant-e-s compte la Suisse ?",
    answer: '9 millions',
    isMultipleChoice: true,
    options: ['6 millions', '9 millions', '11 millions']
  },
  {
    id: 5,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le pourcentage de la population résidante permanente étrangère en Suisse ?',
    answer: '26%',
    isMultipleChoice: true,
    options: ['12%', '26%', '45%']
  },
  {
    id: 6,
    category: 'géographie',
    type: 'national',
    question: 'Pouvez-vous citer 3 pays ayant une frontière commune avec la Suisse ?',
    answer: 'France, Italie, Autriche, Allemagne, Liechtenstein (trois parmi ceux-ci)',
    isMultipleAnswer: true
  },
  {
    id: 7,
    category: 'géographie',
    type: 'national',
    question: 'Combien y a-t-il de cantons en Suisse ?',
    answer: '26',
    isMultipleChoice: true,
    options: ['17', '26', '32', '46']
  },
  {
    id: 8,
    category: 'géographie',
    type: 'national',
    question: 'Quelle est la plus grande ville de Suisse ?',
    answer: 'Zurich',
    isMultipleChoice: true,
    options: ['Lugano', 'Coire', 'Zurich', 'Lucerne']
  },
  {
    id: 9,
    category: 'géographie',
    type: 'national',
    question: 'Comment se nomme le plus haut sommet de Suisse ?',
    answer: 'La Pointe Dufour'
  },
  {
    id: 10,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le nom du plus grand lac entièrement situé sur le territoire suisse ?',
    answer: 'Le lac de Neuchâtel'
  },

  // GÉOGRAPHIE - QUESTIONS CANTONALES
  {
    id: 11,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel est le chef-lieu du canton de Neuchâtel ?',
    answer: 'Neuchâtel'
  },
  {
    id: 12,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel célèbre cirque rocheux se trouve dans le Val-de-Travers ?',
    answer: 'Le Creux-du-Van'
  },
  {
    id: 13,
    category: 'géographie',
    type: 'cantonal',
    question: 'Le canton de Neuchâtel est composé de quatre régions, citez ces quatre régions.',
    answer: 'Littoral, Montagnes, Val-de-Ruz, Val-de-Travers',
    isMultipleAnswer: true
  },
  {
    id: 14,
    category: 'géographie',
    type: 'cantonal',
    question: "Quel pays de l'Union européenne a une frontière terrestre avec le canton de Neuchâtel ?",
    answer: 'La France'
  },
  {
    id: 15,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel est le nom du tunnel autoroutier reliant Neuchâtel à La Chaux-de-Fonds ?',
    answer: 'Le tunnel de la Vue-des-Alpes'
  },

  // HISTOIRE - QUESTIONS NATIONALES
  {
    id: 16,
    category: 'histoire',
    type: 'national',
    question: 'Quel jour la Suisse célèbre-t-elle sa fête nationale ?',
    answer: 'Le 1er août'
  },
  {
    id: 17,
    category: 'histoire',
    type: 'national',
    question: 'Dans quelle ville se trouve le Palais fédéral ?',
    answer: 'Berne'
  },
  {
    id: 18,
    category: 'histoire',
    type: 'national',
    question: 'En quelle année la Suisse devient-elle un État fédéral ?',
    answer: '1848'
  },
  {
    id: 19,
    category: 'histoire',
    type: 'national',
    question: 'Par quels cantons a été signé le plus ancien pacte de la Confédération en 1291 ?',
    answer: 'Uri, Schwytz, Unterwald',
    isMultipleAnswer: true
  },
  {
    id: 20,
    category: 'histoire',
    type: 'national',
    question: 'Quelle est la devise de la Confédération suisse ?',
    answer: 'Un pour tous, tous pour un'
  },
  {
    id: 21,
    category: 'histoire',
    type: 'national',
    question: 'Qui est considéré comme étant le fondateur de la Croix-Rouge ?',
    answer: 'Henry Dunant'
  },
  {
    id: 22,
    category: 'histoire',
    type: 'national',
    question: "À quel moment les femmes suisses ont-elles obtenu le droit de vote au niveau fédéral ?",
    answer: '1971 (années 70)'
  },
  {
    id: 23,
    category: 'histoire',
    type: 'national',
    question: 'Quel canton a été le dernier canton à entrer dans la Confédération suisse ?',
    answer: 'Le canton du Jura'
  },
  {
    id: 24,
    category: 'histoire',
    type: 'national',
    question: "Quand la Suisse est-elle entrée à l'ONU ?",
    answer: '2002'
  },
  {
    id: 25,
    category: 'histoire',
    type: 'national',
    question: 'En quelle année la bataille de Marignan eut-elle lieu ?',
    answer: '1515'
  },

  // HISTOIRE - QUESTIONS CANTONALES
  {
    id: 26,
    category: 'histoire',
    type: 'cantonal',
    question: "À quel moment les femmes ont-elles obtenu le droit de vote à Neuchâtel ?",
    answer: '1959 (années 50)'
  },
  {
    id: 27,
    category: 'histoire',
    type: 'cantonal',
    question: 'En quelle année le canton de Neuchâtel est-il entré dans la Confédération suisse ?',
    answer: '1814 (12 septembre 1814)'
  },
  {
    id: 28,
    category: 'histoire',
    type: 'cantonal',
    question: "Quelle est la date de l'indépendance neuchâteloise ?",
    answer: '1er mars 1848'
  },
  {
    id: 29,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui a introduit la Réforme protestante dans le canton de Neuchâtel ?',
    answer: 'Guillaume Farel'
  },
  {
    id: 30,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui est Philippe Suchard ?',
    answer: 'Un confiseur et entrepreneur suisse né à Boudry, fondateur des chocolats Suchard'
  },

  // POLITIQUE - QUESTIONS NATIONALES
  {
    id: 31,
    category: 'politique',
    type: 'national',
    question: 'Quel est le nom du gouvernement suisse ?',
    answer: 'Le Conseil fédéral'
  },
  {
    id: 32,
    category: 'politique',
    type: 'national',
    question: 'Comment se nomment les chambres qui composent le Parlement suisse ?',
    answer: 'Le Conseil des États et le Conseil national',
    isMultipleAnswer: true
  },
  {
    id: 33,
    category: 'politique',
    type: 'national',
    question: 'Combien de membres compte le Conseil fédéral ?',
    answer: '7'
  },
  {
    id: 34,
    category: 'politique',
    type: 'national',
    question: "La Suisse est-elle membre de l'Union européenne ?",
    answer: 'Non'
  },
  {
    id: 35,
    category: 'politique',
    type: 'national',
    question: "Pour combien de temps le/la Président-e de la Confédération est-il/elle élu-e ?",
    answer: 'Pour une année'
  },
  {
    id: 36,
    category: 'politique',
    type: 'national',
    question: "Qu'est-ce qu'une initiative ?",
    answer: "Une initiative populaire visant à modifier la Constitution en récoltant 100'000 signatures en 18 mois"
  },
  {
    id: 37,
    category: 'politique',
    type: 'national',
    question: "La Suisse autorise-t-elle la double nationalité ?",
    answer: 'Oui'
  },
  {
    id: 38,
    category: 'politique',
    type: 'national',
    question: "Quels sont les 3 niveaux d'autorité de la Suisse ?",
    answer: 'Fédéral, cantonal et communal',
    isMultipleAnswer: true
  },
  {
    id: 39,
    category: 'politique',
    type: 'national',
    question: "Quel est l'autre nom donné à l'hymne national suisse ?",
    answer: 'Le Cantique suisse'
  },
  {
    id: 40,
    category: 'politique',
    type: 'national',
    question: "Que signifie l'abréviation CH ?",
    answer: 'Confédération helvétique'
  },

  // POLITIQUE - QUESTIONS CANTONALES
  {
    id: 41,
    category: 'politique',
    type: 'cantonal',
    question: 'Quels sont les quatre principes fondamentaux de la République et canton de Neuchâtel ?',
    answer: 'Démocratique, laïque, sociale et garante des droits fondamentaux',
    isMultipleAnswer: true
  },
  {
    id: 42,
    category: 'politique',
    type: 'cantonal',
    question: 'Qui représente le pouvoir législatif au niveau cantonal ?',
    answer: 'Le Grand Conseil'
  },
  {
    id: 43,
    category: 'politique',
    type: 'cantonal',
    question: 'Qui représente le pouvoir exécutif au niveau cantonal ?',
    answer: 'Le Conseil d\'État'
  },
  {
    id: 44,
    category: 'politique',
    type: 'cantonal',
    question: "Pour combien d'années est élu le Conseil d'État ?",
    answer: '4 ans'
  },
  {
    id: 45,
    category: 'politique',
    type: 'cantonal',
    question: 'Combien de membres composent le Grand Conseil neuchâtelois ?',
    answer: '100'
  },
  {
    id: 46,
    category: 'politique',
    type: 'cantonal',
    question: "En quelle année la Constitution de la République et Canton de Neuchâtel a-t-elle été révisée pour la dernière fois ?",
    answer: '2000 (24 septembre 2000)'
  },
  {
    id: 47,
    category: 'politique',
    type: 'cantonal',
    question: "Combien y a-t-il de départements au Conseil d'État neuchâtelois ?",
    answer: '5'
  },
  {
    id: 48,
    category: 'politique',
    type: 'cantonal',
    question: "Dans le canton de Neuchâtel, les personnes étrangères détentrices d'un permis C peuvent-elles voter au niveau communal ?",
    answer: 'Oui'
  },
  {
    id: 49,
    category: 'politique',
    type: 'cantonal',
    question: 'Que signifie que le canton de Neuchâtel est laïc ?',
    answer: "Il n'a pas de religion d'État, garantit la liberté de religion et sépare l'État des institutions religieuses"
  },
  {
    id: 50,
    category: 'politique',
    type: 'cantonal',
    question: "En quelle année le drapeau du canton de Neuchâtel a-t-il été créé ?",
    answer: '1848'
  },

  // SOCIAL - QUESTIONS NATIONALES
  {
    id: 51,
    category: 'social',
    type: 'national',
    question: 'Quel est l\'indicatif téléphonique de la Suisse ?',
    answer: '+41 ou 0041'
  },
  {
    id: 52,
    category: 'social',
    type: 'national',
    question: 'Quelle est la langue la plus parlée en Suisse ?',
    answer: "L'allemand"
  },
  {
    id: 53,
    category: 'social',
    type: 'national',
    question: 'Quel célèbre joueur de tennis suisse est né à Bâle ?',
    answer: 'Roger Federer'
  },
  {
    id: 54,
    category: 'social',
    type: 'national',
    question: 'Quel État autre que la Suisse utilise le franc suisse comme monnaie officielle ?',
    answer: 'Le Liechtenstein'
  },
  {
    id: 55,
    category: 'social',
    type: 'national',
    question: 'Comment s\'appelle la compagnie aérienne nationale de la Suisse ?',
    answer: 'Swiss'
  },
  {
    id: 56,
    category: 'social',
    type: 'national',
    question: 'Quel nom donne-t-on à la principale compagnie ferroviaire de la Suisse ?',
    answer: 'Les Chemins de fer fédéraux suisses (CFF)'
  },
  {
    id: 57,
    category: 'social',
    type: 'national',
    question: 'Comment se nomme le principal cirque suisse ?',
    answer: 'Le Cirque National Suisse Knie ou cirque Knie'
  },
  {
    id: 58,
    category: 'social',
    type: 'national',
    question: 'Dans quelle ville suisse se trouve la « fosse aux ours » ?',
    answer: 'Berne'
  },
  {
    id: 59,
    category: 'social',
    type: 'national',
    question: "Que signifie l'abréviation CH ?",
    answer: 'Confédération helvétique'
  },
  {
    id: 60,
    category: 'social',
    type: 'national',
    question: "Le drapeau national suisse a la particularité d'être parfaitement carré. Un seul autre État possède un drapeau carré, lequel ?",
    answer: "L'État de la Cité du Vatican ou le Vatican"
  },

  // SOCIAL - QUESTIONS CANTONALES
  {
    id: 61,
    category: 'social',
    type: 'cantonal',
    question: "Qu'est-ce que la « Charte de la citoyenneté » ?",
    answer: 'Un ensemble de documents informatifs sur le canton de Neuchâtel expliquant les fondements, principes et valeurs de la République'
  },
  {
    id: 62,
    category: 'social',
    type: 'cantonal',
    question: "Comment s'appelle le Musée archéologique du canton de Neuchâtel ?",
    answer: 'Le Laténium'
  },
  {
    id: 63,
    category: 'social',
    type: 'cantonal',
    question: 'Quel est le plus grand événement festif qui a lieu chaque année dans le canton de Neuchâtel ?',
    answer: 'La Fête des vendanges'
  },
  {
    id: 64,
    category: 'social',
    type: 'cantonal',
    question: "Pourquoi les villes de La Chaux-de-Fonds et du Locle sont-elles classées au patrimoine mondial de l'UNESCO ?",
    answer: "Du fait de l'urbanisme horloger"
  },
  {
    id: 65,
    category: 'social',
    type: 'cantonal',
    question: "Comment s'appelle le réseau de transports publics dans le canton de Neuchâtel ?",
    answer: 'TransN'
  },
  {
    id: 66,
    category: 'social',
    type: 'cantonal',
    question: "De quoi le service de la cohésion multiculturelle (COSM) s'occupe-t-il ?",
    answer: 'Intégration des étrangers, lutte contre le racisme et les discriminations, promotion du vivre ensemble, interprétariat, naturalisation'
  },
  {
    id: 67,
    category: 'social',
    type: 'cantonal',
    question: 'À quel âge commence la scolarité obligatoire dans le canton de Neuchâtel ?',
    answer: '4 ans'
  },
  {
    id: 68,
    category: 'social',
    type: 'cantonal',
    question: "Quelle est l'industrie phare dans le canton de Neuchâtel ?",
    answer: "L'horlogerie"
  },
  {
    id: 69,
    category: 'social',
    type: 'cantonal',
    question: 'Quel est le surnom du célèbre architecte chaux-de-fonnier Charles-Édouard Jeanneret-Gris ?',
    answer: 'Le Corbusier'
  },
  {
    id: 70,
    category: 'social',
    type: 'cantonal',
    question: 'Quels sont les deux seuls cantons de Suisse romande qui octroient aux étrangers le droit de vote au niveau cantonal ?',
    answer: 'Neuchâtel et Jura',
    isMultipleAnswer: true
  }
];
