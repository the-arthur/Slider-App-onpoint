import React from 'react'
import homeIcon from './img/home.png'
import styles from './NavBar.module.css'

const navBar = (props) => {

    const homeClick = (e) => {
        e.preventDefault();
        props.slideToHome()
    }

    return (
        <nav className={styles.navbar}>
            <img onClick={homeClick} className={styles.navbar_home} src={homeIcon} alt="home" />
            <span>PROJECT</span>
        </nav>
    )
}

export default navBar