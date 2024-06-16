import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useEffect } from "react";
import { getUser } from "../../store/features/user/userAction";
import CircularProgress from '@mui/material/CircularProgress';

export function Home() {
  const { loading, userInfo } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  if (loading) {
    return <div className="flex justify-center mt-20"><CircularProgress /></div>;
  }
  return (
    <div className="flex flex-col justify-center mt-20 items-center">
      <div className="text-3xl mb-12">Welcome to the application</div>
      <div>Hello {userInfo?.name}</div>
    </div>
  );
}
