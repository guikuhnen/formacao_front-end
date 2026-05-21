import styles from "./MyForm.module.css";

import { useState } from "react";

const MyForm = ({ userName }) => {
  // 3 - Gerenciamento de dados
  // 6 - Controlled input
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState();
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    // Caso precise fazer outras coisas
    setName(e.target.value);
  };

  console.log(name, email, bio, role);

  //5 - Envio de formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    // validacao
    // envio

    // 7 - Limpar formulário
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  return (
    <div>
      {/* 1 - Criação de Form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // 6 - Controlled input
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - Gerenciamento de dados simplificado */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            // 6 - Controlled input
            value={email || ""}
          />
        </label>
        {/* 8 - Textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            id="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        {/* 9 - Select */}
        <label>
          <span>Função:</span>
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
