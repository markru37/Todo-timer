import React from 'react'
import TodosComp from '../components/Todo/TodosComp';
import classes from './Pages.module.scss'
import Skeleton from '../components/Todo/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo, todoSelector } from '../redux/slices/todoSlice';
const CompleteTask = () => {
    const { status, todo, flag } = useSelector(todoSelector);
    const dispatch = useDispatch()

    const getTodos = async () => {
        dispatch(fetchTodo("1"))
    }
    React.useEffect(() => {
        getTodos()
    }, [flag]);

    const todos = todo.map((value) => <TodosComp key={value.id} {...value} />)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    return (
        <>
            <div className={classes.complete__title}>Complete Task</div>
            {status === 'loading' ? skeletons : todos}
        </>
    )
}

export default CompleteTask
