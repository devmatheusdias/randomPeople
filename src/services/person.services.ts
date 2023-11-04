import personRepository from "@/repositories/person.repositorie";
import { randomNumber } from "@/utils/randomNumber";
import { Person } from "@/protocols/person.protocol";

export async function getPerson(): Promise<Person[]>{

    const total_registers = await personRepository.countRegisters();

    const id = randomNumber(total_registers);

    const result = await personRepository.getPerson(id);
    return result;
}

const personServices = {getPerson};

export default personServices;
