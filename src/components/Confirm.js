import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button'

export class Confirm extends Component {
    continue = ev => {
        ev.preventDefault();
        // PROCESS FORM // 
        this.props.nextStep();
    }

    back = ev => {
        ev.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: { firstName, lastName, email, phoneNumber, salaryIndicator } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            Confirm Tenant Data
                        </Toolbar>
                    </AppBar>
                    <div style={styles.list}>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="First Name"
                                    secondary={ firstName }
                                    >
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Last Name"
                                    secondary={ lastName }
                                    >
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Email"
                                    secondary={ email }
                                    >
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Phone Number"
                                    secondary={ phoneNumber }
                                    >
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Salary"
                                    secondary={ salaryIndicator }
                                    >
                                </ListItemText>
                            </ListItem>
                        </List>
                    </div>
                    <Button
                        variant="contained" 
                        color="secondary"
                        style={styles.button}
                        onClick={this.back}
                    >
                        Back to previous Step
                    </Button>
                    <Button
                        variant="contained" 
                        color="primary"
                        style={styles.button}
                        onClick={this.continue}
                    >
                        Confirm & Continue
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
    list: {
        display: 'flex',
        justifyContent: 'center',
    }
}

export default Confirm
