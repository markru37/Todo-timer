import React from 'react'
import classes from './InputTimer.module.scss'
import { useDispatch } from 'react-redux';
import { setTime } from '../../redux/slices/timerSlice';

const InputTimer = () => {
    const dispatch = useDispatch()

    const inputRefMinutes = React.useRef()
    const inputRefSeconds = React.useRef()

    const [valueMinutes, setValueMinutes] = React.useState('')
    const [valueSeconds, setValueSeconds] = React.useState('')


    const onChangeInputMinutes = (event) => {
        if (event.target.value > 1000) event.target.value = 1000;
        setValueMinutes(prev => /\d+/.test(Number(event.target.value)) ? event.target.value : prev)
    }

    const onChangeInputSeconds = (event) => {
        if (event.target.value > 60) event.target.value = 59;
        setValueSeconds(prev => /\d+/.test(Number(event.target.value)) ? event.target.value : prev)
    }

    const onAddTime = () => {
        inputRefMinutes.current.focus();

        dispatch(setTime(Number(valueMinutes) * 60 + Number(valueSeconds)))

        setValueMinutes('')
        setValueSeconds('')

    }
    return (
        <div className={classes.timer__input__container}>
            <span className={classes.timer__title}>Введите время: </span>
            <input ref={inputRefMinutes} value={valueMinutes} onChange={onChangeInputMinutes} placeholder="Минуты" type="text" className={classes.input__area} />
            <span className={classes.timer__symbol}>:</span>
            <input ref={inputRefSeconds} value={valueSeconds} onChange={onChangeInputSeconds} placeholder="Секунды" type="text" className={classes.input__area} />
            <button onClick={onAddTime} className={classes.button__add_time} tabIndex="1">Добавить время</button>
        </div>
    )
}

export default InputTimer
