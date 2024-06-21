import { Worker as TWorker } from "../api/worker/Worker";

export const WORKER_TITLE_FIELD = "id";

export const WorkerTitle = (record: TWorker): string => {
  return record.id?.toString() || String(record.id);
};
