import React from 'react'
import { setUser } from '../../api/reducers';
import { useDispatch } from 'react-redux';

const HomeWrap = () => {
    const dispatch = useDispatch();
    const getUser: string | null = localStorage.getItem('user');
    const user = getUser ? JSON.parse(getUser) : null;
    dispatch(setUser(user));
    console.log('home에서 가져온 로컬 유저',user)
    return (
        <div className='home_wrap'>
            
        </div>
    )
}

export default HomeWrap