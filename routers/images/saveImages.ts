// // import fs from "fs"
// // import { IncomingForm } from "formidable"

// // function generateRandomDigits(length: number) {
// //   const digits = "0123456789"
// //   let result = ""

// //   for (let i = 0; i < length; i++) {
// //     const randomIndex = Math.floor(Math.random() * digits.length)
// //     result += digits.charAt(randomIndex)
// //   }

// //   return result
// // }

// // export default async (req: any, res: any) => {
// //   try {
// //     const form = new IncomingForm()

// //     form.parse(req, async (err, fields, files) => {
// //       if (err) {
// //         console.error("Error parsing form data:", err)
// //         return { success: false, error: "Internal Server Error" }
// //       }

// //       const imageFile: any = files.image
// //       const filePath = `../public/static/uploads/images/${
// //         imageFile.name
// //       }_${generateRandomDigits(10)}`

// //       fs.writeFileSync(filePath, fs.readFileSync(imageFile.path))

// //       // Your logic here, such as saving the file path to a database

// //       return { success: true, file: filePath }
// //     })
// //   } catch (error) {
// //     console.error("Error handling upload:", error)
// //     return { success: false, error: "Internal Server Error" }
// //   }
// // }

// import multer from 'multer';
// import { NextApiRequest, NextApiResponse } from 'next';
// import nextConnect from 'next-connect';

// // Set up Multer storage
// const storage = multer.memoryStorage(); // You can customize storage as needed
// const upload = multer({ storage: storage });

// const handler = nextConnect();

// handler.use(upload.single('file')); // 'file' is the field name for the uploaded file

// handler.post((req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     const file = req.file; // Access the uploaded file

//     // Your logic here

//     res.status(200).json({ success: true, file });
//   } catch (error) {
//     console.error('Error handling upload:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });
