import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { GameCell } from "./game-cell";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-64 mx-auto my-48 py-9 border-solid border-black border ">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-[repeat(3,50px)]  grid-rows-[repeat(3,50px)] pt-px pl-px">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            x
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button
        onClick={handleResetClick}
        className="inline-block px-[36px] py-3 mr-3 relative top-3 left-[5.5px] font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-pink-700 hover:text-pink-200 hover:shadow-lg active:opacity-85"
      >
        Сбросить
      </button>
    </div>
  );
}
