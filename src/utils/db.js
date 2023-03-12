const data = {
  rfid: "1234567890",
  legalName: "John F Kennedy",
  signatureId:
    "aiuhdiuahdfaiehfaiuhfaiyuwefayiuwgfiuawgfe23g9g2q3fq97ghq2fhqv0q43n95vq09875v087089743q5098v75qn0935v7vq093457vq093457vnq054",
  sex: "Male",
  dateOfBirth: "1917-05-29",
  wifeyMaterial: true,
  notes: "He is a good guy",
  medication: {
    description: "Medication History",
    medsList: [
      {
        name: "melatonin",
        frequency: 123421231233,
        dosage: 41123,
        description: "F",
      },
      {
        name: "advil",
        frequency: 1851283457132132,
        dosage: 41123,
        description: "Take while upside down in a hand stand position",
      },
      {
        name: "addoral",
        frequency: 1851283457,
        dosage: 41231,
        description: "Take With Food",
      },
    ],
  },
  insurance: {
    description: "Insurance companies involved with user",
    insuranceList: [
      {
        name: "Biomedical Insurance Company",
        Dental: null,
        "Other stuff": "Yes",
      },
      {
        name: "Dental Health",
        Dental: true,
        "Other stuff": "Yes",
      },
    ],
  },
  allergies: {
    description: "Patient Allergies",
    alergyList: [
      {
        name: "Peanuts",
        severity: "Mild",
        description: "I have a peanut allergy",
      },
      {
        name: "Shellfish",
        severity: "Mild",
        description: "I have a shellfish allergy",
      },
    ],
  },
  conditions: {
    description: "Patient Conditions",
    conditionList: [
      {
        name: "Diabetes",
        severity: "Mild",
        description: "I have diabetes",
      },
      {
        name: "Asthma",
        severity: "Extreme",
        description: "I have asthma",
      },
    ],
  },
  labResults: {
    description: "Lab Results",
    labResultsList: [
      {
        name: "Blood Test",
        dateReturned: "123412341234",
        description: "Blood test results",
      },
      {
        name: "Urine Test",
        dateReturned: "123412341234",
        description: "Urine test results",
      },
    ],
  },
  radiologyResults: {
    description: "Radiology Results",
    radiologyResultsList: [
      {
        name: "X-Ray",
        dateReturned: "123412341234",
        description: "X-Ray results",
      },
      {
        name: "CT Scan",
        dateReturned: "123412341234",
        description: "CT Scan results",
      },
    ],
  },
  hospitalReports: {
    description: "Hospital Reports",
    hospitalReportsList: [
      {
        name: "Hospital Report",
        dateReturned: "123412341234",
        description: "Hospital Report results",
      },
      {
        name: "Hospital Report 2",
        dateReturned: "123412341234",
        description: "Hospital Report results",
      },
    ],
  },
  involvedClinicians: {
    description: "Involved Clinicians With Patient",
    involvedCliniciansList: [
      {
        name: "Dr. John Smith",
        specialty: "Cardiologist",
        description: "Dr. John Smith is a cardiologist",
      },
      {
        name: "Dr. Jane Doe",
        specialty: "Dentist",
        description: "Dr. Jane Doe is a dentist",
      },
    ],
  },
  clinicVisitNotes: {
    description: "Clinic Visit Notes",
    clinicVistNotesList: [
      {
        name: "Clinic Visit Notes",
        dateReturned: "123412341234",
        description: "They for some reason drank redbull and actually got wings...",
      },
      {
        name: "Clinic Visit Notes 2",
        dateReturned: "123412341234",
        description:
          "They had a limp on their left leg, and they were wearing a cast on their right arm.",
      },
    ],
  },
  advancedCarePlanning: {
    description: "Advanced Care Planning",
    advancedCarePlanningList: [
      {
        name: "Do Not Resussitate (DNR)",
        description: "Advanced Care Planning",
      },
      {
        name: "Song Requests",
        description: "He likes to listen to staying alive while getting CPR",
      },
    ],
  },
  accessLogs: [
    {
      visitID: "128371298y391837",
      clinicID: "128371298y391837",
      accessTime: "172389712973643984659172",
      clinicName: "Jubilee Hospital",
      clinicLocation: "1234 Main Street, New York, NY 10001",
      clinicPhone: "123-456-7890",
      clinician: "Dr. John Smith",
      clinicianSpecialty: "Cardiologist",
      accessedInformation: {
        Medication: true,
        Insurance: true,
        Alergies: false,
        Conditions: true,
        "Lab Results": false,
        "Radiology Results": false,
        "Hospital Reports": false,
        "Involved Clinicians": true,
        "Clinic Visit Notes": false,
        "Advanced Care Planning": false,
      },
    },
    {
      visitID: "128371298y391837",
      clinicID: "fb8wg823hr1u982389",
      accessTime: "172389712973643984659172",
      clinicName: "American Dental",
      clinicLocation: "1234 Main Street, New York, NY 10001",
      clinicPhone: "321-412-1230",
      clinician: "Dr. Jane Doe",
      clinicianSpecialty: "Dentist",
      accessedInformation: {
        Medication: true,
        Insurance: true,
        Alergies: false,
        Conditions: false,
        "Lab Results": true,
        "Radiology Results": false,
        "Hospital Reports": false,
        "Involved Clinicians": true,
        "Clinic Visit Notes": false,
        "Advanced Care Planning": true,
      },
    },
  ],
};

export default data;
