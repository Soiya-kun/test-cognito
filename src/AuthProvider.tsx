import {createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState} from "react";

export type User = {
    userId: string
}

export const userContext = createContext<
    [User, Dispatch<SetStateAction<User>>]
>([{userId: ""}, () => {
}])

export function AuthProvider({children}: { children: ReactNode }) {
    const [user, setUser] = useState<User>({userId: ""})
    const userMemo: [User, Dispatch<SetStateAction<User>>] = useMemo(() => [user, setUser], [user])

    return <userContext.Provider value={userMemo}>
        {children}
    </userContext.Provider>
}
