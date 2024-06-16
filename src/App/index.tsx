import { useSelector } from "react-redux";
import Header from "./common/Header";
import Router from "./router";
import { RootState, useAppDispatch } from "./store";
import { logout } from "./store/features/auth/authSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const { userToken } = useSelector(
    (state: RootState) => state.auth
  );
  const logoutUser = () => {
    dispatch(logout())
  }
  return (
    <div className="flex flex-col">
      <Header logout={logoutUser} isSignIn={!!userToken} />
      <div className="min-h-screen">
        <Router />
      </div>
    </div>
  );
}
