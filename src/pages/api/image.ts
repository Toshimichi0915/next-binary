import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const image = await fetch("https://toshimichi-public.s3.ap-northeast-1.amazonaws.com/icon.png")
  res.setHeader("Content-Type", "image/png");

  if (!image.body) {
    res.end()
    return
  }

  const reader = image.body.getReader()
  while (true) {
    const result = await reader.read()
    if (result.done) {
      res.end()
      return
    }

    res.write(result.value)
  }
}
