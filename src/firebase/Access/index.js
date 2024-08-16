import { auth, signInWithEmailAndPassword, signOut } from '../config';

export const signIn = async (email, password) => {
    try {
        const token = await signInWithEmailAndPassword(auth, email, password);
        // Sign-in successful
        console.log(token);
        return { status: 1, data: { token: token }, error: '' };
    } catch (error) {
        // Handle sign-in errors here
        console.error(error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

export const signOutUser = async () => {
    try {
        const resp = await signOut(auth);
        console.log(resp);
        return { status: 1, data: resp, error: {} };
        // Sign-out successful
    } catch (error) {
        // Handle sign-out errors here
        console.error(error.message);
        return { status: 0, data: {}, error: error.message };
    }
};