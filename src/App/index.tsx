import Footer from "./common/Footer";
import Header from "./common/Header";
import { RouterProvider } from "react-router-dom";
import Router from "./router";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen">
        <Router />
      </div>
      <Footer />
    </div>
  );
}
