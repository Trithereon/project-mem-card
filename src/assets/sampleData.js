const sampleData = {
  contactInfo: {
    name: "Emestan Grevaris",
    email: "egrevaris@gmail.com",
    phone: "1-555-425-5471",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "University of Rivendell",
      degree: "Bachelor of Arts",
      field: "Elvish Studies & Diplomatic Relations",
      location: "Rivendell, Middle-Earth",
      startDate: "2010-09-01",
      endDate: "2014-06-15",
    },
    {
      id: crypto.randomUUID(),
      school: "The Shire Technical College",
      degree: "Certificate",
      field: "Agricultural Stewardship & Permaculture",
      location: "The Shire, Middle-Earth",
      startDate: "2015-01-10",
      endDate: "2015-12-20",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      jobTitle: "Fellowship Logistics Coordinator",
      employer: "Council of Elrond",
      location: "Rivendell, Middle-Earth",
      responsibilities:
        "Coordinated supply routes across Middle-earth, managed party of 9 companions, oversaw contingency planning for weather and orc activity.",
      startDate: "2018-07-01",
      endDate: "2019-03-31",
    },
    {
      id: crypto.randomUUID(),
      jobTitle: "Senior Beacon Keeper",
      employer: "Minas Tirith Signal Corps",
      location: "Minas Tirith, Middle-Earth",
      responsibilities:
        "Maintained 24/7 alert system across mountain peaks, led fire-signal drills, reduced false alarms by 40% through improved protocols.",
      startDate: "2016-04-10",
      endDate: "2018-06-15",
    },
    {
      id: crypto.randomUUID(),
      jobTitle: "Horticultural Specialist",
      employer: "Gardens of the Shire",
      location: "The Shire, Middle-Earth",
      responsibilities:
        "Cultivated pipe-weed and root vegetables, managed seasonal harvests, introduced pest-resistant gaffer strains.",
      startDate: "2014-07-22",
      endDate: "2016-02-28",
    },
  ],
};

export { sampleData };
