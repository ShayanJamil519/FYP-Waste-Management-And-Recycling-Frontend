"use client";
import { createContext, useContext, useState } from "react";

const StateContext = createContext({});

// Create a provider component
export function StateProvider({ children }) {
  return <StateContext.Provider value={{}}>{children}</StateContext.Provider>;
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
