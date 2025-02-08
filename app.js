// app.js

const { CognitoUserPool, CognitoUser, AuthenticationDetails } = require('amazon-cognito-identity-js');

// Configure your Cognito User Pool details
const poolData = {
  UserPoolId: "YOUR_USER_POOL_ID", // Replace with your Cognito User Pool ID
  ClientId: "YOUR_COGNITO_APP_CLIENT_ID", // Replace with your Cognito App Client ID
};


const userPool = new CognitoUserPool(poolData);
/**
 * Authenticates a user with Cognito using SRP and returns a JWT token.
 * @param {string} username - The user's username.
 * @param {string} password - The user's password.
 * @returns {Promise<string>} - Resolves with the JWT access token.
 */
function authenticateUser(username, password) {

  const authenticationData = {
    Username: username,
    Password: password
  };
  
  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        // Retrieve the JWT access token from the authentication result
        console.log("result  =  ", result);
        const jwtToken = result.getAccessToken().getJwtToken();
        resolve(jwtToken);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
}

// Example usage:
const username = "USER_NAME"; // Replace with actual username
const password = "PASSWORD"; // Replace with the actual password

authenticateUser(username, password)
  .then((jwtToken) => {
    console.log("JWT Token:", jwtToken);
  })
  .catch((error) => {
    console.error("Authentication failed:", error);
  });
