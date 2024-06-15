import { useSelector } from 'react-redux'
import { RootState } from '../../store';

export function Home() {
    const { loading, userInfo, error, success } = useSelector(
        (state: RootState) => state.auth
      )
      console.log(loading, userInfo, error, success)
    return <div>Home</div>;
}