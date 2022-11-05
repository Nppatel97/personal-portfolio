export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },

    {
      name: "dateStarted",
      title: "Date Started",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "Date Ended",
      type: "date",
    },
    {
      name: "currentlyWorkingHere",
      title: "Currently Working Here",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "descPoints",
      title: "Job Description",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
