import { createContext, useMemo, useState } from "react";
import { platformConfig } from "../config/platform.config";

export const PlatformContext = createContext(null);

export function PlatformProvider({ children }) {
  const [activeProductId, setActiveProductId] = useState(
    platformConfig.defaultProduct
  );

  const activeProduct =
    platformConfig.products.find((product) => product.id === activeProductId) ||
    null;

  const value = useMemo(
    () => ({
      platform: platformConfig,
      products: platformConfig.products,
      activeProduct,
      activeProductId,
      setActiveProductId,
    }),
    [activeProduct, activeProductId]
  );

  return (
    <PlatformContext.Provider value={value}>
      {children}
    </PlatformContext.Provider>
  );
}