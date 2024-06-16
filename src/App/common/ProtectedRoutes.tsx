import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const { userToken } = useSelector(
        (state: RootState) => state.auth
      );
      console.log(userToken)
    return(
        userToken ? <Outlet/> : <Navigate to="/signin"/>
    )
}

export default PrivateRoutes