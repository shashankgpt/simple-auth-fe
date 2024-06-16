import { Outlet, Navigate } from 'react-router-dom'
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    const { userToken } = useSelector(
        (state: RootState) => state.auth
      );
      // TODO: validate if token still valid
    return(
        userToken ? <Outlet/> : <Navigate to="/signin"/>
    )
}

export default PrivateRoutes