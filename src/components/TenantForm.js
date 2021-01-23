import React, { Component } from 'react'
import FormTenantDetails from './FormTenantDetails'
import Confirm from './Confirm'
import Success from './Success'

export class TenantForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        salaryIndicator: ''
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Proceed to the previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => ev => {
        this.setState({[input]: ev.target.value})
    }

    render() {
        const { step } = this.state
        const { firstName, lastName, email, phoneNumber, salaryIndicator } = this.state
        const values = { firstName, lastName, email, phoneNumber, salaryIndicator }
        
        switch(step) {
            case 1:
                return (
                    <FormTenantDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 2:
                return (
                    <Confirm
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 3:
                return (
                    <Success />
                )
        }
        return (
            <div></div>
        )
    }
}

export default TenantForm
