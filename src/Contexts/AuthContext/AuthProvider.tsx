import { useEffect, useState } from "react"
import { useApi } from "../../Services/useApi";
import { ChildrenProps, User } from "../../Types"
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: ChildrenProps) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    const setToken = (token: string) => {
        localStorage.setItem('authtoken', token);
    }

    const validateToken = async () => {
        const storageData = localStorage.getItem('authtoken');

        if (storageData) {
            const data = await api.validateToken(storageData);

            if (data.user) {
                setUser(data.user);
            }
        }
    }

    useEffect(() => {
        validateToken();
    }, [])

    const signIn = async(email: string, password: string) => {
        const data = await api.signIn(email, password);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);

            return true;
        }

        return false;
    }   

    const signOut = async() => {
        setUser(null);
        setToken('');
        await api.signOut();
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}