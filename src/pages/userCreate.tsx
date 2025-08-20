import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export default function UserCreate() {
  const navigate = useNavigate();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        console.log(api.post("/usuarios", { nome, email, senha }))
      await 
      navigate("/usuarios/List");
    } catch (error) {
      alert("Erro ao registrar usuário:" + error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Criar Usuário</h1>
        <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
