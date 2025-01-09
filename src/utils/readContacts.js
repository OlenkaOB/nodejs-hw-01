import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {

        const data = await fs.readFile(PATH_DB);
        return data;
    } catch (error) {
        console.error(`File cannot be read:`, error);
        throw error;

    }
};
