import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const data = JSON.parse(await readContacts());
        data.push(createFakeContact());
        await writeContacts(data);

    } catch (error) {
        console.error(`Сontact saved:`, error);
    }
};

addOneContact();
