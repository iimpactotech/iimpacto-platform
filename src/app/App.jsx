import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { PlatformProvider } from "../platform/context/PlatformContext";

export default function App() {
  return (
    <PlatformProvider>
      <RouterProvider router={router} />
    </PlatformProvider>
  );
}