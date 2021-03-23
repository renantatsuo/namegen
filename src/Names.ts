import fs from "./FileSystem";

const NAMES_FILE = process.env.FILE_NAME || "";

/**
 * Get a random name from the name list.
 *
 * @returns string: a name from the name list
 */
async function getName() {
  const names = await fetchNames();
  const randomIndex = Math.floor(Math.random() * names.length);
  return sanitize(names[randomIndex]);
}

/**
 * Fetch the name list from a resource.
 *
 * @returns a promise of a name list
 */
async function fetchNames(): Promise<string[]> {
  const namesFromFile = await fs.readFile(NAMES_FILE);
  return new String(namesFromFile).split("\n");
}

function sanitize(str: string): string {
  return str
    .toLocaleLowerCase()
    .normalize("NFC")
    .replace(/\(.*?\)/g, "")
    .replace(" ", "-");
}

export default {
  getName,
};
