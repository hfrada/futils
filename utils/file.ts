import { FileFromTextError, FileReaderError } from "../errors/File";

export function fileTypeCheck(
    file: File,
    checker: [type: string, accept?: string]
) {
    const parsedType = file.type.split("/");
    const isValidType = parsedType[0] === checker[0];
    const isAcceptable = checker[1] ? checker[1].includes(parsedType[1]) : true;
    return isValidType && isAcceptable;
}

export function fileMegabyte(file: File): number {
    const megaBytes = file.size / 1024 ** 2;
    return Number(megaBytes.toFixed(3));
}

export function fileReader(file: Blob) {
    try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve, reject) => {
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = () => reject(new Error());
        });
    } catch {
        throw new FileReaderError();
    }
}

export async function fileFromText(
    text: string,
    options: {
        name: string;
        type?: string;
    }
) {
    try {
        const { name, type } = options;
        const extension = type?.split("/")[1];
        const res = await fetch(text);
        const blob = await res.blob();
        const file = new File([blob], `${name}.${extension}`, { type });
        return file;
    } catch(e) {
        throw new FileFromTextError();
    }
}

export function fileIsBase64(file: string) {
    return file.includes("data:") && file.includes("base64");
}

export function fileRemoveBase64(file: string) {
    const [_, ...removedFormat] = file.split(",");
    return removedFormat.join(",");
}
