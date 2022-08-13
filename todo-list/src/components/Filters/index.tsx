import React from 'react'
import classes from './Filters.module.scss'
import { Link } from 'react-router-dom'

const Filters: React.FC = () => {

    return (
        <div className={classes.filter}>
            <Link to={'./complete'} className={classes.filter__complete}>
                Complete task
            </Link>
        </div>
    )
}

export default Filters
