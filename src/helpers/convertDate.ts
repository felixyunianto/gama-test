import moment from "moment";
import 'moment/locale/id';

moment.locale("id");
export const convertDate = (date: Date, format: string) => {
  const newDate = new Date(date);

  return moment(newDate).format(format);
};
