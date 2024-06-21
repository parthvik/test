import { Engineer as TEngineer } from "../api/engineer/Engineer";

export const ENGINEER_TITLE_FIELD = "name";

export const EngineerTitle = (record: TEngineer): string => {
  return record.name?.toString() || String(record.id);
};
