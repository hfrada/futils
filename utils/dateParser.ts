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

export function dateFromNow(datetime: DateParam) {
    const date = new Date(datetime);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  
    // interval year
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " tahun lalu";
    }

    // interval month
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " bulan lalu";
    }

    // interval day
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " hari lalu";
    }

    // interval hour
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " jam lalu";
    }

    // interval minute
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " menit lalu";
    }

    return Math.floor(seconds) + " detik lalu";
}
