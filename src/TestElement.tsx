import {SignOut} from "@aws-amplify/ui-react/dist/types/components/Authenticator/Authenticator";
import {userContext} from "./AuthProvider";
import {ChangeEvent, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export function TestElementOne({signOut}: { signOut: SignOut }) {
    const [, setUser] = useContext(userContext)

    const [idInputted, setIdInputted] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIdInputted(e.target.value)
    }
    const navigate = useNavigate()
    const handleClickOnRegister = () => {
        setUser({userId: idInputted})
        navigate("/registered")
    }
    return <div>
        <input onChange={handleChange}/>
        <button onClick={handleClickOnRegister}>register</button>
        <button onClick={signOut}>signOut</button>
    </div>
}

export function TestElementTwo({signOut}: { signOut: SignOut }) {
    const [user] = useContext(userContext)
    return (
        <div>
            <div>Hello {user.userId}</div>
            <button onClick={signOut}>signOut</button>
        </div>
    )
}
