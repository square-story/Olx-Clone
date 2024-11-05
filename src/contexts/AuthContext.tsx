import React, { createContext, FC, useContext, useEffect, useState } from "react";
import { auth, provider } from '../services/firebaseConfig';
import { onAuthStateChanged, signInWithPopup, User } from "firebase/auth";

type AuthContextType = {
    user: User | null;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    isLoginModalOpen: boolean;
    openLoginModal: () => void;
    closeLoginModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
        console.log('open login modal');
    }
    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
        console.log('close login modal');
    }

    const login = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            console.log('user logged in', result.user);
            closeLoginModal();
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await auth.signOut();
            setUser(null);
            console.log('user logged out');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('user changed', currentUser);
        });
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isLoginModalOpen,
            openLoginModal,
            closeLoginModal
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}