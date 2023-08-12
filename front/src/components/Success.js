import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import styles from '../styles';
import axios from 'axios'
// import AuthService from ".../ser"
import AuthService from '../service/services';
const Success = ({values}) => {
  const { firstName, lastName, occupation, city, bio } = values;
  AuthService.user({ firstName, lastName, occupation, city, bio })
      .then((res) => {
        console.log("signup sucess",res);
      })
      .catch((err) => {
        console.error("errrooor",err);
    });

  console.log(values)
  return(
  <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          title="Success"
          style={styles.appBar}
        />  
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
    </React.Fragment>    
  </MuiThemeProvider>
  );
  
  };

export default Success;