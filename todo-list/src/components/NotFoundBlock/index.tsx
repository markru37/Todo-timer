import React from 'react'
import classes from './NotFoundBlock.module.scss'

export const NotFoundBlock: React.FC = () => {
    return (
        <div className={classes.not_found_container}>
            <h1 className={classes.not_found}>
                <span className={classes.not_found__smile}>😕</span>
                Ничего не найдено
            </h1>
            <p className={classes.description}>К сожалению данная страница отсутствует</p>
        </div>
    )
}

export default NotFoundBlock
