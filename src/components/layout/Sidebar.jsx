import PlatformSidebar from "./sidebars/PlatformSidebar";
import ProductSidebar from "./sidebars/ProductSidebar";
import { usePlatform } from "../../platform/hooks/usePlatform";

export default function Sidebar() {
  const { activeProduct } = usePlatform();

  if (activeProduct) {
    return <ProductSidebar />;
  }

  return <PlatformSidebar />;
}