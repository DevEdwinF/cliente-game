import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerInfo = () => {
  const navigate = useNavigate();
  const [playerId, setPlayerId] = useState("");

  const handleButtonClick = () => {
    navigate(`/square/${playerId}`);
  };
 URL
  return (
    <div>
      <input
        type="text"
        value={playerId}
        onChange={(e) => setPlayerId(e.target.value)}
        placeholder="Ingrese la ID del jugador"
      />
      <button onClick={handleButtonClick}>Consultar</button>
    </div>
  );
};

export default PlayerInfo;
