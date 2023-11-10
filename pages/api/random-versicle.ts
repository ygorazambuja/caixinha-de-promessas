import type { NextApiRequest, NextApiResponse } from "next";
import { Verse } from "../../interfaces/promiseBox";
import { getRandomVersicleFromPromiseBox } from "../../services/promiseBox";

export  default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Verse>
) {
  const randomVerse = getRandomVersicleFromPromiseBox();

  res.status(200).json(randomVerse);
}
