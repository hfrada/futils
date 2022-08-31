import { dateArray } from "../index";

describe("dateArray", () => {

    const fromDate = new Date(2000, 2, 1);
    const toDate = new Date(2000, 2, 5);

    it("test date array", () => {
        const dates = dateArray(fromDate, toDate);
        const dateRange = dates.map((date) => date.getDate());
        expect(dateRange).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it("test date array error", () => {
        try {
            dateArray(toDate, fromDate)
        } catch (e) {
            expect((e as Error).message).toBe("Range tanggal salah.");
        }
    });
});