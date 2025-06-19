import { SYMBOL_O } from "./constanst";
import { SYMBOL_X } from "./constanst";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-600";
    if (symbol === SYMBOL_X) return "text-red-600";
    return "";
  };
  return (
    <span className={`text-[24px] leading-6 ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
