import fs from 'fs';

export class ImportCategoryUseCase {
    execute(file: Express.Multer.File) {
        const stream = fs.createWriteStream(file.path);
        // stream.pipe()
        console.log(file);
    }
}