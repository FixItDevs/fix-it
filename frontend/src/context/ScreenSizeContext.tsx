import { createContext, useEffect, useState } from "react";
import React from "react";

type ScreenWidthContextType = {
  isSmallScreen: boolean;
  showCategories: boolean;
};

// Step 1: Create the context
export const ScreenWidthContext = createContext<ScreenWidthContextType>({ isSmallScreen: false, showCategories: true });

// Step 2: Create the provider
// The provider is a component that will wrap every part of the app that needs this context.
export const ScreenWidthProvider = ({
  children,
  setIsCategoryOverlayActive,
}: {
    children: React.ReactNode;
    setIsCategoryOverlayActive: (isActive: boolean) => void;
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 520);
      setShowCategories(window.innerWidth >= 900);
      // console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsCategoryOverlayActive(false);
  }, [screenWidth, setIsCategoryOverlayActive]);

  return (
    <ScreenWidthContext.Provider value={{ isSmallScreen, showCategories }}>
      {children}
    </ScreenWidthContext.Provider>
  );
};
