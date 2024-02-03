import fs from "fs"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
// import nextConnect from 'next-connect';
import multer from "multer"
// import carImages from "@/routers/images/saveImages"
import * as nc from "next-connect"

const upload = multer({
  // Disk Storage option
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
})
// const handler = nextConnect();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  // let data = await carGet(req, res)
  // console.log(data)
  // return NextResponse.json(data)
  return NextResponse.json("data")
}
// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   let data = await carImages(req, res)

//   return NextResponse.json(data)
// }
// export const POST = nc()
//   .use(upload.array("images"))
//   .post(async (request: NextApiRequest, response: NextApiResponse) => {
//     try {
//       // await connect();
//       const data = request
//       // const newBlogPost = new BlogPost(data);
//       // await newBlogPost.save();
//       // return new NextResponse(JSON.stringify(newBlogPost), { status: 201 });
//     } catch (error) {
//       return new NextResponse("Fehler beim Erstellen des BlogPosts", {
//         status: 403,
//       })
//     }
//   })
function generateRandomDigits(length: number) {
  const digits = "0123456789"
  let result = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length)
    result += digits.charAt(randomIndex)
  }

  return result
}
export async function POST(req: Request) {
  const formData = await req.formData()
  const formDataEntryValues = Array.from(formData.values())
  let arr = []
  for (const formDataEntryValue of formDataEntryValues) {
    if (
      typeof formDataEntryValue === "object" &&
      "arrayBuffer" in formDataEntryValue
    ) {
      const file = formDataEntryValue as unknown as Blob
      const buffer = Buffer.from(await file.arrayBuffer())
      // @ts-ignore
      let oldName = file.name.split(".")
      let name = `${
        generateRandomDigits(10) + "." + oldName[oldName.length - 1]
      }`
      arr.push(name)
      fs.writeFileSync(`public/static/upload/${name}`, buffer)
    }
  }
  return NextResponse.json({ success: true, files: arr })
}
