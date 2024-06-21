import { Experience as TExperience } from "../api/experience/Experience";

export const EXPERIENCE_TITLE_FIELD = "title";

export const ExperienceTitle = (record: TExperience): string => {
  return record.title?.toString() || String(record.id);
};
