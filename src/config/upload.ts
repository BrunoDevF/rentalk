import multer from "multer";
import { resolve } from "path";
import crypto from "crypto";

const tmpFolder = resolve(__dirname, "..", "..", "tmp");

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;
      return cb(null, fileName);
    },
  }),
  // upload(folder: string) {
  //     return {
  //         storage: multer.diskStorage({
  //             destination: resolve(__dirname, '..', '..', folder),
  //             filename: (req, file, cb) => {
  //                 const fileHash = crypto.randomBytes(16).toString('hex');
  //                 const fileName = `${fileHash}-${file.originalname}`;
  //                 return cb(null, fileName);

  //             },
  //         })
  //     }
  // }
};
