import React, { useState, useEffect, useId } from "react";
import { Layout, Input, Button, UploadProgress } from "../../components";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import ReactPlayer from "react-player";

const CreateBlog = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const storage = getStorage();
  const uuid = uuidv4();
  const db = getFirestore();
  const [fileURL, setFileURl] = useState(null);
  const [title, setTitle] = useState(null);
  const [details, setDetails] = useState(null);
  const [profileUploadingStar, setProfileUploadingStart] = useState(false);
  const [profileProgress, setProgress] = useState(0);
  const [uid, setUid] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);
  // create new blog
  const createNewBlogHandler = async () => {
    if (!fileURL) {
      toast("File Required!", { type: "error" });
    } else if (!title) {
      toast("Title Required!", { type: "error" });
    } else if (title.length < 50) {
      toast("Title minimum length 50", { type: "error" });
    } else if (!details) {
      toast("Details Required!", { type: "error" });
    } else if (details.length < 100) {
      toast("Details minimum length 100", { type: "error" });
    } else {
      setLoading(true);
      const newBlog = {
        fileURL: fileURL,
        title: title,
        details: details,
        uid: uid,
        likes: [],
        comments: [],
        share: 0,
        createdAt: moment().format(),
        fileUid: uuid,
        fileType: fileType,
      };
      const docRef = await addDoc(collection(db, "blogs"), newBlog);
      console.log("Document written with ID: ", docRef.id);
      console.log("newBlog", newBlog);
      setLoading(false);
      toast("Success", { type: "success" });
      window.location.reload();
    }
  };

  // upload file

  const uploadFileHandler = (e) => {
    setProfileUploadingStart(true);
    const file = e.target.files[0];
    setFileType(file.type);
    const storageRef = ref(storage, `blog-files/${uuid}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress);
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileURl(downloadURL);
          setProfileUploadingStart(false);
        });
      }
    );
  };
  return (
    <Layout>
      <h1>Create Blog</h1>
      <p>Upload File</p>
      <input
        type="file"
        onChange={(e) => uploadFileHandler(e)}
        // accept="image/*, video/*"
      />
      {profileUploadingStar && <UploadProgress progress={profileProgress} />}

      {fileURL && (
        <div>
          {fileType.slice(0, 5) === "video" ? (
            <ReactPlayer
              url={fileURL}
              controls={true}
              height={250}
              width={250}
            />
          ) : (
            <img src={fileURL} height={250} width={250} />
          )}
        </div>
      )}

      <Input
        title="Title"
        placeholder="Title ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p>Details</p>
      <textarea
        placeholder="Details ...."
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      ></textarea>
      <br />
      <Button title="Create" onClick={createNewBlogHandler} loading={loading} />
    </Layout>
  );
};
export default CreateBlog;
