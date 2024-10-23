import { readContacts } from "../utils/readContacts";

export const getAllContacts = async () => readContacts();

console.log(await getAllContacts());
