import { DateArrayRangeError } from "../errors/DateArray";

export function dateArray (startDate: Date, endDate: Date) {
  if (endDate.getTime() < startDate.getTime()) {
    throw new DateArrayRangeError();
  }

  const dates: Date[] = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}
