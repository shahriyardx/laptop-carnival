import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import useAuth from '../../../firebase/useAuth'
import Container from '../../components/Container/Container'
import CustomLink from '../../components/CustomLink/CustomLink'
import styles from './Header.module.css'

const Header = () => {
  const auth = useAuth()
  const [user, loading, error] = useAuthState(auth);
  
  return (
    <header>
      <Container className={styles.nav}>
        <div className={styles.logo}>
          <Link to='/'>
            Laptop <span className='font-light'>Carnival</span>
          </Link>
        </div>

        <div className={styles.menu}>
          <CustomLink to='/'>Home</CustomLink>
          {user ? (
            <div className='flex gap-2 items-center'>
              <span className='font-bold'>{user.displayName}</span>
              <button className={styles.logout_button} onClick={() => signOut(auth)}>Logout</button>
            </div>
            ) : (
            <CustomLink to='/login' className={styles.login_button}>Login</CustomLink>
          )}
        </div>
      </Container>
    </header>
  )
}

export default Header