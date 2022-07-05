export const periods = [
  {
    period: "WP1",
    seats: 178,
    from: "2022-01-01",
    to: "2022-01-01",
    chancellors: [
      {
        name: "Justus Jonas",
        from: "2022-01-01",
        to: "2023-01-01",
      },
    ],
    parties: [
      { name: "AMD", seats: 90 },
      { name: "XQC", seats: 70 },
      { name: "PDF", seats: 10 },
      { name: "WWF", seats: 8 },
    ],
    presidency: [
      {
        name: "Sören Hurensonn",
        from: "2022-01-01",
        to: "2023-01-01",
        role: "president",
      },
      {
        name: "Maja Biene",
        from: "2022-01-01",
        to: "2023-01-01",
        role: "vice president",
      },
    ],
  },
  {
    period: "WP2",
    seats: 169,
    from: "2023-01-01",
    to: "2024-01-01",
    chancellors: [
      {
        name: "Justus Jonas",
        from: "2023-01-01",
        to: "2024-01-01",
      },
    ],
    parties: [
      { name: "AMD", seats: 70 },
      { name: "XQC", seats: 80 },
      { name: "PDF", seats: 10 },
      { name: "WWF", seats: 7 },
      { name: "DFB", seats: 2 },
    ],
    presidency: [
      {
        name: "Sören Hurensonn",
        from: "2022-01-01",
        to: "2023-01-01",
        role: "president",
      },
      {
        name: "Maja Biene",
        from: "2022-01-01",
        to: "2023-01-01",
        role: "vice president",
      },
    ],
  },
];

export const callsToOrder = [
  {
    calledOut: {
      name: "Yannic Brügger",
      party: "AMD",
    },
    reason: "Sagte Hurensohn zum Präsidenten.",
    speech: {
      speaker: { name: "Jürgen vond er Lippe", party: "PDF" },
      topic: "Mehr Eier für Schalke - Subvention in Hühnermastberieben",
    },
    date: "2022-02-03",
    president: "Sören Hurensonn",
    source: {
      pdf: "https://dserver.bundestag.de/btp/20/20036.pdf#P.3479",
      sectionFrom: "A",
      sectionTo: "B",
      linktToVideo: "https://youtu.be/fBipVpYj0Bk?t=123",
    },
  },
  {
    calledOut: {
      name: "Yannic Brügger",
      party: "PDF",
    },
    reason: "Sagte Hurensohn zum Präsidenten.",
    speech: {
      speaker: { name: "Jürgen vond er Lippe", party: "PDF" },
      topic: "Mehr Eier für Schalke - Subvention in Hühnermastberieben",
    },
    date: "2022-02-03",
    president: "Sören Hurensonn",
    source: {
      pdf: "https://dserver.bundestag.de/btp/20/20036.pdf#P.3479",
      sectionFrom: "A",
      sectionTo: "B",
      linktToVideo: "https://youtu.be/fBipVpYj0Bk?t=123",
    },
  },
  {
    calledOut: {
      name: "Tim Loges",
      party: "AMD",
    },
    reason: "Machte eine anzügliche Geste.",
    speech: {
      speaker: { name: "Thomas Gottschalk", party: "PDF" },
      topic:
        "Locken für die dritte Welt - Freigabe von Haartransplantationen für Papua Neuginea",
    },
    date: "2022-02-04",
    president: "Maja Biene",
    source: {
      pdf: "https://dserver.bundestag.de/btp/20/20036.pdf#P.3479",
      sectionFrom: "B",
      sectionTo: "C",
      linktToVideo: "https://youtu.be/fBipVpYj0Bk?t=123",
    },
  },
  {
    calledOut: {
      name: "Mebeuca Rieth",
      party: "DFB",
    },
    reason: "Brachte ein totes Tier in den Bundestag.",
    speech: {
      speaker: { name: "Tanjan Ramesh Kothari", party: "PDF" },
      topic: "Gesetzesentwurf: Verbot vom Beischlaf mit Meerschweinchen",
    },
    date: "2023-02-03",
    president: "Maja Biene",
    source: {
      pdf: "https://dserver.bundestag.de/btp/20/20036.pdf#P.3479",
      sectionFrom: "A",
      sectionTo: "B",
      linktToVideo: "https://youtu.be/fBipVpYj0Bk?t=123",
    },
  },
];
