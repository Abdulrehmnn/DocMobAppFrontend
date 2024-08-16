import { addDoc, query, where } from "firebase/firestore";
import { auth, db, storage, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL } from "../config";

// appointmentDoc = {
//     doctorID: '',
//     patientID: '',
//     date: '2023-09-24',
//     time: '12:30:00',
//     status: 'pending',
// };

const createAppointment = async (appointmentDoc) => {
    try {
        const appointmentRef = collection(db, 'appointments');
        const appointment = { ...appointmentDoc, status: 'pending' };
        const newAppointment = await addDoc(appointmentRef, appointmentDoc);
        console.log(appointment)
        console.log('Appointment created with ID:', newAppointment.id);
        return { status: 1, data: { id: newAppointment.id }, error: {} };

    } catch (error) {
        console.error('Error creating appointment:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const getAppointments = async () => {
    try {
        const appointmentsCollectionRef = collection(db, 'appointments');
        const querySnapshot = await getDocs(appointmentsCollectionRef);

        const appointments = [];
        querySnapshot.forEach((doc) => {
            const appointmentData = doc.data();
            appointments.push(appointmentData);
        });

        return { status: 1, data: { appointments: appointments }, error: {} };
    } catch (error) {
        console.error('Error getting appointments:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const updateAppointment = async (appointmentID, updatedData) => {
    try {
        const appointmentRef = doc(db, 'appointments', appointmentID);
        const updatedAppointment = await updateDoc(appointmentRef, updatedData);

        console.log('Appointment updated successfully');
        // alert(updatedAppointment);
        return { status: 1, data: { message: "Appointment updated successfully" }, error: {} };
    } catch (error) {
        console.error('Error updating appointment:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const deleteAppointment = async (appointmentID) => {
    try {
        const appointmentRef = doc(db, 'appointments', appointmentID);
        await deleteDoc(appointmentRef);

        console.log('Appointment deleted successfully');
        alert('Appointment deleted successfully');
    } catch (error) {
        console.error('Error deleting appointment:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const getUpcomingAppointmentsByDoctorID = async (doctorID) => {
    try {
        const appointmentsCollectionRef = collection(db, 'appointments');
        const q = query(appointmentsCollectionRef, where('doctorID', '==', doctorID), where('date', '>=', getCurrentDate()));

        const querySnapshot = await getDocs(q);

        const upcomingAppointments = [];
        querySnapshot.forEach((doc) => {
            const appointmentData = doc.data();
            upcomingAppointments.push(appointmentData);
        });

        return upcomingAppointments;
    } catch (error) {
        console.error('Error getting upcoming appointments:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const confirmAppointment = async (appointmentID) => {
    try {
        const appointmentRef = doc(db, 'appointments', appointmentID);
        await updateDoc(appointmentRef, {
            status: 'confirmed', // Set the status to 'confirmed'
        });
        console.log('Appointment confirmed');
    } catch (error) {
        console.error('Error confirming appointment:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const rejectAppointment = async (appointmentID) => {
    try {
        const appointmentRef = doc(db, 'appointments', appointmentID);
        await updateDoc(appointmentRef, {
            status: 'rejected', // Set the status to 'rejected'
        });
        console.log('Appointment rejected');
    } catch (error) {
        console.error('Error rejecting appointment:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};

const getAppointmentsByDoctorIDAndDate = async (doctorID, date) => {
    try {
        const appointmentsCollectionRef = collection(db, 'appointments');
        const q = query(
            appointmentsCollectionRef,
            where('doctorID', '==', doctorID),
            where('date', '==', date)
        );

        const querySnapshot = await getDocs(q);

        const appointments = [];
        querySnapshot.forEach((doc) => {
            const appointmentData = doc.data();
            appointments.push(appointmentData);
        });
        console.log(appointments);
        return { status: 1, data: { appointments: appointments }, error: '' };
    } catch (error) {
        console.error('Error getting appointments:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};
const getAppointmentsByPatientIDAndDate = async (patientID, date) => {
    try {
        const appointmentsCollectionRef = collection(db, 'appointments');
        const q = query(
            appointmentsCollectionRef,
            where('patientID', '==', patientID),
            where('date', '==', date)
        );

        const querySnapshot = await getDocs(q);

        const appointments = [];
        querySnapshot.forEach((doc) => {
            const appointmentData = doc.data();
            appointments.push(appointmentData);
        });
        console.log(appointments);
        return { status: 1, data: { appointments: appointments }, error: '' };
    } catch (error) {
        console.error('Error getting appointments:', error.message);
        return { status: 0, data: {}, error: error.message };
    }
};


export { createAppointment, getAppointments, updateAppointment, deleteAppointment, getUpcomingAppointmentsByDoctorID, getAppointmentsByPatientIDAndDate, getAppointmentsByDoctorIDAndDate, confirmAppointment, rejectAppointment };
