import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { SafeAccount } from "./class/SafeAccount"

const peopleAccount: PeopleAccount = new PeopleAccount('Alexandre', 123456, '123.456.789-00')
peopleAccount.deposit(2000)
peopleAccount.withdraw(1999)
peopleAccount.getBalance()


const companyAccount: CompanyAccount = new CompanyAccount('Dio', 654321, '12.345.678/0001-00')
companyAccount.deposit(160000)
companyAccount.withdraw(50000)
companyAccount.getBalance()
companyAccount.getLoan(100000)
companyAccount.getBalance()

const safeAccount: SafeAccount = new SafeAccount('José', 654321)
safeAccount.deposit(1000)
safeAccount.deposit(1000)
safeAccount.withdraw(1000)
safeAccount.getBalance()