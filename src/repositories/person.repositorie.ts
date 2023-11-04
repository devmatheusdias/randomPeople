import { connection } from "@/configs/db.connection";
import { Person } from "@/protocols/person.protocol";

async function countRegisters(): Promise<number>{
    const result = await connection.query(`SELECT COUNT(*) AS total_registers FROM people;`)  
    return result.rowCount;
}

async function getPerson(id: number): Promise<Person[]>{
    const result = await connection.query<Person>(`SELECT * FROM people WHERE id = $1;`, [id]);
    return result.rows;
}

const personRepository = { getPerson, countRegisters }

export default personRepository