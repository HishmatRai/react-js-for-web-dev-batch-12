import React, { useEffect, useState } from "react";
import { Layout, BlogCard } from "../../components";
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
const Home = () => {
  const db = getFirestore();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newBlogs = [];
      querySnapshot.forEach((doc) => {
        newBlogs.push(doc.data());
        // user data
      });
      setBlogs(newBlogs);
      setLoading(false);
    });
  }, []);
  console.log("blogs: ", blogs);

  return (
    <Layout>
      {/* {loading ? (
        <p>Loading</p>
      ) : blogs.length === 0 ? (
        <p>No blog found!</p>
      ) : (
        blogs?.map((val, index) => {
          return <p key={index}>Blog available {index + 1}</p>;
        })
      )} */}
      <BlogCard loading={loading} data={blogs} />
    </Layout>
  );
};
export default Home;
