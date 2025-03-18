import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
    private readonly cpf: string

    constructor(name: string, accountNumber: number, cpf: string) {
        super(name, accountNumber)
        this.cpf = cpf
    }
}