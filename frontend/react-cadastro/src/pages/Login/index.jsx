import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div>
            <form>
            <h2>Login</h2>
            <input placeholder="Email" type="email" />
            <input placeholder="Senha" type="password" />
            </form>
            <Link to="/cadastro">Faça o seu cadastro!</Link>
        </div>
    )
}