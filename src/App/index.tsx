import Header from "./common/Header";
import Router from "./router";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="min-h-screen">
        <Router />
      </div>
    </div>
  );
}
