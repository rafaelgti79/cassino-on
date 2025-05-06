// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';
import TigrinhoGame from '../../components/TigrinhoGame';




export default function Home() {
 
  return (
       
    <div className="home-container">

      <header className="header">
        <h1>🏆 Cassino Girassol</h1>

      <nav>
        <Link to="/login">Ilotery</Link>
        <Link to="/cadastro">Ao vivo</Link>
        <Link to="/cadastro">Virtuais</Link>
        <Link to="/cadastro">Promoção</Link>

      </nav>
        <nav>
          <Link to="/login">Entrar</Link>
          <Link to="/cadastro">Cadastrar</Link>

        </nav>
      </header>

      <section className="banner">
        <h2>🎰 Bem-vindo ao seu cassino online no coração do Rio!</h2>
        <p>Jogue, ganhe e divirta-se com os melhores jogos do Tigrinho, Roleta e mais!</p>
        <Link to="/jogos" className="btn-jogar">Começar a Jogar</Link>
      </section>

      <section className="destaques">
        <h3>Destaques</h3>
        <div className="jogos">
          <div className="jogo-card">🔥 Tigrinho da Sorte</div>
          <div className="jogo-card">🎲 Roleta Online</div>
          <div className="jogo-card">🃏 Blackjack ao Vivo</div>
        </div>
      </section>

       

   <div>
    <h4 className="home-title">Cassino Online</h4>
    <TigrinhoGame />
  </div>

      <footer className="footer">
        <p>&copy; 2025 Cassino Copacabana. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
