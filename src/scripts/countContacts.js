import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const data = await readContacts();
        const contacts = JSON.parse(data);
        const totalContacts = contacts.length;
        console.log(`${totalContacts} contacts in your DB`);
        return totalContacts;
    } catch (error) {
        console.error(error);
    }
};

console.log(await countContacts());
