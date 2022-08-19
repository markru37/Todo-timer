import React from 'react'
import { useSelector } from 'react-redux';
import { setTime, setCounting, timerSelector } from '../../redux/slices/timerSlice';
import { useAppDispatch } from '../../redux/store';
import classes from './Timer.module.scss'

type TimerProps = {
    getPadTime: (time: number) => number;
}

const Timer: React.FC<TimerProps> = ({ getPadTime }) => {
    const { time, counting } = useSelector(timerSelector)
    const dispatch = useAppDispatch()

    const minutes: number = getPadTime(Math.floor(time / 60));
    const seconds: number = getPadTime(time - minutes * 60);

    React.useEffect(() => {
        const interval = setInterval(() => {
            counting && dispatch(setTime(time >= 1 ? time - 1 : 0
            ))
        }, 1000)

        if (time === 0) dispatch(setCounting(false))

        return () => {
            clearInterval(interval)
        }
    }, [time, counting])

    const startTimer = () => {
        dispatch(setCounting(true))

    }
    const stopTimer = () => {
        dispatch(setCounting(false))
    }
    const resetTimer = () => {
        dispatch(setCounting(false))
        dispatch(setTime(0))
    }

    return (
        <>
            <div className={classes.timer__container}>
                <span className={classes.timer__text}>{minutes}</span>
                <span className={classes.timer__text}>:</span>
                <span className={classes.timer__text}>{seconds}</span>
            </div>
            <div className={classes.timer__buttons}>
                {counting
                    ? <button onClick={stopTimer} className={classes.timer__button}>Стоп</button>
                    : <button onClick={startTimer} className={classes.timer__button}>Старт</button>}
                <button onClick={resetTimer} className={classes.timer__button}>Сброс</button>
            </div>
        </>
    )
}

export default Timer
