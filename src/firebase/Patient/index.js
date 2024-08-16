import { auth, db, storage, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL } from "../config";

const registerPatient = async (email, password, patientData, profileImageFile) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const patientUID = userCredential.user.uid;
        patientData.Id = patientUID
        console.log('Patient registered with UID:', patientUID);

        // Upload profile image to Firebase Storage
        const profileImageRef = ref(storage, `patient/profile_images/${patientUID}`);
        await uploadBytes(profileImageRef, profileImageFile);
        console.log("Profile Image Uploaded");

        // Update the doctor data to include image URLs
        patientData.profileImageURL = await getDownloadURL(profileImageRef);
        console.log("URL Stored!");

        // Store the doctor data in Firestore
        const patientRef = doc(db, 'patients', patientUID);
        await setDoc(patientRef, patientData);

        console.log('patient created successfully');
        // You can store additional data in Firestore here if needed
        alert("patient created successfully");
    } catch (error) {
        console.error('Error registering patient:', error.message);
        alert(error.message);
    }
};

// // Read - Get doctor by UID
const getAllPatients = async () => {
    try {
        const patientsCollectionRef = collection(db, 'patients');
        const querySnapshot = await getDocs(patientsCollectionRef);

        const patient = [];
        querySnapshot.forEach((doc) => {
            const patientData = doc.data();
            patient.push(patientData);
        });

        console.log(patient);
        return patient;
    } catch (error) {
        console.error('Error getting patients:', error.message);
        return null;
    }
};

// // Read - Get doctor by UID
const getPatientById = async (patientUID) => {
    try {
        const patientRef = doc(db, 'patients', patientUID);
        const docSnapshot = await getDoc(patientRef);

        if (docSnapshot.exists()) {
            const data = docSnapshot.data();
            console.log(data);
            return data;
        } else {
            console.error('Patient not found');
            return null;
        }
    } catch (error) {
        console.error('Error getting patient:', error.message);
        return null;
    }
};

// Update - Update doctor data
const updatePatient = async (patientUID, updatedData) => {
    try {
        const patientRef = doc(db, 'patients', patientUID);
        await updateDoc(patientRef, updatedData);

        console.log('Patient updated successfully');
    } catch (error) {
        console.error('Error updating patient:', error.message);
    }
};

// Delete - Delete doctor data
const deletePatient = async (patientUID) => {
    try {
        const patientRef = doc(db, 'patients', patientUID);
        await deleteDoc(patientRef);

        console.log('Patient deleted successfully');
    } catch (error) {
        console.error('Error deleting patient:', error.message);
    }
};

export { registerPatient, getAllPatients, deletePatient, getPatientById };
