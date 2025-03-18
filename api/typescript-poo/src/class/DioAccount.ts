export abstract class DioAccount {
    private name: string
    accountNumber: number
    balance: number = 0
    status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string): void => {
        this.name = name
        console.log(`Nome alterado para ${this.name}`)
    }
    getName = (): string => this.name
    deposit = (value: number): void => {
        if(this.validateStatus()) {
            this.balance += value
                console.log(`${this.name} depositou R$ ${value}`)
        }
    }
    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance >= value) {
            this.balance -= value
            console.log(`${this.name} sacou R$ ${value}`)
        } else {
            console.log(`Saldo insuficiente`)
        }
    }
    getBalance = () => console.log(`O saldo da conta de ${this.name} é de R$ ${this.balance}`)
    validateStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error(`Conta Inválida`)
    }
}