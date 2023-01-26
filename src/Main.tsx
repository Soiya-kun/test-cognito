import React from "react";
import {SignOut} from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";
import {AmplifyUser} from "@aws-amplify/ui/dist/types/types/authenticator/user";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TestElementOne, TestElementTwo} from "./TestElement";
import {Authenticator} from "@aws-amplify/ui-react";
import {AuthMiddleware} from "./AuthMiddleware";
import {AuthProvider} from "./AuthProvider";

export const Main = ({signOut, user}: { signOut: SignOut, user: AmplifyUser }) => {
    console.log(user)
    return (
        <Authenticator.Provider>
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<AuthMiddleware />}>
                            <Route path="" element={<TestElementOne signOut={signOut}/>}/>
                            <Route path="/registered" element={<TestElementTwo signOut={signOut}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </Authenticator.Provider>

    )
}
