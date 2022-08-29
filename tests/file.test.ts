import {
    fileFromText,
    fileIsBase64,
    fileMegabyte,
    fileReader,
    fileRemoveBase64,
    fileTypeCheck,
} from "../index";

type Attempt = 1 | 2 | 3 | 4 | 5 | 6;

function generateData(attempt: Attempt) {
    const table = {
        1:10, //10kb  
        2:12, //40kb
        3:14, //160kb
        4:16, //640kb
        5:18, //2.5Mb
        6:20, //10Mb
    };
    let random_data = "abcdefghij";  //10 bytes
    for (let i = 0; i < table[attempt]; i++) {
        random_data += random_data;
    }
    return random_data;
}


function createFile(attempt: Attempt, options?: FilePropertyBag) {
    return new File([generateData(attempt)], "test", options);
}

describe("file", () => {

    describe("test file type checker", () => {

        const accepts = ".png, .jpg";
        it("test type is valid", () => {
            const file = createFile(1, { type: "image/png" });
            const isValid = fileTypeCheck(file, ["image", accepts]);
            expect(isValid).toBeTruthy();
        });

        it("test type invalid", () => {
            const file = createFile(1, { type: "document/pdf" });
            const isValid = fileTypeCheck(file, ["image", accepts]);
            expect(isValid).toBeFalsy();
        });
    });

    it("test file megabyte", () => {
        const file = createFile(5);
        const megabyte = fileMegabyte(file);
        expect(megabyte).toBe(2.5);
    });

    describe("test file reader", () => {
        it("test success read", async () => {
            const file = createFile(1);
            const reader = await fileReader(file);
            expect(reader).toContain("data:application");
        });

        it("test error reader", async () => {
            try {
                await fileReader(null as unknown as File);
            } catch (e) {
                expect((e as Error).message).toBe("Gagal membaca file.");
            }
        });
    });

    describe("test file from text", () => {

        global.fetch = jest.fn((input: RequestInfo | URL) => Promise.resolve({
            blob() {
                if (!input) {
                    throw new Error();
                }
                return createFile(1);
            }
        } as any));

        it("test success get file", async () => {
            const file = createFile(1);
            const reader = await fileReader(file);
            const fileGet = await fileFromText(reader, { name: "test_from_text", type: "image/png" });
            expect(fileGet.name).toBe("test_from_text.png");
        });

        it("test error get file", async () => {
            try {
                await fileFromText("", { name: "test_from_text" });
            } catch (e) {
                expect((e as Error).message).toBe("Gagal memuat file.");
            }
        });
    });

    it("test file is base64", async () => {
        const file = createFile(1);
        const reader = await fileReader(file);
        const isBase64 = fileIsBase64(reader);
        expect(isBase64).toBeTruthy();
    });

    it("test file is base64", async () => {
        const file = createFile(1);
        const reader = await fileReader(file);
        const notBase64 = fileRemoveBase64(reader);
        const isBase64 = fileIsBase64(notBase64);
        expect(isBase64).toBeFalsy();
    });
});
