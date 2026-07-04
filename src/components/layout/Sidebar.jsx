import { useLocation } from "react-router-dom";
import PlatformSidebar from "./sidebars/PlatformSidebar";
import AxeSidebar from "./sidebars/AxeSidebar";

export default function Sidebar() {
  const location = useLocation();

  const isAxeProduct = location.pathname.includes("/products/axe");

  if (isAxeProduct) {
    return <AxeSidebar />;
  }

  return <PlatformSidebar />;
}