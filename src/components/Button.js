import classes from './Button.module.css' 

const Button = ({text, bgColor, color, onClick}) => {
    
    const customColor = {
        backgroundColor : `${bgColor}`,
        color: `${color}`
    }
    
    return (
        <div>
            <a className={classes.btn} style={customColor} href="#">{text}</a>
        </div>
    )
}

export default Button
