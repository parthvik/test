import { Education as TEducation } from "../api/education/Education";

export const EDUCATION_TITLE_FIELD = "degree";

export const EducationTitle = (record: TEducation): string => {
  return record.degree?.toString() || String(record.id);
};
