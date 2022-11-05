export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "mainImg",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "backgroundInfo",
      title: "Background Info",
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
      name: "cellNumber",
      title: "Cell Number",
      type: "string",
    },
    {
      name: "email",
      title: "E-mail",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
  ],
};
