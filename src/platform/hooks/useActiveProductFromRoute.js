import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePlatform } from "./usePlatform";

export function useActiveProductFromRoute() {
  const location = useLocation();
  const { products, setActiveProductId } = usePlatform();

  useEffect(() => {
    const product = products.find((item) =>
      location.pathname.startsWith(item.route)
    );

    setActiveProductId(product ? product.id : null);
  }, [location.pathname, products, setActiveProductId]);
}