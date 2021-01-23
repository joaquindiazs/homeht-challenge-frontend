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
        validFirstName: false,
        validLastName: false,
        validEmail: false,
        validPhoneNumber: false,
        validSalary: false
    }
    
    continue = ev => {
        ev.preventDefault();
        let valid = 0
        if (this.props.values.firstName.length === 0) {
            valid = 1
            this.setState({
                validFirstName: true
            })
        } 
        if (this.props.values.lastName.length === 0) {
            valid = 1
            this.setState({
                validLastName: true
            })
        }
        if (this.props.values.email.length === 0) {
            valid = 1
            this.setState({
                validEmail: true
            })
        }
        if (this.props.values.phoneNumber.length === 0) {
            valid = 1
            this.setState({
                validPhoneNumber: true
            })
        }
        if (this.props.values.salaryIndicator.length === 0) {
            valid = 1
            this.setState({
                validSalary: true
            })
        }
        if (valid) {
            return 
        } else {
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
                        error={this.state.validFirstName}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Last Name" 
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        error={this.state.validLastName}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Email" 
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        error={this.state.validEmail}
                    />
                    <br/>
                    <TextField
                        style={styles.textField}
                        label="Enter Your Phone Number" 
                        onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                        error={this.state.validPhoneNumber}
                    />
                    <br/>
                    <br/>
                    <FormLabel error={this.state.validSalary}>Salary Indication</FormLabel>
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
