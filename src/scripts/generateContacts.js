import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';


const generateContacts = async (number) => {
    try {
        const data = JSON.parse(await readContacts());
        const newContacts = Array.from({ length: number }, () =>
            createFakeContact(),
        );
        data.push(...newContacts);
        await writeContacts(data);
        console.log(`${number} generate contacts`);

    } catch (error) {
        console.error(error);
    }
};

generateContacts(3);
