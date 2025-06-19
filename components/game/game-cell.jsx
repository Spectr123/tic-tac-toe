import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-solid border-gray-500 -ml-px -mt-px flex items-center justify-center bg-transparent",
        isWinner && "bg-yellow-200",
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}
