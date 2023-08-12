import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';



import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles';



export default class FormUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            title="Enter User Details"
            style={styles.appBar}
          />
              <h1>{process.env.API_URL}</h1>

          <div style={styles.form}>
            <TextField 
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
            />
            <br />
            <TextField 
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
            />
            <br />
            <TextField 
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange('email')}
              defaultValue={values.email}
            />
            <br />
            <RaisedButton 
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
