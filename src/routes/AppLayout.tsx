import { Outlet } from "react-router-dom";
import MainNav from "../shared/MainNav";

export default function AppLayout() {
  return (
    <div>
      <MainNav />
      <main><Outlet /></main>
    </div>
  );
}