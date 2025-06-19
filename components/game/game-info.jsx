import { GameSymbol } from "./game-symbol";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="mb-[10px] text-2xl">Ничья ¯\_(ツ)_/¯</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-[10px] text-2xl">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-[10px] text-2xl">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
