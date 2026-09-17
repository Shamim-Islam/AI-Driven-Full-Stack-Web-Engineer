import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../types/PlayerType";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

interface PlayersProps {
  playersPromise: Promise<PlayerType[]>;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Players = ({ playersPromise, coin, setCoin }: PlayersProps) => {
  const players = use(playersPromise);
  const [buttonType, setButtonType] = useState("available");

  const handleButtonClick = (type: "available" | "selected") => {
    setButtonType(type);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {buttonType === "available"
            ? "Available Players"
            : "Selected Players"}
        </h2>
        <div>
          <button
            onClick={() => handleButtonClick("available")}
            className={`btn ${buttonType === "available" ? "btn-success" : ""} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleButtonClick("selected")}
            className={`btn ${buttonType === "selected" ? "btn-success" : ""} rounded-l-none`}
          >
            Selected
          </button>
        </div>
      </div>
      {buttonType === "available" ? (
        <AvailablePlayers players={players} coin={coin} setCoin={setCoin} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
