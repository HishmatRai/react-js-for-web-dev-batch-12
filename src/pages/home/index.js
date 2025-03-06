import React, { useEffect, useState } from "react";
import { Layout, BlogCard } from "../../components";
import {
  collection,
  query,
  where,
  onSnapshot,
  getFirestore,
  doc,
} from "firebase/firestore";
const Home = () => {
  const db = getFirestore();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      const q = query(collection(db, "blogs"));
      onSnapshot(q, (querySnapshot) => {
        const newBlogs = [];
        
        querySnapshot.forEach((blogRes) => {
          let finalData = {};
          
          // Use onSnapshot to get the user data
          onSnapshot(doc(db, "users", blogRes?.data()?.uid), (userRes) => {
            finalData = { ...userRes.data() };
            console.log("---------finalData-----------1", finalData);
            
            // Push blog data and user data to newBlogs inside the snapshot listener
            newBlogs.push({
              ...blogRes?.data(),
              user: finalData, // Attach user data to blog
            });
  
            // Set the blogs and stop loading once all blogs are processed
            if (newBlogs.length === querySnapshot.size) {
              setBlogs(newBlogs);
              setLoading(false);
            }
          });
        });
      });
    };
  
    fetchData();
  }, []);
  
  console.log("----------------blogs ---->>", blogs);
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
