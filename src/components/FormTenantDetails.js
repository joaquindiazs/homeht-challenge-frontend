import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Button from '@material-ui/core/Button'

export class FormTenantDetails extends Component {
    state = {
        isFormSubmitted: false,
        isFormValid: true
    }
    
    isFirstNameInvalid() {
        return !this.props.values.firstName.length
    }
    isLastNameInvalid() {
        return !this.props.values.lastName.length
    }
    isEmailInvalid() {
        return !this.props.values.email.length
    }
    isPhoneNumberInvalid() {
        return !this.props.values.phoneNumber.length
    }
    isSalaryInvalid() {
        return !this.props.values.salaryIndicator.length
    }

    continue = ev => {
        ev.preventDefault();
        this.setState({
            isFormSubmitted: true
        })
        if (!this.isSalaryInvalid() && !this.isPhoneNumberInvalid() && !this.isEmailInvalid() && !this.isFirstNameInvalid() && !this.isLastNameInvalid()) {
            this.props.nextStep();
        }
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            Enter Ternant Details
                        </Toolbar>
                    </AppBar>
                    <TextField
                        style={styles.textField}
                        label="Enter Your First Name" 
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        error={this.isFirstNameInvalid() && this.state.isFormSubmitted}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Last Name" 
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        error={this.isLastNameInvalid() && this.state.isFormSubmitted}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Email" 
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        error={this.isEmailInvalid() && this.state.isFormSubmitted}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Phone Number" 
                        onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                        error={this.isPhoneNumberInvalid() && this.state.isFormSubmitted}
                    />
                    <br/>
                    <br/>
                    <FormLabel error={this.isSalaryInvalid() && this.state.isFormSubmitted}>Salary Indication</FormLabel>
                    <RadioGroup style={styles.formGroup} aria-label="gender" name="customized-radios">
                        <FormControlLabel onChange={handleChange('salaryIndicator')} value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
                        <FormControlLabel onChange={handleChange('salaryIndicator')} value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
                        <FormControlLabel onChange={handleChange('salaryIndicator')} value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
                        <FormControlLabel onChange={handleChange('salaryIndicator')} value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
                        <FormControlLabel onChange={handleChange('salaryIndicator')} value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
                    </RadioGroup>
                    <br/>
                    <Button
                        variant="contained" 
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Continue
                    </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    textField: {
        marginTop: 10
    },
    formGroup: {
        alignItems: 'center'
    }
}

export default FormTenantDetails
