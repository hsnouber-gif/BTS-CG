/* ==========================================================================
   cours-data.js - Base de données modulaire des cours BTS CG
   Pour ajouter un cours : collez simplement un nouveau bloc à la toute fin !
   ========================================================================== */

window.COURS_DATABASE = window.COURS_DATABASE || [];

// ==========================================
// 1. GESTION FISCALE (P3) - Chapitre 1
// ==========================================
window.COURS_DATABASE.push({
  subjectId: "p3",
  subjectCode: "P3",
  subjectTitle: "Gestion fiscale (Processus 3)",
  subjectCategory: "process",
  subjectIcon: "fa-landmark",
  subjectDesc: "TVA, régimes d'imposition, Micro-BIC, déclaration CA12/CA3, IS, résultat fiscal et liasse.",
  
  chapterId: "p3-c1",
  chapterNum: 1,
  chapterTitle: "Veille fiscale, régimes d'imposition (IR vs IS, Micro-BIC) & TVA",
  chapterDesc: "Franchise en base (85k€/93.5k€), Micro-BIC (71%/50%), réels, CA12/CA3 et toutes les définitions fiscales fondamentales.",
  active: true,
  
  categories: {
    all: "Tout",
    defs: "Définitions",
    ir_is: "IR vs IS",
    micro_reel: "Micro & Réels",
    tva: "Régimes TVA",
    calculs: "Calculs express"
  },

  quizQuestions: [
    {
      id: 1,
      cat: "defs",
      catLabel: "Définition",
      theme: "Assiette de l'impôt",
      title: "Quelle est la définition exacte de l'Assiette de l'impôt ?",
      options: [
        { text: "La base financière ou matérielle sur laquelle est calculé l'impôt", correct: true },
        { text: "Le paiement effectif effectué auprès du Trésor public", correct: false },
        { text: "Le formulaire officiel transmis lors de la clôture", correct: false },
        { text: "La sanction pécuniaire appliquée en cas de retard", correct: false }
      ],
      explanation: "L'assiette correspond à la matière imposable (bénéfice, CA, salaire) sur laquelle le taux d'imposition est appliqué.",
      article: "Principes généraux de fiscalité"
    },
    {
      id: 2,
      cat: "defs",
      catLabel: "Définition",
      theme: "Liquidation",
      title: "Qu'est-ce que la Liquidation de l'impôt ?",
      options: [
        { text: "Le calcul du montant exact de l'impôt dû en appliquant le barème ou taux à l'assiette", correct: true },
        { text: "La faillite judiciaire de l'entreprise débitrice", correct: false },
        { text: "Le virement bancaire adressé à la DGFiP", correct: false },
        { text: "L'annulation d'une dette fiscale par l'administration", correct: false }
      ],
      explanation: "Liquider l'impôt consiste à déterminer sa valeur en euros : Assiette × Taux.",
      article: "Procédure fiscale BTS P3"
    },
    {
      id: 3,
      cat: "defs",
      catLabel: "Définition",
      theme: "Recouvrement",
      title: "Qu'est-ce que le Recouvrement de l'impôt ?",
      options: [
        { text: "L'opération matérielle par laquelle l'impôt est effectivement encaissé par l'État", correct: true },
        { text: "L'audit comptable réalisé par un commissaire aux comptes", correct: false },
        { text: "La déduction des charges d'exploitation de la liasse", correct: false },
        { text: "Le calcul prévisionnel des acomptes trimestriels", correct: false }
      ],
      explanation: "Le recouvrement correspond à l'encaissement et au paiement effectif des sommes dues.",
      article: "Règles de recouvrement DGFiP"
    },
    {
      id: 4,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Abattement forfaitaire",
      title: "Quel est le taux d'abattement forfaitaire pour frais en Micro-BIC pour une activité de vente de marchandises ?",
      options: [
        { text: "71 %", correct: true },
        { text: "50 %", correct: false },
        { text: "34 %", correct: false },
        { text: "10 %", correct: false }
      ],
      explanation: "Pour les ventes de marchandises, l'abattement forfaitaire pour frais professionnels est de 71% (imposition sur 29% du CA).",
      article: "Article 50-0 du CGI"
    },
    {
      id: 5,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Abattement prestations",
      title: "Quel est le taux d'abattement pour charges en Micro-BIC prestations de services ?",
      options: [
        { text: "50 %", correct: true },
        { text: "71 %", correct: false },
        { text: "34 %", correct: false },
        { text: "25 %", correct: false }
      ],
      explanation: "En prestations de services commerciales ou artisanales (BIC), l'abattement représentatif de charges est de 50%.",
      article: "Article 50-0 du CGI"
    }
  ],

  flashcards: [
    { cat: "Définition", front: "Qu'est-ce que l'Assiette de l'impôt ?", back: "La <b>base matérielle ou financière</b> (ex: bénéfice net, chiffre d'affaires, valeur d'un bien) sur laquelle est calculé l'impôt." },
    { cat: "Définition", front: "Qu'est-ce que la Liquidation de l'impôt ?", back: "Le <b>calcul du montant de l'impôt dû</b> par application du taux légal à l'assiette imposable : <code>Impôt = Assiette × Taux</code>." },
    { cat: "Définition", front: "Qu'est-ce que le Recouvrement ?", back: "L'ensemble des procédures administratives permettant <b>l'encaissement effectif</b> de la créance fiscale par le Trésor public." },
    { cat: "Micro-BIC", front: "Quel est l'abattement forfaitaire pour la vente de biens ?", back: "<b>71 %</b> d'abattement pour charges. Le bénéfice imposable correspond à <b>29 % du CA HT</b>." },
    { cat: "Micro-BIC", front: "Quel est l'abattement forfaitaire pour les prestations de services ?", back: "<b>50 %</b> d'abattement forfaitaire. Le bénéfice imposable correspond à <b>50 % du CA HT</b>." }
  ],

  syntheseHtml: `
    <div class="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
      <div class="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">BTS CG1 • Processus 3</span>
            <span class="text-xs text-emerald-400 font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Fiche Complète</span>
          </div>
          <h3 class="text-2xl font-black text-white mt-1.5 flex items-center gap-2.5">
            <i class="fa-solid fa-book-open text-indigo-400"></i> Chapitre 1 : Veille fiscale, régimes d'imposition & TVA
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Fondamentaux du Processus 3 : assiette, liquidation, recouvrement et régimes BIC/TVA.</p>
        </div>
        <button onclick="window.print()" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-2 border border-slate-700">
          <i class="fa-solid fa-print"></i> Imprimer / PDF
        </button>
      </div>
      <div class="space-y-4 text-xs sm:text-sm text-slate-300">
        <h4 class="text-base font-extrabold text-indigo-300 uppercase tracking-wider">1. Les 3 étapes de l'imposition</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">1. Assiette</b>
            <p>Détermination de la matière imposable soumise à l'impôt (CA, bénéfice fiscal ou revenu global).</p>
          </div>
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">2. Liquidation</b>
            <p>Calcul de la somme due en appliquant le taux légal à l'assiette imposable.</p>
          </div>
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">3. Recouvrement</b>
            <p>Paiement et encaissement effectif de la dette fiscale par le Trésor Public.</p>
          </div>
        </div>
      </div>
    </div>
  `
});

// ==========================================
// 2. CONTRÔLE DE GESTION (P5) - Chapitre 1
// ==========================================
window.COURS_DATABASE.push({
  subjectId: "p5",
  subjectCode: "P5",
  subjectTitle: "Analyse et prévision de l'activité (Contrôle de Gestion)",
  subjectCategory: "process",
  subjectIcon: "fa-cubes",
  subjectDesc: "Introduction au CDG, objets de coûts, charges directes/indirectes, coûts complets, seuil de rentabilité.",
  
  chapterId: "p5-c1",
  chapterNum: 1,
  chapterTitle: "Introduction au contrôle de gestion & Analyse de la décision de gestion",
  chapterDesc: "Activité A5.1 • Cas fil rouge KickLab Laon & SnackVite : Rôle du CDG, compta générale vs gestion, objets de coûts, charges directes/indirectes/incorporables, coût pertinent.",
  active: true,

  categories: {
    all: "Tout",
    cg_vs_cdg: "Compta géné vs Gestion",
    objets: "Objets de coûts",
    charges: "Directes / Indirectes",
    incorp: "Incorporables",
    decision: "Décisions",
    pertinent: "Coût pertinent"
  },

  quizQuestions: [
    {
      id: 201,
      cat: "cg_vs_cdg",
      catLabel: "Compta géné vs Gestion",
      theme: "Finalité du Contrôle de Gestion",
      title: "Quelle est la définition exacte du contrôle de gestion telle qu'enseignée en BTS CG ?",
      options: [
        { text: "Un système interne pour collecter, analyser les infos financières et opérationnelles pour évaluer et piloter la performance", correct: true },
        { text: "L'obligation légale de déclarer la TVA et le bilan auprès du greffe du tribunal", correct: false },
        { text: "Le contrôle fiscal annuel opéré par les inspecteurs de la DGFiP", correct: false },
        { text: "La vérification du compte bancaire chaque fin de mois par l'expert-comptable", correct: false }
      ],
      explanation: "Le contrôle de gestion est un pilotage interne d'aide à la décision qui répond aux questions : 'Quelle activité rapporte ? Où perd-on de l'argent ?'.",
      article: "Référentiel P5 • Activité A5.1"
    },
    {
      id: 202,
      cat: "cg_vs_cdg",
      catLabel: "Compta géné vs Gestion",
      theme: "Comparatif",
      title: "La comptabilité de gestion est-elle obligatoire pour une entreprise ?",
      options: [
        { text: "Non, elle est facultative et organisée librement selon les besoins internes de gestion", correct: true },
        { text: "Oui, elle est strictement obligatoire par le Code de commerce sous peine d'amende", correct: false },
        { text: "Oui, mais uniquement pour les entreprises de plus de 50 salariés", correct: false },
        { text: "Elle est imposée par l'administration fiscale au même titre que la liasse fiscale", correct: false }
      ],
      explanation: "Contrairement à la comptabilité générale régie par le PCG et obligatoire, la comptabilité de gestion est facultative et modulable selon les besoins du gestionnaire.",
      article: "Guide d'accueil KickLab • Doc 4"
    },
    {
      id: 203,
      cat: "cg_vs_cdg",
      catLabel: "Compta géné vs Gestion",
      theme: "Destinataires",
      title: "À qui s'adressent principalement les documents produits par la comptabilité générale ?",
      options: [
        { text: "Aux tiers extérieurs : État (fisc), banques, associés, fournisseurs", correct: true },
        { text: "Exclusivement aux chefs d'ateliers et aux salariés de production", correct: false },
        { text: "Aux clients de passage dans la boutique", correct: false },
        { text: "Uniquement aux stagiaires de l'entreprise", correct: false }
      ],
      explanation: "La comptabilité financière communique une image fidèle du patrimoine envers l'extérieur (tiers, fisc, banquiers). La compta de gestion est à destination interne.",
      article: "Tableau comparatif Activité 3"
    },
    {
      id: 204,
      cat: "cg_vs_cdg",
      catLabel: "Compta géné vs Gestion",
      theme: "Limite de la Compta Générale",
      title: "Chez KickLab Laon, pourquoi la comptabilité générale n'a-t-elle pas pu expliquer la stagnation du bénéfice net ?",
      options: [
        { text: "Elle ne donne qu'un résultat global d'entreprise sans ventiler les charges par produit ou atelier", correct: true },
        { text: "Le comptable a commis une faute de frappe dans le compte de résultat", correct: false },
        { text: "Elle ne prend en compte que les ventes d'ateliers et oublie les sneakers", correct: false },
        { text: "Parce que le chiffre d'affaires a diminué de 30 %", correct: false }
      ],
      explanation: "La comptabilité générale donne le résultat global (26 600 €) mais ignore la rentabilité détaillée de chaque objet de coût (chaussures vs ateliers vs web).",
      article: "Cas KickLab • Doc 1 & 2"
    },
    {
      id: 205,
      cat: "objets",
      catLabel: "Objets de coûts",
      theme: "Définition Fondamentale",
      title: "Qu'appelle-t-on un « objet de coût » en contrôle de gestion ?",
      options: [
        { text: "Tout élément (produit, service, commande, atelier) pour lequel l'entreprise souhaite calculer un coût autonome", correct: true },
        { text: "La facture payée par le client à la caisse", correct: false },
        { text: "Le prix d'achat d'une paire de sneakers hors taxes", correct: false },
        { text: "La somme totale des amortissements inscrits au bilan", correct: false }
      ],
      explanation: "L'objet de coût est la cible d'accumulation des charges (ce que l'on veut valoriser pour prendre une décision).",
      article: "Fiche À retenir • Notion 3"
    },
    {
      id: 206,
      cat: "objets",
      catLabel: "Objets de coûts",
      theme: "Types d'Objets KickLab",
      title: "Chez KickLab Laon, quel est l'objet de coût correspondant au type « Service » ?",
      options: [
        { text: "L'atelier de customisation de sneakers de 2h", correct: true },
        { text: "La paire de baskets personnalisées", correct: false },
        { text: "La commande n°487 de Mr Dupont", correct: false },
        { text: "Le pot de colle pour semelle", correct: false }
      ],
      explanation: "La basket personnalisée est un Produit (bien matériel), l'atelier est un Service (prestation intellectuelle/manuelle).",
      article: "Activité 5 • Référentiel"
    },
    {
      id: 207,
      cat: "objets",
      catLabel: "Objets de coûts",
      theme: "Cas SnackVite",
      title: "Dans le cas SnackVite Laon, quels sont les trois principaux objets de coûts (produits/offres) ?",
      options: [
        { text: "Sandwichs à emporter, Plateaux-repas livrés, Formules midi sur place", correct: true },
        { text: "Pain, Charcuterie, Légumes", correct: false },
        { text: "Loyer, Salaire du cuisinier, Assurance", correct: false },
        { text: "Vélo-cargo, Comptoir, Emballages", correct: false }
      ],
      explanation: "Pain et charcuterie sont des charges. Les objets de coûts sont les prestations/produits vendus aux clients.",
      article: "Application SnackVite Laon"
    },
    {
      id: 208,
      cat: "charges",
      catLabel: "Directes vs Indirectes",
      theme: "Définition Charge Directe",
      title: "Qu'est-ce qu'une charge directe ?",
      options: [
        { text: "Une charge qui peut être affectée immédiatement et sans calcul intermédiaire à un seul objet de coût", correct: true },
        { text: "Une charge payée directement par carte bancaire", correct: false },
        { text: "Une charge qui concerne tous les ateliers de l'entreprise sans exception", correct: false },
        { text: "Une charge qui est toujours exonérée de TVA", correct: false }
      ],
      explanation: "Exemple typique : la matière première consommée pour un produit précis (le cuir pour fabriquer la chaussure).",
      article: "Fiche À retenir • Notion 4"
    },
    {
      id: 209,
      cat: "charges",
      catLabel: "Directes vs Indirectes",
      theme: "Définition Charge Indirecte",
      title: "Pourquoi une charge indirecte nécessite-t-elle une « clé de répartition » ?",
      options: [
        { text: "Parce qu'elle concerne plusieurs objets de coûts et qu'on ne peut pas l'affecter directement à un seul sans calcul", correct: true },
        { text: "Parce que le fournisseur n'a pas envoyé de facture", correct: false },
        { text: "Pour l'annuler en comptabilité générale", correct: false },
        { text: "Pour obtenir un remboursement d'impôt immédiat", correct: false }
      ],
      explanation: "Exemple : le loyer d'un atelier où l'on fabrique à la fois des baskets et où l'on réalise des ateliers. Il faut une clé (ex: m² ou heures) pour le répartir.",
      article: "Question 6.2 KickLab"
    },
    {
      id: 210,
      cat: "charges",
      catLabel: "Directes vs Indirectes",
      theme: "Application KickLab",
      title: "Chez KickLab, à quel type appartient la charge « Cuir et semelles (38 400 €) » par rapport à la fabrication des sneakers ?",
      options: [
        { text: "Charge directe", correct: true },
        { text: "Charge indirecte", correct: false },
        { text: "Charge non incorporable", correct: false },
        { text: "Produit d'exploitation", correct: false }
      ],
      explanation: "Le cuir sert exclusivement à fabriquer les chaussures, il est consommé pour cet objet sans ambiguïté.",
      article: "Activité 6 • Charge n°1"
    },
    {
      id: 211,
      cat: "charges",
      catLabel: "Directes vs Indirectes",
      theme: "Application KickLab",
      title: "Le loyer du local de Laon (18 000 €) abritant la fabrication et les ateliers est-il une charge directe ou indirecte ?",
      options: [
        { text: "Indirecte, car il profite à plusieurs activités et nécessite une clé de répartition (surface, temps)", correct: true },
        { text: "Directe, car il est payé au propriétaire de Laon", correct: false },
        { text: "Non incorporable, car le loyer n'est pas une marchandise", correct: false },
        { text: "Une charge financière", correct: false }
      ],
      explanation: "Si Sarah veut calculer le coût d'une paire, elle ne peut pas ignorer le loyer, mais doit le ventiler avec une clé de répartition.",
      article: "Question 6.2 KickLab"
    },
    {
      id: 212,
      cat: "charges",
      catLabel: "Directes vs Indirectes",
      theme: "Frais Web KickLab",
      title: "La « Commission plateforme e-commerce (1 000 €) » est-elle une charge directe ou indirecte de l'activité vente en ligne ?",
      options: [
        { text: "Directe de la vente en ligne (5 % direct du CA web)", correct: true },
        { text: "Indirecte de l'atelier de customisation", correct: false },
        { text: "Charge supplétive", correct: false },
        { text: "Non incorporable", correct: false }
      ],
      explanation: "Elle ne concerne exclusivement que les ventes sur la boutique en ligne : elle est donc directe à cet objet de coût.",
      article: "Activité 6 • Charge n°9"
    },
    {
      id: 213,
      cat: "incorp",
      catLabel: "Charges incorporables",
      theme: "Définition",
      title: "Quelle est la règle pour qualifier une charge d'« incorporable » en calcul de coûts ?",
      options: [
        { text: "Elle doit avoir un lien direct et nécessaire avec les conditions normales d'exploitation de l'activité", correct: true },
        { text: "Elle doit obligatoirement dépasser 10 000 € par an", correct: false },
        { text: "Toutes les charges de la classe 6 sans exception sont toujours incorporables", correct: false },
        { text: "Elle doit obligatoirement être payée en espèces", correct: false }
      ],
      explanation: "On élimine les charges exceptionnelles, fiscales ou financières sans rapport avec l'exploitation courante (charges non incorporables).",
      article: "Activité 7 • Synthèse"
    },
    {
      id: 214,
      cat: "incorp",
      catLabel: "Charges incorporables",
      theme: "Frais Bancaires",
      title: "Pourquoi les frais bancaires (charge n°15, 360 €) sont-ils fréquemment considérés comme NON incorporables ?",
      options: [
        { text: "Parce qu'ils relèvent de la structure financière de l'entreprise et non du cycle de fabrication ou de prestation", correct: true },
        { text: "Parce que les banques ne font pas de factures de vente", correct: false },
        { text: "Parce que c'est une charge de personnel", correct: false },
        { text: "Parce que le montant est inférieur à 500 €", correct: false }
      ],
      explanation: "Les charges financières et exceptionnelles ne traduisent pas la performance productive des ateliers ou produits.",
      article: "Activité 7 KickLab"
    },
    {
      id: 215,
      cat: "incorp",
      catLabel: "Charges incorporables",
      theme: "Amortissements",
      title: "L'amortissement des machines de découpe (charge n°13, 3 600 €) est-il une charge incorporable ?",
      options: [
        { text: "Oui, c'est l'usure normale des équipements de production utilisée pour les objets de coûts", correct: true },
        { text: "Non, les amortissements sont toujours exclus du calcul des coûts", correct: false },
        { text: "Uniquement si les machines sont revendues", correct: false },
        { text: "Non, car c'est un produit non incorporable", correct: false }
      ],
      explanation: "Les dotations d'exploitation aux amortissements mesurent la consommation du capital productif.",
      article: "Activité 7 KickLab"
    },
    {
      id: 216,
      cat: "decision",
      catLabel: "Décisions de gestion",
      theme: "Décision Stratégique",
      title: "Qu'est-ce qui caractérise une décision stratégique par rapport à une décision opérationnelle ?",
      options: [
        { text: "Elle engage l'entreprise à long terme, est difficilement réversible et vise sa pérennité", correct: true },
        { text: "Elle peut être modifiée chaque matin sans conséquence financière", correct: false },
        { text: "Elle ne concerne que l'achat de café et de fournitures de bureau", correct: false },
        { text: "Elle ne comporte aucun risque", correct: false }
      ],
      explanation: "Une décision stratégique modifie le cap de l'entreprise (ex: lancer une nouvelle activité, ouvrir un site web marchand).",
      article: "Activité 8 • Notion clé"
    },
    {
      id: 217,
      cat: "decision",
      catLabel: "Décisions de gestion",
      theme: "Cas KickLab",
      title: "Le lancement des ateliers de personnalisation par Sarah Marré est :",
      options: [
        { text: "Une décision stratégique (création d'une nouvelle offre pérenne et investissements)", correct: true },
        { text: "Une décision opérationnelle réversible sans impact", correct: false },
        { text: "Une obligation fiscale imposée par le PCG", correct: false },
        { text: "Un objet de coût indirect", correct: false }
      ],
      explanation: "C'est un choix majeur de développement avec aménagement de locaux et achat de matériel de customisation.",
      article: "Activité 9 • Décision n°1"
    },
    {
      id: 218,
      cat: "decision",
      catLabel: "Décisions de gestion",
      theme: "Cas KickLab",
      title: "L'augmentation du budget pub Instagram/TikTok de 4 800 € par Sarah est :",
      options: [
        { text: "Une décision opérationnelle (ajustable à court terme selon la réaction des clients)", correct: true },
        { text: "Une décision stratégique irréversible", correct: false },
        { text: "Une charge non incorporable", correct: false },
        { text: "Une décision de comptabilité générale", correct: false }
      ],
      explanation: "On peut couper ou réallouer les campagnes publicitaires de semaine en semaine.",
      article: "Activité 9 • Décision n°6"
    },
    {
      id: 219,
      cat: "pertinent",
      catLabel: "Coût pertinent",
      theme: "Différence Coût vs Prix",
      title: "En gestion, quelle est la différence fondamentale entre le « Coût » et le « Prix » ?",
      options: [
        { text: "Le prix est ce que paie le client ; le coût est l'ensemble des charges consommées pour produire le bien", correct: true },
        { text: "Ce sont deux synonymes parfaits utilisés indifféremment", correct: false },
        { text: "Le coût est toujours supérieur au prix de vente", correct: false },
        { text: "Le prix est calculé par le comptable et le coût fixé par la loi", correct: false }
      ],
      explanation: "Prix de vente = Coût de revient + Marge bénéficiaire (sauf vente à perte).",
      article: "Activité 10 • Du coût au coût pertinent"
    },
    {
      id: 220,
      cat: "pertinent",
      catLabel: "Coût pertinent",
      theme: "Définition Coût Pertinent",
      title: "Qu'est-ce qu'un « coût pertinent » pour une décision ?",
      options: [
        { text: "Le coût qui apporte une information directement utile et modifiée par la décision à prendre", correct: true },
        { text: "La somme intégrale de toutes les charges de l'entreprise sur 10 ans", correct: false },
        { text: "Le tarif conseillé par les concurrents", correct: false },
        { text: "Un coût calculé sans aucune charge directe", correct: false }
      ],
      explanation: "Pour prendre une décision d'opportunité, on ne retient que les charges qui varient sous l'effet de ce choix.",
      article: "Fiche À retenir • Notion 7"
    },
    {
      id: 221,
      cat: "pertinent",
      catLabel: "Coût pertinent",
      theme: "Cas Option Laser KickLab",
      title: "Sarah hésite à lancer une option de gravure laser sur semelle. Quel est le coût pertinent pour fixer son prix ?",
      options: [
        { text: "Uniquement le coût supplémentaire entraîné par le laser (temps machine, électricité spécifique)", correct: true },
        { text: "Le coût complet total de la paire de sneakers (cuir + boîte + loyer + salaire)", correct: false },
        { text: "Le chiffre d'affaires total de l'année 2024", correct: false },
        { text: "Le salaire annuel complet de Sarah", correct: false }
      ],
      explanation: "La chaussure est déjà produite : pour savoir à quel tarif facturer l'option, c'est le coût additionnel marginal qui compte.",
      article: "Question 10.1 KickLab"
    },
    {
      id: 222,
      cat: "pertinent",
      catLabel: "Coût pertinent",
      theme: "Frais de Port Web",
      title: "Pour décider s'il faut faire payer les frais de port aux clients web, quel est le coût pertinent ?",
      options: [
        { text: "Le coût d'expédition et d'emballage de la commande en ligne (charge n°8 : 3 200 €)", correct: true },
        { text: "L'amortissement des machines de découpe de l'atelier physique", correct: false },
        { text: "Le loyer du local de Laon", correct: false },
        { text: "Le montant du capital social de KickLab", correct: false }
      ],
      explanation: "Le coût de livraison est directement lié à la décision de facturer ou offrir les frais de port.",
      article: "Tableau Doc Activité 10"
    }
  ],

  flashcards: [
    { cat: "Définition", front: "Qu'est-ce que le contrôle de gestion ?", back: "Un système de pilotage interne qui <b>collecte, analyse et contrôle les informations financières et opérationnelles</b> pour aider le dirigeant à prendre des décisions et améliorer la rentabilité." },
    { cat: "Compta de gestion", front: "La comptabilité de gestion est-elle obligatoire ?", back: "<b>NON, FACULTATIVE !</b> Elle est librement organisée selon les besoins internes, contrairement à la comptabilité générale qui est imposée par la loi (Code de commerce/PCG)." },
    { cat: "Comparatif", front: "Qui sont les destinataires de la comptabilité de gestion ?", back: "<b>Les acteurs internes :</b> dirigeants, contrôleurs, responsables d'ateliers et de magasins (la compta générale s'adresse aux tiers : État, banques, associés)." },
    { cat: "Objet de coût", front: "Qu'est-ce qu'un objet de coût ?", back: "Tout élément pour lequel l'entreprise souhaite calculer un coût autonome : <b>produit, service, commande, processus ou entité</b>." },
    { cat: "Objet de coût", front: "Donner un exemple des 5 types d'objets chez KickLab", back: "• <b>Produit :</b> basket customisée<br>• <b>Service :</b> atelier de 2h<br>• <b>Commande :</b> commande web n°487<br>• <b>Processus :</b> fabrication/finition<br>• <b>Entité :</b> atelier de Laon." },
    { cat: "Charges", front: "Qu'est-ce qu'une charge directe ?", back: "Une charge qui peut être <b>affectée immédiatement et sans calcul intermédiaire</b> à un seul objet de coût (ex: le cuir d'une paire de sneakers)." },
    { cat: "Charges", front: "Qu'est-ce qu'une charge indirecte ?", back: "Une charge qui <b>concerne plusieurs objets de coûts</b>. Elle nécessite obligatoirement un calcul préalable et une <b>clé de répartition</b> (ex: le loyer du local commun)." },
    { cat: "Charges", front: "Pourquoi le loyer de KickLab (18 000 €) est-il indirect ?", back: "Parce que le local abrite à la fois la fabrication des chaussures et les ateliers clients. On doit le répartir (en m² ou en heures) entre ces deux activités." },
    { cat: "Incorporable", front: "Qu'est-ce qu'une charge incorporable ?", back: "Une charge de la comptabilité générale retenue dans le calcul des coûts car liée aux <b>conditions normales d'exploitation</b> de l'activité." },
    { cat: "Incorporable", front: "Donner un exemple de charge NON incorporable", back: "Les <b>frais bancaires exceptionnels</b>, les pénalités/amendes fiscales, les pertes sur sinistres : charges sans lien avec l'activité productive courante." },
    { cat: "Décision", front: "Qu'est-ce qu'une décision stratégique ?", back: "Une décision à <b>long terme</b>, difficilement réversible, qui engage la pérennité et le développement de l'entreprise (ex: lancer les ateliers ou le site e-commerce)." },
    { cat: "Décision", front: "Qu'est-ce qu'une décision opérationnelle ?", back: "Une décision à <b>court/moyen terme</b>, réversible, qui optimise le quotidien et l'organisation (ex: ajuster le budget publicité ou changer de fournisseur de lacets)." },
    { cat: "Coût vs Prix", front: "Quelle est la différence entre coût et prix ?", back: "• <b>Prix :</b> ce que paie le client.<br>• <b>Coût :</b> l'ensemble des charges consommées pour produire et vendre.<br><code>Prix de vente = Coût + Marge</code>" },
    { cat: "Coût Pertinent", front: "Qu'appelle-t-on un coût pertinent ?", back: "Le coût qui apporte une <b>information directement utile à la décision à prendre</b> (souvent le coût supplémentaire/différentiel entraîné par le choix)." },
    { cat: "Coût Pertinent", front: "Quel coût regarder pour lancer une option laser ?", back: "<b>Uniquement le coût additionnel lié au laser</b> (temps machine, électricité spécifique), et NON le coût complet de la chaussure qui existe déjà !" },
    { cat: "SnackVite", front: "Chez SnackVite Laon, le pain et les légumes sont :", back: "Des <b>charges directes</b> des sandwichs et plateaux-repas (matières premières consommées directement)." },
    { cat: "SnackVite", front: "Chez SnackVite Laon, le loyer de la sandwicherie est :", back: "Une <b>charge indirecte</b> qui bénéficie simultanément aux sandwichs à emporter, formules midi sur place et plateaux-repas." },
    { cat: "KickLab", front: "Pourquoi le résultat net de KickLab stagne malgré +30% de CA ?", back: "Les <b>charges ont augmenté plus vite (+37%)</b> que le chiffre d'affaires, notamment à cause des nouveaux coûts de structure non maîtrisés par activité (effet ciseaux)." },
    { cat: "Outils CDG", front: "Quels sont les outils majeurs du contrôleur de gestion ?", back: "• Comptabilité analytique (calcul des coûts)<br>• Budgets prévisionnels<br>• Tableaux de bord & indicateurs (KPI)<br>• Analyse des écarts (réalisé vs prévu)." },
    { cat: "PGI", front: "L'abonnement PGI (logiciel) est-il une charge directe ?", back: "<b>NON, charge indirecte</b> : le logiciel de gestion sert au suivi global de l'ensemble des activités et entités de l'entreprise." }
  ]
});

// ==========================================
// 3. MATHÉMATIQUES APPLIQUÉES - Chapitre 1
// ==========================================
window.COURS_DATABASE.push({
  subjectId: "maths",
  subjectCode: "MATHS",
  subjectTitle: "Mathématiques appliquées",
  subjectCategory: "general",
  subjectIcon: "fa-calculator",
  subjectDesc: "Fonctions affines et du second degré, tableur, puis les prochains chapitres du programme.",
  
  chapterId: "maths-c1",
  chapterNum: 1,
  chapterTitle: "Fonction affine et fonction polynôme du second degré",
  chapterDesc: "Coefficient directeur, signe et variations, discriminant, racines, factorisation, sommet, lecture graphique, exercices de gestion (bénéfice, offre/demande) et tableur.",
  active: true,

  categories: {
    all: "Tout",
    affine: "Fonction affine",
    second: "Second degré",
    lecture: "Lecture graphique",
    calculs: "Calculs & exos",
    tableur: "Tableur"
  },

  quizQuestions: [
    {
      id: 301,
      cat: "affine",
      catLabel: "Fonction affine",
      theme: "Pente",
      title: "Comment se calcule le coefficient directeur 'a' d'une droite passant par A(xA, yA) et B(xB, yB) ?",
      options: [
        { text: "a = (yB - yA) / (xB - xA)", correct: true },
        { text: "a = (xB - xA) / (yB - yA)", correct: false },
        { text: "a = (yB + yA) / (xB + xA)", correct: false },
        { text: "a = yA × xB - yB × xA", correct: false }
      ],
      explanation: "Le coefficient directeur (taux d'accroissement) est la variation de y divisée par la variation de x.",
      article: "Cours Maths CG1 • Chapitre 1"
    },
    {
      id: 302,
      cat: "second",
      catLabel: "Second degré",
      theme: "Discriminant",
      title: "Quelle est la formule du discriminant Δ pour ax² + bx + c ?",
      options: [
        { text: "Δ = b² - 4ac", correct: true },
        { text: "Δ = b² + 4ac", correct: false },
        { text: "Δ = -b / (2a)", correct: false },
        { text: "Δ = 2ax + b", correct: false }
      ],
      explanation: "Le discriminant Δ = b² - 4ac détermine le nombre de racines réelles.",
      article: "Cours Maths CG1 • Chapitre 1"
    }
  ],

  flashcards: [
    { cat: "Fonction affine", front: "Formule générale d'une fonction affine", back: "<code>f(x) = ax + b</code><br>• a = coefficient directeur (pente)<br>• b = ordonnée à l'origine" },
    { cat: "Second degré", front: "Formule du discriminant Δ", back: "<code>Δ = b² − 4ac</code><br>• Si Δ > 0 : 2 racines<br>• Si Δ = 0 : 1 racine double<br>• Si Δ < 0 : aucune racine réelle" },
    { cat: "Sommet", front: "Coordonnées du sommet d'une parabole", back: "<code>α = −b / (2a)</code> et <code>β = f(α)</code>.<br>Le sommet est S(α ; β)." }
  ]
});
