import { Provider } from "@nestjs/common";

export const VALID_GENDERS = [
  "m2f",
  "female",
  "male",
  "Couple",
  "f2m",
  "Other",
  "unknown",
  "Same Sex Couple (Male)",
  "Same Sex Couple (Female)",
];

export type Gender =
  | "m2f"
  | "female"
  | "male"
  | "Couple"
  | "f2m"
  | "Other"
  | "unknown"
  | "Same Sex Couple (Male)"
  | "Same Sex Couple (Female)";

export const ValidGendersProviderKey: string = "VALID_GENDERS";

export const ValidGendersProvider: Provider<string[]> = {
  provide: ValidGendersProviderKey,
  useValue: VALID_GENDERS,
};
