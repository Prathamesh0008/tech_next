import compoundsJson from "./compounds.json";
import { normalizeCompounds } from "../lib/compounds";

export const compoundsObject = compoundsJson?.products || {};

export function getCompounds() {
  return normalizeCompounds(compoundsObject);
}

