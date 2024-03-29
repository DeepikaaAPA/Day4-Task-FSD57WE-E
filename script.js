const resume = {
  name: "Deepikaa",
  education: {
    degree: "BE CSE",
    collge: "KEC",
    aggregate: "83.6",
    duration: "2006-2010",
  },
  experience: {
    organization: "CTS",
    duration: "3 years",
    Vertical: "DWBI",
    Technology: "Pentaho BI",
    timeline: {
      start: "Sep2010",
      end: "Sep2013",
    },
  },
  skills: ["SQL", "Java", "Javascript", "Node.js", "React"],

  contact: {
    email: "deepikaudt@gmail.com",
    phone: 1234567890,

    github: "deepikaa@github.com",
    linkedin: "deepikaa@linkedin.com",
  },
};

console.log("\nResume:");
console.log(resume);
const keys = Object.keys(resume);
const values = Object.values(resume);

console.log("\n\nFor LOOP");
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i] + ":" + values[i]);
}
console.log("\n\nFor..in  LOOP");
console.log("Education :");
for (let key in resume.education) {
  console.log(key + " :" + resume.education[key]);
}
console.log("\n\nFor..of  LOOP");
console.log("Skills :");
for (let value of resume.skills) {
  console.log(value);
}
console.log("\n\nForEach ");
console.log("Contact :");
const contact = Object.keys(resume.contact);
contact.forEach((k) => console.log(k + ":" + resume.contact[k]));
