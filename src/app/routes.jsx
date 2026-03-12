import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ScrollToTop from "../components/ScrollToTop";
import MainLayout from "../app/layouts/MainLayout";
import Contact from "../pages/contact/Contact";
import Portfolio from "../pages/portfolio/Portfolio";
import Service from "../pages/service/Service";
import Quote from "../pages/quote/Quote";

export const router = createBrowserRouter([
  {
    element: (
        <>
          <ScrollToTop /> 
          <MainLayout />
        </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <About /> },
      { path: "/services", element: <Service /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/free-quote", element: <Quote /> },
    ],
  },
]);