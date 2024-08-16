import { auth, db, storage, query, where, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "../config";
import { authenticate } from '../Authentication';

// Register a doctor
const registerDoctor = async (email, password, doctorData, profileImageFile, medicalCertificateFile) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const doctorUID = userCredential.user.uid;
    doctorData.Id = doctorUID;
    console.log('Doctor registered with UID:', doctorUID);

    // Upload profile image to Firebase Storage
    const profileImageRef = ref(storage, `doctor/profile_images/${doctorUID}`);
    // await uploadBytes(profileImageRef, profileImageFile);
    await uploadBytesResumable(profileImageRef, profileImageFile);
    console.log("Profile Image Uploaded");

    // Upload medical certificate to Firebase Storage
    const medicalCertificateRef = ref(storage, `doctor/medical_certificates/${doctorUID}`);
    // await uploadBytes(medicalCertificateRef, medicalCertificateFile);
    await uploadBytesResumable(medicalCertificateRef, medicalCertificateFile);
    console.log("Medical Certificate Uploaded");

    // Update the doctor data to include image URLs
    doctorData.profileImageURL = await getDownloadURL(profileImageRef);
    doctorData.medicalCertificateURL = await getDownloadURL(medicalCertificateRef);
    console.log("URL Stored!");

    // Store the doctor data in Firestore
    const doctorRef = doc(db, 'doctors', doctorUID);
    await setDoc(doctorRef, doctorData);

    console.log('Doctor created successfully');
    // You can store additional data in Firestore here if needed
    // alert("Doctor created successfully");
    return { status: 1, data: { id: doctorUID }, error: {} };
  } catch (error) {
    console.error('Error registering doctor:', error.message);
    // alert(error.message);
    return { status: 0, data: {}, error: error.message };
  }
};

// Create - Add a new doctor
// const createDoctor = async (doctorData) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(auth, doctorData.email, doctorData.password);
//     const doctorUID = userCredential.user.uid;

//     // Remove the password before storing the data
//     delete doctorData.password;

//     // Store the doctor data in Firestore
//     const doctorRef = doc(db, 'doctors', doctorUID);
//     await setDoc(doctorRef, doctorData);

//     console.log('Doctor created successfully');
//   } catch (error) {
//     console.error('Error creating doctor:', error.message);
//   }
// };

// // Read - Get doctor by UID
// const getAllDoctors = async () => {
//   try {
//     const doctorsCollectionRef = collection(db, 'doctors');
//     const querySnapshot = await getDocs(doctorsCollectionRef);

//     const doctors = [];
//     querySnapshot.forEach((doc) => {
//       const doctorData = doc.data();
//       doctors.push(doctorData);
//     });

//     console.log(doctors);
//     return { status: 1, data: doctors, error: {} };
//   } catch (error) {
//     console.error('Error getting doctors:', error.message);
//     return { status: 0, data: {}, error: error.message };
//   }
// };

const getAllDoctors = async () => {
  try {
    // if (authenticate) {
      const doctorsCollectionRef = collection(db, 'doctors');
      const querySnapshot = await getDocs(doctorsCollectionRef);

      const doctorsWithRatings = [];

      for (const doctorDoc of querySnapshot.docs) {
        const doctorData = doctorDoc.data();
        const doctorID = doctorDoc.id;
        // console.log(doctorID);
        // Query ratings for the current doctor
        const ratingsQuery = query(
          collection(db, 'reviews'),
          where('doctorID', '==', doctorID)
        );

        const ratingsSnapshot = await getDocs(ratingsQuery);
        const ratings = ratingsSnapshot.docs.map((ratingDoc) => ratingDoc.data().rating);
        const averageRating = calculateAverageRating(ratings);

        doctorsWithRatings.push({
          ...doctorData,
          id: doctorID,
          averageRating: averageRating.toFixed(1),
        });
      }
      console.log(doctorsWithRatings);
      return { status: 1, data: doctorsWithRatings, error: {} };
    // }
  } catch (error) {
    console.error('Error getting doctors with ratings:', error.message);
    return { status: 0, data: [], error: error.message };
  }
};

// Helper function to calculate average rating
function calculateAverageRating(ratings) {
  // console.log(ratings);     
  if (ratings.length === 0) {
    return 0;
  }

  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
}


// // Read - Get doctor by UID
const getDoctorById = async (doctorUID) => {
  try {
    const doctorRef = doc(db, 'doctors', doctorUID);
    const docSnapshot = await getDoc(doctorRef);

    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      console.log(data);
      return { status: 1, data: data, error: {} };

    } else {
      console.error('Doctor not found');
      // return null;
      return { status: 0, data: {}, error: "Doctor not found" };
    }
  } catch (error) {
    console.error('Error getting doctor:', error.message);
    return { status: 0, data: {}, error: error.message };
  }
};

// Update - Update doctor data
const updateDoctor = async (doctorUID, updatedData) => {
  try {
    const doctorRef = doc(db, 'doctors', doctorUID);
    await updateDoc(doctorRef, updatedData);

    console.log('Doctor updated successfully');
    return { status: 1, data: { message: "Doctor updated successfully" }, error: {} };

  } catch (error) {
    console.error('Error updating doctor:', error.message);
    return { status: 0, data: {}, error: error.message };
  }
};

// Delete - Delete doctor data
const deleteDoctor = async (doctorUID) => {
  try {
    const doctorRef = doc(db, 'doctors', doctorUID);
    await deleteDoc(doctorRef);

    console.log('Doctor deleted successfully');
    return { status: 1, data: { message: "Doctor deleted successfully" }, error: {} };
  } catch (error) {
    console.error('Error deleting doctor:', error.message);
    return { status: 0, data: {}, error: error.message };
  }
};

// const searchDoctorsByName = async (substring) => {
//   try {
//     const doctorsCollectionRef = collection(db, 'doctors');
//     const q = query(doctorsCollectionRef, where('firstName', 'array-contains', substring));
//     // where('firstName', '>=', substring),
//     // where('firstName', '<=', substring + '\uf8ff'));
//     const querySnapshot = await getDocs(q);

//     const matchingDoctors = [];
//     querySnapshot.forEach((doc) => {
//       const doctorData = doc.data();
//       matchingDoctors.push(doctorData);
//     });
//     console.log(matchingDoctors);
//     return { status: 1, data: matchingDoctors, error: {} };

//   } catch (error) {
//     console.error('Error searching for doctors:', error.message);
//     return { status: 0, data: {}, error: error.message };
//   }
// };

const searchDoctorsByName = async (substring) => {
  try {
    const doctorsCollectionRef = collection(db, 'doctors');
    const q = query(
      doctorsCollectionRef,
      where('firstName', '>=', substring),
      where('firstName', '<=', substring + '\uf8ff')
      // where('lastName', '>=', substring),
      // where('lastName', '<=', substring + '\uf8ff')
    );

    const querySnapshot = await getDocs(q);

    const matchingDoctors = [];
    querySnapshot.forEach((doc) => {
      const doctorData = doc.data();
      matchingDoctors.push(doctorData);
    });

    console.log(matchingDoctors);
    return { status: 1, data: matchingDoctors, error: {} };

  } catch (error) {
    console.error('Error searching for doctors:', error.message);
    return { status: 0, data: [], error: error.message };
  }
};


export { registerDoctor, getAllDoctors, getDoctorById, deleteDoctor, searchDoctorsByName }; 0