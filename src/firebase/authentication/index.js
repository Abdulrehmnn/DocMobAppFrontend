import { onAuthStateChanged, auth } from '../config';

const authenticate = async() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
            console.log("User request details");
            // createTicket("User request details");
            return true;
        } else {
            console.log("User authentication fail!!");
            createTicket("User authentication fail!!");
            return false
        }
    });
};

export { authenticate };