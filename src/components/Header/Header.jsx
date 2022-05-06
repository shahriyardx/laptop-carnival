import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../layouts/Container'
import CustomLink from './CustomLink'
import styles from './Header.module.css'

const Header = () => {
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
          <CustomLink to='/login' className={styles.login_button}>Login</CustomLink>
        </div>
      </Container>
    </header>
  )
}

export default Header