import { dateFromNow, dateParser, dateZero, defDateFormat } from "../index";

describe("dateParser", () => {

    const defDate = new Date(2000, 2, 1, 10, 20, 30, 40);

    it("test date parsing", () => {
        const parse = dateParser(defDate);
        expect(parse).toBe("01/03/2000");
    });

    describe("test date parsing each format", () => {
        it("test year", () => {
            const year = dateParser(defDate, "YY");
            expect(year).toBe("2000");
        });
        it("test month name", () => {
            const monthName = dateParser(defDate, "MN");
            expect(monthName).toBe("Maret");
        });
        it("test short month name", () => {
            const shortMonthName = dateParser(defDate, "MNs");
            expect(shortMonthName).toBe("Mar");
        });
        it("test date", () => {
            const shortMonthName = dateParser(defDate, "DD");
            expect(shortMonthName).toBe("01");
        });
        it("test date", () => {
            const hour = dateParser(defDate, "HH");
            expect(hour).toBe("10");
        });
        it("test minute", () => {
            const minute = dateParser(defDate, "mm");
            expect(minute).toBe("20");
        });
        it("test second", () => {
            const second = dateParser(defDate, "ss");
            expect(second).toBe("30");
        });
        it("test millisecond", () => {
            const millisecond = dateParser(defDate, "ms");
            expect(millisecond).toBe("40");
        });
    });

    it("test custom format", () => {
        const parse = dateParser(defDate, "(YY)-(MNs)++DD");
        expect(parse).toBe("(2000)-(Mar)++01");
    });

    it("test invalid with default result", () => {
        const parse = dateParser("invalid", defDateFormat, "invalid date");
        expect(parse).toBe("invalid date");
    });

    it("test dateZero", () => {
        const addZero = dateZero(1);
        const justToString = dateZero(10);

        expect(addZero).toBe("01");
        expect(justToString).toBe("10");
    });

    describe("test dateFromNow each result", () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const day = now.getDate();
        const hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();

        it("test interval year", () => {
            const date = new Date(year - 1, 0);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 tahun lalu");
        });

        it("test interval month", () => {
            const date = new Date(year, month - 1);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 bulan lalu");
        });

        it("test interval day", () => {
            const date = new Date(year, month, day - 1);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 hari lalu");
        });

        it("test interval hour", () => {
            const date = new Date(year, month, day, hour - 1);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 jam lalu");
        });

        it("test interval minute", () => {
            const date = new Date(year, month, day, hour, minute - 1);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 menit lalu");
        });

        it("test interval second", () => {
            const date = new Date(year, month, day, hour, minute, second - 1);
            const diffYear = dateFromNow(date);
            expect(diffYear).toBe("1 detik lalu");
        });
    });
});
