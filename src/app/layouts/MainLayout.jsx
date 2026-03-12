import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      {/* The 'pt-24' (Padding Top) ensures content starts AFTER the navbar */}
      <main className="pt-20 md:pt-24 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
