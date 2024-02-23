import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';

const filename = 'index.html';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method == 'GET') {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(fs.readFileSync(filename, 'utf-8'));
    res.end();
  }
}