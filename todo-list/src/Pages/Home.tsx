import React from 'react'
import classes from './Pages.module.scss'

import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux'

import Todo from '../components/Todo';
import Filters from '../components/Filters';
import Skeleton from '../components/Todo/Skeleton'
import InputTodo from '../components/InputTodo';

import { todoSelector } from '../redux/slices/TodoSlice/selectors';
import { fetchTodo } from '../redux/slices/TodoSlice/slice';


const Home: React.FC = () => {
    const { todo, flag, status } = useSelector(todoSelector);
    const dispatch = useAppDispatch()


    const getTodos = async () => {
        dispatch(fetchTodo())
    }

    React.useEffect(() => {
        getTodos()
    }, [flag]);

    const todos = todo.map((value) => <Todo key={value.id} {...value} />)
    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)

    return (
        <>
            <InputTodo />
            {
                status === 'error'
                    ? 
                    <div className={classes.error__container}>
                            <span className={classes.error__smile}>😕</span>
                        <p className={classes.description}>Произошла ошибка. Попробуйте ещё раз.</p>
                    </div>
                    : <div className="content__items">
                        {status === 'loading' ? skeletons : todos}
                    </div>
            }
            <Filters />
        </>
    )
}

export default Home
