import { sleep } from "../index";

describe("sleep", () => {

    const mockBounceCallback = jest.fn(() => {});
    
    beforeEach(() => {
        mockBounceCallback.mockClear();
    });

    it("test sleep", async () => {

        const beforeTime = new Date().getTime();
        await sleep();
        const afterTime = new Date().getTime();
        const diffTime = afterTime - beforeTime;
        
        expect(diffTime).toBeGreaterThanOrEqual(1000);
        expect(diffTime).toBeLessThan(2000);
    });

    it("test sleep custom time", async () => {

        const beforeTime = new Date().getTime();
        await sleep(100);
        const afterTime = new Date().getTime();
        const diffTime = afterTime - beforeTime;
        
        expect(diffTime).toBeGreaterThanOrEqual(100);
        expect(diffTime).toBeLessThan(300);
    });
});
