import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Header />

        <main
          style={{
            padding: "24px",
            background: "#F5F7FA",
            minHeight: "calc(100vh - 70px)"
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}