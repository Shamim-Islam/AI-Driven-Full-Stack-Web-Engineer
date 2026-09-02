interface GeneralPatient {
  name: string;
  age: number;
  type: "general";
}

interface EmergencylPatient {
  name: string;
  age: number;
  type: "emergency";
  emergencyLevel: 1 | 2 | 3;
}

const getPatientStatus = (
  patient: GeneralPatient | EmergencylPatient,
): string => {
  if (patient.type === "general") {
    return "General patient";
  } else if (patient.type === "emergency") {
    if (patient.emergencyLevel === 1) {
      return "Critical emergency";
    } else if (patient.emergencyLevel === 3) {
      return "Moderate emergency";
    }
  }
  return "Serious emergency";
};

// console.log(getPatientStatus({ name: "Rahim", age: 35, type: "general" }));
// console.log(getPatientStatus({ name: "Karim", age: 60, type: "emergency", emergencyLevel: 1 }));
console.log(
  getPatientStatus({
    name: "Hasan",
    age: 45,
    type: "emergency",
    emergencyLevel: 2,
  }),
);
