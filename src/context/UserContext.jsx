import { createContext, useEffect, useState } from "react";
import supabase from "../database/supabase";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const getUser = async () => {
        const { data: {session}, error } = await supabase.auth.getSession();
        if (session) {
            const { user } = session;
            setUser(() => user ?? null);
            let { data: profiles } = await supabase
                .from("profiles")
                .select()
                .eq("id", user.id)
                setProfile(profiles[0])
        }
    };

    useEffect (() => {
        getUser();
    }, []);

    
    const signUp = async (newUser) => {
        const { data, error } = await supabase.auth.signUp(newUser);
        await getUser();
        return { data, error };
    };
    
    const signIn = async (existingUser) => {
        const { data, error } = await supabase.auth.signInWithPassword(existingUser);
        await getUser();
        return { data, error };
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setProfile(null);
        setUser(null);
    };


    return (
        <UserContext.Provider value={{ user, profile, getUser, signUp, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    )
}