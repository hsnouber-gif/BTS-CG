/* ==========================================================================
   cours-data.js - Base de données intégrale des cours BTS CG
   ========================================================================== */

window.COURS_DATABASE = window.COURS_DATABASE || [];

// ==========================================
// 1. GESTION FISCALE (P3) - Chapitre 1 (52 Questions & 20 Flashcards)
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
      catLabel: "Définitions",
      theme: "Assiette de l'impôt",
      title: "Quelle est la définition exacte de l'assiette de l'impôt ?",
      options: [
        { text: "La base financière ou matérielle sur laquelle est calculé l'impôt", correct: true },
        { text: "Le paiement effectif effectué auprès du Trésor public", correct: false },
        { text: "Le formulaire officiel transmis lors de la clôture", correct: false },
        { text: "La sanction pécuniaire appliquée en cas de retard", correct: false }
      ],
      explanation: "L'assiette est la base d'imposition (CA, bénéfice fiscal, valeur ajoutée) soumise au calcul.",
      article: "Principes généraux du droit fiscal"
    },
    {
      id: 2,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Liquidation de l'impôt",
      title: "Qu'est-ce que la liquidation de l'impôt ?",
      options: [
        { text: "Le calcul arithmétique déterminant le montant dû (Assiette × Taux)", correct: true },
        { text: "La fermeture judiciaire d'une entreprise défaillante", correct: false },
        { text: "L'encaissement bancaire par le comptable public", correct: false },
        { text: "L'exonération totale accordée par l'administration", correct: false }
      ],
      explanation: "Liquider l'impôt consiste à appliquer le barème ou le taux légal sur l'assiette préalablement déterminée.",
      article: "Principes généraux du droit fiscal"
    },
    {
      id: 3,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Recouvrement",
      title: "Qu'est-ce que le recouvrement de l'impôt ?",
      options: [
        { text: "L'ensemble des opérations matérielles d'encaissement de la créance fiscale", correct: true },
        { text: "Le contrôle sur pièces exercé par le vérificateur", correct: false },
        { text: "La déduction des charges réelles de la liasse", correct: false },
        { text: "La réclamation contentieuse déposée au tribunal", correct: false }
      ],
      explanation: "Le recouvrement est l'encaissement effectif des sommes dues au Trésor public.",
      article: "Principes généraux du droit fiscal"
    },
    {
      id: 4,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Redevable vs Assujetti",
      title: "Quelle différence distingue l'assujetti du redevable en matière de TVA ?",
      options: [
        { text: "L'assujetti réalise une activité économique indépendante ; le redevable est celui qui doit légalement payer la taxe au Trésor", correct: true },
        { text: "L'assujetti est un particulier ; le redevable est toujours une société commerciale", correct: false },
        { text: "Ce sont deux synonymes parfaits en droit fiscal des entreprises", correct: false },
        { text: "L'assujetti paie toujours l'impôt sur les sociétés", correct: false }
      ],
      explanation: "L'assujetti entre dans le champ de la TVA. Le redevable est le débiteur légal du versement auprès du fisc.",
      article: "Art. 256 A du CGI"
    },
    {
      id: 5,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Fait générateur",
      title: "Qu'appelle-t-on le « fait générateur » en matière fiscale ?",
      options: [
        { text: "L'événement matériel ou juridique qui fait naître la créance fiscale de l'État", correct: true },
        { text: "La date limite de paiement fixée sur l'avis d'imposition", correct: false },
        { text: "Le premier jour de l'exercice comptable", correct: false },
        { text: "La signature des statuts juridiques au greffe", correct: false }
      ],
      explanation: "Le fait générateur crée l'obligation fiscale (ex. : la livraison du bien ou l'encaissement du prix).",
      article: "Art. 269 du CGI"
    },
    {
      id: 6,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Exigibilité",
      title: "Quelle est la définition exacte de l'exigibilité de la TVA ?",
      options: [
        { text: "Le droit pour le Trésor public de réclamer le paiement de la taxe à partir d'une date précise", correct: true },
        { text: "Le droit pour l'entreprise de déduire la TVA sur ses achats passés", correct: false },
        { text: "Le taux plafond applicable aux exportations", correct: false },
        { text: "L'obligation d'adhérer à un centre de gestion agréé (CGA)", correct: false }
      ],
      explanation: "L'exigibilité détermine la période au titre de laquelle la TVA collectée doit être déclarée.",
      article: "Art. 269-2 du CGI"
    },
    {
      id: 7,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Territorialité",
      title: "Que signifie le principe de territorialité de la TVA en France ?",
      options: [
        { text: "La taxe ne s'applique qu'aux opérations localisées fiscalement sur le territoire métropolitain et Monaco", correct: true },
        { text: "Toute vente réalisée par un Français à l'étranger supporte la TVA française", correct: false },
        { text: "Les entreprises étrangères ne peuvent jamais être assujetties en France", correct: false },
        { text: "La TVA s'applique de plein droit à tous les pays de l'Union européenne sans frontière", correct: false }
      ],
      explanation: "La France métropolitaine et Monaco forment le territoire fiscal d'application de la TVA française.",
      article: "Art. 256-0 du CGI"
    },
    {
      id: 8,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Champ d'application",
      title: "Qu'est-ce qu'une opération située « hors champ » de la TVA ?",
      options: [
        { text: "Une opération non économique ou dépourvue de lien direct avec une contrepartie", correct: true },
        { text: "Une vente de marchandises soumise au taux réduit de 5,5 %", correct: false },
        { text: "Une livraison exonérée expressément par une disposition du CGI", correct: false },
        { text: "Un achat intracommunautaire autoliquidé", correct: false }
      ],
      explanation: "Les opérations hors champ (ex. : dividendes, indemnités compensatrices de préjudice) n'entrent pas dans le champ d'application.",
      article: "Art. 256 du CGI"
    },
    {
      id: 9,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Exonérations",
      title: "Quelle est la différence fondamentale entre être « exonéré » et être « hors champ » ?",
      options: [
        { text: "L'opération exonérée entre dans le champ de la TVA mais une loi dispense de son paiement", correct: true },
        { text: "L'opération exonérée permet toujours la déduction intégrale de la TVA d'amont", correct: false },
        { text: "Il n'y a aucune différence comptable ou déclarative", correct: false },
        { text: "L'opération hors champ doit figurer obligatoirement sur la déclaration CA3", correct: false }
      ],
      explanation: "L'exonération concerne une opération qui entre dans le champ de la taxe, mais qu'un texte légal dispense de taxation.",
      article: "Art. 261 du CGI"
    },
    {
      id: 10,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Sources du droit fiscal",
      title: "Quelle source de droit fiscal prime en cas de litige sur une directive européenne non transposée ?",
      options: [
        { text: "Le droit communautaire européen (CJUE)", correct: true },
        { text: "La doctrine administrative publiée sur le BOFiP", correct: false },
        { text: "La réponse ministérielle publiée au Journal officiel", correct: false },
        { text: "Une circulaire préfectorale", correct: false }
      ],
      explanation: "Dans la hiérarchie des normes, les traités et directives de l'Union européenne priment sur le droit interne.",
      article: "Hiérarchie des normes fiscales"
    },
    {
      id: 11,
      cat: "defs",
      catLabel: "Définitions",
      theme: "BOFiP",
      title: "Quelle est la portée juridique de la doctrine publiée au BOFiP-Impôts ?",
      options: [
        { text: "Elle est opposable par le contribuable à l'administration, même si elle contredit la loi", correct: true },
        { text: "Elle a une valeur purement indicative sans force juridique", correct: false },
        { text: "Elle ne s'applique qu'aux grandes entreprises cotées", correct: false },
        { text: "Elle peut être modifiée rétroactivement au détriment du redevable", correct: false }
      ],
      explanation: "Selon l'art. L. 80 A du LPF, l'administration ne peut pas redresser un contribuable qui a appliqué sa doctrine officielle publiée.",
      article: "Art. L. 80 A du LPF"
    },
    {
      id: 12,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Prescription fiscale",
      title: "Quel est le délai général de reprise (prescription) de l'administration fiscale pour la TVA et l'impôt sur les bénéfices ?",
      options: [
        { text: "Jusqu'à la fin de la 3e année suivant celle au titre de laquelle l'impôt est dû", correct: true },
        { text: "1 an à compter de la clôture des comptes", correct: false },
        { text: "10 ans sans condition préalable", correct: false },
        { text: "30 ans selon les règles de droit commun", correct: false }
      ],
      explanation: "Le délai normal de reprise expire au 31 décembre de la 3e année suivant celle de réalisation des opérations.",
      article: "Art. L. 169 et L. 176 du LPF"
    },
    {
      id: 13,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Régimes réels",
      title: "Quels sont les deux grands régimes réels d'imposition des bénéfices ?",
      options: [
        { text: "Le régime réel simplifié (RSI) et le régime réel normal (RN)", correct: true },
        { text: "Le forfait douanier et le micro-social", correct: false },
        { text: "La taxe d'apprentissage et la CFE", correct: false },
        { text: "L'option libératoire et le prélèvement forfaitaire unique", correct: false }
      ],
      explanation: "En matière de bénéfices (BIC/IS), les entreprises relèvent soit du Réel Simplifié, soit du Réel Normal.",
      article: "Art. 53 A et 302 septies A-bis du CGI"
    },
    {
      id: 14,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Actes anormaux",
      title: "Qu'est-ce qu'un « acte anormal de gestion » selon le Conseil d'État ?",
      options: [
        { text: "Un acte qui met une dépense ou une perte à la charge de l'entreprise sans intérêt pour l'exploitation", correct: true },
        { text: "Une faute comptable rectifiée lors de l'inventaire", correct: false },
        { text: "Un retard de dépôt de déclaration fiscale sanctionné de 10 %", correct: false },
        { text: "Une vente conclue avec un client en retard de paiement", correct: false }
      ],
      explanation: "L'acte anormal de gestion appauvrit l'entreprise au profit d'un tiers sans contrepartie conforme à son intérêt social.",
      article: "Jurisprudence Conseil d'État"
    },
    {
      id: 15,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Intérêts de retard",
      title: "Quel est le taux de l'intérêt de retard fiscal appliqué par l'administration en cas d'omission ou d'insuffisance ?",
      options: [
        { text: "0,20 % par mois (soit 2,40 % par an)", correct: true },
        { text: "1 % par quinzaine", correct: false },
        { text: "5 % forfaitaire par mois de décalage", correct: false },
        { text: "Le taux directeur de la Banque Centrale Européenne", correct: false }
      ],
      explanation: "L'intérêt de retard indemnise l'État pour l'indisponibilité des fonds au taux de 0,20 % mensuel.",
      article: "Art. 1727 du CGI"
    },
    {
      id: 16,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Majoration de retard",
      title: "Quelle est la majoration appliquée pour le dépôt tardif d'une déclaration en l'absence de mise en demeure ?",
      options: [
        { text: "10 % des droits dus", correct: true },
        { text: "40 % automatique", correct: false },
        { text: "80 % pour manquement délibéré", correct: false },
        { text: "Aucune majoration, seuls les intérêts courent", correct: false }
      ],
      explanation: "Le retard simple de production entraîne une majoration automatique de 10 % sur les droits exigibles.",
      article: "Art. 1728 du CGI"
    },
    {
      id: 17,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Abus de droit",
      title: "Comment l'administration fiscale sanctionne-t-elle la procédure d'abus de droit (art. L. 64 du LPF) ?",
      options: [
        { text: "Par l'inopposabilité du montage et une majoration fiscale portée à 80 %", correct: true },
        { text: "Par la dissolution immédiate de la personne morale", correct: false },
        { text: "Par une simple mise en garde écrite sans pénalité", correct: false },
        { text: "Par l'interdiction définitive d'exercer toute activité commerciale", correct: false }
      ],
      explanation: "L'abus de droit fiscal (montage fictif ou but exclusivement fiscal) est puni d'une majoration de 80 %.",
      article: "Art. L. 64 du LPF"
    },
    {
      id: 18,
      cat: "defs",
      catLabel: "Définitions",
      theme: "Régularisation spontanée",
      title: "Quel avantage accorde le droit à l'erreur (loi ESSOC) en cas de régularisation spontanée d'une omission fiscale ?",
      options: [
        { text: "Une réduction de 50 % du montant des intérêts de retard", correct: true },
        { text: "L'annulation totale du principal de la dette fiscale", correct: false },
        { text: "Le report d'imposition sur l'exercice comptable suivant", correct: false },
        { text: "Le remboursement immédiat de la TVA de l'exercice", correct: false }
      ],
      explanation: "En cas d'erreur de bonne foi spontanément déclarée, les intérêts de retard sont réduits de moitié.",
      article: "Art. L. 62 du LPF"
    },
    {
      id: 19,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Entreprise individuelle (EI)",
      title: "Quel est le régime d'imposition des bénéfices par défaut d'une Entreprise Individuelle (EI) commerciale ?",
      options: [
        { text: "L'impôt sur le revenu (IR) dans la catégorie des BIC", correct: true },
        { text: "L'impôt sur les sociétés (IS) au taux de 25 %", correct: false },
        { text: "La taxe sur la valeur ajoutée au réel normal", correct: false },
        { text: "L'impôt sur le revenu dans la catégorie des BNC", correct: false }
      ],
      explanation: "L'exploitant individuel est assujetti à l'IR par défaut sur son résultat commercial (BIC).",
      article: "Art. 14 et 34 du CGI"
    },
    {
      id: 20,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Option IS pour EI",
      title: "Depuis la réforme du statut d'entrepreneur individuel (2022), une EI peut-elle opter pour l'IS ?",
      options: [
        { text: "Oui, par assimilation à une EURL, l'EI peut opter pour son assujettissement à l'IS", correct: true },
        { text: "Non, une entreprise individuelle est irrévocablement liée à l'IR", correct: false },
        { text: "Oui, mais uniquement si son chiffre d'affaires dépasse 1 million d'euros", correct: false },
        { text: "Non, l'IS est strictement réservé aux sociétés anonymes", correct: false }
      ],
      explanation: "L'EI peut opter pour l'assimilation à une EURL et donc être soumise à l'impôt sur les sociétés.",
      article: "Art. 1655 sexies du CGI"
    },
    {
      id: 21,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Sociétés de capitaux",
      title: "Quelles sociétés relèvent de plein droit et obligatoirement de l'impôt sur les sociétés (IS) ?",
      options: [
        { text: "Les SARL, SAS, SA et SCA", correct: true },
        { text: "Les sociétés civiles immobilières (SCI) familiales", correct: false },
        { text: "Les sociétés en nom collectif (SNC) sans option", correct: false },
        { text: "Les micro-entreprises commerciales", correct: false }
      ],
      explanation: "Les sociétés de capitaux relèvent obligatoirement de l'IS de par leur statut juridique.",
      article: "Art. 206-1 du CGI"
    },
    {
      id: 22,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Rémunération du dirigeant",
      title: "Comment est traitée fiscalement la rémunération du gérant majoritaire d'une SARL à l'IS ?",
      options: [
        { text: "Elle est déductible du résultat de la SARL et imposée à l'IR chez le gérant (art. 62 du CGI)", correct: true },
        { text: "Elle n'est jamais déductible du bénéfice soumis à l'IS", correct: false },
        { text: "Elle est exonérée de tout impôt sur le revenu", correct: false },
        { text: "Elle est taxée directement à la TVA à 20 %", correct: false }
      ],
      explanation: "La rémunération allouée au gérant majoritaire est déductible du bénéfice de la société soumise à l'IS.",
      article: "Art. 62 et 211 du CGI"
    },
    {
      id: 23,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Bénéfice de l'exploitant individuel",
      title: "Le salaire que se verse un exploitant individuel à l'IR est-il déductible du résultat imposable ?",
      options: [
        { text: "Non, ce n'est pas une charge déductible, cela constitue une fraction de son bénéfice imposable", correct: true },
        { text: "Oui, il est déductible comme un salaire d'employé classique", correct: false },
        { text: "Oui, à hauteur maximale de 43 992 € par an", correct: false },
        { text: "Uniquement s'il a adhéré à une association de gestion agréée", correct: false }
      ],
      explanation: "À l'IR, l'exploitant et son entreprise font corps : ses prélèvements personnels ne sont pas des charges déductibles.",
      article: "Art. 39-1-1° du CGI"
    },
    {
      id: 24,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Taux réduit IS",
      title: "Quel est le taux réduit d'IS et à quel montant de bénéfice est-il plafonné ?",
      options: [
        { text: "15 % dans la limite de 42 500 € de bénéfice fiscal", correct: true },
        { text: "10 % dans la limite de 38 120 € de résultat", correct: false },
        { text: "15 % dans la limite de 100 000 € de résultat", correct: false },
        { text: "25 % dès le premier euro sans plafond", correct: false }
      ],
      explanation: "Le taux réduit d'IS de 15 % s'applique jusqu'à 42 500 € de bénéfice pour les PME éligibles.",
      article: "Art. 219-I-b du CGI"
    },
    {
      id: 25,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Conditions taux réduit IS",
      title: "Quelles conditions une PME doit-elle remplir pour bénéficier du taux réduit d'IS de 15 % ?",
      options: [
        { text: "CA HT < 10 millions d'euros et capital détenu à 75 % au moins par des personnes physiques", correct: true },
        { text: "Avoir moins de 5 salariés et aucune dette bancaire", correct: false },
        { text: "Réaliser 100 % de son activité à l'exportation", correct: false },
        { text: "Être cotée sur un marché réglementé européen", correct: false }
      ],
      explanation: "Le chiffre d'affaires doit être inférieur à 10 millions d'euros et le capital libéré détenu à 75 % par des personnes physiques.",
      article: "Art. 219-I-b du CGI"
    },
    {
      id: 26,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Taux normal IS",
      title: "Quel est le taux normal de l'impôt sur les sociétés (IS) actuellement en vigueur ?",
      options: [
        { text: "25 %", correct: true },
        { text: "28 %", correct: false },
        { text: "33,33 %", correct: false },
        { text: "31 %", correct: false }
      ],
      explanation: "Le taux normal d'impôt sur les sociétés est fixé à 25 %.",
      article: "Art. 219-I du CGI"
    },
    {
      id: 27,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Dividendes et PFU",
      title: "Quel est le taux global du Prélèvement Forfaitaire Unique (PFU / « Flat Tax ») sur les dividendes distribués ?",
      options: [
        { text: "30 % (12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux)", correct: true },
        { text: "15 % (7,5 % d'impôt + 7,5 % de CSG)", correct: false },
        { text: "33,33 % tout compris", correct: false },
        { text: "17,2 % sans impôt sur le revenu", correct: false }
      ],
      explanation: "Le PFU taxe forfaitairement les revenus de capitaux mobiliers à 30 % (12,8 % IR + 17,2 % PS).",
      article: "Art. 200 A du CGI"
    },
    {
      id: 28,
      cat: "ir_is",
      catLabel: "IR vs IS",
      theme: "Option barème progressif dividendes",
      title: "En cas d'option pour le barème progressif de l'IR au lieu du PFU, de quel abattement bénéficient les dividendes éligibles ?",
      options: [
        { text: "Un abattement de 40 % sur le montant brut perçu", correct: true },
        { text: "Un abattement forfaitaire de 10 % pour frais", correct: false },
        { text: "Un abattement forfaitaire de 71 %", correct: false },
        { text: "Aucun abattement n'est applicable", correct: false }
      ],
      explanation: "L'option globale pour le barème de l'IR ouvre droit à l'abattement de 40 % sur les dividendes distribués.",
      article: "Art. 158-3-2° du CGI"
    },
    {
      id: 29,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Plafond Micro-BIC Ventes",
      title: "Quel est le seuil de chiffre d'affaires HT pour le régime Micro-BIC (achats-revente de biens) ?",
      options: [
        { text: "188 700 € HT", correct: true },
        { text: "77 700 € HT", correct: false },
        { text: "36 800 € HT", correct: false },
        { text: "85 000 € HT", correct: false }
      ],
      explanation: "Le seuil d'application du régime micro-BIC pour les activités de ventes de marchandises est de 188 700 € HT.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 30,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Plafond Micro-BIC Services",
      title: "Quel est le seuil de chiffre d'affaires HT pour le régime Micro-BIC en prestations de services ?",
      options: [
        { text: "77 700 € HT", correct: true },
        { text: "188 700 € HT", correct: false },
        { text: "36 800 € HT", correct: false },
        { text: "91 900 € HT", correct: false }
      ],
      explanation: "Pour les prestations de services commerciales ou artisanales (BIC), le seuil du micro est fixé à 77 700 € HT.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 31,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Abattement forfaitaire Micro-BIC Ventes",
      title: "Quel est l'abattement représentatif de frais professionnels en Micro-BIC pour une activité commerciale de ventes ?",
      options: [
        { text: "71 % (le bénéfice taxable est égal à 29 % du CA)", correct: true },
        { text: "50 % (le bénéfice taxable est égal à 50 % du CA)", correct: false },
        { text: "34 % (le bénéfice taxable est égal à 66 % du CA)", correct: false },
        { text: "10 % avec un minimum légal", correct: false }
      ],
      explanation: "L'administration applique un abattement forfaitaire de 71 % pour les activités d'achat-revente.",
      article: "Art. 50-0-1 du CGI"
    },
    {
      id: 32,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Abattement forfaitaire Micro-BIC Services",
      title: "Quel est l'abattement forfaitaire appliqué en Micro-BIC pour les prestations de services commerciales ?",
      options: [
        { text: "50 % (le bénéfice imposable est égal à 50 % du CA)", correct: true },
        { text: "71 %", correct: false },
        { text: "34 %", correct: false },
        { text: "25 %", correct: false }
      ],
      explanation: "Pour les prestations de services relevant des BIC, l'abattement forfaitaire est de 50 %.",
      article: "Art. 50-0-1 du CGI"
    },
    {
      id: 33,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Minimum d'abattement",
      title: "Quel est le montant minimum d'abattement forfaitaire accordé en régime Micro-BIC ?",
      options: [
        { text: "305 €", correct: true },
        { text: "150 €", correct: false },
        { text: "500 €", correct: false },
        { text: "1 000 €", correct: false }
      ],
      explanation: "L'abattement ne peut pas être inférieur à 305 € (sauf si le CA déclaré est nul).",
      article: "Art. 50-0-1 du CGI"
    },
    {
      id: 34,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Déduction des charges en micro",
      title: "Un micro-entrepreneur peut-il déduire ses factures réelles de loyer, d'achat ou de publicité ?",
      options: [
        { text: "Non, l'abattement forfaitaire est réputé couvrir la totalité des charges réelles engagées", correct: true },
        { text: "Oui, si le total dépasse le montant de l'abattement forfaitaire", correct: false },
        { text: "Oui, sur option expresse formulée lors du dépôt de la déclaration", correct: false },
        { text: "Uniquement pour les achats de véhicules utilitaires", correct: false }
      ],
      explanation: "Le régime micro exclut toute déduction de dépenses réelles ; seule la déduction forfaitaire s'applique.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 35,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Option pour le régime réel",
      title: "Quelle est la durée de validité de l'option pour un régime réel formulée par une entreprise en micro-BIC ?",
      options: [
        { text: "1 an, reconductible tacitement chaque année", correct: true },
        { text: "5 ans irrévocables", correct: false },
        { text: "3 ans sans retour possible en arrière", correct: false },
        { text: "Le temps de l'exercice comptable en cours uniquement", correct: false }
      ],
      explanation: "L'option pour le régime réel est valable un an et se reconduit tacitement pour un an.",
      article: "Art. 50-0-4 du CGI"
    },
    {
      id: 36,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Comptabilité en régime réel",
      title: "Quelle obligation comptable majeure distingue le régime réel d'imposition du régime micro-BIC ?",
      options: [
        { text: "Tenir une comptabilité d'engagement complète avec bilan, compte de résultat et annexes", correct: true },
        { text: "Tenir un simple registre chronologique des recettes encaissées", correct: false },
        { text: "Déposer uniquement un relevé bancaire trimestriel", correct: false },
        { text: "Publier ses comptes au greffe sous 48 heures", correct: false }
      ],
      explanation: "Le régime réel impose la tenue d'une comptabilité commerciale conforme au Plan Comptable Général (PCG).",
      article: "Art. 53 A du CGI et PCG"
    },
    {
      id: 37,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Liasses fiscales réelles",
      title: "Quel formulaire de liasse fiscale correspond au régime Réel Simplifié d'imposition (BIC) ?",
      options: [
        { text: "Liasse 2033 (tableaux 2033-A à 2033-G)", correct: true },
        { text: "Liasse 2050 à 2059 (régime normal)", correct: false },
        { text: "Formulaire 2042-C Pro", correct: false },
        { text: "Déclaration CA12", correct: false }
      ],
      explanation: "La liasse 2033 est spécifique au régime réel simplifié, tandis que la 2050 correspond au réel normal.",
      article: "Art. 302 septies A-bis du CGI"
    },
    {
      id: 38,
      cat: "micro_reel",
      catLabel: "Micro & Réels",
      theme: "Dépassement de seuil micro",
      title: "Que se passe-t-il la première année où une entreprise dépasse le seuil de chiffre d'affaires du micro-BIC ?",
      options: [
        { text: "Le régime micro est maintenu pendant l'année en cours et l'année suivante (période de tolérance)", correct: true },
        { text: "Elle bascule immédiatement au régime réel dès le premier jour du mois suivant", correct: false },
        { text: "Elle doit acquitter une amende fiscale de 1 500 €", correct: false },
        { text: "L'abattement forfaitaire est automatiquement divisé par deux", correct: false }
      ],
      explanation: "Le régime micro-BIC continue de s'appliquer la première année de dépassement des seuils de référence.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 39,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Franchise en base - Seuil de base ventes",
      title: "Quel est le seuil normal de franchise en base de TVA pour les ventes de marchandises ?",
      options: [
        { text: "85 000 €", correct: true },
        { text: "93 500 €", correct: false },
        { text: "37 500 €", correct: false },
        { text: "188 700 €", correct: false }
      ],
      explanation: "Le seuil de base d'exonération en franchise est fixé à 85 000 € pour les livraisons de biens.",
      article: "Art. 293 B du CGI"
    },
    {
      id: 40,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Franchise en base - Seuil majoré ventes",
      title: "Que provoque le dépassement du seuil majoré de franchise en base (93 500 € pour les ventes) ?",
      options: [
        { text: "L'assujettissement immédiat à la TVA dès le premier jour du mois de dépassement", correct: true },
        { text: "Le maintien de l'exonération jusqu'au 31 décembre de l'année", correct: false },
        { text: "Une régularisation sur l'ensemble du chiffre d'affaires depuis le 1er janvier", correct: false },
        { text: "L'obligation de transformer l'entreprise en société anonyme", correct: false }
      ],
      explanation: "En cas de franchissement du seuil majoré, la TVA devient exigible dès le premier jour du mois de dépassement.",
      article: "Art. 293 B-IV du CGI"
    },
    {
      id: 41,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Franchise en base - Mention obligatoire",
      title: "Quelle mention obligatoire doit figurer sur les factures d'une entreprise bénéficiant de la franchise en base de TVA ?",
      options: [
        { text: "« TVA non applicable, art. 293 B du CGI »", correct: true },
        { text: "« Exonération de taxe sous douane »", correct: false },
        { text: "« TVA récupérable en fin d'exercice comptable »", correct: false },
        { text: "« Auto-liquidation de la TVA par le client »", correct: false }
      ],
      explanation: "L'article 242 nonies A de l'annexe II au CGI prescrit cette mention expresse sur chaque facture émise.",
      article: "Art. 293 B du CGI"
    },
    {
      id: 42,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Déduction en franchise",
      title: "Une entreprise placée sous le régime de la franchise en base peut-elle déduire la TVA supportée sur ses achats ?",
      options: [
        { text: "Non, elle ne peut opérer aucune déduction de la taxe ayant grevé ses achats ou immobilisations", correct: true },
        { text: "Oui, sur présentation de factures régulières", correct: false },
        { text: "Oui, si le montant de TVA déductible dépasse 1 000 €", correct: false },
        { text: "Uniquement sur les investissements en matériel informatique", correct: false }
      ],
      explanation: "La contrepartie de la non-facturation de TVA est l'interdiction formelle de récupérer la taxe d'amont.",
      article: "Art. 293 E du CGI"
    },
    {
      id: 43,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Déclaration CA12",
      title: "Quelle est la déclaration annuelle déposée au titre du régime simplifié de TVA (RSI) ?",
      options: [
        { text: "La déclaration CA12 (ou CA12E en cas d'exercice décalé)", correct: true },
        { text: "La déclaration CA3", correct: false },
        { text: "La déclaration 2042-C", correct: false },
        { text: "L'état 2058-A", correct: false }
      ],
      explanation: "Le régime simplifié de TVA fonctionne avec le dépôt d'une déclaration récapitulative annuelle CA12.",
      article: "Art. 287-3 du CGI"
    },
    {
      id: 44,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Acomptes semestriels RSI",
      title: "Quel est le rythme de versement des acomptes provisionnels de TVA sous le régime simplifié (CA12) ?",
      options: [
        { text: "Deux acomptes semestriels versés en juillet (55 %) et en décembre (40 %)", correct: true },
        { text: "Quatre acomptes trimestriels égaux de 25 %", correct: false },
        { text: "Un prélèvement mensuel automatique constant", correct: false },
        { text: "Aucun acompte : la totalité est payée lors de la déclaration annuelle", correct: false }
      ],
      explanation: "Les acomptes de TVA simplifiée sont appelés en juillet (55 %) et en décembre (40 %) sur la base de la taxe due N-1.",
      article: "Art. 287 du CGI"
    },
    {
      id: 45,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Dispense d'acomptes RSI",
      title: "À partir de quel seuil minimal de taxe due sur l'exercice précédent les acomptes de TVA du RSI sont-ils obligatoires ?",
      options: [
        { text: "1 000 € (en dessous de 1 000 € de taxe annuelle, aucun acompte n'est exigé)", correct: true },
        { text: "500 €", correct: false },
        { text: "2 500 €", correct: false },
        { text: "5 000 €", correct: false }
      ],
      explanation: "Si la TVA due de l'exercice précédent est inférieure à 1 000 €, l'entreprise ne paie aucun acompte et règle en une fois sur la CA12.",
      article: "Art. 287-3 du CGI"
    },
    {
      id: 46,
      cat: "tva",
      catLabel: "Régimes TVA",
      theme: "Déclaration CA3",
      title: "Quel est le principe de déclaration de TVA sous le régime réel normal (RN) ?",
      options: [
        { text: "Le dépôt mensuel d'une déclaration CA3 récapitulant les opérations du mois écoulé", correct: true },
        { text: "Une déclaration annuelle unique déposée en mai", correct: false },
        { text: "Deux déclarations semestrielles sans acompte", correct: false },
        { text: "Un paiement forfaitaire annuel validé par le commissaire aux comptes", correct: false }
      ],
      explanation: "Le régime réel normal repose sur la souscription mensuelle de la déclaration n° 3310-CA3.",
      article: "Art. 287-1 du CGI"
    },
    {
      id: 47,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul du bénéfice Micro-BIC Ventes",
      title: "Une entreprise réalise 120 000 € de CA HT en vente de marchandises. Quel est son bénéfice imposable au Micro-BIC ?",
      options: [
        { text: "34 800 € (120 000 × 29 %)", correct: true },
        { text: "85 200 € (120 000 × 71 %)", correct: false },
        { text: "60 000 € (120 000 × 50 %)", correct: false },
        { text: "120 000 € sans abattement", correct: false }
      ],
      explanation: "Abattement de 71 % = base taxable de 29 % : 120 000 × 0,29 = 34 800 €.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 48,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul du bénéfice Micro-BIC Services",
      title: "Un artisan en prestations de services réalise 46 000 € de CA HT. Quel est son bénéfice imposable ?",
      options: [
        { text: "23 000 € (46 000 × 50 %)", correct: true },
        { text: "13 340 € (46 000 × 29 %)", correct: false },
        { text: "30 360 € (46 000 × 66 %)", correct: false },
        { text: "41 400 € (46 000 × 90 %)", correct: false }
      ],
      explanation: "Abattement prestations de services = 50 % : 46 000 × 0,50 = 23 000 €.",
      article: "Art. 50-0 du CGI"
    },
    {
      id: 49,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul de TVA nette due",
      title: "Au cours du mois : TVA collectée = 14 500 €, TVA déductible sur ABS = 8 200 €, TVA déductible sur immo = 2 100 €. Quelle est la TVA due ?",
      options: [
        { text: "4 200 € (14 500 - 8 200 - 2 100)", correct: true },
        { text: "6 300 € (14 500 - 8 200)", correct: false },
        { text: "24 800 €", correct: false },
        { text: "Crédit de TVA de 4 200 €", correct: false }
      ],
      explanation: "TVA nette = TVA collectée - TVA déductible sur biens et services - TVA déductible sur immobilisations = 14 500 - 10 300 = 4 200 €.",
      article: "Art. 271 du CGI"
    },
    {
      id: 50,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul de crédit de TVA",
      title: "TVA collectée = 6 000 €, TVA déductible sur ABS = 5 400 €, TVA déductible sur immo = 3 000 €. Quelle est la situation ?",
      options: [
        { text: "Crédit de TVA de 2 400 €", correct: true },
        { text: "TVA à décaisser de 2 400 €", correct: false },
        { text: "TVA à décaisser de 600 €", correct: false },
        { text: "Crédit de TVA de 600 €", correct: false }
      ],
      explanation: "TVA collectée (6 000) - TVA déductible totale (8 400) = -2 400 €, soit un crédit de TVA.",
      article: "Art. 271-IV du CGI"
    },
    {
      id: 51,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul de l'IS PME",
      title: "Une PME éligible au taux réduit réalise un résultat fiscal de 60 000 €. Quel est le montant de son IS ?",
      options: [
        { text: "10 750 € (42 500 × 15 % + 17 500 × 25 %)", correct: true },
        { text: "15 000 € (60 000 × 25 %)", correct: false },
        { text: "9 000 € (60 000 × 15 %)", correct: false },
        { text: "12 500 €", correct: false }
      ],
      explanation: "Tranche à 15 % : 42 500 × 15 % = 6 375 €. Tranche à 25 % : (60 000 - 42 500) × 25 % = 4 375 €. Total = 10 750 €.",
      article: "Art. 219 du CGI"
    },
    {
      id: 52,
      cat: "calculs",
      catLabel: "Calculs express",
      theme: "Calcul du PFU",
      title: "Un associé personne physique perçoit 10 000 € de dividendes bruts soumis au PFU. Quel est le montant net perçu après imposition ?",
      options: [
        { text: "7 000 € (10 000 € - 30 % de PFU)", correct: true },
        { text: "8 720 €", correct: false },
        { text: "8 280 €", correct: false },
        { text: "6 000 €", correct: false }
      ],
      explanation: "PFU = 30 % (3 000 € retenus à la source par la société) : le montant net crédité est de 7 000 €.",
      article: "Art. 200 A du CGI"
    }
  ],

  flashcards: [
    { cat: "Définition", front: "Qu'est-ce que l'Assiette de l'impôt ?", back: "La <b>base matérielle ou financière</b> (bénéfice net, chiffre d'affaires, valeur d'un bien) sur laquelle est appliqué le taux d'imposition." },
    { cat: "Définition", front: "Qu'est-ce que la Liquidation de l'impôt ?", back: "Le <b>calcul arithmétique</b> déterminant la somme due au Trésor public : <code>Montant = Assiette × Taux</code>." },
    { cat: "Définition", front: "Qu'est-ce que le Recouvrement de l'impôt ?", back: "L'ensemble des procédures administratives et comptables permettant <b>l'encaissement effectif</b> de la taxe due." },
    { cat: "Définition", front: "Qu'est-ce que le Fait générateur ?", back: "L'événement juridique ou matériel (ex. : livraison, encaissement) qui <b>fait naître la créance fiscale</b> au profit de l'État." },
    { cat: "Définition", front: "Qu'est-ce que l'Exigibilité de la TVA ?", back: "Le moment à partir duquel le Trésor public est en droit de <b>réclamer le paiement</b> de la taxe au redevable." },
    { cat: "Micro-BIC", front: "Quel est l'abattement forfaitaire pour les Ventes de marchandises ?", back: "<b>71 % d'abattement forfaitaire</b>. L'exploitant est donc imposé sur <b>29 % de son chiffre d'affaires HT</b>." },
    { cat: "Micro-BIC", front: "Quel est l'abattement forfaitaire pour les Prestations de services ?", back: "<b>50 % d'abattement forfaitaire</b>. L'exploitant est imposé sur <b>50 % de son chiffre d'affaires HT</b>." },
    { cat: "Micro-BIC", front: "Quel est le minimum d'abattement forfaitaire en Micro-BIC ?", back: "Il est fixé à <b>305 €</b> (sauf si le chiffre d'affaires déclaré est nul)." },
    { cat: "Micro-BIC", front: "Peut-on déduire ses charges réelles en Micro-BIC ?", back: "<b>NON, JAMAIS !</b> L'abattement forfaitaire remplace obligatoirement l'ensemble des frais réels supportés." },
    { cat: "Franchise TVA", front: "Quels sont les seuils de franchise en base (Ventes de biens) ?", back: "• Seuil normal : <b>85 000 €</b><br>• Seuil majoré limite : <b>93 500 €</b>." },
    { cat: "Franchise TVA", front: "Quelle mention obligatoire doit figurer sur les factures en franchise ?", back: "<code>« TVA non applicable, art. 293 B du CGI »</code>" },
    { cat: "Franchise TVA", front: "Peut-on déduire la TVA sur achats lorsqu'on est en franchise en base ?", back: "<b>NON !</b> Ne collectant pas la TVA sur ses ventes, l'entreprise ne peut récupérer aucune TVA d'amont." },
    { cat: "TVA RSI", front: "Quelle est la déclaration annuelle de TVA sous le régime simplifié ?", back: "La déclaration annuelle <b>CA12</b> (ou CA12E si exercice comptable décalé)." },
    { cat: "TVA RSI", front: "À quelles dates et pour quels montants verse-t-on les acomptes de TVA du RSI ?", back: "• <b>Juillet :</b> 55 % de la TVA due N-1<br>• <b>Décembre :</b> 40 % de la TVA due N-1." },
    { cat: "TVA RN", front: "Quelle est la déclaration déposée au régime Réel Normal de TVA ?", back: "La déclaration mensuelle <b>CA3</b> télétransmise au fisc chaque mois." },
    { cat: "IS", front: "Quel est le taux réduit d'IS et à quel plafond s'applique-t-il ?", back: "Taux réduit de <b>15 %</b> réservé aux PME éligibles sur la tranche de bénéfice allant jusqu'à <b>42 500 €</b>." },
    { cat: "IS", front: "Quel est le taux normal de l'impôt sur les sociétés (IS) ?", back: "Le taux normal d'IS est fixé à <b>25 %</b> pour toutes les entreprises." },
    { cat: "IR vs IS", front: "Le salaire prélevé par l'exploitant individuel (IR) est-il déductible ?", back: "<b>NON !</b> L'exploitant individuel et son entreprise forment une seule entité fiscale. Ses prélèvements relèvent du bénéfice net." },
    { cat: "Dividendes", front: "Quel est le taux global du Prélèvement Forfaitaire Unique (PFU) ?", back: "<b>30 %</b> tout compris (12,8 % d'impôt sur le revenu + 17,2 % de prélèvements sociaux)." },
    { cat: "Droit fiscal", front: "Quelle est la portée du BOFiP-Impôts pour le contribuable ?", back: "La doctrine administrative publiée est <b>pleinement opposable au fisc</b> par le contribuable (art. L. 80 A du LPF)." }
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
            <i class="fa-solid fa-book-open text-indigo-400"></i> Chapitre 1 : Veille fiscale, régimes d'imposition (IR vs IS, Micro-BIC) & TVA
          </h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Synthèse intégrale : étapes de l'imposition, distinction IR/IS, régimes de bénéfice et règles de TVA.</p>
        </div>
        <button onclick="window.print()" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-2 border border-slate-700">
          <i class="fa-solid fa-print"></i> Imprimer / PDF
        </button>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-slate-300">
        <h4 class="text-base font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-xs">1</span> Les trois étapes techniques de l'imposition
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">1. L'Assiette</b>
            <p>Constatation et évaluation de la matière imposable (chiffre d'affaires, résultat fiscal, patrimoine).</p>
          </div>
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">2. La Liquidation</b>
            <p>Calcul arithmétique de la dette fiscale par application du tarif légal à la base d'imposition.</p>
          </div>
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800">
            <b class="text-white block mb-1">3. Le Recouvrement</b>
            <p>Ensemble des procédures matérielles permettant le paiement effectif au comptable du Trésor.</p>
          </div>
        </div>
      </div>

      <div class="space-y-4 text-xs sm:text-sm text-slate-300">
        <h4 class="text-base font-extrabold text-indigo-300 uppercase tracking-wider flex items-center gap-2">
          <span class="w-6 h-6 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-xs">2</span> Régimes d'imposition des bénéfices : IR vs IS
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2">
            <b class="text-amber-300 block">Impôt sur le Revenu (IR)</b>
            <p>• Applicable de plein droit à l'Entreprise Individuelle (EI) et aux sociétés de personnes (SNC).</p>
            <p>• Rémunération de l'exploitant non déductible : le bénéfice total est imposé au barème progressif de l'IR.</p>
          </div>
          <div class="p-4 bg-slate-850 rounded-2xl border border-slate-800 space-y-2">
            <b class="text-indigo-300 block">Impôt sur les Sociétés (IS)</b>
            <p>• De plein droit pour les SARL, SAS, SA. Option possible pour l'EI depuis 2022.</p>
            <p>• Rémunération des dirigeants déductible du bénéfice imposable de la société.</p>
            <p>• Taux : 15 % jusqu'à 42 500 € pour les PME éligibles, 25 % au-delà.</p>
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
