import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {

    try {
        const data = JSON.parse(await readContacts());
        if (!data.length) return console.log(data);
        data.pop();
        await writeContacts(data);
        console.log(`DB last contact!`);
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
