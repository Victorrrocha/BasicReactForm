import React from 'react'
import Button from './Button'
import classes from './Form.module.css'
import Title from './Title'

function Form() {
    return (
        <div className={`${classes.container} container-specs` } >
            <Title title="REGISTER FORM" color="#6079FF" />
            <form>
                {/* Line 1 */}
                <div className={classes.row} >
                    <div className={classes.line}>
                        <div className={`${classes.fieldGroup} ${classes.half}`}>
                            <label htmlFor="firstName">First Name</label>
                            <input name="firstName" id="firstName" type="text" />
                            <p></p>
                        </div>

                        <div className={`${classes.fieldGroup} ${classes.half}`}>
                            <label htmlFor="lastName">Last Name</label>
                            <input name="lastName" id="lastName" type="text" />
                            <p></p>
                        </div>
                    </div>
                </div>
                {/* Line 2 */}
                <div className={classes.row}>
                    <div className={`${classes.fieldGroup}`}>
                        <label htmlFor="email">Your email</label>
                        <input name="email" id="email" type="email" />
                        <p></p>
                    </div>
                </div>
                {/* Line 3 */}
                <div className={classes.row}>
                    <div className={classes.line}>
                        <div className={`${classes.fieldGroup} ${classes.half}`}>
                            <label htmlFor="password1" name="password" >Password</label>
                            <input id="password1" required type="password" />
                            <p></p>
                        </div>

                        <div className={`${classes.fieldGroup} ${classes.half}`}>
                            <label htmlFor="password2" name="password">Confirm Password</label>
                            <input id="password2" type="password" />
                            <p></p>
                        </div>
                    </div>
                </div>
                
                <div className={classes.row}>
                    <div className={classes.TermsContainer}>
                        <input type="checkbox" id="termsAndConditions"/>
                        <label htmlFor="termsAndConditions">Agree to the <span>Terms and Conditions</span></label>
                    </div>
                </div>

                <Button text="Register" bgColor="#6079FF" color="white" />
            </form >
        </div>
    )
}

export default Form
