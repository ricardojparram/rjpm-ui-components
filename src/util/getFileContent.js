import { promisify } from "util";
import fs from "fs";
import path from "path";

export async function getFileContent(filePath) {
  const readFile = promisify(fs.readFile);
  const fileContent = await readFile(
    path.join(process.cwd(), filePath),
    "utf8"
  );

  return fileContent;
}
