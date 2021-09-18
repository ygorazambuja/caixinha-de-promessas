import { Verse } from "../../interfaces/promiseBox";
import PromiseBox from "../../db/promise-box.json";

export function getRandomVersicleFromPromiseBox(): Verse {
  return PromiseBox[Math.floor(Math.random() * PromiseBox.length)];
}
