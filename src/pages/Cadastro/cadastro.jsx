import React, { useState } from 'react';
import './cadastro.css';

const Cadastro = ({ onCadastro }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem.');
      return;
    }

    // Aqui você pode adicionar lógica para salvar em um banco ou Firebase
    console.log('Usuário cadastrado:', { nome, email });
    onCadastro(); // Redireciona para login ou home
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro - Cassino Online 🎰</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
          required
        />
        {erro && <p className="erro">{erro}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
