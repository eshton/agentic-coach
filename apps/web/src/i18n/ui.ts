export const languages = {
  en: "English",
  hu: "Magyar",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

/** All site copy, keyed by locale. Brand name stays constant across locales. */
export const brand = "Agentic Coach";

export const ui = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Agentic Coach — Turn AI adoption into engineering velocity",
      description:
        "Most teams bought the AI tools but never moved the velocity chart. I help engineering organizations close the gap between AI adoption and real, measurable impact.",
    },
    nav: {
      problem: "The problem",
      method: "The method",
      work: "Work with me",
      cta: "Book a readiness call",
    },
    hero: {
      eyebrow: "Agentic engineering for teams",
      line1: "Your team adopted AI.",
      line2: "Your velocity didn’t move.",
      line3: "I fix that.",
      lede: "Most engineering orgs bought the tools and never changed how they work. I help teams close the gap between AI <em>adoption</em> and real, measurable <em>impact</em> — with the velocity and quality data to prove it.",
      ctaPrimary: "Book a readiness call",
      ctaSecondary: "See the method",
    },
    problem: {
      eyebrow: "The problem",
      title: "The tools showed up. The transformation didn’t.",
      items: [
        {
          title: "Adoption ≠ impact",
          body: "Every engineer has Copilot or Cursor open. The velocity chart looks exactly like it did last year. The tools got bought; the workflow never changed.",
        },
        {
          title: "Quality drifts",
          body: "Agent-generated code lands faster than anyone can review it well. Subtle defects, inconsistent patterns, and review fatigue creep in unnoticed.",
        },
        {
          title: "Everyone improvises",
          body: "Your strongest engineers have figured out private tricks. None of it is shared, measured, or repeatable across the team.",
        },
      ],
    },
    method: {
      eyebrow: "The method",
      title: "A repeatable system, not a pep talk.",
      lede: "Every engagement runs on two simple models: a loop your engineers run daily, and a maturity ladder that tells us where you are and where you’re going.",
      loopSub: "The delegation loop",
      loop: [
        ["Spec", "Frame work so an agent can actually execute it."],
        ["Delegate", "Decompose and hand off — to the right agent, at the right scope."],
        ["Review", "Read agent output critically, fast, without rubber-stamping."],
        ["Verify", "Prove it works with tests and checks, not vibes."],
        ["Codify", "Turn what worked into shared, durable team practice."],
      ],
      ladderSub: "The agentic maturity ladder",
      levels: [
        ["L0", "Shadow AI", "Ad hoc, individual, invisible to the org."],
        ["L1", "Assisted", "Autocomplete everywhere, no shared workflow."],
        ["L2", "Delegated", "Agents own scoped tasks under human review."],
        ["L3", "Orchestrated", "Multi-step agentic workflows, measured and trusted."],
        ["L4", "Agent-native", "The org is designed around agents end to end."],
      ],
    },
    work: {
      eyebrow: "Work with me",
      title: "Three ways in. They build on each other.",
      items: [
        {
          tag: "Start here",
          name: "Agentic Readiness Audit",
          span: "1–2 weeks · fixed fee",
          body: "I assess your codebase, tooling, workflows, and team. You get a scored maturity report and a prioritized roadmap — and a clear-eyed answer to “where are we actually losing the gains?”",
        },
        {
          tag: "Core engagement",
          name: "Team Transformation Sprint",
          span: "4–8 weeks · embedded",
          body: "I embed with your team, rebuild your agentic workflow on real work, run hands-on workshops, and install the practices that stick. We track velocity and quality before and after.",
        },
        {
          tag: "Ongoing",
          name: "Fractional Advisory",
          span: "Monthly retainer",
          body: "Office hours, architecture reviews, and a steady hand keeping your team current as the tooling shifts under everyone’s feet — which it will, monthly.",
        },
      ],
    },
    about: {
      eyebrow: "Who you’re working with",
      title: "Agoston Fung",
      body: "Software engineer based in London, working at the edge of agent-driven development. <strong>[Placeholder]</strong> — I’ll write this section properly once you send through your background, notable roles, and the wins you want a VP of Engineering to know about.",
    },
    contact: {
      title: "Find out where your team actually stands.",
      lede: "Start with a 30-minute readiness call. We’ll pinpoint where the AI gains are leaking and whether an audit makes sense.",
      cta: "Book a readiness call",
    },
    footer: {
      note: "Agentic engineering, done deliberately.",
    },
  },

  hu: {
    htmlLang: "hu",
    meta: {
      title: "Agentic Coach — Az AI bevezetéséből mérnöki sebesség",
      description:
        "A legtöbb csapat megvette az AI-eszközöket, de a sebességmutató nem mozdult. Segítek a mérnöki szervezeteknek áthidalni a szakadékot az AI bevezetése és a valódi, mérhető hatás között.",
    },
    nav: {
      problem: "A probléma",
      method: "A módszer",
      work: "Együttműködés",
      cta: "Foglalj felmérő hívást",
    },
    hero: {
      eyebrow: "Agentikus mérnöki munka csapatoknak",
      line1: "A csapatod bevezette az AI-t.",
      line2: "A sebesség mégsem nőtt.",
      line3: "Ezt megoldom.",
      lede: "A legtöbb mérnöki szervezet megvette az eszközöket, de soha nem változtatott azon, ahogyan dolgozik. Segítek a csapatoknak áthidalni a szakadékot az AI <em>bevezetése</em> és a valódi, <em>mérhető</em> hatás között — a sebességet és a minőséget igazoló adatokkal.",
      ctaPrimary: "Foglalj felmérő hívást",
      ctaSecondary: "Nézd meg a módszert",
    },
    problem: {
      eyebrow: "A probléma",
      title: "Az eszközök megérkeztek. Az átalakulás nem.",
      items: [
        {
          title: "A bevezetés nem egyenlő a hatással",
          body: "Minden fejlesztőnél fut a Copilot vagy a Cursor. A sebességmutató pontosan úgy néz ki, mint tavaly. Az eszközöket megvettétek; a munkafolyamat sosem változott.",
        },
        {
          title: "A minőség elsodródik",
          body: "Az AI által generált kód gyorsabban érkezik, mint ahogy bárki rendesen át tudná nézni. Apró hibák, következetlen minták és átnézési fáradtság szivárog be észrevétlenül.",
        },
        {
          title: "Mindenki improvizál",
          body: "A legjobb mérnökeid kitalálták a saját privát trükkjeiket. Ebből semmi sincs megosztva, megmérve vagy megismételhetővé téve a csapatban.",
        },
      ],
    },
    method: {
      eyebrow: "A módszer",
      title: "Megismételhető rendszer, nem lelkesítő beszéd.",
      lede: "Minden együttműködés két egyszerű modellre épül: egy hurokra, amelyet a mérnökeid naponta futtatnak, és egy érettségi létrára, amely megmutatja, hol tartotok és merre tartotok.",
      loopSub: "A delegálási hurok",
      loop: [
        ["Specifikálás", "Úgy fogalmazd meg a feladatot, hogy egy ágens valóban végre tudja hajtani."],
        ["Delegálás", "Bontsd fel és add át — a megfelelő ágensnek, a megfelelő léptékben."],
        ["Átnézés", "Olvasd kritikusan és gyorsan az ágens kimenetét, gumibélyegző nélkül."],
        ["Ellenőrzés", "Bizonyítsd tesztekkel és ellenőrzésekkel, hogy működik — ne megérzésből."],
        ["Rögzítés", "Alakítsd a bevált megoldásokat közös, tartós csapatgyakorlattá."],
      ],
      ladderSub: "Az agentikus érettségi létra",
      levels: [
        ["L0", "Árnyék-AI", "Eseti, egyéni, a szervezet számára láthatatlan."],
        ["L1", "Támogatott", "Mindenhol automatikus kiegészítés, közös munkafolyamat nélkül."],
        ["L2", "Delegált", "Az ágensek behatárolt feladatokat birtokolnak emberi felügyelet mellett."],
        ["L3", "Vezényelt", "Többlépéses agentikus munkafolyamatok, mérve és megbízva."],
        ["L4", "Ágens-natív", "A szervezet az ágensek köré van tervezve, elejétől a végéig."],
      ],
    },
    work: {
      eyebrow: "Együttműködés",
      title: "Három belépési pont. Egymásra épülnek.",
      items: [
        {
          tag: "Itt kezdd",
          name: "Agentikus felkészültségi audit",
          span: "1–2 hét · fix díj",
          body: "Felmérem a kódbázisotokat, az eszközeiteket, a munkafolyamataitokat és a csapatot. Kaptok egy pontozott érettségi jelentést és egy priorizált ütemtervet — és egy tiszta választ arra, hogy „hol veszítjük el valójában a nyereséget?”",
        },
        {
          tag: "Fő együttműködés",
          name: "Csapatátalakító sprint",
          span: "4–8 hét · beágyazott",
          body: "Beágyazódom a csapatba, valós munkán építem újra az agentikus munkafolyamatot, gyakorlati workshopokat tartok, és beépítem a tartósan megmaradó gyakorlatokat. A sebességet és a minőséget előtte-utána mérjük.",
        },
        {
          tag: "Folyamatos",
          name: "Frakcionált tanácsadás",
          span: "Havi díjas",
          body: "Fogadóórák, architektúra-átnézések és egy biztos kéz, amely naprakészen tartja a csapatot, miközben az eszközök folyamatosan változnak mindenki lába alatt — márpedig változni fognak, havonta.",
        },
      ],
    },
    about: {
      eyebrow: "Kivel dolgozol együtt",
      title: "Fung Ágoston",
      body: "Londonban élő szoftvermérnök, aki az ágensvezérelt fejlesztés élvonalában dolgozik. <strong>[Helykitöltő]</strong> — ezt a részt rendesen megírom, amint elküldöd a hátteredet, a jelentős szerepeidet és azokat az eredményeket, amelyekről egy mérnöki vezetőnek tudnia kell.",
    },
    contact: {
      title: "Tudd meg, hol tart valójában a csapatod.",
      lede: "Kezdd egy 30 perces felmérő hívással. Megtaláljuk, hol szivárog el az AI-nyereség, és hogy van-e értelme egy auditnak.",
      cta: "Foglalj felmérő hívást",
    },
    footer: {
      note: "Agentikus mérnöki munka, tudatosan.",
    },
  },
} as const;
