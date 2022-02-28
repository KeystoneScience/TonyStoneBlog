import React, { createContext, useContext, useEffect, useState } from "react";

export const SizeContext = createContext();

const MOBILE_MAX_WIDTH = 745;
const TABLET_MAX_WIDTH = 1126;

const SizeContextProvider = ({ children }) => {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 1000 : window.innerWidth
  );
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isTablet, setIsTablet] = useState(true);

  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 0);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  useEffect(() => {
    if (width <= MOBILE_MAX_WIDTH) {
      setIsMobile(true);
      setIsDesktop(false);
      setIsTablet(false);
    } else if (width <= TABLET_MAX_WIDTH) {
      setIsMobile(false);
      setIsDesktop(false);
      setIsTablet(true);
    } else {
      setIsMobile(false);
      setIsDesktop(true);
      setIsTablet(false);
    }
  }, [width]);

  return (
    <SizeContext.Provider value={{ width, isDesktop, isMobile, isTablet }}>
      {children}
    </SizeContext.Provider>
  );
};

export const useSizeContext = () => useContext(SizeContext);

export default SizeContextProvider;
