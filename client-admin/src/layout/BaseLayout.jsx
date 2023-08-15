import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
