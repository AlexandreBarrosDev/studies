import { DioAccount } from "./DioAccount";

export class SafeAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        const addition = value * 0.1
        const safeDeposit = value + addition
        if(this.validateStatus()) {
            this.balance += safeDeposit
            console.log(`você depositou R$ ${safeDeposit}`)
        }
    }
}