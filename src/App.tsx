import React from 'react';
import './App.css';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import {Amplify} from "aws-amplify";
import {Main} from "./Main";

Amplify.configure({
    aws_project_region: "us-east-1",
    aws_cognito_region: "us-east-1",
    aws_user_pools_id: "XXXX",
    aws_user_pools_web_client_id: "XXXX",
});

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => {
            if (user === undefined || signOut === undefined) {
                return <div>error!!</div>
            }
            return (<Main signOut={signOut} user={user} />)
            }}
      </Authenticator>
    </div>
  );
}

export default App;
