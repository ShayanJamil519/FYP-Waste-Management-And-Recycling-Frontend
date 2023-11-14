"use client";
import { createContext, useContext, useState } from "react";

const StateContext = createContext({});

// Create a provider component
export function StateProvider({ children }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  return (
    <StateContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        openSignupModal,
        setOpenSignupModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
