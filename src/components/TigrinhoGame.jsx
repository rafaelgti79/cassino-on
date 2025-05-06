import React, { useState } from 'react';
import './TigrinhoGame.css'; // você pode definir os estilos aqui





const TigrinhoDaSorte = () => {
  const [grade, setGrade] = useState(Array(3).fill(Array(3).fill('❓')));
  const [saldo, setSaldo] = useState(100);
  const [reels, setReels] = useState([
    ["🍒", "🍋", "🔔"],
    ["🍒", "🍋", "🔔"],
    ["🍒", "🍋", "🔔"],
  ]);
  const symbols = ["🍒", "🍋", "🔔", "⭐", "💎"];
  
  const aposta = 10;

  // const sortearSimbolo = () => simbolos[Math.floor(Math.random() * simbolos.length)];

  const girar = () => {
    if (saldo < aposta) {
      alert('Saldo insuficiente!');
      return;
    }

    for (let col = 0; col < 3; col++) {
        setTimeout(() => {
          const novaColuna = Array.from({ length: 3 }, () =>
            symbols[Math.floor(Math.random() * symbols.length)]
          );
    
          setReels((prev) => {
            const copia = [...prev];
            copia[col] = novaColuna;
            return copia;
          });
        }, col * 300); // atraso por coluna
      }
    };
  return (
    <div className="tigrinho-container">
      <h2>🐯 Tigrinho da Sorte</h2>
      <p>Saldo: R$ {saldo}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
  {reels.map((coluna, index) => (
    <div key={index} className="reel">
      {coluna.map((simbolo, i) => (
        <div key={i} className="symbol">{simbolo}</div>
      ))}
    </div>
  ))}
</div>
      <button onClick={girar}>🎰 Girar</button>
    </div>
  );
};

export default TigrinhoDaSorte;
