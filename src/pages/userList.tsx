import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";


interface User{
    id: number;
    nome: string;
    email: string;
    senha: string;
}

export default function UserList() {
    const [users,setUsers] = useState<User[]>([]);

    useEffect(() =>{
        api.get("/usuarios")
        .then(res => setUsers(res.data))
        .catch(err => console.error("Erro ao carregar usuários" + err))
    },[]);
    

    const handleDelete = async (id: number) =>{
        if(confirm("Tem certeza que deseja excluir?")) {
            await api.delete("/usuarios/${id}");
            setUsers(users.filter(u => u.id !== id));
        }
    };


    return(
        <div>
            <h1>Lista de Usuários</h1>
            <Link to="/usuarios"> Novo Usuário</Link>
            <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.nome} - {u.email} - {u.senha}
            <Link to={`/usuarios/${u.id}/editar`}> ✏️ Editar</Link>
            <button onClick={() => handleDelete(u.id)}>🗑️ Excluir</button>
          </li>
        ))}
      </ul>

        </div>
    )

}