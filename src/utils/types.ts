export type AccessLog = {
  visitID: string;
  clinicID: string;
  accessTime: string;
  clinicName: string;
  clinicLocation: string;
  clinicPhone: string;
  clinician: string;
  clinicianSpecialty: string;
  accessedInformation: AccessedInformationType;
};

export type AccessedInformationType = {
  [key: string]: boolean;
};

export type PatientRecord = {
  rfid: string;
  legalName: string;
  signatureId: string;
  sex: string;
  dateOfBirth: string;
  wifeyMaterial: boolean;
  notes: string;
  medication: {
    description: string;
    medsList: Array<Record<string, unknown>>;
  };
  insurance: {
    description: string;
    insuranceList: Array<Record<string, unknown>>;
  };
  allergies: {
    description: string;
    alergyList: Array<Record<string, unknown>>;
  };
  conditions: {
    description: string;
    conditionList: Array<Record<string, unknown>>;
  };
  labResults: {
    description: string;
    labResultsList: Array<Record<string, unknown>>;
  };
  radiologyResults: {
    description: string;
    radiologyResultsList: Array<Record<string, unknown>>;
  };
  hospitalReports: {
    description: string;
    hospitalReportsList: Array<Record<string, unknown>>;
  };
  involvedClinicians: {
    description: string;
    involvedCliniciansList: Array<Record<string, unknown>>;
  };
  clinicVisitNotes: {
    description: string;
    clinicVistNotesList: Array<Record<string, unknown>>;
  };
  advancedCarePlanning: {
    description: string;
    advancedCarePlanningList: Array<Record<string, unknown>>;
  };
  accessLogs: Array<AccessLog>;
};
