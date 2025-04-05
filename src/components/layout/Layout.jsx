import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../messages/Loading";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./layout.sass";

const Layout = () => {
  return (
    <>
      <Header />
      <main id="main" className="main">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
