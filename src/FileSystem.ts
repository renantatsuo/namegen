import { readFileSync } from "fs";

/**
 * Local implementation to file system.
 */
async function readFile(path: string): Promise<Buffer> {
  return readFileSync(path);
}

export default {
  readFile,
};
