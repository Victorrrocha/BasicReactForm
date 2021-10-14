import classes from './Title.module.css'

const Title = ({title, color}) => {

    const customColor = {
        color: `${color}`
    }

    return (
        <p className={classes.title} style={customColor}>
            {title}
        </p>
    )
}

export default Title
