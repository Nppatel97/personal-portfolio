export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "Title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "linkToBuild",
      title: "Live Demo URL",
      type: "url",
    },
  ],
};
