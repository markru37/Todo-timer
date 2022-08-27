import React from 'react'
import classes from './InputTodo.module.scss'

import plus from '../../assets/img/plus.svg'

import { useSelector } from 'react-redux'
import axios from 'axios'
import qs from 'qs'
import { useAppDispatch } from '../../redux/store'

import { todoSelector } from '../../redux/slices/TodoSlice/selectors'
import { changeFlag, setAddValue } from '../../redux/slices/TodoSlice/slice'

const InputTodo: React.FC = () => {
    const dispatch = useAppDispatch()

    const [value, setValue] = React.useState('')

    const { addValue, flag } = useSelector(todoSelector)

    const inputRef = React.useRef<HTMLInputElement>(null)

    const updAddValue = React.useCallback((string: string) => {
        dispatch(setAddValue(string));
    },[])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updAddValue(event.target.value)
    }
    const data = {
        'title': addValue,
        'complete': false,
    };
    const options = {
        method: 'POST',
        data: qs.stringify(data),
        url: 'https://62d7c31e49c87ff2af3c39ba.mockapi.io/todo',
    };

    const onAddTodo = () => {
        if (addValue) {
            axios(options).then(() => {
                dispatch(changeFlag(!flag))
            });

        }
        inputRef.current?.focus();
        dispatch(setAddValue(''));
        setValue('')
    }
    return (
        <div className={classes.input}>
            <div className={classes.input__container}>
                <img className={classes.input__image} src={plus} alt="" />
                <input ref={inputRef} value={value} onChange={onChangeInput} placeholder="Ваше дело" type="text" className={classes.input__area} />
                <button onClick={onAddTodo} className={classes.button_add}>Add</button>
            </div>
        </div>
    )
}

export default InputTodo
