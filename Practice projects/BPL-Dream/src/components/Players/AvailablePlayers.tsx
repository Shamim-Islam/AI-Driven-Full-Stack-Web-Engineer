import React, { type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../types/PlayerType";
import PlayerCard from "./playerCard";

interface AvailablePlayersProps {
  players: PlayerType[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const AvailablePlayers = ({
  players,
  coin,
  setCoin,
}: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-3 gap-5 my-2">
      {players.map((player: PlayerType) => {
        return <PlayerCard key={player.playerName} player={player} coin={coin} setCoin={setCoin} />;
      })}
    </div>
  );
};

export default AvailablePlayers;
