import { useContext } from "react";
import { ScreenWidthContext } from "../context/ScreenSizeContext";

export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
  }
  return context;
};
