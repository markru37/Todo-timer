import React from 'react'
import classes from './Todo.module.scss'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { todoSelector, changeFlag } from '../../redux/slices/todoSlice';


const TodosComp = ({ id, title, complete }) => {
    const { flag } = useSelector(todoSelector);
    const dispatch = useDispatch()

    const DropId = (id) => {
        const headers = {
            'Authorization': 'Bearer paperboy'
        }
        const data = {
            id,

        }

        axios.delete(`https://62d7c31e49c87ff2af3c39ba.mockapi.io/todo/${id}`, { headers, data }).then(() => {
            dispatch(changeFlag(!flag))
        })


    }
    return (
        <>
            {complete === "true"
                ? <div className={classes.complete_task}>
                    < div className={classes.todo} >
                        < div className={classes.todo__item__container}>
                            <div>
                                <label className={classes.checkbox__container}>
                                    <input className={classes.checkbox__input} type="checkbox" checked />
                                    <div className={classes.checkmark}></div>
                                </label>
                            </div>
                            <div className={classes.line__end__task}></div>
                            <div className={classes.vertical__line}></div>
                            <div className={classes.todo__item__title}>{title}</div>
                            <div className={classes.delete__container} onClick={() => (DropId(id))}>
                                <div className={classes.delete__circle}></div>
                                <div className={classes.delete__xmark}></div>
                            </div>
                        </div >
                    </div >
                </div>
                : <> </>
            }
        </>
    )
}

export default TodosComp