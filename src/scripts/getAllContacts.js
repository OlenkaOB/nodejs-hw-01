import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        return JSON.parse(await readContacts());
    } catch (error) {
        console.error(error);
    }
};

console.log(await getAllContacts());
