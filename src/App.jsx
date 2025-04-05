import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./components/home/Home"));
const Catalog = lazy(() => import("./components/catalog/Catalog"));
const About = lazy(() => import("./components/about/About"));
const Job = lazy(() => import("./components/job/Job"));
const Contacts = lazy(() => import("./components/contacts/Contacts"));
const Error404 = lazy(() => import("./components/messages/Error404"));

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="job" element={<Job />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
