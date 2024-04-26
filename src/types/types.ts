// Type for CSS Pseudo Classes.csv
export type TCssPseudoClassesReference = {
  Name: string;
  Selector: string;
  Example: string;
  "Example description": string;
};

// Type for CSS Selectors.csv
export type TCssSelectorsReference = {
  Selector: string;
  Example: string;
  "Example description": string;
};

// Type for Files.csv
export type TFilesReference = {
  Name: string;
  Description: string;
  Extension: string;
  Type: string;
  Icon: string;
  Featured: string;
};

// Type for HTML Attributes.csv
export type THtmlAttributesReference = {
  Name: string;
  Attribute: string;
  "Belongs to": string;
  Description: string;
  Value: string;
};

// Type for HTML Elements.csv
export type THtmlElementsReference = {
  Tag: string;
  Contain: string;
  Description: string;
  Name: string;
  Content: string;
  Attributes: string;
  Icon: string;
  Type: string;
  Featured: string;
  "Cover Image": string;
};

// Type for HTML Global Attributes.csv
export type THtmlGlobalAttributesReference = {
  Name: string;
  Attribute: string;
  Description: string;
  Value: string | null;
};
