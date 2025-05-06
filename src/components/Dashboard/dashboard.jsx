import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    // Simulação de dados, substitua pelo fetch real ao backend
    const dadosFicticios = {
      saldo: 1200.50,
      transacoes: [
        { id: 1, tipo: 'Depósito', valor: 300.00, data: '2025-04-28' },
        { id: 2, tipo: 'Aposta', valor: -50.00, data: '2025-04-29' },
        { id: 3, tipo: 'Depósito', valor: 950.50, data: '2025-04-30' },
      ]
    };
    setSaldo(dadosFicticios.saldo);
    setTransacoes(dadosFicticios.transacoes);
  }, []);

  return (
    <div style={styles.container}>
      <h2>Dashboard do Cliente</h2>
      <div style={styles.card}>
        <h3>Saldo Atual</h3>
        <p style={styles.saldo}>R$ {saldo.toFixed(2)}</p>
      </div>

      <div style={styles.card}>
        <h3>Últimas Movimentações</h3>
        <ul>
          {transacoes.map(tx => (
            <li key={tx.id}>
              <strong>{tx.tipo}</strong>: R$ {tx.valor.toFixed(2)} em {tx.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: 20, maxWidth: 600, margin: 'auto', fontFamily: 'Arial' },
  card: { padding: 20, marginBottom: 20, background: '#f0f0f0', borderRadius: 8 },
  saldo: { fontSize: 28, color: '#2ecc71' }
};

export default Dashboard;
