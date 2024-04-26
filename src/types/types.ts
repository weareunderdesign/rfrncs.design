// Type for CSS Pseudo Classes.csv
export type TCssPseudoClassesReferences = {
  Name: string;
  Selector: string;
  Example: string;
  "Example description": string;
};

// Type for CSS Selectors.csv
export type TCssSelectorsReferences = {
  Selector: string;
  Example: string;
  "Example description": string;
};

// Type for Files.csv
export type TFilesReferences = {
  Name: string;
  Description: string;
  Extension: string;
  Type: string;
  Icon: string;
  Featured: string;
};

// Type for HTML Attributes.csv
export type THtmlAttributesReferences = {
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
export type THtmlGlobalAttributesReferences = {
  Name: string;
  Attribute: string;
  Description: string;
  Value: string | null;
};
