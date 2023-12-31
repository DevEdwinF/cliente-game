import  { useState, useEffect } from 'react';
import './style-components/square.css';
import { PlayerServices } from '../services/PlayerService';
import { useParams } from 'react-router-dom';

export const Square = () => {
    const [playerId, setPlayerId] = useState("");
    const { id } = useParams<{ id: string }>(); // Obtener el ID del jugador de los parámetros de la URL
  const [playerPosition, setPlayerPosition] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await PlayerServices.getPlayer(parseInt(id));
          if (response) {
            const position = response.data.position;
            setPlayerPosition(position);
          }
          return response?.data?.position;
        }
      } catch (error) {
        console.error('Error fetching position:', error);
      }
    };

    fetchData();
  }, [id]);


    const calculatePositionX = (position: string) => {
        // Lógica para calcular la posición X en píxeles
        // Ajusta esto según tus necesidades y el diseño del tablero
        return 0;
    };

    const calculatePositionY = (position: string) => {
        // Lógica para calcular la posición Y en píxeles
        // Ajusta esto según tus necesidades y el diseño del tablero
        return 0;
    };

    return (
        <div className="square-container">
            <div className="square-table">
                <div className="rows row-1">
                    <div id="square-1" className="square"></div>
                    <div id="square-2" className="square"></div>
                    <div id="square-3" className="square"></div>
                    <div id="square-4" className="square"></div>
                    <div id="square-5" className="square"></div>
                    <div id="square-6" className="square"></div>
                    <div id="square-7" className="square"></div>
                    <div id="square-8" className="square"></div>
                    <div id="square-9" className="square"></div>
                    <div id="square-10" className="square"></div>
                </div>
                <div className="rows row-2">
                    <div id="square-11" className="square"></div>
                    <div id="square-12" className="square"></div>
                    <div id="square-13" className="square"></div>
                    <div id="square-14" className="square"></div>
                    <div id="square-15" className="square"></div>
                    <div id="square-16" className="square"></div>
                    <div id="square-17" className="square"></div>
                    <div id="square-18" className="square"></div>
                    <div id="square-19" className="square"></div>
                    <div id="square-20" className="square"></div>
                </div>
                <div className="rows row-3">
                    <div id="square-21" className="square"></div>
                    <div id="square-22" className="square"></div>
                    <div id="square-23" className="square"></div>
                    <div id="square-24" className="square"></div>
                    <div id="square-25" className="square"></div>
                    <div id="square-26" className="square"></div>
                    <div id="square-27" className="square"></div>
                    <div id="square-28" className="square"></div>
                    <div id="square-29" className="square"></div>
                    <div id="square-30" className="square"></div>
                </div>
                <div className="rows row-4">
                    <div id="square-31" className="square"></div>
                    <div id="square-32" className="square"></div>
                    <div id="square-33" className="square"></div>
                    <div id="square-34" className="square"></div>
                    <div id="square-35" className="square"></div>
                    <div id="square-36" className="square"></div>
                    <div id="square-37" className="square"></div>
                    <div id="square-38" className="square"></div>
                    <div id="square-39" className="square"></div>
                    <div id="square-40" className="square"></div>
                </div>
                {/* Ejemplo de ficha del jugador */}
                <div
                    id="player"
                    className="player"
                    style={{
                        transform: `translate(${calculatePositionX(playerPosition)}px, ${calculatePositionY(playerPosition)}px)`
                    }}
                ></div>
            </div>
            <div>
                <input
                    type="text"
                    value={playerId}
                    onChange={(e) => setPlayerId(e.target.value)}
                    placeholder="Ingrese la ID del jugador"
                />
            </div>
        </div>
    );
};

export default Square;
