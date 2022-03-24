import { parseJSON } from "date-fns";
import { lightFormat } from "date-fns";

export const formatter = (date) => {
  const parser = parseJSON(date);
  const result = lightFormat(parser, "dd/MM/yyyy");
  return result;
};
