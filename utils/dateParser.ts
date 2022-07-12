type DateParam = string | number | Date;

export const defFormat = "DD/MM/YY";
const month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
];

// make number to string
// if number less than 10, add zero in front
export function dateZero (date: number): string {
    if (date < 10) {
        return "0" + date;
    }
    return date.toString();
}

// date parsing
export default function dateParser (datetime: DateParam, format = defFormat, defResult = ""): string {
    const date = new Date(datetime);

    if (isNaN(date.getTime())) {
        return defResult;
    }
  
    return format
        .replace(/YY/g, date.getFullYear().toString())
        .replace(/MNs/g, month[date.getMonth()].slice(0, 3))
        .replace(/MN/g, month[date.getMonth()])
        .replace(/MM/g, dateZero(date.getMonth() + 1))
        .replace(/DD/g, dateZero(date.getDate()))
        .replace(/HH/g, dateZero(date.getHours()))
        .replace(/mm/g, dateZero(date.getMinutes()))
        .replace(/ss/g, dateZero(date.getSeconds()))
        .replace(/ms/g, date.getMilliseconds().toString());
}
