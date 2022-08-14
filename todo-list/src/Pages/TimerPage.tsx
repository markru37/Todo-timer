import React from 'react'
import classes from './Pages.module.scss'
import Timer from '../components/Timer';
import InputTimer from '../components/InputTimer';

const TimerPage: React.FC = () => {
    const getPadTime = (time: number) => Number(time.toString().padStart(2, '0'));
    
    return (
        <div className={classes.timer}>
            <div className={classes.timer__title}>Таймер</div>
            <InputTimer />
            <Timer getPadTime={getPadTime} />
        </div>
    )
}

export default TimerPage
