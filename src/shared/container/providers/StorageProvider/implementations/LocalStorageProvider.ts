import { IStorageProvider } from "../interfaces/IStorageProvider";
import fs from "fs";
import { resolve } from "path";
import upload from "src/config/upload";

export class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    fs.promises.rename(
        resolve(upload.tmpFolder, file),
        resolve(`${upload.tmpFolder}/${folder}`)   
    );
    return file
  }
  async delete(file: any, folder: string): Promise<void> {
    const filename = resolve(`${upload.tmpFolder}/${folder}`, file)
    try {
        await fs.promises.stat(filename)
    } catch (error) {
        return
    }
    await fs.promises.unlink(filename)
  }
}
