import React, { useEffect, useState } from 'react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'

export default function Nav() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className='nav-bar'>
      <div className="nav-brand">
        SON SÖZÜ SEN SÖYLE
      </div>

      <div className='profile-info'>
        {isAuth ? <SignedIn /> : <SignedOut />}
      </div>
    </div>
  )
}