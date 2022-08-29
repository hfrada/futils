export class FileFromTextError extends Error {
  constructor() {
    super("Gagal memuat file.");
  }
}

export class FileReaderError extends Error {
  constructor() {
    super("Gagal membaca file.");
  }
}
