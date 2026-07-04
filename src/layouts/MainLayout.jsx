import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import { useActiveProductFromRoute } from "../platform/hooks/useActiveProductFromRoute";

export default function MainLayout() {
  useActiveProductFromRoute();
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <main
          style={{
            padding: "24px",
            background: "var(--color-bg)",
            minHeight: "calc(100vh - 70px)",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}