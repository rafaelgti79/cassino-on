import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './deposito.css';

const DepositoPix = () => {
  const [valor, setValor] = useState('');
  const [chavePix, setChavePix] = useState('');
  const [confirmado, setConfirmado] = useState(false);

  const gerarChavePix = () => {
    const chave = `pix:${Math.random().toString(36).substr(2, 10)}-cassinoonline@pix.com`;
    setChavePix(chave);
    setConfirmado(false);
  };

  const confirmarPagamento = () => {
    setConfirmado(true);
    // Aqui você pode registrar o depósito no backend
  };

  return (
    <div className="pix-container">
      <h2>Depósito via PIX</h2>
      <input
        type="number"
        placeholder="Digite o valor (R$)"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button onClick={gerarChavePix}>Gerar PIX</button>

      {chavePix && (
        <div className="pix-box">
          <p>Use o QR Code ou copie a chave PIX:</p>
          <QRCode value={chavePix} size={180} />
          <p className="pix-key">{chavePix}</p>
          <button onClick={confirmarPagamento}>Confirmar pagamento</button>
        </div>
      )}

      {confirmado && <p className="confirmado">✅ Pagamento confirmado!</p>}
    </div>
  );
};

export default DepositoPix;
