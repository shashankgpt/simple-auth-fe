import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store';
import { useEffect } from 'react';
import { getUser } from '../../store/features/user/userAction';

export function Home() {
    const { loading, userInfo, error, success } = useSelector(
        (state: RootState) => state.user
      )
      const dispatch = useAppDispatch();
      useEffect(() => {
        dispatch(getUser())
      }, [])
      if (loading) {
        return <div>Loading...</div>
      }
    return <div>
      <div>Home</div> 
      <div>Hello {userInfo?.name}</div>
      </div>
}