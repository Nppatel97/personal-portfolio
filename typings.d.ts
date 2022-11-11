interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInfo: string;
  cellNumber: string;
  email: string;
  mainImg: Image;
  name: string;
  profileImg: Image;
  role: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  currentlyWorkingHere: boolean;
  dateEnded: date;
  dateStarted: date;
  descPoints: string[];
  jobTitle: string;
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: Image;
  progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  projectImg: Image;
  linkToBuild: string;
  linkToGithub: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
