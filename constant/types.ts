export type SiteMetaData = {
  AdminLogo: string;
  email: string;
  BusinessAddress: string;
  Whatsapp: string;
  WebsiteLogo: string;
  Favicon: string;
  WebsiteName: string;
  Description: string;
  Tagline: string;
};

export type _socialandles = {
  _Facebook: string;
  _Instagram: string;
  _Whatsapp: string;
};

export type docsType = {
  content: string;
  createdAt: string;
  modifiedAt: string;
};

export type FAQ = {
  question: string;
  answer: string;
  createdAt: string;
  id: string;
};

export type SIZE = {
  code: string;
  name: string;
};
export const Size = [
  {
    code: "12 X 9",
    name: "Small",
  },
  {
    code: "11 X 11",
    name: "Normal",
  },
  {
    code: "16 X 12",
    name: "Medium",
  },
  {
    code: "18 X 12",
    name: "Large",
  },
  {
    code: "16 X 16",
    name: "Xl",
  },
  {
    code: "21 X 15",
    name: "2Xl",
  },
  {
    code: "30 X 20",
    name: "3Xl",
  },
  {
    code: "35 X 26",
    name: "4Xl",
  },
];

export const Thickness = [
  {
    code: "3mm",
    name: "0.3cm",
  },
  {
    code: "5mm",
    name: "0.5cm",
  },
  {
    code: "8mm",
    name: "0.8cm",
  },
];

export const colors = [
  {
    code: "#f43f5e",
    name: "rose",
  },
  {
    code: "#ec4899",
    name: "pink",
  },
  {
    code: "#d946ef",
    name: "Fuchsia",
  },
  {
    code: "#a855f7",
    name: "Purple",
  },
  {
    code: "#8b5cf6",
    name: "Violet",
  },
];

export type Addresses = {
  state: string;
  pincode: string;
  phoneNumber: string;
  name: string;
  city: string;
  billing_address_1: string;
  billing_address_2: string;
};
export type Users = [
  {
    createdAt: string;
    displayName: string;
    email: string;
    photoUrl: string;
    providerId: string;
    uid: string;
  },
];
export type ORDER = {
  OrderID: string;
  UserID: string;
};
