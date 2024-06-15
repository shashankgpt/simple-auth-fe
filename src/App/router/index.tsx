import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {  SignUp, Home } from "../Pages";

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SignUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default router;
