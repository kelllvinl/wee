// 1
import XLSX from 'xlsx';
import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname,"../.env")});

const client = new pg.Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
})

let xlsxFilename = 'member.csv';

interface member {
    username: string;  
    password: string; 
    day_of_birth: string;
    day_of_bnovisa: string;
    email: string;
    profile_pic: string;
    entry_date: string;
}

async function main() {
    await client.connect();
    let wb = XLSX.readFile(xlsxFilename,{raw:true});
    // console.log(XLSX.utils.sheet_to_json(wb.Sheets['member']));

    // console.log(wb);
    const members = XLSX.utils.sheet_to_json<member>(wb.Sheets['Sheet1']);
    // console.log(members)
console.log(Object.keys(members[0]))
    // for (let member of members) {
    //     console.log(member)
    //     await client.query('INSERT INTO member ( username, password, day_of_birth, day_of_bnovisa, email, profile_pic, entry_date) values ($1, $2, $3, $4, $5, $6, $7)', 
    //     [ member.username, member.password, member.day_of_birth, member.day_of_bnovisa, member.email, member.profile_pic, member.entry_date]);
    // }

    let result1 = await client.query('select * from member');

    console.log(result1.rowCount);
}

main()