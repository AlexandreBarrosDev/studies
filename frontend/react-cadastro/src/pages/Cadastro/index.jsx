import { Link } from "react-router-dom";
import Card from "../../components/Card";

export default function Cadastro() {
    return (
        <Card 
            title={"Cadastro"}
            children={
                <div>
                    <form>
                        <input placeholder="Nome" type="text" />
                        <input placeholder="Email" type="email" />
                        <input placeholder="Senha" type="password" />
                    </form>
                    <Link to="/">Já tem uma conta? Faça login</Link>
                </div>
            }
        />
    )
}