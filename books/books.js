import { getBookByID } from '../fetch-utils';

async function loadData() {
    await getBookByID();
}
loadData();
