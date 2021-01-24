import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar position="static">
                        <Toolbar>
                            <h1>Successful submit</h1>
                        </Toolbar>
                    </AppBar>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success
