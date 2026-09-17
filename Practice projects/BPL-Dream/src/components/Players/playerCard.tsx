import React, { useState, type Dispatch, type SetStateAction } from "react";
import type { PlayerType } from "../types/PlayerType";
import { toast } from "react-toastify";

const playerCard = ({ player, coin, setCoin }: { player: PlayerType; coin: number; setCoin: Dispatch<SetStateAction<number>> }) => {
  const [isSelected, setIsSelected] = useState(false);
 
  const handleSelectPlayer = () => {
    const newCoins = coin - player.price;
    if (newCoins >= 0) {
      setIsSelected(true);
      setCoin(newCoins);
      toast(`${player.playerName} has been selected! Remaining coins: ${newCoins}`);
    } else {
      toast(`Not enough coins to select ${player.playerName}. You need ${player.price - coin} more coins.`);
    }
  };

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Player Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={player.playerImg}
          alt={player.playerName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Player Type */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-gray-800 shadow backdrop-blur">
          {player.playerType}
        </span>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <p className="text-xs font-medium uppercase tracking-wider text-white/70">
            Base Price
          </p>

          <h3 className="text-2xl font-bold text-white">
            ৳{player.price.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Player Information */}
      <div className="p-5">
        {/* Name & Origin */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {player.playerName}
          </h2>

          <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
            <span>🌍</span>
            {player.origin}
          </p>
        </div>

        {/* Player Stats */}
        <div className="grid grid-cols-2 gap-3">
          {/* Batting */}
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
              Batting
            </p>

            <p className="text-sm font-semibold text-gray-800">
              {player.battingStyle}
            </p>
          </div>

          {/* Bowling */}
          <div className="rounded-xl bg-gray-50 p-3">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-400">
              Bowling
            </p>

            <p className="text-sm font-semibold text-gray-800">
              {player.bowllingStyle}
            </p>
          </div>
        </div>

        {/* Choose Button */}
        <button
          onClick={() => handleSelectPlayer()}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-gray-700 active:scale-[0.98]"
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Choose Player"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default playerCard;
