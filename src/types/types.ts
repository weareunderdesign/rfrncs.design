// Interface for CSS Pseudo Classes.csv
export interface CSSPseudoClassesEntry {
  Name: string;
  Selector: string;
  Example: string;
  "Example description": string;
}

// Interface for CSS Selectors.csv
export interface CSSSelectorsEntry {
  Selector: string;
  Example: string;
  "Example description": string;
}

// Interface for Files.csv
export interface FilesEntry {
  Name: string;
  Description: string;
  Extension: string;
  Type: string;
  Icon: string;
  Featured: string;
}

// Interface for HTML Attributes.csv
export interface HTMLAttributesEntry {
  Name: string;
  Attribute: string;
  "Belongs to": string;
  Description: string;
  Value: string;
}

// Interface for HTML Elements.csv
export interface HTMLElementsEntry {
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
}

// Interface for HTML Global Attributes.csv
export interface HTMLGlobalAttributesEntry {
  Name: string;
  Attribute: string;
  Description: string;
  Value: string | null;
}
