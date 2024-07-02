import { InputJsonValue } from "../../types";

export type VideoCreateInput = {
  description?: string | null;
  filePath?: InputJsonValue;
  scheduledTime?: Date | null;
  schedules?: InputJsonValue;
  status?: "Option1" | null;
  title?: string | null;
};
