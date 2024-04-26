import {
  TCssPseudoClassesReferences,
  TCssSelectorsReferences,
  TFilesReferences,
  THtmlAttributesReferences,
  THtmlElementsReference,
  THtmlGlobalAttributesReferences,
} from "./types/types";

import cssPseudoClasses from "./references/CSS Pseudo Classes.csv";
import cssSelectors from "./references/CSS Selectors.csv";
import files from "./references/Files.csv";
import htmlAttributes from "./references/HTML Attributes.csv";
import htmlElements from "./references/HTML Elements.csv";
import htmlGlobalAttributes from "./references/HTML Global Attributes.csv";

export const cssPseudoClassesReferences: TCssPseudoClassesReferences[] =
  cssPseudoClasses;
export const cssSelectorsReferences: TCssSelectorsReferences[] = cssSelectors;
export const filesReferences: TFilesReferences[] = files;
export const htmlAttributesReferences: THtmlAttributesReferences[] =
  htmlAttributes;
export const htmlElementsReferences: THtmlElementsReference[] = htmlElements;
export const htmlGlobalAttributesReferences: THtmlGlobalAttributesReferences[] =
  htmlGlobalAttributes;
