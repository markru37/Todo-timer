import React from 'react'
import discord from '../../assets/img/ds.svg'
import vk from '../../assets/img/vk.svg'
import github from '../../assets/img/github.svg'
import classes from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footer__title}>links me in the social networks</div>
            <div className={classes.footer_container}>
                <a href="https://discordapp.com/users/275254712838651904/" target="_blank" rel="noreferrer" className={classes.footer__link}><img src={discord} alt="discord" className={classes.footer__img} /></a>
                <a href="https://vk.com/trapismyup" target="_blank" rel="noreferrer" className={classes.footer__link}><img src={vk} alt="vk" className={classes.footer__img} /></a>
                <a href="https://github.com/markru37" target="_blank" rel="noreferrer" className={classes.footer__link}><img src={github} alt="github" className={classes.footer__img} /></a>
            </div>
        </div>
    )
}

export default Footer
