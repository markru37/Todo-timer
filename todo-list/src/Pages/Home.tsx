import React from 'react'
import Todo from '../components/Todo';
import Filters from '../components/Filters';
import Skeleton from '../components/Todo/Skeleton'
import { useSelector, useDispatch } from 'react-redux'
import { todoSelector, fetchTodo } from '../redux/slices/todoSlice';
import InputTodo from '../components/InputTodo';
const Home: React.FC = () => {
    const { todo, flag, status } = useSelector(todoSelector);
    const dispatch = useDispatch()


    const getTodos = async () => {
        //@ts-ignore
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
            {status === 'loading' ? skeletons : todos}
            <Filters />
        </>
    )
}

export default Home
