
# Cognito SRP Authentication Sample

This Node.js application demonstrates how to authenticate a user using Amazon Cognito’s Secure Remote Password (SRP) flow. It retrieves a JWT access token by authenticating with a username and password. This sample is designed for a Cognito user pool with a client application configured for use from a single-page application (SPA), which does not require a client secret.

## Features

- **SRP Authentication:** Uses the [amazon-cognito-identity-js](https://www.npmjs.com/package/amazon-cognito-identity-js) library to perform SRP authentication.
- **JWT Token Retrieval:** Authenticates with a username and password and prints the JWT access token upon successful login.

## Prerequisites

- **Node.js** (v12 or later recommended)
- **AWS Cognito User Pool:**  
  - You must have an AWS Cognito user pool set up.
  - The user pool must include a client application that is configured for use from a single-page application (SPA) and does not have a client secret.
- Replace the placeholder configuration values in the code with your actual Cognito details.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nigamthebest/cognito-srp-sample.git
   cd cognito-srp-sample
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Configuration

In the `app.js` file, update the following values with your Cognito configuration:

- **UserPoolId:** Your AWS Cognito User Pool ID.
- **ClientId:** Your AWS Cognito App Client ID (configured for SPA use without a client secret).
- **Username & Password:** Replace with the credentials you want to test.

## Running the Application

Run the application using Node.js:

```bash
node app.js
```

If authentication is successful, the JWT access token will be printed to the console.

