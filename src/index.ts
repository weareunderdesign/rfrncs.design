import {
  CSSPseudoClassesEntry,
  CSSSelectorsEntry,
  FilesEntry,
  HTMLAttributesEntry,
  HTMLElementsEntry,
  HTMLGlobalAttributesEntry,
} from "./types/types";
import cssPseudoClasses from "./references/CSS Pseudo Classes.csv";
import cssSelectors from "./references/CSS Selectors.csv";
import files from "./references/Files.csv";
import htmlAttributes from "./references/HTML Attributes.csv";
import htmlElements from "./references/HTML Elements.csv";
import htmlGlobalAttributes from "./references/HTML Global Attributes.csv";

const cssPseudoClassesReferences: CSSPseudoClassesEntry[] = cssPseudoClasses;
const cssSelectorsReferences: CSSSelectorsEntry[] = cssSelectors;
const filesReferences: FilesEntry[] = files;
const htmlAttributesReferences: HTMLAttributesEntry[] = htmlAttributes;
const htmlElementsReferences: HTMLElementsEntry[] = htmlElements;
const htmlGlobalAttributesReferences: HTMLGlobalAttributesEntry[] =
  htmlGlobalAttributes;

export {
  cssPseudoClassesReferences,
  cssSelectorsReferences,
  filesReferences,
  htmlAttributesReferences,
  htmlElementsReferences,
  htmlGlobalAttributesReferences,
};
