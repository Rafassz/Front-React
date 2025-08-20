import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

export default function UserEdit(){

    const {id}= useParams();
    const navigate = useNavigate();
    const [nome,setNome] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [senha,setSenha] = useState<string>("");


    useEffect(() =>{
        api.get('/usuarios/${id}')
        .then(res => {
            setNome(res.data.nome);
            setEmail(res.data.email);
            setSenha(res.data.senha);
        });
    }, [id]);


    const hendleSubmit =async (e: React.FormEvent) =>{
        e.preventDefault();
        await api.put ('/usuarios/${id}', {nome, email, senha});
        navigate("/usuarios")
    };

    return(
        <div>
            <form onSubmit={hendleSubmit}>
                <h1>Editar Usuário</h1>
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}