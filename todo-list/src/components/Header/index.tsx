import React from 'react'
import classes from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <div className={classes.header__logo__container}>
                <img className={classes.header__logo} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Red_heart_with_heartbeat_logo.svg" alt="logo" />
                <span className={classes.logo__title}>markru TODO</span>
            </div>
            <ul className={classes.header__list}>
                <li className={classes.header__item}><Link to={'/'} className={classes.header__link}>Home</Link></li>
                <li className={classes.header__item}><Link to={'/timer'} className={classes.header__link}>Timer</Link></li>
            </ul>
        </header>
    )
}

export default Header
