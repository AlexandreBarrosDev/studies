import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    cnpj: string

    constructor(name: string, accountNumber: number, cnpj: string) {
        super(name, accountNumber)
        this.cnpj = cnpj
    }

    getLoan = (value: number): void => {
        if(this.validateStatus()) {
            this.balance += value
            console.log(`Empréstimo de R$ ${value} concedido.`)
        }
    }
}