import React from 'react'
import Button from './Button'
import classes from './Information.module.css'
import Title from './Title'

function Information() {
    return (
        <div className={`${classes.container} container-specs` } >
            <Title title="INFORMATION" color="white" />
            <p className={classes.paragraph}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum non exercitationem asperiores natus doloremque nobis rerum amet odio reiciendis. Expedita rerum nesciunt laborum beatae accusamus, quo facere veritatis a? Alias?s
            </p>

            <p className={classes.paragraph}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum non exercitationem asperiores natus doloremque nobis rerum amet odio reiciendis. Expedita rerum nesciunt laborum beatae accusamus, quo facere veritatis a? Alias?s
            </p>

            <Button text="Have an account?" color="black" bgColor="white" />
        </div>
    )
}

export default Information
