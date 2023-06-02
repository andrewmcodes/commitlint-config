import { QualifiedRules } from "@commitlint/types";
import { rules } from "@commitlint/config-conventional";

declare module "@commitlint/config-conventional" {
  export const rules: QualifiedRules;
}
