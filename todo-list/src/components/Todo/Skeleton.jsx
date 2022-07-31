import React from "react"
import ContentLoader from "react-content-loader"
import classes from './Todo.module.scss'

const Skeleton = (props) => (
    <ContentLoader
        className={classes.todo}
        speed={2}
        width={1260}
        height={83}
        viewBox="0 0 1260 83"
        backgroundColor="#ffffff"
        foregroundColor="#c4c4c4"
        {...props}
    >
        <rect x="2" y="0" rx="0" ry="10" width="1260" height="83" />
    </ContentLoader>
)

export default Skeleton