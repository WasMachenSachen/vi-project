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

export const sampleCallsToOrder = [
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

export const callsToOrder = [
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1961-04-18",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03154.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1958-07-01",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03038.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1958-06-25",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1956-07-06",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02159.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1950-11-14",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01102.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1959-11-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03086.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1959-11-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03086.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1959-06-24",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03079.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1954-12-14",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Ludwig, MdB",
      "party": "SPD"
    },
    "date": "1954-12-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02059.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Adolf Schmidt (Wattenscheid), MdB",
      "party": "SPD"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Leicht, MdB",
      "party": "CDU/CSU"
    },
    "date": "1960-05-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03112.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Leicht, MdB",
      "party": "CDU/CSU"
    },
    "date": "1970-07-09",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1956-11-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1956-11-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1950-07-26",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01080.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1950-07-26",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01080.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1950-07-26",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01080.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01221.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01221.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-06-16",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01272.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-05-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01264.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1953-05-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01264.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1951-07-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01160.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Albert Walter, MdB",
      "party": "DP"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alexander Ulrich, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-28",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alexander Ulrich, MdB",
      "party": "DIE LINKE"
    },
    "date": "2014-09-24",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18054.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alexander Ulrich, MdB",
      "party": "DIE LINKE"
    },
    "date": "2014-09-24",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18054.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alfons M\u00fcller (Wesseling), MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-12-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11049.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alfons M\u00fcller (Wesseling), MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-12-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11049.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alfred Biehle, Wehrbeauftr. d. Dt. Bundestages",
      "party": "null"
    },
    "date": "1972-05-09",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Alois Rainer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1971-10-19",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06144.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Andreas Bleck, MdB",
      "party": "AfD"
    },
    "date": "2021-06-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Andreas Bleck, MdB",
      "party": "AfD"
    },
    "date": "2018-09-27",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19053.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Andreas Bleck, MdB",
      "party": "AfD"
    },
    "date": "2018-07-03",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19045.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Angelika Beer, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1989-12-06",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Anke Domscheit-Berg, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-10-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19119.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Annemarie Renger, MdB",
      "party": "SPD"
    },
    "date": "1985-11-07",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10172.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Annette Widmann-Mauz, Staatsmin., Bundeskanzleramt",
      "party": "null"
    },
    "date": "2001-12-12",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14208.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Anton Hilbert, MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-06-27",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02155.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Anton Hilbert, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-07-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01160.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Berlin, MdB",
      "party": "SPD"
    },
    "date": "1958-05-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03028.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Berlin, MdB",
      "party": "SPD"
    },
    "date": "1952-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01221.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Berlin, MdB",
      "party": "SPD"
    },
    "date": "1951-09-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Berlin, MdB",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Berlin, MdB",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "August Spies (Br\u00fccken), MdB",
      "party": "CDU/CSU"
    },
    "date": "1960-06-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03118.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Baldur Wagner, Staatssekr., Bundesministerium f\u00fcr Gesundheit",
      "party": "null"
    },
    "date": "1994-04-28",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12226.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Barbara Lenk, MdB",
      "party": "AfD"
    },
    "date": "2022-07-06",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20047.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2020-10-06",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2020-09-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2020-09-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2020-09-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2022-05-12",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2022-04-28",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2022-03-23",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2022-03-16",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20021.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Beatrix von Storch, MdB",
      "party": "AfD"
    },
    "date": "2022-03-15",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20020.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bettina Martin, MdBR (Ministerin f\u00fcr Bildung, Wissenschaft und Kultur), Mecklenburg-Vorpommern",
      "party": "null"
    },
    "date": "2020-11-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19195.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bettina Martin, MdBR (Ministerin f\u00fcr Wissenschaft, Kultur, Bundes- und Europaangelegenheiten), Mecklenburg-Vorpommern",
      "party": "null"
    },
    "date": "2021-12-06",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20004.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1975-06-19",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1976-06-23",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07253.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1976-06-23",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07253.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1976-05-11",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1974-12-11",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Bruno Friedrich (W\u00fcrzburg), MdB",
      "party": "SPD"
    },
    "date": "1974-09-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07119.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Carl-Detlev Freiherr von Hammerstein, MdB",
      "party": "CDU/CSU"
    },
    "date": "1985-11-27",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10178.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Carl-Dieter Spranger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-12-01",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11045.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Carl-Dieter Spranger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1977-06-21",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Christa Nickels, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1987-10-13",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Christine Lambrecht, Bundesmin., Bundesministerium der Justiz und f\u00fcr Verbraucherschutz",
      "party": "null"
    },
    "date": "2012-10-17",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17198.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Clara B\u00fcnger, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-06-01",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Clara B\u00fcnger, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-06-01",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Claus J\u00e4ger (Wangen), MdB 10. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1975-11-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07202.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Claus J\u00e4ger (Wangen), MdB 10. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1979-11-14",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dagmar Freitag, MdB",
      "party": "SPD"
    },
    "date": "1997-11-13",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13204.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dagmar Freitag, MdB",
      "party": "SPD"
    },
    "date": "2001-09-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dagmar Freitag, MdB",
      "party": "SPD"
    },
    "date": "2001-09-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dagmar Freitag, MdB",
      "party": "SPD"
    },
    "date": "2001-09-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Daniela Ludwig, MdB",
      "party": "CDU/CSU"
    },
    "date": "2004-11-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15138.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Detlef Struve, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-06-16",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01272.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Detlef Struve, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-06-16",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01272.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dieter Vogel, Staatssekr., Presse- und Informationsamt der Bundesregierung",
      "party": "null"
    },
    "date": "1993-11-10",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12189.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dietrich Austermann, Stellv. MdBR (Minister f\u00fcr Wissenschaft, Wirtschaft und Verkehr), Schleswig-Holstein",
      "party": "null"
    },
    "date": "2003-09-09",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15059.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dietrich Austermann, Stellv. MdBR (Minister f\u00fcr Wissenschaft, Wirtschaft und Verkehr), Schleswig-Holstein",
      "party": "null"
    },
    "date": "1990-10-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11232.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dirk Brandes, MdB",
      "party": "AfD"
    },
    "date": "2022-06-22",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dorothee B\u00e4r, Staatsmin., Bundeskanzleramt",
      "party": "null"
    },
    "date": "2003-10-22",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15069.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dorothee Martin, MdB",
      "party": "SPD"
    },
    "date": "2022-03-23",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Adolf Arndt (Berlin/K\u00f6ln), MdB",
      "party": "SPD"
    },
    "date": "1961-12-05",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04006.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Adolf Arndt (Berlin/K\u00f6ln), MdB",
      "party": "SPD"
    },
    "date": "1952-12-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Adolf Arndt (Berlin/K\u00f6ln), MdB",
      "party": "SPD"
    },
    "date": "1953-05-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01265.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Alfred Dregger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-12-06",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10043.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Antje Vollmer, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1983-12-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Antje Vollmer, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1996-11-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Antje Vollmer, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1990-06-20",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11217.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1998-06-23",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13244.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1998-06-23",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13244.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1998-05-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13237.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1998-05-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13234.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1985-09-24",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1986-12-10",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10256.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1989-10-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1989-10-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Arno Walter, MdBR (LMin Justiz), Saarland",
      "party": "null"
    },
    "date": "1990-05-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-08",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19184.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2020-10-01",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2021-06-24",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19237.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2021-05-05",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2018-12-12",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19071.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2018-07-04",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19046.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2019-10-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2019-10-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2019-10-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Bernd Baumann, MdB",
      "party": "AfD"
    },
    "date": "2019-10-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Brunhilde Peter, Stellv. MdBR (LMin Arb), Saarland",
      "party": "null"
    },
    "date": "1986-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10250.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carl Otto Lenz (Bergstra\u00dfe), MdB",
      "party": "CDU/CSU"
    },
    "date": "1974-12-12",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07137.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1964-12-09",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04152.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1964-12-09",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04152.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1961-05-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1961-03-14",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03151.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1961-03-13",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03150.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1956-07-06",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02159.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1956-07-06",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02159.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1956-07-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1956-07-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01106.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-12-06",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01105.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-12-06",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01105.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-10-26",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01096.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-10-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01093.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1950-09-20",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1959-12-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03092.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1963-12-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04098.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1963-12-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04098.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1963-12-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04098.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1952-10-29",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01236.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1952-07-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1952-07-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1953-06-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01269.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1951-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1951-09-25",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1951-09-25",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-07-05",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02226.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-07-05",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02226.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-07-05",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02225.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-07-05",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02225.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-06-25",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02215.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-05-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Carlo Schmid (Frankfurt), MdB",
      "party": "SPD"
    },
    "date": "1957-05-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Christian Wirth, MdB",
      "party": "AfD"
    },
    "date": "2021-05-05",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Christian Wirth, MdB",
      "party": "AfD"
    },
    "date": "2021-05-05",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Daniel Volk, MdB",
      "party": "FDP"
    },
    "date": "2012-11-29",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17212.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Dietrich Sperling, MdB",
      "party": "SPD"
    },
    "date": "1975-11-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07202.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Dionys Jobst, MdB",
      "party": "CDU/CSU"
    },
    "date": "1976-06-09",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07250.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Dirk Spaniel, MdB",
      "party": "AfD"
    },
    "date": "2020-10-28",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eberhard Brecht, MdB",
      "party": "SPD"
    },
    "date": "1991-09-18",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1964-11-12",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04147.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1961-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1961-04-18",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03154.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1958-07-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03039.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-11-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02168.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-11-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02168.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-07-06",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02159.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1950-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01106.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1950-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01106.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-06-09",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03073.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-11-26",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01239.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-12-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02007.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1962-05-17",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1962-04-11",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04026.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-12-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01179.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-09-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02042.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-09-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02042.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-07-07",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02037.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-08-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eduard Wahl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Erika Wolf, MdB 7. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1976-05-12",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eugen Gerstenmaier, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-12-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03092.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eugen Gerstenmaier, MdB",
      "party": "CDU/CSU"
    },
    "date": "1949-12-15",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Eugen Gerstenmaier, MdB",
      "party": "CDU/CSU"
    },
    "date": "1949-12-15",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Friedrich Sch\u00e4fer (T\u00fcbingen), MdB",
      "party": "SPD"
    },
    "date": "1963-05-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04074.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerd M\u00fcller, Bundesmin., Bundesministerium f\u00fcr wirtschaftliche Zusammenarbeit und Entwicklung",
      "party": "CDU/CSU"
    },
    "date": "2020-11-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19195.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerd M\u00fcller, Bundesmin., Bundesministerium f\u00fcr wirtschaftliche Zusammenarbeit und Entwicklung",
      "party": "CDU/CSU"
    },
    "date": "2020-11-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19195.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerd M\u00fcller, Bundesmin., Bundesministerium f\u00fcr wirtschaftliche Zusammenarbeit und Entwicklung",
      "party": "CDU/CSU"
    },
    "date": "2020-11-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19195.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerd M\u00fcller, Bundesmin., Bundesministerium f\u00fcr wirtschaftliche Zusammenarbeit und Entwicklung",
      "party": "CDU/CSU"
    },
    "date": "2020-11-24",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19194.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1950-12-06",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01105.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1950-12-06",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01105.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1952-07-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1953-06-24",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01276.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1953-06-24",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01276.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Schr\u00f6der, Bundesmin. a.D.",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gerhard Stoltenberg, MdB",
      "party": "CDU/CSU"
    },
    "date": "1985-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10177.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gesine L\u00f6tzsch, MdB",
      "party": "DIE LINKE"
    },
    "date": "2004-11-23",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gesine L\u00f6tzsch, MdB",
      "party": "DIE LINKE"
    },
    "date": "2015-09-10",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18122.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. G\u00f6tz Fr\u00f6mming, MdB",
      "party": "AfD"
    },
    "date": "2021-05-20",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19231.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gregor Gysi, MdB",
      "party": "DIE LINKE"
    },
    "date": "1993-11-23",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12192.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gregor Gysi, MdB",
      "party": "DIE LINKE"
    },
    "date": "1993-09-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Gregor Gysi, MdB",
      "party": "DIE LINKE"
    },
    "date": "1996-09-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13125.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. h. c. (Univ Kyiv) Hans Michelbach, MdB",
      "party": "CDU/CSU"
    },
    "date": "2000-10-26",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. h.c. Gerd Andres, MdB",
      "party": "SPD"
    },
    "date": "1990-05-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans Friderichs, Bundesmin., Bundesministerium f\u00fcr Wirtschaft",
      "party": "null"
    },
    "date": "1969-06-18",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Christoph Seebohm, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02038.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Heinrich Jordan, MdB",
      "party": "CDU/CSU"
    },
    "date": "2008-06-18",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Joachim von Merkatz, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-11-21",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1987-11-23",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1987-11-05",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11037.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1984-10-03",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10088.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1984-09-13",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10083.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1985-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1985-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1985-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1985-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-11-12",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10246.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-10-01",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10235.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-10-01",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10235.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-09-10",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-09-10",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hans-Jochen Vogel, Bundesmin., Bundesministerium der Justiz",
      "party": "null"
    },
    "date": "1986-09-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10228.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Heinz Riesenhuber, MdB",
      "party": "CDU/CSU"
    },
    "date": "1982-11-09",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09126.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1993-10-27",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1993-10-20",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1993-09-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1991-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12052.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helga Otto, MdB",
      "party": "SPD"
    },
    "date": "1994-04-28",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12226.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helmut Haussmann, MdB",
      "party": "FDP"
    },
    "date": "1977-06-20",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08034.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Helmut Kohl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herbert Ehrenberg, MdB",
      "party": "SPD"
    },
    "date": "1976-05-12",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herbert G\u00fcnther, MdBR (StMin Justiz), Hessen",
      "party": "null"
    },
    "date": "1991-12-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12067.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herbert G\u00fcnther, MdBR (StMin Justiz), Hessen",
      "party": "null"
    },
    "date": "1985-11-27",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10178.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herbert W. K\u00f6hler (Duisburg), MdB",
      "party": "CDU/CSU"
    },
    "date": "1978-06-20",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08099.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herbert W. K\u00f6hler (Duisburg), MdB",
      "party": "CDU/CSU"
    },
    "date": "1978-06-20",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08099.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann E. Ott, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2010-12-02",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17079.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Otto Solms, Alterspr\u00e4s.",
      "party": "null"
    },
    "date": "1987-10-14",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11033.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Otto Solms, Alterspr\u00e4s.",
      "party": "null"
    },
    "date": "1989-12-06",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1986-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10249.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Scheer, MdB",
      "party": "SPD"
    },
    "date": "1982-10-12",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Hermann Schw\u00f6rer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1985-10-15",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herta D\u00e4ubler-Gmelin, MdB",
      "party": "SPD"
    },
    "date": "1986-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10250.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herta D\u00e4ubler-Gmelin, MdB",
      "party": "SPD"
    },
    "date": "1986-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10250.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herta D\u00e4ubler-Gmelin, MdB",
      "party": "SPD"
    },
    "date": "1986-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10250.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herta D\u00e4ubler-Gmelin, MdB",
      "party": "SPD"
    },
    "date": "1989-12-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Herwart Miessner, MdB",
      "party": "FDP"
    },
    "date": "1949-12-15",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Janosch Dahmen, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2021-05-05",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Joachim M\u00fcller (Bremen), MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1985-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10177.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Joachim M\u00fcller (Bremen), MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1985-09-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10156.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Joachim M\u00fcller (Bremen), MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1986-09-10",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Joachim Sch\u00f6ne, MdB",
      "party": "SPD"
    },
    "date": "1952-06-25",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01220.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. J\u00fcrgen Westphal, Stellv. MdBR (LMin Wirtsch), Schleswig-Holstein",
      "party": "null"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl Becker (Frankfurt), MdB",
      "party": "CDU/CSU"
    },
    "date": "1979-11-08",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08184.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl H. Fell, MdB",
      "party": "CDU/CSU"
    },
    "date": "1989-12-13",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl Mommer, MdB",
      "party": "SPD"
    },
    "date": "1952-12-04",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl Mommer, MdB",
      "party": "SPD"
    },
    "date": "1952-12-04",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl Mommer, MdB",
      "party": "SPD"
    },
    "date": "1968-05-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05177.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karl-Heinz Klejdzinski, MdB",
      "party": "SPD"
    },
    "date": "1985-11-27",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10178.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Karlheinz Guttmacher, MdB",
      "party": "FDP"
    },
    "date": "1997-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13200.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Konrad Adenauer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01221.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Konrad Adenauer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01221.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Kristina Schr\u00f6der (Wiesbaden), MdB",
      "party": "CDU/CSU"
    },
    "date": "2015-12-16",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18146.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Ludwig Erhard, MdB",
      "party": "CDU/CSU"
    },
    "date": "1964-07-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04135.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Ludwig Erhard, MdB",
      "party": "CDU/CSU"
    },
    "date": "1969-12-09",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06019.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Manfred W\u00f6rner, Bundesmin., Bundesministerium der Verteidigung",
      "party": "null"
    },
    "date": "1973-10-18",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07058.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Manuela Rottmann, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2020-11-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19191.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1958-05-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03029.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1958-05-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03029.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1958-05-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03028.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1959-06-23",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03078.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1951-07-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01161.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1957-05-22",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02211.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Max Becker (Hersfeld), MdB",
      "party": "FDP"
    },
    "date": "1957-05-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02208.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Michael Horlacher, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-11-13",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Norbert Bl\u00fcm, MdB",
      "party": "CDU/CSU"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Norbert Bl\u00fcm, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-12-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Norbert Bl\u00fcm, MdB",
      "party": "CDU/CSU"
    },
    "date": "1989-11-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11179.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Otto Schlecht, Staatssekr., Bundesministerium f\u00fcr Wirtschaft",
      "party": "null"
    },
    "date": "1983-12-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Petra Sitte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rainer Barzel, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1961-03-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03148.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rainer Barzel, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1958-06-12",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rainer Barzel, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1965-05-18",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04184.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Reinhard G\u00f6hner, MdB",
      "party": "CDU/CSU"
    },
    "date": "1985-12-04",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Renate Lepsius, MdB 10. Wahlperiode",
      "party": "SPD"
    },
    "date": "1975-12-10",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07209.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rita S\u00fcssmuth, MdB",
      "party": "CDU/CSU"
    },
    "date": "1997-09-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13190.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rudolf Vogel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02213.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rudolf Will, MdB",
      "party": "FDP"
    },
    "date": "1952-10-29",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01236.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rudolf Will, MdB",
      "party": "FDP"
    },
    "date": "1952-07-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01226.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rudolf Will, MdB",
      "party": "FDP"
    },
    "date": "1952-06-17",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Rudolf Will, MdB",
      "party": "FDP"
    },
    "date": "1953-06-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01271.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-09-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11024.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1982-12-16",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Theodor Waigel, MdB",
      "party": "CDU/CSU"
    },
    "date": "1982-12-16",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Uschi Eid, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1985-10-16",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10165.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Uschi Eid, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1990-10-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11232.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Uwe Jens, MdB",
      "party": "SPD"
    },
    "date": "1982-11-09",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09126.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Viktoria Steinbi\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-10-01",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01232.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Werner M\u00fcnch, MdBR (MinPr\u00e4s), Sachsen-Anhalt",
      "party": "null"
    },
    "date": "1991-10-17",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12051.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Werner M\u00fcnch, MdBR (MinPr\u00e4s), Sachsen-Anhalt",
      "party": "null"
    },
    "date": "1992-12-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Werner M\u00fcnch, MdBR (MinPr\u00e4s), Sachsen-Anhalt",
      "party": "null"
    },
    "date": "1992-12-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wilhelm G\u00fclich, MdB",
      "party": "SPD"
    },
    "date": "1953-05-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01264.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wilhelm G\u00fclich, MdB",
      "party": "SPD"
    },
    "date": "1953-05-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01264.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wilhelm H\u00f6ck (Salzgitter), MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-06-27",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02155.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Willfried Penner, MdB",
      "party": "SPD"
    },
    "date": "1987-09-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11024.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Willfried Penner, MdB",
      "party": "SPD"
    },
    "date": "1974-10-10",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07123.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wolf Bauer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1989-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wolfgang B\u00f6tsch, MdB",
      "party": "CDU/CSU"
    },
    "date": "1986-12-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10255.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wolfgang Sch\u00e4uble, Bundestagspr\u00e4s.",
      "party": "CDU/CSU"
    },
    "date": "1984-10-03",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10088.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr. Wolfgang Sch\u00e4uble, Bundestagspr\u00e4s.",
      "party": "CDU/CSU"
    },
    "date": "1984-10-03",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10088.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr.-Ing. Dietmar Kansy, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr.-Ing. Dietmar Kansy, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr.-Ing. Joachim Schmidt (Halsbr\u00fccke), MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-09-20",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13055.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Dr.-Ing. Joachim Schmidt (Halsbr\u00fccke), MdB",
      "party": "CDU/CSU"
    },
    "date": "1996-11-14",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13139.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Eberhard Otto (Godern), MdB",
      "party": "FDP"
    },
    "date": "2004-11-23",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Eckart von Klaeden, Staatsmin., Bundeskanzleramt",
      "party": "null"
    },
    "date": "2000-07-06",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14115.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Eckart von Klaeden, Staatsmin., Bundeskanzleramt",
      "party": "null"
    },
    "date": "1999-11-09",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14068.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Egon Bahr, MdB",
      "party": "SPD"
    },
    "date": "1977-10-26",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08052.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Elke Ferner, Parl. Staatssekr., Bundesministerium f\u00fcr Familie, Senioren, Frauen und Jugend",
      "party": "null"
    },
    "date": "1995-10-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Elmar Kolb, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-10-03",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10088.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Emilia M\u00fcller, MdBR (Staatsministerin f\u00fcr Arbeit und Soziales, Familie und Integration), Bayern",
      "party": "null"
    },
    "date": "2016-11-08",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18198.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Enrico Komning, MdB",
      "party": "AfD"
    },
    "date": "2022-06-22",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Enrico Komning, MdB",
      "party": "AfD"
    },
    "date": "2022-06-02",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20042.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erich Ollenhauer, MdB",
      "party": "SPD"
    },
    "date": "1949-11-24",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01018.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Hinsken, MdB",
      "party": "CDU/CSU"
    },
    "date": "1993-12-01",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12196.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Hinsken, MdB",
      "party": "CDU/CSU"
    },
    "date": "1994-09-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Paul, MdB",
      "party": "SPD"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01224.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Paul, MdB",
      "party": "SPD"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01223.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Paul, MdB",
      "party": "SPD"
    },
    "date": "1962-10-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04039.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ernst Paul, MdB",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Folger, MdB",
      "party": "SPD"
    },
    "date": "1960-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Horn, MdB",
      "party": "SPD"
    },
    "date": "1985-09-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10156.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Huber, MdBR (Staatsminister f\u00fcr Wirtschaft, Infrastruktur, Verkehr und Technologie), Bayern",
      "party": "null"
    },
    "date": "1999-11-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14069.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Lange, MdB",
      "party": "SPD"
    },
    "date": "1953-07-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01281.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Lange, MdB",
      "party": "SPD"
    },
    "date": "1953-07-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01280.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Schoettle, MdB",
      "party": "SPD"
    },
    "date": "1960-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Erwin Schoettle, MdB",
      "party": "SPD"
    },
    "date": "1951-11-14",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01175.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Florian Hahn, MdB",
      "party": "CDU/CSU"
    },
    "date": "2022-03-17",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20022.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Frank Sch\u00e4ffler, MdB",
      "party": "FDP"
    },
    "date": "2007-10-10",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16118.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Frank-Walter Steinmeier, Bundespr\u00e4s.",
      "party": "SPD"
    },
    "date": "2006-12-13",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16073.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Josef Strau\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1950-07-27",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01081.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Josef Strau\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-12-04",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Josef Strau\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-12-04",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Josef Strau\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Josef Strau\u00df, MdB",
      "party": "CDU/CSU"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Seidl (M\u00fcnchen), MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02206.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Seidl (M\u00fcnchen), MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02206.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Seidl (M\u00fcnchen), MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02206.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Franz Varelmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Friedrich Bohl, MdB",
      "party": "CDU/CSU"
    },
    "date": "1986-12-03",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10253.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Friedrich Fritz (Welzheim), MdB",
      "party": "CDU/CSU"
    },
    "date": "1967-12-12",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05143.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Fritz Becker (Hamburg), MdB",
      "party": "DP"
    },
    "date": "1956-11-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Fritz Becker (Hamburg), MdB",
      "party": "DP"
    },
    "date": "1956-11-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Fritz Becker (Hamburg), MdB",
      "party": "DP"
    },
    "date": "1956-11-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Georg Lang (M\u00fcnchen), MdB",
      "party": "CDU/CSU"
    },
    "date": "1960-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03121.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Georg Lang (M\u00fcnchen), MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-05-23",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02212.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Georg Pelster, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-06-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01269.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Georg Schulhoff, MdB",
      "party": "CDU/CSU"
    },
    "date": "1965-06-22",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04191.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1975-06-18",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1983-06-23",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10017.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1991-09-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1984-12-04",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10107.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1985-12-05",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1985-11-27",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10178.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1985-10-02",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1985-10-02",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1989-10-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1989-10-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard O. Pfeffermann, Staatssekr., Bundesministerium f\u00fcr Post und Telekommunikation",
      "party": "null"
    },
    "date": "1982-12-07",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09135.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard Reddemann, MdB 12. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1972-04-26",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06183.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard Reddemann, MdB 12. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1972-04-26",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06183.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard Schr\u00f6der, Bundeskanzl.",
      "party": "SPD"
    },
    "date": "2002-12-03",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15013.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gerhard Schulz, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-09-20",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13055.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1988-11-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11113.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1988-11-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11113.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1987-12-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11049.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1989-12-13",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1989-12-13",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1989-12-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Gertrud Schilling, MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1989-09-28",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Guido Wolf, MdBR (Minister der Justiz und f\u00fcr Europa), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2017-11-21",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19003.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Guido Wolf, MdBR (Minister der Justiz und f\u00fcr Europa), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2018-12-13",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19072.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hanna Wolf (M\u00fcnchen), MdB",
      "party": "SPD"
    },
    "date": "1997-09-10",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13189.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hanna Wolf (M\u00fcnchen), MdB",
      "party": "SPD"
    },
    "date": "1998-05-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13237.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hanna Wolf (M\u00fcnchen), MdB",
      "party": "SPD"
    },
    "date": "1994-05-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12231.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hanna Wolf (M\u00fcnchen), MdB",
      "party": "SPD"
    },
    "date": "1995-09-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13051.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans Ewers, MdB",
      "party": "DP"
    },
    "date": "1953-05-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01265.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans Katzer, MdB",
      "party": "CDU/CSU"
    },
    "date": "1967-12-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05142.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans M\u00fcller (Erbendorf), MdB",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Christian Str\u00f6bele, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1985-10-16",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10165.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Christian Str\u00f6bele, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1985-09-12",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Christian Str\u00f6bele, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1986-09-10",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Christian Str\u00f6bele, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2009-05-27",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16224.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Dietrich Genscher, MdB",
      "party": "FDP"
    },
    "date": "1973-09-18",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07050.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Eberhard Urbaniak, MdB",
      "party": "SPD"
    },
    "date": "1987-12-03",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11047.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Joachim Fuchtel, Parl. Staatssekr., Bundesministerium f\u00fcr Ern\u00e4hrung und Landwirtschaft",
      "party": "null"
    },
    "date": "1989-10-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11171.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Joachim Hoffmann (Saarbr\u00fccken), MdB",
      "party": "SPD"
    },
    "date": "1979-12-12",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Otto Wilhelm (Mainz), MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-10-13",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Otto Wilhelm (Mainz), MdB",
      "party": "CDU/CSU"
    },
    "date": "1989-10-03",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11163.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Ulrich Klose, MdB",
      "party": "SPD"
    },
    "date": "1995-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13068.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Ulrich Klose, MdB",
      "party": "SPD"
    },
    "date": "1996-09-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13125.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hans-Ulrich Klose, MdB",
      "party": "SPD"
    },
    "date": "1996-09-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13125.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hansheinrich Schmidt (Kempten), MdB",
      "party": "FDP"
    },
    "date": "1982-12-16",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heidtrud Henn, MdB",
      "party": "SPD"
    },
    "date": "2014-11-05",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18063.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinrich Georg Ritzel, MdB",
      "party": "SPD"
    },
    "date": "1951-12-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01179.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinrich Gerns, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-04-27",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01261.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinrich Gerns, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-04-27",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01261.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1958-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-12-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01244.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-12-04",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01242.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-12-03",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-12-03",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-12-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-10-22",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01235.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1952-10-22",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01235.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-06-01",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01267.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-05-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01264.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1953-04-27",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01261.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1950-11-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1950-11-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1950-11-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-12-15",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01024.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-11-24",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01018.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-11-09",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01016.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-29",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01011.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-21",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01007.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-20",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01006.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1949-09-19",
    "president": "Dr. Erich K\u00f6hler (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01005.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-12-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-12-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01179.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-11-13",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-16",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-16",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01168.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01166.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01166.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-10-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01166.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-09-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-09-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-09-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01160.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01160.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01160.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-07-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-06-19",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01154.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Renner, MdB",
      "party": "KPD"
    },
    "date": "1951-06-19",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01154.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Heinz Westphal, MdB",
      "party": "SPD"
    },
    "date": "1985-09-12",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Sauer (Salzgitter), MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Schmidt, Bundeskanzl.",
      "party": "null"
    },
    "date": "1985-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Schmidt, Bundeskanzl.",
      "party": "null"
    },
    "date": "1985-09-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10156.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Schmidt, Bundeskanzl.",
      "party": "null"
    },
    "date": "1985-09-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10156.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-12-13",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-12-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-12-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1989-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helmut Wieczorek (Duisburg), MdB",
      "party": "SPD"
    },
    "date": "1982-12-13",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09138.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helwin Peter, MdB",
      "party": "SPD"
    },
    "date": "1976-06-29",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07255.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Helwin Peter, MdB",
      "party": "SPD"
    },
    "date": "1978-12-06",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08123.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Kriedemann, MdB",
      "party": "SPD"
    },
    "date": "1953-06-02",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01268.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1975-06-18",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1979-11-27",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08188.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1979-11-27",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08188.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1979-11-27",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08188.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1979-11-27",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08188.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1973-10-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1973-10-17",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07057.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1973-10-02",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07053.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1976-12-16",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08006.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1976-06-23",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07253.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1976-06-23",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07253.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1976-05-10",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1976-05-10",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1958-04-24",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03026.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1958-04-24",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03026.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1958-04-23",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1958-04-23",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03025.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1981-11-11",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09064.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1981-11-11",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09064.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1980-11-25",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09006.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1965-11-29",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05008.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1965-11-29",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05008.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1965-11-29",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05008.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1965-11-29",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05008.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1956-12-12",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1956-11-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1956-11-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1956-11-07",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1956-07-03",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1977-10-26",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08052.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1977-06-21",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1966-10-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05060.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1978-12-13",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08125.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1959-11-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1959-11-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1959-11-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1963-06-27",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04083.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1953-06-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01274.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1962-10-24",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04043.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1954-11-17",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02056.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1954-11-17",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02056.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1970-12-17",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06089.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1970-11-05",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06077.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1970-11-05",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06077.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Wehner, MdB",
      "party": "SPD"
    },
    "date": "1970-11-05",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06077.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Werner (Ulm), MdB",
      "party": "CDU/CSU"
    },
    "date": "1990-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Herbert Werner (Ulm), MdB",
      "party": "CDU/CSU"
    },
    "date": "1990-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Buschfort, MdB",
      "party": "SPD"
    },
    "date": "1971-11-09",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06150.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Buschfort, MdB",
      "party": "SPD"
    },
    "date": "1978-11-09",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08115.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Ehren, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-09-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01228.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Ehren, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01224.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Ehren, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01224.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Ehren, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01223.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hermann Ehren, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01223.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Horst G\u00fcnther (Duisburg), MdB",
      "party": "CDU/CSU"
    },
    "date": "1998-06-22",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13243.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Horst Jaunich, MdB",
      "party": "SPD"
    },
    "date": "1986-09-24",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10232.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Horst Seehofer, Bundesmin., Bundesministerium des Innern, f\u00fcr Bau und Heimat",
      "party": "null"
    },
    "date": "1996-11-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13140.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Hugo Brandt (Grolsheim), MdB",
      "party": "SPD"
    },
    "date": "1971-10-19",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06144.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jan Korte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2021-05-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jan Korte, MdB",
      "party": "DIE LINKE"
    },
    "date": "2018-09-26",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19052.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jens Lehmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "2019-12-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jens Lehmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "2019-12-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jens Lehmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "2019-10-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19119.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jessica Tatti, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-11-14",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19128.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jimmy Schulz, MdB",
      "party": "FDP"
    },
    "date": "2018-11-06",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19060.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Joachim Po\u00df, MdB",
      "party": "SPD"
    },
    "date": "1997-09-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13190.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Joachim Po\u00df, MdB",
      "party": "SPD"
    },
    "date": "2002-10-29",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15005.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jochen Borchert, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10103.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Johann Christoph Besch, MdB",
      "party": "CDU/CSU"
    },
    "date": "1979-10-17",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Johannes Huber, MdB",
      "party": "AfD"
    },
    "date": "2021-05-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Johannes Rau, Bundespr\u00e4s.",
      "party": "null"
    },
    "date": "1983-09-08",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10020.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Josef Bauer (Wasserburg), MdB",
      "party": "CDU/CSU"
    },
    "date": "1958-05-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03029.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Josef Ertl, MdB",
      "party": "FDP"
    },
    "date": "1962-05-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04028.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Josef Ertl, MdB",
      "party": "FDP"
    },
    "date": "1967-11-14",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05134.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Josef Hollerith, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-12-07",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13078.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Josef Mick, MdB",
      "party": "CDU/CSU"
    },
    "date": "1968-06-27",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/05/05184.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "J\u00fcrgen Trittin, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1999-11-24",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14073.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "J\u00fcrgen Trittin, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2001-11-27",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14204.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Jutta M\u00fcller (V\u00f6lklingen), MdB",
      "party": "SPD"
    },
    "date": "1995-10-12",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Kai-Uwe von Hassel, MdB 8. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1975-12-09",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07208.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Kai-Uwe von Hassel, MdB 8. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1972-05-09",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karin Roth (Esslingen), MdB",
      "party": "SPD"
    },
    "date": "2004-10-27",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15135.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl B\u00e4r, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2021-12-07",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20005.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Carstens, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1975-09-16",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07184.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Carstens, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1973-10-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Carstens, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1973-10-25",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Carstens, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1983-09-29",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10026.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Carstens, Bundestagspr\u00e4s.",
      "party": "null"
    },
    "date": "1977-12-07",
    "president": "Prof. Dr. Karl Carstens (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/08/08061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Hermann Haack (Extertal), MdB",
      "party": "SPD"
    },
    "date": "1991-12-10",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12066.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Hermann Haack (Extertal), MdB",
      "party": "SPD"
    },
    "date": "1990-10-23",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Kern, MdB",
      "party": "CDU/CSU"
    },
    "date": "1950-10-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01093.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl M\u00fcller (Wehdel), MdB, DP",
      "party": "null"
    },
    "date": "1954-07-08",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02038.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Wienand, MdB",
      "party": "SPD"
    },
    "date": "1958-06-25",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Karl Wienand, MdB",
      "party": "SPD"
    },
    "date": "1958-06-25",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Kay Gottschalk, MdB",
      "party": "AfD"
    },
    "date": "2017-12-12",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19005.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus B\u00fchler (Bruchsal), MdB 14. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1989-10-03",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11163.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus B\u00fchler (Bruchsal), MdB 14. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1989-10-03",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11163.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus Ernst, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-11-26",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19196.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus Ernst, MdB",
      "party": "DIE LINKE"
    },
    "date": "2007-11-15",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16127.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus Ernst, MdB",
      "party": "DIE LINKE"
    },
    "date": "2018-11-07",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Klaus Ernst, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-06-23",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20045.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Kurt Georg Kiesinger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1972-09-21",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06199.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Lena Werner, MdB",
      "party": "SPD"
    },
    "date": "2022-07-06",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20047.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Lilo Friedrich (Mettmann), MdB",
      "party": "SPD"
    },
    "date": "2002-11-06",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15008.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Carstens (Emstek), MdB",
      "party": "CDU/CSU"
    },
    "date": "1987-11-26",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Carstens (Emstek), MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-09-13",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10083.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1997-11-12",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13203.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "2006-10-25",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16060.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "2002-12-19",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15017.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "2003-11-11",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15074.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "2005-04-20",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15172.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1998-06-22",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13243.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-11-06",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13066.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-10-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-09-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13051.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1996-12-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13148.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Grund, MdB",
      "party": "CDU/CSU"
    },
    "date": "1996-11-06",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13135.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Manfred Reimann, MdB 12. Wahlperiode",
      "party": "SPD"
    },
    "date": "1987-09-17",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11028.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marc Henrichmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "2020-11-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19192.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margareta Wolf (Frankfurt), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2003-09-10",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15060.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margit Conrad, MdBR (Staatsministerin, Bevollm\u00e4chtigte des Landes Rheinland-Pfalz beim Bund und f\u00fcr Europa), Rheinland-Pfalz",
      "party": "null"
    },
    "date": "1990-10-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11232.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margit Conrad, MdBR (Staatsministerin, Bevollm\u00e4chtigte des Landes Rheinland-Pfalz beim Bund und f\u00fcr Europa), Rheinland-Pfalz",
      "party": "null"
    },
    "date": "1990-05-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margit Conrad, MdBR (Staatsministerin, Bevollm\u00e4chtigte des Landes Rheinland-Pfalz beim Bund und f\u00fcr Europa), Rheinland-Pfalz",
      "party": "null"
    },
    "date": "1990-05-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11209.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margot Kalinke, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-06-24",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03079.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margot Kalinke, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-09-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margot Kalinke, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-09-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margot Kalinke, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-06-11",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01271.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Margot Kalinke, MdB",
      "party": "CDU/CSU"
    },
    "date": "1951-07-05",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1987-11-12",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11040.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1991-10-17",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12051.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1991-09-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12045.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1984-10-17",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10091.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1984-10-17",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10091.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1989-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Marieluise Beck (Bremen), MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "1992-11-23",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12122.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Markus Uhl, MdB",
      "party": "CDU/CSU"
    },
    "date": "2021-06-22",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19235.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Erwin Renner, MdB",
      "party": "AfD"
    },
    "date": "2019-10-22",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19120.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Erwin Renner, MdB",
      "party": "AfD"
    },
    "date": "2019-10-22",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19120.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Erwin Renner, MdB",
      "party": "AfD"
    },
    "date": "2019-09-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19115.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Erwin Renner, MdB",
      "party": "AfD"
    },
    "date": "2019-09-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19115.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Erwin Renner, MdB",
      "party": "AfD"
    },
    "date": "2019-09-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19115.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Martin Gr\u00fcner, MdB",
      "party": "FDP"
    },
    "date": "1973-11-08",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07065.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias Helferich, MdB, fraktionslos",
      "party": "null"
    },
    "date": "2022-06-01",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias W. Birkwald, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-29",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19187.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias W. Birkwald, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-27",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias W. Birkwald, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-06",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias W. Birkwald, MdB",
      "party": "DIE LINKE"
    },
    "date": "2017-04-26",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18231.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias W. Birkwald, MdB",
      "party": "DIE LINKE"
    },
    "date": "2018-07-03",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19045.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias Wissmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-12-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10110.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias Wissmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "1984-12-11",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10110.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Matthias Wissmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "1995-11-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13068.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Brand (Fulda), MdB",
      "party": "CDU/CSU"
    },
    "date": "2020-09-30",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Brand (Fulda), MdB",
      "party": "CDU/CSU"
    },
    "date": "2021-03-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Brand (Fulda), MdB",
      "party": "CDU/CSU"
    },
    "date": "2021-03-25",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19219.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Brand (Fulda), MdB",
      "party": "CDU/CSU"
    },
    "date": "2018-11-07",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Georg Link, MdB",
      "party": "FDP"
    },
    "date": "2010-09-16",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17060.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Georg Link, MdB",
      "party": "FDP"
    },
    "date": "2009-12-03",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17010.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Gro\u00df, MdB",
      "party": "SPD"
    },
    "date": "2010-10-26",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17067.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michael Roth, Staatsmin., Ausw\u00e4rtiges Amt",
      "party": "null"
    },
    "date": "2019-10-17",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19119.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michaela Geiger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Michaela Geiger, MdB",
      "party": "CDU/CSU"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Norbert Gansel, MdB",
      "party": "SPD"
    },
    "date": "1973-11-28",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07067.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Norbert Gansel, MdB",
      "party": "SPD"
    },
    "date": "1990-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Norbert Geis, MdB",
      "party": "CDU/CSU"
    },
    "date": "1996-12-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13145.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Norbert Geis, MdB",
      "party": "CDU/CSU"
    },
    "date": "1996-12-04",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13145.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Oskar Lafontaine, MdB",
      "party": "DIE LINKE"
    },
    "date": "1986-11-06",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10244.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Oskar Lafontaine, MdB",
      "party": "DIE LINKE"
    },
    "date": "1994-09-05",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Oskar Lafontaine, MdB",
      "party": "DIE LINKE"
    },
    "date": "1990-10-03",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11228.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1997-10-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13197.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-11-24",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-11-24",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-10-27",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12185.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-30",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-22",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1993-09-08",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1983-12-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1998-09-01",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13246.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1985-11-27",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10178.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1985-09-24",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10158.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10249.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-11-25",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10249.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-10-21",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-10-15",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10238.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-09-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10228.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1986-09-09",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10228.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1989-11-15",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11176.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1995-11-22",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13071.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1995-09-27",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13058.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1995-09-27",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13058.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1996-09-11",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13122.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1990-10-29",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1990-05-10",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11211.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1990-05-10",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11211.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ottmar Schreiner, MdB",
      "party": "SPD"
    },
    "date": "1990-05-09",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11210.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-12-06",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10043.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-11-09",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10033.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Schily, MdB",
      "party": "SPD"
    },
    "date": "1983-09-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10019.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Otto Wittmann (Straubing), MdB",
      "party": "SPD"
    },
    "date": "1975-06-18",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Paul Bausch, MdB",
      "party": "CDU/CSU"
    },
    "date": "1953-06-23",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01275.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Peter Bleser, MdB",
      "party": "CDU/CSU"
    },
    "date": "2005-06-15",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Peter Felser, MdB",
      "party": "AfD"
    },
    "date": "2022-06-01",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20041.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, Bundestagsvizepr\u00e4s.",
      "party": "null"
    },
    "date": "2022-04-27",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, Bundestagsvizepr\u00e4s.",
      "party": "null"
    },
    "date": "2022-04-27",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, Bundestagsvizepr\u00e4s.",
      "party": "null"
    },
    "date": "2022-04-27",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, Bundestagsvizepr\u00e4s.",
      "party": "null"
    },
    "date": "2022-04-27",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, Bundestagsvizepr\u00e4s.",
      "party": "null"
    },
    "date": "2022-04-27",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-11-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-11-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-11-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-28",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-28",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19186.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2021-05-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2012-11-28",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17211.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2000-12-06",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14140.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Pau, MdB",
      "party": "DIE LINKE"
    },
    "date": "2019-12-12",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19135.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Petra Weis, MdB",
      "party": "SPD"
    },
    "date": "2008-06-18",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/16/16169.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Prof. Dr. Benjamin-Immanuel Hoff, MdBR (Minister f\u00fcr Kultur, Bundes- und Europaangelegenheiten und Chef der Staatskanzlei, Minister f\u00fcr Infrastruktur und Landwirtschaft), Th\u00fcringen",
      "party": "null"
    },
    "date": "2020-12-16",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19202.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Prof. Dr. Josef Klein (Stolberg), MdB",
      "party": "CDU/CSU"
    },
    "date": "1976-05-11",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07241.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rainer Eppelmann, MdB",
      "party": "CDU/CSU"
    },
    "date": "1998-06-16",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/13/13240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ralf Walter (Cochem), MdB",
      "party": "SPD"
    },
    "date": "1991-09-24",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12043.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ralf Walter (Cochem), MdB",
      "party": "SPD"
    },
    "date": "1992-11-26",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12125.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Renata Alt, MdB",
      "party": "FDP"
    },
    "date": "2021-05-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Renata Alt, MdB",
      "party": "FDP"
    },
    "date": "2021-05-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1964-10-20",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/04/04139.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1956-11-08",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02170.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-11-26",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01239.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-18",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01227.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01224.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Richard St\u00fccklen, MdB",
      "party": "CDU/CSU"
    },
    "date": "1952-07-15",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01223.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Roderich Kiesewetter, MdB",
      "party": "CDU/CSU"
    },
    "date": "2011-09-28",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17130.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "R\u00fcdiger Lucassen, MdB",
      "party": "AfD"
    },
    "date": "2021-05-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19229.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "R\u00fcdiger Wolf, Staatssekr., Bundesministerium der Verteidigung",
      "party": "null"
    },
    "date": "2013-05-15",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/17/17240.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1982-11-09",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09126.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Seiters, MdB",
      "party": "CDU/CSU"
    },
    "date": "1973-06-17",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Seiters, MdB",
      "party": "CDU/CSU"
    },
    "date": "1973-06-17",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Seiters, MdB",
      "party": "CDU/CSU"
    },
    "date": "1973-06-17",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Werner, MdB",
      "party": "CDU/CSU"
    },
    "date": "1961-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Werner, MdB",
      "party": "CDU/CSU"
    },
    "date": "1961-06-28",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03164.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf Werner, MdB",
      "party": "CDU/CSU"
    },
    "date": "1960-05-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03112.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Rudolf-Ernst Heiland, MdB",
      "party": "SPD"
    },
    "date": "1952-06-10",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01218.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Sibylle Pfeiffer, MdB",
      "party": "CDU/CSU"
    },
    "date": "2005-06-14",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15180.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Siegfried Kauder (Villingen-Schwenningen), MdB",
      "party": "CDU/CSU"
    },
    "date": "2004-11-23",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15141.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "S\u00f6ren Bartol, MdB",
      "party": "SPD"
    },
    "date": "2019-12-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19137.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "S\u00f6ren Bartol, MdB",
      "party": "SPD"
    },
    "date": "2014-09-11",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18052.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "S\u00f6ren Pellmann, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-09-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Stefan Keuter, MdB",
      "party": "AfD"
    },
    "date": "2018-07-04",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19046.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Stefan Schulte (Menden), MdB",
      "party": "Die Gr\u00fcnen"
    },
    "date": "1985-12-05",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10182.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Sven-Christian Kindler, MdB",
      "party": "B\u00dcNDNIS 90/DIE GR\u00dcNEN"
    },
    "date": "2016-09-28",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18193.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Theodor Blank, MdB",
      "party": "CDU/CSU"
    },
    "date": "1961-03-14",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03151.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Theodor Blank, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-10-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03084.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Theodor Blank, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-10-21",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03084.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-12-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03092.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-11-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1959-11-04",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03087.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-12-15",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02062.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Ruf, MdB",
      "party": "CDU/CSU"
    },
    "date": "1954-12-14",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02061.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Seitz, MdB",
      "party": "AfD"
    },
    "date": "2021-06-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19236.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thomas Strobl, MdBR (Minister f\u00fcr Inneres, Digitalisierung und Migration), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2005-03-17",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15167.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thorsten Frei, MdB",
      "party": "CDU/CSU"
    },
    "date": "2020-09-10",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19174.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thorsten Frei, MdB",
      "party": "CDU/CSU"
    },
    "date": "2021-06-09",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19233.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Thorsten Frei, MdB",
      "party": "CDU/CSU"
    },
    "date": "2017-12-11",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19004.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ulla Jelpke, MdB",
      "party": "DIE LINKE"
    },
    "date": "1993-12-01",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12196.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Ulrich Heinrich, MdB",
      "party": "FDP"
    },
    "date": "2001-07-03",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14181.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Uwe Lambinus, MdB 12. Wahlperiode",
      "party": "SPD"
    },
    "date": "1983-12-07",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10044.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Valentin Br\u00fcck (K\u00f6ln), MdB",
      "party": "CDU/CSU"
    },
    "date": "1970-11-10",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06078.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Waldemar Kraft, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Waldemar Kraft, MdB",
      "party": "CDU/CSU"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-30",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10040.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-21",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10036.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-20",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10035.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-11-09",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10033.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1983-10-26",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10031.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-11-15",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10102.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-10-17",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10091.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-10-04",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10089.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-10-04",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10089.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-10-04",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10089.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1984-10-04",
    "president": "Dr. Rainer Barzel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10089.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "2018-07-04",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19046.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1982-12-08",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1982-12-08",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1982-12-08",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "2016-10-19",
    "president": "Prof. Dr. Norbert Lammert (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/18/18196.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walter Fisch, MdB",
      "party": "KPD"
    },
    "date": "1972-03-16",
    "president": "Kai-Uwe von Hassel (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/06/06179.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Walther Leisler Kiep, MdB",
      "party": "CDU/CSU"
    },
    "date": "1980-11-26",
    "president": "Dr. h.c. Richard St\u00fccklen (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/09/09007.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Werner Jacobi (K\u00f6ln/Iserlohn), MdB",
      "party": "SPD"
    },
    "date": "1957-06-26",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/02/02216.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Werner Wilhelm, MdB",
      "party": "SPD"
    },
    "date": "1974-10-09",
    "president": "Dr. h.c. Annemarie Renger (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/07/07122.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wilfried B\u00f6hm (Melsungen), MdB 12. Wahlperiode",
      "party": "CDU/CSU"
    },
    "date": "1989-11-07",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11173.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wilhelm Mellies, MdB",
      "party": "SPD"
    },
    "date": "1950-12-12",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01106.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Willy Brandt, MdB",
      "party": "SPD"
    },
    "date": "1950-11-09",
    "president": "Dr. Hermann Ehlers (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/01/01100.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Willy K\u00f6nen (D\u00fcsseldorf), MdB",
      "party": "SPD"
    },
    "date": "1961-05-02",
    "president": "Prof. D. Dr. Eugen Gerstenmaier (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/03/03157.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Winfried Hermann, MdBR (Minister f\u00fcr Verkehr), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2003-11-05",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/15/15072.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Winfried Hermann, MdBR (Minister f\u00fcr Verkehr), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2000-11-28",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Winfried Hermann, MdBR (Minister f\u00fcr Verkehr), Baden-W\u00fcrttemberg",
      "party": "null"
    },
    "date": "2000-11-28",
    "president": "Dr. h.c. Wolfgang Thierse (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/14/14136.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolf-Michael Catenhusen, Staatssekr., Bundesministerium f\u00fcr Bildung und Forschung",
      "party": "null"
    },
    "date": "1985-10-02",
    "president": "Dr. Philipp Jenninger (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/10/10162.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Erler (Waldbrunn), MdB",
      "party": "CDU/CSU"
    },
    "date": "1994-05-25",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/12/12230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Kubicki, MdB",
      "party": "FDP"
    },
    "date": "2020-11-26",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19196.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Kubicki, MdB",
      "party": "FDP"
    },
    "date": "2020-11-18",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19192.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Kubicki, MdB",
      "party": "FDP"
    },
    "date": "2020-10-07",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19183.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Kubicki, MdB",
      "party": "FDP"
    },
    "date": "2021-06-23",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19236.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Kubicki, MdB",
      "party": "FDP"
    },
    "date": "2021-05-19",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19230.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Wolfgang Roth, MdB",
      "party": "SPD"
    },
    "date": "1990-05-22",
    "president": "Prof. Dr. Rita S\u00fcssmuth (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/11/11212.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Zaklin Nastic, MdB",
      "party": "DIE LINKE"
    },
    "date": "2020-10-07",
    "president": "Dr. Wolfgang Sch\u00e4uble (CDU/CSU)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/19/19183.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Zaklin Nastic, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-04-28",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Zaklin Nastic, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-04-28",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  },
  {
    "calledOut": {
      "name": "Zaklin Nastic, MdB",
      "party": "DIE LINKE"
    },
    "date": "2022-04-28",
    "president": "B\u00e4rbel Bas (SPD)",
    "source": {
      "pdf": "https://dserver.bundestag.de/btp/20/20032.pdf",
      "sectionFrom": "",
      "sectionTo": "",
      "linkToVideo": ""
    }
  }
];