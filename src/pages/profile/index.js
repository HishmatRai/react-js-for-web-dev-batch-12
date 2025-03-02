import React, { useEffect, useState } from "react";
import { Layout, Input, Button, UploadProgress } from "../../components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, onSnapshot, updateDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const db = getFirestore();
  const storage = getStorage();
  const [photoURL, setProfileURl] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState(null);
  const [profileUploadingStar, setProfileUploadingStart] = useState(false);
  const [profileProgress, setProgress] = useState(0);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        const unsub = onSnapshot(doc(db, "users", user.uid), (doc) => {
          let userData = doc.data();
          setProfileURl(userData?.photoURL);
          setName(userData?.name);
          setEmail(userData?.email);
          setPhoneNumber(userData?.phoneNumber);
        });
      } else {
        navigate("/");
      }
    });
  }, []);
  // update
  const updateHanler = async () => {
    setLoading(true);
    const updateProfile = doc(db, "users", uid);
    await updateDoc(updateProfile, {
      name: name,
      phoneNumber: phoneNumber,
    });
    setLoading(false);
  };
  // upload profile
  const uploadProfileHandle = async (e) => {
    setProfileUploadingStart(true);
    const storageRef = ref(storage, `profile-images/${uid}`);
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");

        setProgress(progress);
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          console.log("File available at", downloadURL);
          const updateProfile = doc(db, "users", uid);
          await updateDoc(updateProfile, {
            photoURL: downloadURL,
          });
          setProfileUploadingStart(false);
        });
      }
    );
  };
  return (
    <Layout>
      <h1>Profile Page</h1>
      <img
        src={
          photoURL
            ? photoURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmwEk4bBnur25QRlbj6NcVzRw-axaK0qswA&s"
        }
        height={150}
        width={150}
        style={{ borderRadius: "100px" }}
      />
      {/* <Input
       type="file"
        title="Full Name"
        value={name}
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      /> */}
      <input type="file" onChange={(e) => uploadProfileHandle(e)} />
      {profileUploadingStar && <UploadProgress progress={profileProgress} />}
      <Input
        title="Full Name"
        value={name}
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input type="email" title="Email Address" value={email} disabled={true} />
      <Input
        type="number"
        title="Phone Number"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button title="Update Profile" loading={loading} onClick={updateHanler} />
    </Layout>
  );
};
export default Profile;
