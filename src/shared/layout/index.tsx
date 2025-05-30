import { Outlet } from "react-router-dom";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};
