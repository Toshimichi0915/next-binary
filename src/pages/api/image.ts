import { NextApiRequest, NextApiResponse } from "next";
import { createReadStream } from "fs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const file = createReadStream("./test.png");

  res.setHeader("Content-Type", "image/png");
  file.pipe(res);
}
