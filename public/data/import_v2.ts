
import XLSX from 'xlsx';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new pg.Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
})

let xlsxFilename = 'wee_table.xlsx';

interface life_in_uk_quiz_question  {
    question_id: number,
    question: string,
}

async function main() {
    await client.connect();
    let wb = XLSX.readFile(xlsxFilename);
    //console.log(XLSX.utils.sheet_to_json(wb.Sheets['user']));
    //console.log(XLSX.utils.sheet_to_json(wb.Sheets['memo']));

    const lqs = XLSX.utils.sheet_to_json<life_in_uk_quiz_question>(wb.Sheets['uklife_q']);

    for (let lq of lqs) {
        await client.query('INSERT INTO life_in_uk_quiz_question  (question_id, question) values ($1, $2)', 
        [lq.question_id, lq.question]);
    }

    let result1 = await client.query('select * from lq');

    console.log(result1.rowCount);
}

main()