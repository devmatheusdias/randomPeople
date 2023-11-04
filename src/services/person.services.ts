import personRepository from "@/repositories/person.repositorie";
import { randomNumber } from "@/utils/randomNumber";
import { Person } from "@/protocols/person.protocol";
import { badRequestError, notFoundError } from "@/errors/errors";

export async function getPerson(): Promise<Person[]>{

    const total_registers = await personRepository.countRegisters();
    if(!total_registers) throw notFoundError();

    const id = randomNumber(total_registers);
    if(!id) throw badRequestError();

    const result = await personRepository.getPerson(id);
    if(!result) throw notFoundError();
    
    return result;
}

const personServices = {getPerson};

export default personServices;
