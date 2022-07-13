import { debounce, sleep } from "../index";

describe("debounce", () => {

    const mockBounceCallback = jest.fn(() => {});
    
    beforeEach(() => {
        mockBounceCallback.mockClear();
    });

    it("test debounce bouncer", async () => {
        const bouncer = debounce(mockBounceCallback);
        bouncer();
        expect(mockBounceCallback).toBeCalledTimes(0);
        await sleep();
        expect(mockBounceCallback).toBeCalledTimes(1);
    });

    it("test debounce custom time", async () => {
        const bouncer = debounce(mockBounceCallback, 1000);
        bouncer();
        await sleep(300);
        expect(mockBounceCallback).toBeCalledTimes(0);
        await sleep();
        expect(mockBounceCallback).toBeCalledTimes(1);
    });
});
