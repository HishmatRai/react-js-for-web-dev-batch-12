import React from "react";
import { Layout } from "../../components";
import { useLocation } from "react-router-dom";
import moment from "moment";
const NewDetails = () => {
  const routerLocation = useLocation();
  console.log("routerLocation", routerLocation.state);
  return (
    <Layout>
      <h1>NewDetails</h1>
      <p>Title :- {routerLocation.state.title}</p>
      <p>Author :- {routerLocation.state.author}</p>
      <p>Content :- {routerLocation.state.content}</p>
      <p>
        createdAt :-
        {moment(routerLocation.state.createdAt).format("MMM DD, YYYY")}
      </p>
    </Layout>
  );
};
export default NewDetails;
