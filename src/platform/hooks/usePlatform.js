import { useContext } from "react";
import { PlatformContext } from "../context/PlatformContext";

export function usePlatform() {
  const context = useContext(PlatformContext);

  if (!context) {
    throw new Error("usePlatform deve ser usado dentro de PlatformProvider");
  }

  return context;
}