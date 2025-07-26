"use client";

import React, { createContext, useContext, useState } from "react";

const LoaderContext = createContext<{
  loading: boolean;
  showLoader: () => void;
  hideLoader: () => void;
}>({
  loading: false,
  showLoader: () => {},
  hideLoader: () => {},
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);