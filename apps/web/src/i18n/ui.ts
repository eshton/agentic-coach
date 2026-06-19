export const languages = {
  en: "English",
  hu: "Magyar",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

/** Constant across locales. */
export const brand = "Agoston Fung";
export const monogram = "ÁF";

/** All site copy, keyed by locale. */
export const ui = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Agoston Fung — Agentic engineering for teams",
      description:
        "I help engineering teams turn the AI tools they already bought into velocity they can measure.",
    },
    nav: {
      problem: "What I find",
      method: "How I work",
      work: "Work with me",
      cta: "Book a call",
    },
    hero: {
      eyebrow: "Agentic engineering · London",
      headline:
        "I help engineering teams turn the AI tools they already bought into velocity you can <mark>measure</mark>.",
      subhead:
        "I’m Agoston. I spend a few weeks embedded with your team, rebuild how you work with coding agents, and leave you faster — with the numbers to prove it.",
      ctaPrimary: "Book a readiness call",
      ctaSecondary: "See how I work",
      sign: "Agoston",
      portraitCaption: "Agoston Fung — London",
    },
    problem: {
      eyebrow: "What I usually find",
      title: "The tools arrived. The change didn’t.",
      items: [
        {
          title: "Tools everywhere, gains nowhere",
          body: "Everyone has Copilot or Cursor open. The velocity chart looks like last year’s. You bought tools; nobody changed how the team actually works.",
        },
        {
          title: "Quality slips quietly",
          body: "Agent code lands faster than anyone can review it well. Small defects and inconsistent patterns pile up exactly where no one is looking.",
        },
        {
          title: "Your best people improvise alone",
          body: "Your strongest engineers have private tricks that genuinely work. None of it is written down, measured, or shared with the rest of the team.",
        },
      ],
    },
    method: {
      eyebrow: "How I work",
      title: "Two simple models do the heavy lifting.",
      lede: "No slide deck, no abstract framework worship. I teach a loop your engineers run every day, and I show you honestly where you stand on the ladder.",
      loopSub: "The loop I teach",
      loop: [
        ["Spec", "Frame the work so an agent can actually execute it."],
        ["Delegate", "Break it down and hand off — right agent, right scope."],
        ["Review", "Read agent output critically and fast, no rubber-stamping."],
        ["Verify", "Prove it works with tests and checks, not vibes."],
        ["Codify", "Turn what worked into shared, durable team practice."],
      ],
      ladderSub: "Where teams stand",
      levels: [
        ["L0", "Shadow AI", "Ad hoc, individual, invisible to the org."],
        ["L1", "Assisted", "Autocomplete everywhere, no shared workflow."],
        ["L2", "Delegated", "Agents own scoped tasks under human review."],
        ["L3", "Orchestrated", "Multi-step agentic workflows, measured and trusted."],
        ["L4", "Agent-native", "The team is built around agents, end to end."],
      ],
    },
    work: {
      eyebrow: "Work with me",
      title: "Three ways in. They build on each other.",
      items: [
        {
          tag: "Start here",
          name: "Readiness Audit",
          span: "1–2 weeks · fixed fee",
          body: "I assess your codebase, tooling, workflows, and team, then hand you a scored maturity report and a prioritized roadmap — and an honest answer to “where are we actually losing the gains?”",
        },
        {
          tag: "The core of it",
          name: "Transformation Sprint",
          span: "4–8 weeks · embedded",
          body: "I embed with your team, rebuild your agentic workflow on real work, run hands-on sessions, and install the practices that stick. We measure velocity and quality before and after.",
        },
        {
          tag: "Staying sharp",
          name: "Fractional Advisory",
          span: "Monthly",
          body: "Office hours, architecture reviews, and a steady hand keeping your team current as the tooling shifts under everyone’s feet — which it will, every month.",
        },
      ],
    },
    about: {
      eyebrow: "A bit about me",
      title: "Why me",
      body: "I’m a software engineer based in London, working at the edge of agent-driven development. <strong>[Placeholder]</strong> — send me your background, the roles that matter, and the wins you’d want a VP of Engineering to know, and I’ll write this section the way it deserves.",
    },
    contact: {
      eyebrow: "Let’s talk",
      title: "Find out where your team really stands.",
      lede: "Book a 30-minute call with me — not a sales team. We’ll figure out where the AI gains are leaking, and whether I’m the right person to help.",
      cta: "Book a readiness call",
      sign: "— Agoston",
    },
    footer: {
      note: "Agentic engineering, done deliberately.",
    },
  },

  hu: {
    htmlLang: "hu",
    meta: {
      title: "Fung Ágoston — Agentikus mérnöki munka csapatoknak",
      description:
        "Segítek a mérnöki csapatoknak a már megvásárolt AI-eszközöket mérhető sebességgé alakítani.",
    },
    nav: {
      problem: "Amit látok",
      method: "Hogyan dolgozom",
      work: "Együttműködés",
      cta: "Foglalj hívást",
    },
    hero: {
      eyebrow: "Agentikus mérnöki munka · London",
      headline:
        "Segítek a mérnöki csapatoknak a már megvásárolt AI-eszközöket <mark>mérhető</mark> sebességgé alakítani.",
      subhead:
        "Ágoston vagyok. Néhány hetet a csapatoddal töltök beágyazva, újraépítem, ahogyan a kódoló ágensekkel dolgoztok, és gyorsabban hagylak ott — adatokkal igazolva.",
      ctaPrimary: "Foglalj felmérő hívást",
      ctaSecondary: "Nézd meg, hogyan dolgozom",
      sign: "Ágoston",
      portraitCaption: "Fung Ágoston — London",
    },
    problem: {
      eyebrow: "Amit általában találok",
      title: "Az eszközök megérkeztek. A változás nem.",
      items: [
        {
          title: "Eszköz mindenhol, nyereség sehol",
          body: "Mindenkinél fut a Copilot vagy a Cursor. A sebességmutató olyan, mint tavaly. Az eszközöket megvettétek; senki sem változtatott azon, ahogy a csapat valójában dolgozik.",
        },
        {
          title: "A minőség csendben csúszik",
          body: "Az ágens kódja gyorsabban érkezik, mint ahogy bárki rendesen átnézhetné. Apró hibák és következetlen minták gyűlnek pont ott, ahová senki sem néz.",
        },
        {
          title: "A legjobbak egyedül improvizálnak",
          body: "A legerősebb mérnökeidnek vannak privát trükkjeik, amelyek valóban működnek. Ebből semmi sincs leírva, megmérve vagy megosztva a csapat többi részével.",
        },
      ],
    },
    method: {
      eyebrow: "Hogyan dolgozom",
      title: "Két egyszerű modell végzi a nehéz munkát.",
      lede: "Nincs diavetítés, nincs absztrakt keretrendszer-imádat. Megtanítok egy hurkot, amelyet a mérnökeid naponta futtatnak, és őszintén megmutatom, hol álltok a létrán.",
      loopSub: "A hurok, amit tanítok",
      loop: [
        ["Specifikálás", "Úgy fogalmazd meg a feladatot, hogy egy ágens valóban végre tudja hajtani."],
        ["Delegálás", "Bontsd fel és add át — megfelelő ágens, megfelelő lépték."],
        ["Átnézés", "Olvasd kritikusan és gyorsan az ágens kimenetét, gumibélyegző nélkül."],
        ["Ellenőrzés", "Bizonyítsd tesztekkel és ellenőrzésekkel, hogy működik — ne megérzésből."],
        ["Rögzítés", "Alakítsd a bevált megoldásokat közös, tartós csapatgyakorlattá."],
      ],
      ladderSub: "Hol tartanak a csapatok",
      levels: [
        ["L0", "Árnyék-AI", "Eseti, egyéni, a szervezet számára láthatatlan."],
        ["L1", "Támogatott", "Mindenhol automatikus kiegészítés, közös munkafolyamat nélkül."],
        ["L2", "Delegált", "Az ágensek behatárolt feladatokat birtokolnak emberi felügyelet mellett."],
        ["L3", "Vezényelt", "Többlépéses agentikus munkafolyamatok, mérve és megbízva."],
        ["L4", "Ágens-natív", "A csapat az ágensek köré épül, elejétől a végéig."],
      ],
    },
    work: {
      eyebrow: "Együttműködés",
      title: "Három belépési pont. Egymásra épülnek.",
      items: [
        {
          tag: "Itt kezdd",
          name: "Felkészültségi audit",
          span: "1–2 hét · fix díj",
          body: "Felmérem a kódbázist, az eszközöket, a munkafolyamatokat és a csapatot, majd átadok egy pontozott érettségi jelentést és egy priorizált ütemtervet — és egy őszinte választ arra, hogy „hol veszítjük el valójában a nyereséget?”",
        },
        {
          tag: "A lényeg",
          name: "Átalakító sprint",
          span: "4–8 hét · beágyazott",
          body: "Beágyazódom a csapatba, valós munkán építem újra az agentikus munkafolyamatot, gyakorlati alkalmakat tartok, és beépítem a megmaradó gyakorlatokat. A sebességet és a minőséget előtte-utána mérjük.",
        },
        {
          tag: "Naprakészen",
          name: "Frakcionált tanácsadás",
          span: "Havonta",
          body: "Fogadóórák, architektúra-átnézések és egy biztos kéz, amely naprakészen tartja a csapatot, miközben az eszközök folyamatosan változnak mindenki lába alatt — márpedig változni fognak, minden hónapban.",
        },
      ],
    },
    about: {
      eyebrow: "Pár szó rólam",
      title: "Miért én",
      body: "Londonban élő szoftvermérnök vagyok, aki az ágensvezérelt fejlesztés élvonalában dolgozik. <strong>[Helykitöltő]</strong> — küldd el a hátteredet, a fontos szerepeket és azokat az eredményeket, amelyekről egy mérnöki vezetőnek tudnia kell, és úgy írom meg ezt a részt, ahogy megérdemli.",
    },
    contact: {
      eyebrow: "Beszéljünk",
      title: "Tudd meg, hol tart valójában a csapatod.",
      lede: "Foglalj egy 30 perces hívást velem — nem egy értékesítési csapattal. Kiderítjük, hol szivárog el az AI-nyereség, és hogy én vagyok-e a megfelelő ember a segítségre.",
      cta: "Foglalj felmérő hívást",
      sign: "— Ágoston",
    },
    footer: {
      note: "Agentikus mérnöki munka, tudatosan.",
    },
  },
} as const;
