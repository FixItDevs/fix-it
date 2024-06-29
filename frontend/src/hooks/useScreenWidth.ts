import { useContext } from "react";
import { ScreenWidthContext } from "../context/ScreenSizeContext";

const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext);
  if (context === undefined) {
    throw new Error("useScreenWidth must be used within a ScreenWidthProvider");
  }
  return context;
};

export default useScreenWidth;
