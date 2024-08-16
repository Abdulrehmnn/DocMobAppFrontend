import { auth, db, addDoc, runTransaction, storage, createUserWithEmailAndPassword, doc, setDoc, getDoc, collection, getDocs, updateDoc, deleteDoc, ref, uploadBytes, getDownloadURL } from "../config";

const addReview = async (doctorID, patientID, rating, comment, appointmentID) => {
    try {
      const reviewRef = await addDoc(collection(db, 'reviews'), reviewData);
      console.log('Review added with ID:', reviewRef.id);
    } catch (error) {
      console.error('Error adding review:', error.message);
    }
  };

  const getDoctorReviews = async (doctorID) => {
    try {
      const querySnapshot = await getDocs(query(collection(db, 'reviews'), where('doctorID', '==', doctorID)));
      const reviews = [];
      querySnapshot.forEach((doc) => {
        const reviewData = doc.data();
        reviews.push(reviewData);
      });
      return reviews;
    } catch (error) {
      console.error('Error getting doctor reviews:', error.message);
      return [];
    }
  };

  const submitReview = async (patientID, doctorID, appointmentID, rating, reviewText) => {
    try {
      const appointmentRef = doc(db, 'appointments', appointmentID);
      const reviewsCollectionRef = collection(db, 'reviews');
  
      await runTransaction(db, async (transaction) => {
        // Check if the appointment exists and is associated with the provided doctor and patient.
        const appointmentSnapshot = await transaction.get(appointmentRef);
  
        if (!appointmentSnapshot.exists()) {
          throw new Error('Appointment not found.');
        }
  
        const appointmentData = appointmentSnapshot.data();
        if (appointmentData.doctorID !== doctorID || appointmentData.patientID !== patientID) {
          throw new Error('Invalid appointment for the specified doctor and patient.');
        }
  
        // Create a new review document using addDoc.
        const newReviewDocRef = await addDoc(reviewsCollectionRef, {
          appointments: appointmentID,
          patientID: patientID,
          doctorID: doctorID,
          appointmentRef: appointmentRef,
          rating: rating,
          reviewText: reviewText,
        });
      });
  
      return { status: 1, data: {}, error: {} };
    } catch (error) {
      console.error('Error submitting review:', error.message);
      return { status: 0, data: {}, error: error.message };
    }
  };
  
export { addReview, getDoctorReviews, submitReview };
    