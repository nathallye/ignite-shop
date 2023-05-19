import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({ message: "Hello world" })
}

export default handler;
