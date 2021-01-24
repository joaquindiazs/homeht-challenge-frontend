import React, { Component } from 'react'
import FormTenantDetails from './FormTenantDetails'
import Confirm from './Confirm'
import Success from './Success'
import LinearProgress from '@material-ui/core/LinearProgress';

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
                    <div>
                        <LinearProgress style={styles.progressBar} variant="determinate" value={step * 100 / 3} />
                        <FormTenantDetails
                            nextStep = { this.nextStep }
                            handleChange = { this.handleChange }
                            values = { values }
                            />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <LinearProgress style={styles.progressBar} variant="determinate" value={step * 100 / 3} />
                        <Confirm
                            nextStep = { this.nextStep }
                            prevStep = { this.prevStep }
                            handleChange = { this.handleChange }
                            values = { values }
                        />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <LinearProgress style={styles.progressBar} variant="determinate" value={step * 100 / 3} />
                        <Success />
                    </div>
                )
        }
        return (
            <div></div>
        )
    }
}

const styles = {
    progressBar: {
        height: 15,
        marginBottom: 10
    }
}

export default TenantForm
