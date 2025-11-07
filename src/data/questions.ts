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
  // ==========================================
  // GÉOGRAPHIE - QUESTIONS NATIONALES (37)
  // ==========================================
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
    question: 'Quelle est, approximativement, la superficie de la Suisse ?',
    answer: '41 000 km²',
    isMultipleChoice: true,
    options: ['27 000 km²', '41 000 km²', '133 000 km²', '265 000 km²']
  },
  {
    id: 3,
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
    answer: 'Genève, Vaud, Neuchâtel, Valais, Fribourg, Jura, Berne',
    isMultipleAnswer: true
  },
  {
    id: 4,
    category: 'géographie',
    type: 'national',
    question: 'Citez 3 cantons où on parle le français et 3 cantons où on parle l\'allemand.',
    answer: 'Français: Genève, Vaud, Valais, Neuchâtel, Jura / Allemand: Zurich, Argovie, Berne, Soleure',
    isMultipleAnswer: true
  },
  {
    id: 5,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le chef-lieu du canton de Thurgovie ?',
    answer: 'Frauenfeld'
  },
  {
    id: 6,
    category: 'géographie',
    type: 'national',
    question: 'Environ combien d\'habitant-e-s compte la Suisse ?',
    answer: '9 millions',
    isMultipleChoice: true,
    options: ['6 millions', '9 millions', '11 millions']
  },
  {
    id: 7,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le pourcentage de personnes qui n\'ont pas la nationalité suisse en Suisse ?',
    answer: '27%',
    isMultipleChoice: true,
    options: ['12%', '27%', '45%']
  },
  {
    id: 8,
    category: 'géographie',
    type: 'national',
    question: 'Pouvez-vous citer 3 pays ayant une frontière commune avec la Suisse ?',
    answer: 'France, Italie, Autriche, Allemagne, Liechtenstein',
    isMultipleAnswer: true
  },
  {
    id: 9,
    category: 'géographie',
    type: 'national',
    question: 'Combien y-a-t\'il de cantons officiellement bilingues français-allemand ?',
    answer: '3 (Fribourg, Berne, Valais)'
  },
  {
    id: 10,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le chef-lieu du canton du Valais ?',
    answer: 'Sion'
  },
  {
    id: 11,
    category: 'géographie',
    type: 'national',
    question: 'Quelles sont les langues nationales de la Suisse ?',
    answer: 'Français, allemand, italien et romanche',
    isMultipleAnswer: true
  },
  {
    id: 12,
    category: 'géographie',
    type: 'national',
    question: 'Quel est, en surface, le plus petit canton de la Suisse ?',
    answer: 'Bâle-Ville',
    isMultipleChoice: true,
    options: ['Bâle-Campagne', 'Uri', 'Appenzell Rhodes-Intérieures', 'Bâle-Ville']
  },
  {
    id: 13,
    category: 'géographie',
    type: 'national',
    question: 'Combien y a-t-il de cantons en Suisse ?',
    answer: '26',
    isMultipleChoice: true,
    options: ['17', '26', '32', '46']
  },
  {
    id: 14,
    category: 'géographie',
    type: 'national',
    question: 'Avec quels cantons le canton de Neuchâtel partage-t-il son lac ?',
    answer: 'Fribourg, Vaud et Berne',
    isMultipleAnswer: true
  },
  {
    id: 15,
    category: 'géographie',
    type: 'national',
    question: 'Lequel de ces cantons est officiellement bilingue ?',
    answer: 'Fribourg',
    isMultipleChoice: true,
    options: ['Glaris', 'Bâle', 'Aarau', 'Fribourg']
  },
  {
    id: 16,
    category: 'géographie',
    type: 'national',
    question: 'Au bord de quel lac se trouve la prairie du Grütli ?',
    answer: 'Lac des Quatre-Cantons',
    isMultipleChoice: true,
    options: ['lac de Zoug', 'lac de Constance', 'lac de Walenstadt', 'lac des Quatre-Cantons']
  },
  {
    id: 17,
    category: 'géographie',
    type: 'national',
    question: 'Dans quel canton parle-t-on le romanche ?',
    answer: 'Grisons',
    isMultipleChoice: true,
    options: ['Soleure', 'Obwald', 'Grisons', 'Schwytz']
  },
  {
    id: 18,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le chef-lieu du canton d\'Uri ?',
    answer: 'Altdorf'
  },
  {
    id: 19,
    category: 'géographie',
    type: 'national',
    question: 'Avec quel pays la Suisse partage-t-elle le lac Léman ?',
    answer: 'France',
    isMultipleChoice: true,
    options: ['Belgique', 'Allemagne', 'Autriche', 'France']
  },
  {
    id: 20,
    category: 'géographie',
    type: 'national',
    question: 'Quelle est la plus grande ville de Suisse ?',
    answer: 'Zurich',
    isMultipleChoice: true,
    options: ['Lugano', 'Coire', 'Zurich', 'Lucerne']
  },
  {
    id: 21,
    category: 'géographie',
    type: 'national',
    question: 'Comment se nomment les quatre points cardinaux de la Suisse ?',
    answer: 'Le Piz Chavalatsch (Grisons), Oberbargen (Schaffhouse), Chancy (Genève), Chiasso (Tessin)',
    isMultipleAnswer: true
  },
  {
    id: 22,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le plus haut sommet du Jura Suisse, culminant à 1679 m ?',
    answer: 'Le mont Tendre'
  },
  {
    id: 23,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le chef-lieu du canton du Tessin ?',
    answer: 'Bellinzone'
  },
  {
    id: 24,
    category: 'géographie',
    type: 'national',
    question: 'Dans quelle localité des Grisons se déroule le Forum économique mondial ?',
    answer: 'Davos'
  },
  {
    id: 25,
    category: 'géographie',
    type: 'national',
    question: 'Quelle rivière coule dans la ville de Berne ?',
    answer: 'L\'Aar'
  },
  {
    id: 26,
    category: 'géographie',
    type: 'national',
    question: 'Comment se nomment les 6 demi-cantons de la Suisse ?',
    answer: 'Nidwald, Bâle-Campagne, Obwald, Appenzell Rhodes-Intérieures, Bâle-Ville, Appenzell Rhodes-Extérieures',
    isMultipleAnswer: true
  },
  {
    id: 27,
    category: 'géographie',
    type: 'national',
    question: 'En quoi le sommet alpin Eiger est-il célèbre ?',
    answer: 'Pour sa face nord'
  },
  {
    id: 28,
    category: 'géographie',
    type: 'national',
    question: 'Comment se nomme la localité italienne qui est enclavée dans le canton suisse du Tessin ?',
    answer: 'Campione d\'Italia'
  },
  {
    id: 29,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le plus long fleuve de Suisse ?',
    answer: 'Le Rhin'
  },
  {
    id: 30,
    category: 'géographie',
    type: 'national',
    question: 'Quel col est le plus haut col routier des Alpes suisses ?',
    answer: 'Le col de l\'Umbrail'
  },
  {
    id: 31,
    category: 'géographie',
    type: 'national',
    question: 'Comment se nomme le plus haut sommet de Suisse ?',
    answer: 'La Pointe Dufour'
  },
  {
    id: 32,
    category: 'géographie',
    type: 'national',
    question: 'Quels sont les cantons qui bordent le lac des Quatre-Cantons ?',
    answer: 'Lucerne, Uri, Schwytz, Nidwald et Obwald',
    isMultipleAnswer: true
  },
  {
    id: 33,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le nom du plus grand lac entièrement situé sur le territoire suisse ?',
    answer: 'Le lac de Neuchâtel'
  },
  {
    id: 34,
    category: 'géographie',
    type: 'national',
    question: 'Au bord de quel lac se situe la localité tessinoise de Locarno ?',
    answer: 'Le lac Majeur'
  },
  {
    id: 189,
    category: 'géographie',
    type: 'national',
    question: 'Le canton de Genève possède une frontière avec lequel de ces cantons ?',
    answer: 'Vaud',
    isMultipleChoice: true,
    options: ['Berne', 'Fribourg', 'Valais', 'Vaud', 'Zurich']
  },
  {
    id: 190,
    category: 'géographie',
    type: 'national',
    question: 'Quels sont les cantons de Suisse romande officiellement uniquement francophones ?',
    answer: 'Genève, Jura, Neuchâtel, Vaud',
    isMultipleAnswer: true,
    isMultipleChoice: true,
    options: ['Berne', 'Fribourg', 'Genève', 'Jura', 'Neuchâtel', 'Valais', 'Vaud']
  },
  {
    id: 191,
    category: 'géographie',
    type: 'national',
    question: 'Quelle est la montagne la plus haute entièrement en Suisse romande ?',
    answer: 'Grand-Combin',
    isMultipleChoice: true,
    options: ['Cervin', 'Dent Blanche', 'Grand-Combin', 'Pointe Dufour', 'Zinalrothorn']
  },
  {
    id: 192,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le seul endroit du canton de Fribourg à n\'appartenir à aucune commune ?',
    answer: 'La forêt domaniale du Galm',
    isMultipleChoice: true,
    options: ['La cathédrale de St-Nicolas de Fribourg', 'La forêt domaniale du Galm', 'Le château de Morat', 'Le sommet du Moléson', 'Les territoires enclavés dans le canton de Vaud']
  },
  {
    id: 193,
    category: 'géographie',
    type: 'national',
    question: 'Dans quel canton la ville de Moutier se situe-t-elle (jusqu\'en 2026) ?',
    answer: 'Berne',
    isMultipleChoice: true,
    options: ['Berne', 'Uri', 'Jura', 'Vaud']
  },
  {
    id: 194,
    category: 'géographie',
    type: 'national',
    question: 'Quel est le plus haut barrage de Suisse ?',
    answer: 'Barrage de la Grande-Dixence',
    isMultipleChoice: true,
    options: ['Barrage de la Grande-Dixence', 'Barrage de Mauvoisin', 'Barrage de Tseuzier', 'Barrage des Trois-Gorges', 'Barrage du Léman']
  },

  // ==========================================
  // GÉOGRAPHIE - QUESTIONS CANTONALES (9)
  // ==========================================
  {
    id: 35,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel est le chef-lieu du canton de Neuchâtel ?',
    answer: 'Neuchâtel'
  },
  {
    id: 36,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quels cantons n\'ont pas de frontière terrestre avec le canton de Neuchâtel ?',
    answer: 'Soleure, Fribourg, Obwald, Aarau',
    isMultipleAnswer: true,
    isMultipleChoice: true,
    options: ['Soleure', 'Berne', 'Obwald', 'Fribourg', 'Aarau']
  },
  {
    id: 37,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel célèbre cirque rocheux se trouve dans le Val-de-Travers ?',
    answer: 'Le Creux-du-Van'
  },
  {
    id: 38,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel est le nom du tunnel autoroutier reliant Neuchâtel à La Chaux-de-Fonds ?',
    answer: 'Le tunnel de la Vue-des-Alpes'
  },
  {
    id: 39,
    category: 'géographie',
    type: 'cantonal',
    question: 'Le canton de Neuchâtel est composé de quatre régions, citez ces quatre régions.',
    answer: 'Littoral, Montagnes, Val-de-Ruz, Val-de-Travers',
    isMultipleAnswer: true
  },
  {
    id: 40,
    category: 'géographie',
    type: 'cantonal',
    question: 'Le canton de Neuchâtel est-il pourvu d\'un aéroport régional ? Si oui, lequel ?',
    answer: 'Oui, l\'aéroport des Éplatures'
  },
  {
    id: 41,
    category: 'géographie',
    type: 'cantonal',
    question: 'Les lacs de Neuchâtel, de Bienne et de Morat se trouvent dans quelle région ?',
    answer: 'La région des Trois-Lacs'
  },
  {
    id: 42,
    category: 'géographie',
    type: 'cantonal',
    question: 'À quels lacs le lac de Neuchâtel est-il relié ?',
    answer: 'Au lac de Bienne et au lac de Morat',
    isMultipleAnswer: true
  },
  {
    id: 43,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel pays de l\'Union européenne a une frontière terrestre avec le canton de Neuchâtel ?',
    answer: 'La France'
  },
  {
    id: 195,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quelle rivière forme le lac des Brenets ?',
    answer: 'Le Doubs',
    isMultipleChoice: true,
    options: ['L\'Areuse', 'L\'Orbe', 'La Broye', 'La Sarine', 'Le Doubs']
  },
  {
    id: 196,
    category: 'géographie',
    type: 'cantonal',
    question: 'À côté de quel lac se trouve le Saut du Doubs ?',
    answer: 'Lac des Brenets',
    isMultipleChoice: true,
    options: ['Lac Brenet', 'Lac de Joux', 'Lac de Neuchâtel', 'Lac des Brenets', 'Lac Ter']
  },
  {
    id: 197,
    category: 'géographie',
    type: 'cantonal',
    question: 'Quel est le plus grand lac de Suisse ?',
    answer: 'Lac Léman',
    isMultipleChoice: true,
    options: ['Lac Léman', 'Lac de Zürich', 'Lac de Neuchâtel', 'Lac des Quatre-Cantons']
  },

  // ==========================================
  // HISTOIRE - QUESTIONS NATIONALES (28)
  // ==========================================
  {
    id: 44,
    category: 'histoire',
    type: 'national',
    question: 'Quel jour la Suisse célèbre-t-elle sa fête nationale ?',
    answer: 'Le 1er août'
  },
  {
    id: 45,
    category: 'histoire',
    type: 'national',
    question: 'Dans quelle ville se trouve le Palais fédéral ?',
    answer: 'Berne'
  },
  {
    id: 46,
    category: 'histoire',
    type: 'national',
    question: 'Quel est le personnage de légende qui a contribué au mythe fondateur de la Suisse avec une arbalète et une pomme ?',
    answer: 'Guillaume Tell'
  },
  {
    id: 47,
    category: 'histoire',
    type: 'national',
    question: 'En quelle année la bataille de Marignan eut-elle lieu ?',
    answer: '1515'
  },
  {
    id: 48,
    category: 'histoire',
    type: 'national',
    question: 'Que s\'est-il passé en 1848 ?',
    answer: 'La Suisse devient un État fédéral, se dote d\'une Constitution et d\'un Parlement de deux chambres',
    isMultipleAnswer: true
  },
  {
    id: 49,
    category: 'histoire',
    type: 'national',
    question: 'Dans quelle légende suisse symbolisant l\'esprit de la neutralité helvétique fait-on mention d\'une « soupe » ?',
    answer: 'La soupe au lait de Kappel'
  },
  {
    id: 50,
    category: 'histoire',
    type: 'national',
    question: 'En quelle année la Suisse devient-elle un État fédéral ?',
    answer: '1848'
  },
  {
    id: 51,
    category: 'histoire',
    type: 'national',
    question: 'Par quels cantons a été signé le plus ancien pacte de la Confédération en 1291 ?',
    answer: 'Uri, Schwytz, Unterwald',
    isMultipleAnswer: true,
    isMultipleChoice: true,
    options: ['Vaud-Genève-Neuchâtel', 'Bâle-Soleure-Argovie', 'Uri-Schwytz-Unterwald', 'Uri-Grisons-Glaris']
  },
  {
    id: 52,
    category: 'histoire',
    type: 'national',
    question: 'Quelle est la date souvent considérée comme celle de la naissance de la Suisse ?',
    answer: '1291',
    isMultipleChoice: true,
    options: ['1296', '1291', '1294', '1390']
  },
  {
    id: 53,
    category: 'histoire',
    type: 'national',
    question: 'Selon la tradition, où les premiers Confédérés ont-ils prêté serment ?',
    answer: 'Sur la prairie du Grütli'
  },
  {
    id: 54,
    category: 'histoire',
    type: 'national',
    question: 'La Suisse possède une marine marchande. Vrai ou Faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 55,
    category: 'histoire',
    type: 'national',
    question: 'Du drapeau de quel canton s\'inspire le drapeau suisse ?',
    answer: 'Schwytz',
    isMultipleChoice: true,
    options: ['Neuchâtel', 'Grisons', 'Schwytz', 'Genève']
  },
  {
    id: 56,
    category: 'histoire',
    type: 'national',
    question: 'Quelle guerre civile a favorisé la création de la Suisse moderne ?',
    answer: 'La guerre du Sonderbund',
    isMultipleChoice: true,
    options: ['la bataille de Sempach', 'la guerre de Cent Ans', 'la guerre du Sonderbund', 'la guerre de Sécession']
  },
  {
    id: 57,
    category: 'histoire',
    type: 'national',
    question: 'De quelle année date la première Constitution fédérale ?',
    answer: '1848',
    isMultipleChoice: true,
    options: ['1291', '1515', '1848', '1874']
  },
  {
    id: 58,
    category: 'histoire',
    type: 'national',
    question: 'Quelle est la devise de la Confédération suisse ?',
    answer: 'Un pour tous, tous pour un'
  },
  {
    id: 59,
    category: 'histoire',
    type: 'national',
    question: 'Que fête-t-on le 1er août ?',
    answer: 'Le pacte fédéral de Uri, Schwytz et Unterwald',
    isMultipleChoice: true,
    options: ['L\'alliance des 26 cantons', 'L\'accord entre les 7 cantons romands', 'Le pacte fédéral de Uri, Schwytz et Unterwald']
  },
  {
    id: 60,
    category: 'histoire',
    type: 'national',
    question: 'Qu\'est-ce que la Landsgemeinde ?',
    answer: 'Une assemblée pendant laquelle on vote à main levée',
    isMultipleChoice: true,
    options: ['une assemblée pendant laquelle on vote à main levée', 'un plat suisse typique', 'une danse', 'une bataille']
  },
  {
    id: 61,
    category: 'histoire',
    type: 'national',
    question: 'Qui est considéré comme étant le fondateur de la Croix-Rouge ?',
    answer: 'Henry Dunant'
  },
  {
    id: 62,
    category: 'histoire',
    type: 'national',
    question: 'Quel a été le statut de la Suisse durant la Première et la Seconde Guerre mondiale ?',
    answer: 'La Suisse est restée neutre',
    isMultipleChoice: true,
    options: ['Elle est restée neutre', 'Elle a combattu aux côtés de la France et du Royaume-Uni', 'Elle a combattu aux côtés des États-Unis', 'Elle a combattu aux côtés de l\'Allemagne']
  },
  {
    id: 63,
    category: 'histoire',
    type: 'national',
    question: 'À quel moment les femmes suisses ont-elles obtenu le droit de vote au niveau fédéral ?',
    answer: 'Années 70 (1971)',
    isMultipleChoice: true,
    options: ['années 60', 'années 70', 'années 50', 'années 80']
  },
  {
    id: 64,
    category: 'histoire',
    type: 'national',
    question: 'Quel canton a été le dernier canton à entrer dans la Confédération suisse ?',
    answer: 'Le canton du Jura'
  },
  {
    id: 65,
    category: 'histoire',
    type: 'national',
    question: 'Quand la Suisse est-elle entrée à l\'ONU ?',
    answer: '2002',
    isMultipleChoice: true,
    options: ['2002', '1989', '1945', '1920']
  },
  {
    id: 66,
    category: 'histoire',
    type: 'national',
    question: 'La Suisse a connu de grands changements au 16ème siècle, pourquoi ?',
    answer: 'Début de la réforme protestante, défaite de Marignan, début de la neutralité',
    isMultipleAnswer: true
  },
  {
    id: 67,
    category: 'histoire',
    type: 'national',
    question: 'Que s\'est-il passé après la guerre du Sonderbund en 1847 ?',
    answer: 'Défaite des cantons catholiques et création de l\'État fédéral avec une nouvelle Constitution',
    isMultipleAnswer: true
  },
  {
    id: 68,
    category: 'histoire',
    type: 'national',
    question: 'En quelle année le Tunnel du Gothard fut-il achevé ?',
    answer: '1980'
  },
  {
    id: 69,
    category: 'histoire',
    type: 'national',
    question: 'Quel pont célèbre du canton de Lucerne a été détruit lors d\'un incendie le 18 août 1993 ?',
    answer: 'Le Kapellbrücke (pont de Lucerne)'
  },
  {
    id: 198,
    category: 'histoire',
    type: 'national',
    question: 'Dans quelle entité se trouvait la Suisse au Moyen-Âge ?',
    answer: 'Le Saint-Empire romain germanique',
    isMultipleChoice: true,
    options: ['L\'Empire romain d\'Occident', 'L\'Empire romain d\'Orient', 'Le Royaume de France', 'Le Royaume de Sardaigne', 'Le Saint-Empire romain germanique']
  },
  {
    id: 199,
    category: 'histoire',
    type: 'national',
    question: 'Quels cantons faisaient partie de la Confédération en 1810 ?',
    answer: 'Fribourg, Vaud',
    isMultipleAnswer: true,
    isMultipleChoice: true,
    options: ['Fribourg', 'Genève', 'Neuchâtel', 'Vaud']
  },

  // ==========================================
  // HISTOIRE - QUESTIONS CANTONALES (10)
  // ==========================================
  {
    id: 70,
    category: 'histoire',
    type: 'cantonal',
    question: 'À quel moment les femmes ont-elles obtenu le droit de vote à Neuchâtel ?',
    answer: '1959 (années 50)',
    isMultipleChoice: true,
    options: ['années 30', 'années 70', 'années 50', 'années 80']
  },
  {
    id: 71,
    category: 'histoire',
    type: 'cantonal',
    question: 'En quelle année le canton de Neuchâtel est-il entré dans la Confédération suisse ?',
    answer: '1814 (12 septembre 1814)'
  },
  {
    id: 72,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui est Tilo Frey ?',
    answer: 'Une femme politique suisso-camérounaise, première neuchâteloise élue au Parlement fédéral'
  },
  {
    id: 73,
    category: 'histoire',
    type: 'cantonal',
    question: 'En quelle année la Constitution de la République et Canton de Neuchâtel a-t-elle été révisée pour la dernière fois ?',
    answer: '2000 (24 septembre 2000)'
  },
  {
    id: 74,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui a introduit la Réforme protestante dans le canton de Neuchâtel ?',
    answer: 'Guillaume Farel'
  },
  {
    id: 75,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui est David de Pury et que représente-t-il pour la ville de Neuchâtel ?',
    answer: 'Un négociant et financier qui a légué sa fortune à Neuchâtel, lié au commerce des diamants et à la traite négrière'
  },
  {
    id: 76,
    category: 'histoire',
    type: 'cantonal',
    question: 'Quelle est la date de l\'indépendance neuchâteloise ?',
    answer: '1er mars 1848'
  },
  {
    id: 77,
    category: 'histoire',
    type: 'cantonal',
    question: 'Quel épisode tragique marque la première grande action de la Croix-Rouge suisse ?',
    answer: 'L\'arrivée aux Verrières des troupes françaises du général Bourbaki, le 1er février 1871'
  },
  {
    id: 78,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui sont les « Huguenots » ?',
    answer: 'Les réfugié-e-s protestant-e-s français-e-s qui se sont réfugié-e-s dans le canton de Neuchâtel aux XVI et XVIIe siècles'
  },
  {
    id: 79,
    category: 'histoire',
    type: 'cantonal',
    question: 'Qui est Philippe Suchard et quel célèbre bonbon a été créé par sa fabrique ?',
    answer: 'Un confiseur suisse fondateur des chocolats Suchard. Le Sugus a été créé en 1931'
  },
  {
    id: 200,
    category: 'histoire',
    type: 'cantonal',
    question: 'Quelle particularité historique a le canton de Neuchâtel dans la Confédération suisse ?',
    answer: 'Il a été le dernier à devenir canton suisse et a été une principauté prussienne jusqu\'en 1848'
  },

  // ==========================================
  // POLITIQUE - QUESTIONS NATIONALES (35)
  // ==========================================
  {
    id: 80,
    category: 'politique',
    type: 'national',
    question: 'Pour quelle raison Elisabeth Kopp est-elle connue ?',
    answer: 'Être la première femme à avoir été élue au Conseil Fédéral',
    isMultipleChoice: true,
    options: ['être la première femme à avoir été élue au Conseil Fédéral', 'la première femme à avoir fait l\'armée en Suisse', 'la première femme à avoir demandé et obtenu le divorce en Suisse']
  },
  {
    id: 81,
    category: 'politique',
    type: 'national',
    question: 'De quelle association la Suisse fait-elle partie avec la Norvège, l\'Islande et le Liechtenstein ?',
    answer: 'L\'Association européenne de libre-échange (AELE)'
  },
  {
    id: 82,
    category: 'politique',
    type: 'national',
    question: 'Dans quel canton le droit de vote des femmes a-t-il été imposé par décret du Tribunal fédéral ?',
    answer: 'Le canton d\'Appenzell Rhodes-Intérieures'
  },
  {
    id: 83,
    category: 'politique',
    type: 'national',
    question: 'Quel type d\'accords la Suisse a-t-elle conclus avec l\'UE ?',
    answer: 'Des accords bilatéraux',
    isMultipleChoice: true,
    options: ['accords bilatéraux', 'accords institutionnels', 'accords militaires', 'accords multilatéraux']
  },
  {
    id: 84,
    category: 'politique',
    type: 'national',
    question: 'Quel fut le dernier canton suisse à introduire en 1991 le suffrage féminin ?',
    answer: 'Le canton d\'Appenzell Rhodes-Intérieures'
  },
  {
    id: 85,
    category: 'politique',
    type: 'national',
    question: 'Quel est le nom du/de la président-e actuel-le de la Confédération (2025) ?',
    answer: 'Karin Keller-Sutter'
  },
  {
    id: 86,
    category: 'politique',
    type: 'national',
    question: 'Comment se nomment les chambres qui composent le Parlement suisse ?',
    answer: 'Le Conseil des États (conseillers-ères aux États) et le Conseil national (conseillers-ères nationaux-ales)',
    isMultipleAnswer: true
  },
  {
    id: 87,
    category: 'politique',
    type: 'national',
    question: 'Pouvez-vous nommer quatre conseiller-ère-s fédérales-aux ?',
    answer: 'Viola Amherd, Beat Jans, Albert Rösti, Karin Keller-Sutter, Ignazio Cassis, Elisabeth Baume-Schneider, Guy Parmelin',
    isMultipleAnswer: true
  },
  {
    id: 88,
    category: 'politique',
    type: 'national',
    question: 'Citez quatre partis politiques suisses.',
    answer: 'UDC, PS, PLR, PDC, les Verts, les Vert\'libéraux',
    isMultipleAnswer: true
  },
  {
    id: 89,
    category: 'politique',
    type: 'national',
    question: 'En Suisse, le droit de vote au niveau cantonal est le même partout. Vrai ou Faux ?',
    answer: 'Faux',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 90,
    category: 'politique',
    type: 'national',
    question: 'Qu\'est-ce qu\'une initiative ?',
    answer: 'Une initiative populaire visant à modifier la Constitution en récoltant 100\'000 signatures en 18 mois'
  },
  {
    id: 91,
    category: 'politique',
    type: 'national',
    question: 'Dans quel(s) canton(s) la Landsgemeinde subsiste-t-elle toujours ?',
    answer: 'Glaris et Appenzell Rhodes-Intérieures',
    isMultipleAnswer: true
  },
  {
    id: 92,
    category: 'politique',
    type: 'national',
    question: 'Quelle femme jurassienne a été élue au Conseil fédéral le 7 décembre 2022 ?',
    answer: 'Elisabeth Baume-Schneider'
  },
  {
    id: 93,
    category: 'politique',
    type: 'national',
    question: 'De quelle année date l\'hymne national suisse ?',
    answer: '1981'
  },
  {
    id: 94,
    category: 'politique',
    type: 'national',
    question: 'La Suisse est-elle membre de l\'Union européenne ?',
    answer: 'Non'
  },
  {
    id: 95,
    category: 'politique',
    type: 'national',
    question: 'Au Parlement, qu\'appelle-t-on la Chambre haute ?',
    answer: 'Le Conseil des États'
  },
  {
    id: 96,
    category: 'politique',
    type: 'national',
    question: 'Pour combien de temps le/la Président-e de la Confédération est-il/elle élu-e ?',
    answer: 'Pour une année'
  },
  {
    id: 97,
    category: 'politique',
    type: 'national',
    question: 'Quelle chambre du Parlement fédéral représente le peuple ?',
    answer: 'Le Conseil national',
    isMultipleChoice: true,
    options: ['le Conseil national', 'le Conseil des États', 'le Conseil fédéral', 'le Grand Conseil']
  },
  {
    id: 98,
    category: 'politique',
    type: 'national',
    question: 'Quel terme fait partie de la politique de paix de la Suisse ?',
    answer: 'Les bons offices',
    isMultipleChoice: true,
    options: ['La neutralité carbone', 'Les bons offices', 'La neutralité fiscale']
  },
  {
    id: 99,
    category: 'politique',
    type: 'national',
    question: 'Dans quel texte de loi suisse trouve-t-on les droits fondamentaux ?',
    answer: 'La Constitution fédérale',
    isMultipleChoice: true,
    options: ['le Code de procédure pénal', 'la Constitution fédérale', 'le code civil']
  },
  {
    id: 100,
    category: 'politique',
    type: 'national',
    question: 'Qui est chargé d\'élire les membres du Tribunal fédéral ?',
    answer: 'L\'Assemblée fédérale',
    isMultipleChoice: true,
    options: ['le Conseil fédéral', 'l\'Assemblée fédérale', 'le peuple et les cantons', 'les communes']
  },
  {
    id: 101,
    category: 'politique',
    type: 'national',
    question: 'Quels demi-cantons composent le canton d\'Unterwald ?',
    answer: 'Obwald et Nidwald',
    isMultipleAnswer: true
  },
  {
    id: 102,
    category: 'politique',
    type: 'national',
    question: 'La Confédération suisse est-elle membre du Conseil de l\'Europe ?',
    answer: 'Oui',
    isMultipleChoice: true,
    options: ['Oui', 'Non']
  },
  {
    id: 103,
    category: 'politique',
    type: 'national',
    question: 'En vertu du droit de la neutralité, la Suisse ne peut participer à une guerre. Vrai ou Faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 104,
    category: 'politique',
    type: 'national',
    question: 'La Suisse autorise-t-elle la double nationalité ?',
    answer: 'Oui, depuis le 1er janvier 1992'
  },
  {
    id: 105,
    category: 'politique',
    type: 'national',
    question: 'En Suisse, qui élit le Conseil fédéral ?',
    answer: 'Le Conseil national et le Conseil des États',
    isMultipleChoice: true,
    options: ['le conseil d\'État', 'le peuple', 'le Conseil national et le Conseil des États', 'les cantons']
  },
  {
    id: 106,
    category: 'politique',
    type: 'national',
    question: 'La neutralité suisse, c\'est la décision de ne pas prendre parti dans les conflits ?',
    answer: 'La décision de ne pas prendre parti dans les conflits',
    isMultipleChoice: true,
    options: ['la décision de ne pas prendre parti dans les conflits', 'la décision de ne pas vendre d\'armes', 'la décision de ne pas accepter d\'argent des dictateurs']
  },
  {
    id: 107,
    category: 'politique',
    type: 'national',
    question: 'Quels sont les 3 niveaux d\'autorité de la Suisse ?',
    answer: 'Fédéral, cantonal et communal',
    isMultipleAnswer: true
  },
  {
    id: 108,
    category: 'politique',
    type: 'national',
    question: 'Quel est le nom du gouvernement suisse ?',
    answer: 'Le Conseil fédéral'
  },
  {
    id: 109,
    category: 'politique',
    type: 'national',
    question: 'Quel est le nom de la chambre législative représentant les cantons composée de 46 membres ?',
    answer: 'Le Conseil des États'
  },
  {
    id: 110,
    category: 'politique',
    type: 'national',
    question: 'Quel est l\'autre nom donné à l\'hymne national suisse ?',
    answer: 'Le Cantique suisse'
  },
  {
    id: 111,
    category: 'politique',
    type: 'national',
    question: 'En quelle année la Suisse a-t-elle intégré l\'ONU ?',
    answer: '2002'
  },
  {
    id: 201,
    category: 'politique',
    type: 'national',
    question: 'Citez une votation (fédérale) sur laquelle le peuple suisse s\'est prononcé ou va se prononcer.',
    answer: 'Initiative pour un frein aux coûts, initiative biodiversité, réforme AVS 21, votations sur l\'énergie',
    isMultipleAnswer: true
  },

  // ==========================================
  // POLITIQUE - QUESTIONS CANTONALES (17)
  // ==========================================
  {
    id: 112,
    category: 'politique',
    type: 'cantonal',
    question: 'Quels sont les quatre principes fondamentaux de la République et canton de Neuchâtel ?',
    answer: 'Démocratique, laïque, sociale et garante des droits fondamentaux',
    isMultipleAnswer: true
  },
  {
    id: 113,
    category: 'politique',
    type: 'cantonal',
    question: 'Comment se nomme l\'État-major qui assiste le Conseil d\'État ?',
    answer: 'La chancellerie d\'État'
  },
  {
    id: 114,
    category: 'politique',
    type: 'cantonal',
    question: 'Quel est le nom du/de la Président-e du Conseil d\'État de Neuchâtel (depuis le 1er juin 2024) ?',
    answer: 'Florence Nater',
    isMultipleChoice: true,
    options: ['Laurent Favre', 'Frédéric Mairy', 'Florence Nater', 'Crystel Graf', 'Céline Vara']
  },
  {
    id: 115,
    category: 'politique',
    type: 'cantonal',
    question: 'En quelle année le drapeau du canton de Neuchâtel a-t-il été créé ?',
    answer: '1848'
  },
  {
    id: 116,
    category: 'politique',
    type: 'cantonal',
    question: 'Qui représente le pouvoir législatif au niveau cantonal ?',
    answer: 'Le Grand Conseil',
    isMultipleChoice: true,
    options: ['le Parlement fédéral', 'le Conseil d\'État', 'le Grand Conseil']
  },
  {
    id: 117,
    category: 'politique',
    type: 'cantonal',
    question: 'Avec quelle commune italienne la ville de Neuchâtel est-elle jumelée ?',
    answer: 'Sansepolcro, en Toscane'
  },
  {
    id: 118,
    category: 'politique',
    type: 'cantonal',
    question: 'Qui élit le Conseil d\'État neuchâtelois ?',
    answer: 'Le peuple',
    isMultipleChoice: true,
    options: ['la municipalité', 'le peuple', 'le Grand Conseil', 'le Conseil fédéral']
  },
  {
    id: 119,
    category: 'politique',
    type: 'cantonal',
    question: 'Pour combien d\'années est élu le Conseil d\'État ?',
    answer: '4 ans',
    isMultipleChoice: true,
    options: ['1 an', '2 ans', '4 ans', '10 ans']
  },
  {
    id: 120,
    category: 'politique',
    type: 'cantonal',
    question: 'De quel réseau international du Conseil de l\'Europe le canton de Neuchâtel est-il membre fondateur ?',
    answer: 'Le réseau international des Cités interculturelles'
  },
  {
    id: 121,
    category: 'politique',
    type: 'cantonal',
    question: 'Combien de membres composent le Grand Conseil neuchâtelois ?',
    answer: '100',
    isMultipleChoice: true,
    options: ['250', '350', '100', '27']
  },
  {
    id: 122,
    category: 'politique',
    type: 'cantonal',
    question: 'Complétez l\'article 1 de la Constitution neuchâteloise : Le canton de Neuchâtel est une République...',
    answer: 'Démocratique, laïque, sociale et garante des droits fondamentaux'
  },
  {
    id: 123,
    category: 'politique',
    type: 'cantonal',
    question: 'Combien y a-t-il de départements au Conseil d\'État neuchâtelois ?',
    answer: '5'
  },
  {
    id: 124,
    category: 'politique',
    type: 'cantonal',
    question: 'Comment se nomme l\'organe de surveillance financière de l\'État de Neuchâtel ?',
    answer: 'Le Contrôle cantonal des finances (CCFI)'
  },
  {
    id: 125,
    category: 'politique',
    type: 'cantonal',
    question: 'Où se trouvent les salles dans lesquelles se déroulent les sessions du Grand Conseil ?',
    answer: 'Au château de Neuchâtel'
  },
  {
    id: 126,
    category: 'politique',
    type: 'cantonal',
    question: 'Dans le canton de Neuchâtel, les personnes étrangères avec permis C peuvent-elles voter et être élues ?',
    answer: 'Oui les deux au niveau communal. Elles peuvent voter au niveau cantonal mais ne sont pas éligibles'
  },
  {
    id: 127,
    category: 'politique',
    type: 'cantonal',
    question: 'Le canton de Neuchâtel est laïc. Qu\'est-ce que cela signifie ?',
    answer: 'Il n\'a pas de religion d\'État, garantit la liberté de religion et sépare l\'État des institutions religieuses'
  },
  {
    id: 128,
    category: 'politique',
    type: 'cantonal',
    question: 'Qui représente le pouvoir exécutif au niveau cantonal ?',
    answer: 'Le Conseil d\'État',
    isMultipleChoice: true,
    options: ['le Parlement fédéral', 'le Conseil d\'État', 'le Grand Conseil']
  },

  // ==========================================
  // SOCIAL - QUESTIONS NATIONALES (32)
  // ==========================================
  {
    id: 129,
    category: 'social',
    type: 'national',
    question: 'Quelle célèbre entreprise suisse fabrique des objets de papeterie (stylos, crayons, feutres) ?',
    answer: 'Caran d\'Ache'
  },
  {
    id: 130,
    category: 'social',
    type: 'national',
    question: 'Quel lieu d\'origine acquerrez-vous avec la naturalisation ordinaire ?',
    answer: 'Le lieu de votre commune de résidence ou la dernière commune où vous avez résidé durant plus de 2 ans'
  },
  {
    id: 131,
    category: 'social',
    type: 'national',
    question: 'Qu\'est-ce que la barrière de Rösti ou « Röstigraben » ?',
    answer: 'Les différences de mentalité entre la Suisse romande et la Suisse alémanique',
    isMultipleChoice: true,
    options: ['un plat typiquement suisse', 'l\'autre nom donné à la frontière entre la Suisse et l\'Allemagne', 'les différences de mentalité entre la Suisse romande et la Suisse alémanique', 'un quartier de la ville de Berne']
  },
  {
    id: 132,
    category: 'social',
    type: 'national',
    question: 'Quel est l\'indicatif téléphonique de la Suisse ?',
    answer: '+41 ou 0041'
  },
  {
    id: 133,
    category: 'social',
    type: 'national',
    question: 'Quel droit pourrez-vous exercer en devenant Suisse que vous ne pouvez pas exercer aujourd\'hui ?',
    answer: 'Droit de vote au niveau fédéral et droit d\'éligibilité au niveau cantonal dans le canton de Neuchâtel'
  },
  {
    id: 134,
    category: 'social',
    type: 'national',
    question: 'Comment se nomme l\'entreprise publique chargée de frapper la monnaie suisse ?',
    answer: 'Swissmint'
  },
  {
    id: 135,
    category: 'social',
    type: 'national',
    question: 'Quelle est la langue la plus parlée en Suisse ?',
    answer: 'L\'allemand'
  },
  {
    id: 136,
    category: 'social',
    type: 'national',
    question: 'Quel célèbre joueur de tennis suisse est né à Bâle ?',
    answer: 'Roger Federer'
  },
  {
    id: 137,
    category: 'social',
    type: 'national',
    question: 'Quel type de produits la société suisse Logitech produit-elle ?',
    answer: 'Des périphériques informatiques'
  },
  {
    id: 138,
    category: 'social',
    type: 'national',
    question: 'Quelle enseigne de la grande distribution ne vend pas d\'alcool ?',
    answer: 'Migros',
    isMultipleChoice: true,
    options: ['Manor Food', 'Otto\'s', 'Migros', 'Lidl']
  },
  {
    id: 139,
    category: 'social',
    type: 'national',
    question: 'Quel État autre que la Suisse utilise le franc suisse comme monnaie officielle ?',
    answer: 'Le Liechtenstein'
  },
  {
    id: 140,
    category: 'social',
    type: 'national',
    question: 'De quelle origine était Henri Nestlé ?',
    answer: 'D\'origine allemande'
  },
  {
    id: 141,
    category: 'social',
    type: 'national',
    question: 'Comment s\'appelle la compagnie aérienne nationale de la Suisse ?',
    answer: 'Swiss'
  },
  {
    id: 142,
    category: 'social',
    type: 'national',
    question: 'Quelle athlète suisse remporta le marathon de New York en 1997 ?',
    answer: 'Franziska Rochat-Moser'
  },
  {
    id: 143,
    category: 'social',
    type: 'national',
    question: 'Quel nom donne-t-on à la principale compagnie ferroviaire de la Suisse ?',
    answer: 'Les Chemins de fer fédéraux suisses (CFF)'
  },
  {
    id: 144,
    category: 'social',
    type: 'national',
    question: 'Qu\'est-ce que Art Basel ?',
    answer: 'La foire d\'art contemporain'
  },
  {
    id: 145,
    category: 'social',
    type: 'national',
    question: 'Dans quelle loi trouve-t-on le droit d\'obtenir de l\'aide dans des situations de détresse ?',
    answer: 'Dans la Constitution fédérale, article 12',
    isMultipleChoice: true,
    options: ['le Code civil suisse', 'le Code des obligations', 'le Code de procédure civile', 'la Constitution fédérale']
  },
  {
    id: 146,
    category: 'social',
    type: 'national',
    question: 'Pour quel art Alberto Giacometti est-il plus connu ?',
    answer: 'Pour la sculpture'
  },
  {
    id: 147,
    category: 'social',
    type: 'national',
    question: 'Le 9 décembre 1998, qui est la première femme à devenir présidente de la Confédération ?',
    answer: 'Mme Ruth Dreifuss'
  },
  {
    id: 148,
    category: 'social',
    type: 'national',
    question: 'Quelle ville accueille annuellement un festival de jazz mondialement connu (mis à part Cully) ?',
    answer: 'Montreux'
  },
  {
    id: 149,
    category: 'social',
    type: 'national',
    question: 'Comment se nomme l\'organisation chargée de maintenir les liens avec les Suisses de l\'étranger ?',
    answer: 'L\'Organisation des Suisses de l\'étranger (OSE)'
  },
  {
    id: 150,
    category: 'social',
    type: 'national',
    question: 'Quelle femme de lettres suisse alémanique a créé le personnage de « Heidi » ?',
    answer: 'Johanna Spyri'
  },
  {
    id: 151,
    category: 'social',
    type: 'national',
    question: 'Comment se nomme le principal cirque suisse ?',
    answer: 'Le Cirque National Suisse Knie ou cirque Knie'
  },
  {
    id: 152,
    category: 'social',
    type: 'national',
    question: 'Quelle femme a été l\'une des actrices principales du combat pour le droit de vote des femmes ?',
    answer: 'Marthe Gosteli',
    isMultipleChoice: true,
    options: ['Christiane Brunner', 'Micheline Calmy-Rey', 'Elisabeth Kopp', 'Marthe Gosteli']
  },
  {
    id: 153,
    category: 'social',
    type: 'national',
    question: 'Le drapeau suisse est carré. Un seul autre État possède un drapeau carré, lequel ?',
    answer: 'L\'État de la Cité du Vatican ou le Vatican'
  },
  {
    id: 154,
    category: 'social',
    type: 'national',
    question: 'Quel est le nom du service de remplacement au service militaire ?',
    answer: 'Le service civil'
  },
  {
    id: 155,
    category: 'social',
    type: 'national',
    question: 'Dans quelle ville suisse se trouve la « fosse aux ours » ?',
    answer: 'Berne',
    isMultipleChoice: true,
    options: ['Martigny', 'Zurich', 'Bâle', 'Berne']
  },
  {
    id: 156,
    category: 'social',
    type: 'national',
    question: 'Quelle femme née au Tessin est nommée procureure générale du Tribunal pénal international en 1999 ?',
    answer: 'Mme Carla Del Ponte'
  },
  {
    id: 157,
    category: 'social',
    type: 'national',
    question: 'Qui la Garde suisse pontificale protège-t-elle depuis 1506 ?',
    answer: 'Le Pape et le Vatican'
  },
  {
    id: 158,
    category: 'social',
    type: 'national',
    question: 'Que doit-on reconnaître lorsque des sirènes sonnent un mercredi à 13h ?',
    answer: 'Le test annuel des sirènes d\'alarme'
  },
  {
    id: 159,
    category: 'social',
    type: 'national',
    question: 'En Suisse, l\'aide sociale est du ressort de qui ?',
    answer: 'Des cantons',
    isMultipleChoice: true,
    options: ['de la Confédération', 'des communes', 'des cantons']
  },
  {
    id: 160,
    category: 'social',
    type: 'national',
    question: 'Une des richesses de la Suisse est son énergie hydraulique ?',
    answer: 'Son énergie hydraulique',
    isMultipleChoice: true,
    options: ['fossile', 'hydraulique', 'nucléaire']
  },
  {
    id: 161,
    category: 'social',
    type: 'national',
    question: 'Que signifie l\'abréviation CH ?',
    answer: 'Confédération helvétique'
  },
  {
    id: 202,
    category: 'social',
    type: 'national',
    question: 'Quelle est la langue principale parlée à Bâle ?',
    answer: 'Allemand',
    isMultipleChoice: true,
    options: ['Romanche', 'Français', 'Allemand']
  },
  {
    id: 203,
    category: 'social',
    type: 'national',
    question: 'Dans quelle ville trouve-t-on l\'une des universités de gestion les plus prestigieuses du monde ?',
    answer: 'Saint-Gall',
    isMultipleChoice: true,
    options: ['Saint-Gall', 'Morzine', 'Nyon', 'Kloten']
  },
  {
    id: 204,
    category: 'social',
    type: 'national',
    question: 'Quelle est la religion la plus pratiquée en Suisse romande après le catholicisme et le protestantisme ?',
    answer: 'L\'Islam',
    isMultipleChoice: true,
    options: ['L\'Hindouisme', 'L\'Islam', 'L\'Orthodoxie', 'Le Bouddhisme', 'Le Judaïsme']
  },
  {
    id: 205,
    category: 'social',
    type: 'national',
    question: 'En Suisse, le service civil fournit notamment un certain nombre de prestations en faveur de la collectivité. Vrai ou faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 206,
    category: 'social',
    type: 'national',
    question: 'Pourquoi l\'aéroport de Zurich figure-t-il régulièrement parmi les meilleurs aéroports d\'Europe ?',
    answer: 'Pour sa qualité de service, sa ponctualité et ses infrastructures modernes'
  },
  {
    id: 207,
    category: 'social',
    type: 'national',
    question: 'Quel est le premier fabricant mondial de montres ?',
    answer: 'Le groupe Swatch ou Rolex',
    isMultipleAnswer: true
  },

  // ==========================================
  // SOCIAL - QUESTIONS CANTONALES (27)
  // ==========================================
  {
    id: 162,
    category: 'social',
    type: 'cantonal',
    question: 'La République et canton de Neuchâtel possède une loi sur l\'intégration et la cohésion multiculturelle. Vrai ou faux ?',
    answer: 'Vrai (promulguée en 1996)',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 163,
    category: 'social',
    type: 'cantonal',
    question: 'Lesquelles de ces communes abritent un musée d\'horlogerie ?',
    answer: 'La Chaux-de-Fonds et Le Locle',
    isMultipleAnswer: true,
    isMultipleChoice: true,
    options: ['La Chaux-de-Fonds', 'Neuchâtel', 'le Val-de-Travers', 'Boudry', 'la Tène', 'Le Locle']
  },
  {
    id: 164,
    category: 'social',
    type: 'cantonal',
    question: 'Qu\'est-ce que la « Charte de la citoyenneté » ?',
    answer: 'Un ensemble de documents informatifs sur le canton expliquant les fondements, principes et valeurs de la République'
  },
  {
    id: 165,
    category: 'social',
    type: 'cantonal',
    question: 'Mentionnez 2 manifestations sportives qui se déroulent dans le canton.',
    answer: 'La Trotteuse, le tour du Canton, Resisprint, le Tournoi international d\'Unihockey, la Suisse bouge',
    isMultipleAnswer: true
  },
  {
    id: 166,
    category: 'social',
    type: 'cantonal',
    question: 'Comment se nomment les guichets pour le dépôt de demandes de prestations sociales ?',
    answer: 'Les Guichets Sociaux Régionaux (GSR)'
  },
  {
    id: 167,
    category: 'social',
    type: 'cantonal',
    question: 'Quel est le surnom du célèbre architecte chaux-de-fonnier Charles-Édouard Jeanneret-Gris ?',
    answer: 'Le Corbusier'
  },
  {
    id: 168,
    category: 'social',
    type: 'cantonal',
    question: 'Quel service est chargé de coordonner la politique d\'intégration interculturelle ?',
    answer: 'Le service de la cohésion multiculturelle (COSM)'
  },
  {
    id: 169,
    category: 'social',
    type: 'cantonal',
    question: 'Qu\'est-ce qui est remis lors de l\'inscription au Contrôle des habitant-e-s ?',
    answer: 'La Charte de la citoyenneté',
    isMultipleChoice: true,
    options: ['La Constitution de la République et Canton de Neuchâtel', 'un verre à absinthe Kübler', 'la Charte de la citoyenneté', 'une fée verte']
  },
  {
    id: 170,
    category: 'social',
    type: 'cantonal',
    question: 'Comment s\'appelle le Musée archéologique du canton de Neuchâtel ?',
    answer: 'Le Laténium'
  },
  {
    id: 171,
    category: 'social',
    type: 'cantonal',
    question: 'Quel est le plus grand événement festif annuel dans le canton de Neuchâtel ?',
    answer: 'La Fête des vendanges'
  },
  {
    id: 172,
    category: 'social',
    type: 'cantonal',
    question: 'Des soirées d\'accueil pour les personnes nouvellement arrivées sont organisées. Vrai ou Faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 173,
    category: 'social',
    type: 'cantonal',
    question: 'Pourquoi La Chaux-de-Fonds et Le Locle sont-elles classées au patrimoine mondial de l\'UNESCO ?',
    answer: 'Du fait de l\'urbanisme horloger'
  },
  {
    id: 174,
    category: 'social',
    type: 'cantonal',
    question: 'Le service de la cohésion multiculturelle (COSM) est un service étatique. Vrai ou Faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 175,
    category: 'social',
    type: 'cantonal',
    question: 'Quel sport est pratiqué lors du BCN Tour et qui peut y participer ?',
    answer: 'La course à pied. Tout le monde peut y participer'
  },
  {
    id: 176,
    category: 'social',
    type: 'cantonal',
    question: 'Nommez un exemple de prestation sociale fournie dans le canton.',
    answer: 'L\'aide au recouvrement, les subsides LAMal, les prêts et bourses d\'études, l\'aide sociale',
    isMultipleAnswer: true
  },
  {
    id: 177,
    category: 'social',
    type: 'cantonal',
    question: 'Citez le nom d\'un festival qui se déroule dans le canton au cours de l\'année.',
    answer: 'Festi\'Neuch, NIFFF, Plage des Six Pompes, Corbak Festival, Rock Altitude, Les Buskers',
    isMultipleAnswer: true
  },
  {
    id: 178,
    category: 'social',
    type: 'cantonal',
    question: 'Comment s\'appelle le réseau de transports publics dans le canton de Neuchâtel ?',
    answer: 'TransN'
  },
  {
    id: 179,
    category: 'social',
    type: 'cantonal',
    question: 'De quoi le service de la cohésion multiculturelle (COSM) s\'occupe-t-il ?',
    answer: 'Intégration des étrangers, lutte contre le racisme et les discriminations, promotion du vivre ensemble, interprétariat, naturalisation',
    isMultipleAnswer: true
  },
  {
    id: 180,
    category: 'social',
    type: 'cantonal',
    question: 'À quel âge commence la scolarité obligatoire dans le canton de Neuchâtel ?',
    answer: '4 ans'
  },
  {
    id: 181,
    category: 'social',
    type: 'cantonal',
    question: 'Quel musée chaux-de-fonnier inauguré en décembre 2022 regroupe le Musée d\'histoire naturelle et le zoo ?',
    answer: 'Le Muzoo'
  },
  {
    id: 182,
    category: 'social',
    type: 'cantonal',
    question: 'Mentionnez 2 manifestations culturelles ou festives dans le canton.',
    answer: 'Festi\'Neuch, Trotteuse-Tissot, NIFFF, Boudrysia, Plage des Six-pompes, Fête de la terre, Abbaye de Fleurier',
    isMultipleAnswer: true
  },
  {
    id: 183,
    category: 'social',
    type: 'cantonal',
    question: 'Quelle est l\'industrie phare dans le canton de Neuchâtel ?',
    answer: 'L\'horlogerie'
  },
  {
    id: 184,
    category: 'social',
    type: 'cantonal',
    question: 'Quand a été créé le COSM, le Service de la Cohésion Multiculturelle ?',
    answer: 'Années 2000',
    isMultipleChoice: true,
    options: ['Dans les années 80', 'dans les années 90', 'dans les années 2000']
  },
  {
    id: 185,
    category: 'social',
    type: 'cantonal',
    question: 'Quelle ville fut la première à ouvrir un espace pour l\'inhumation des musulmans ?',
    answer: 'La Chaux-de-Fonds'
  },
  {
    id: 186,
    category: 'social',
    type: 'cantonal',
    question: 'Neuchâtel est le premier canton à avoir scolarisé les enfants sans statut légal. Vrai ou faux ?',
    answer: 'Vrai',
    isMultipleChoice: true,
    options: ['Vrai', 'Faux']
  },
  {
    id: 187,
    category: 'social',
    type: 'cantonal',
    question: 'Quels sont les deux seuls cantons de Suisse romande qui octroient le droit de vote cantonal aux étrangers ?',
    answer: 'Neuchâtel et Jura',
    isMultipleAnswer: true
  },
  {
    id: 188,
    category: 'social',
    type: 'cantonal',
    question: 'Citez des particularités de votre commune de résidence.',
    answer: 'Réponse variable selon la commune (Neuchâtel: château, lac, université / La Chaux-de-Fonds: architecture horlogère, altitude)',
    isMultipleAnswer: true
  }
];
