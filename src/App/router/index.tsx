import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp, Home, SignIn } from "../Pages";
import ProtectedRoutes from "../common/ProtectedRoutes";

const router = () => (
  <Router>
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="Signup" element={<SignUp />} />
      <Route path="Signin" element={<SignIn />} />
    </Routes>
  </Router>
);

export default router;
