import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from "firebase/storage";
  import { app } from "../firebase";
  
  const uploadImage = async (img) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + img.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, img);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress.toFixed(0));
        },
        (error) => {
          console.error(error.message);
        }
      );
      await uploadTask; // Wait for the upload to complete
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error(error.message);
      throw error; // Propagate the error
    }
  };
  
  export default uploadImage;