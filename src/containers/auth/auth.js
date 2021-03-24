import React, { Component, useContext } from 'react'
import AppContext from '../../component/AppContext'
import Input from '../../component/UI/Input/Input'
import Button from '../../component/UI/Button/Button'
import classes from './auth.css'
import { updatedObject, checkValidity } from '../../shared/utility'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


class auth extends Component {

    //  myContext = useContext(AppContext);

    state = {
        controls: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'string',
                    placeholder: 'Your Username'
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 2
                },
                valid: false,
                touched: false
            }

        },
        loggedIn: 0
    }

    inputChangedHandler = (event, controlName) => {
        const updateControls = updatedObject(this.state.controls, {
            [controlName]: updatedObject(this.state.controls[controlName], {
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        })

        this.setState({ controls: updateControls });
    }

    submitHandler = (event) => {
        event.preventDefault();
        // this.props.onAuth(this.state.controls.username.value, this.state.controls.password.value)
        axios.post('http://localhost:8080/auth/login', {
            username: this.state.controls.username.value,
            password: this.state.controls.password.value
        })
            .then(res => {
                sessionStorage.setItem('token', res.data);
                this.setState({ loggedIn: 1 })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        const formElementsArray = []
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event) => this.inputChangedHandler(event, formElement.id)} />

        ))

        return (
            this.state.loggedIn ? <Redirect to="/" /> : <form className={classes.Card} onSubmit={this.submitHandler}>
                {form}
                <Button btnType='Success'>Sign In</Button>
            </form>
        )
    }

}

export default auth