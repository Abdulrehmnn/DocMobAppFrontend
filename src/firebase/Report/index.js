import { auth, db, storage, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL } from "../config";

const storePatientReport = async (patientID, doctorID, content, date) => {
    try {
        const reportsCollectionRef = collection(db, 'reports');
        const reportDoc = {
            patientID,
            doctorID,
            content,
            date,
            // Add any other fields you need for the report
        };
        const newReport = await addDoc(reportsCollectionRef, reportDoc);
        console.log('Report stored successfully with ID:', newReport.id);
        return newReport.id; // Return the report ID if needed
    } catch (error) {
        console.error('Error storing report:', error.message);
        return null;
    }
};

export { storePatientReport };
