import { db, addDoc, collection } from "../config";

// Function to create a new ticket
const createTicket = async (requesterId, description) => {
    try {
        const ticketsCollectionRef = collection(db, 'tickets');
        const newTicketRef = await addDoc(ticketsCollectionRef, {
            requester: requesterId,
            status: 'open',
            description: description,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            // updatedAt: null,
        });
        return { status: 1, data: newTicketRef.id, error: {} };
    } catch (error) {
        console.error('Error creating ticket:', error.message);
        return { status: 0, data: null, error: error.message };
    }
}
export { createTicket };