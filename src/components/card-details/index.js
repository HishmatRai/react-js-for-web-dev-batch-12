import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment/moment";
import ReactPlayer from "react-player";
import Input from "../input";
import { useNavigate, useLocation } from "react-router-dom";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";

function Media(props) {
  const { loading, data } = props;
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar alt={data?.user?.name} src={data?.user?.photoURL} />
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            data?.user?.name
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            moment(data?.createdAt).fromNow()
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 390 }} animation="wave" variant="rectangular" />
      ) : (
        <div>
          {data?.fileType.slice(0, 5) === "video" ? (
            <ReactPlayer
              url={data?.fileURL}
              controls={true}
              height={390}
              width={"100%"}
            />
          ) : (
            <CardMedia
              component="img"
              height="390"
              image={data?.fileURL}
              alt="Nicola Sturgeon on a TED talk stage"
            />
          )}
        </div>
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.secondary" }}
            style={{ fontWeight: "700" }}
          >
            {data?.title}
          </Typography>
        )}
      </CardContent>
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography
            variant="body2"
            component="p"
            sx={{ color: "text.secondary" }}
          >
            {data?.details}
          </Typography>
        )}
      </CardContent>
      <CardContent>
        {loading ? (
          <div className="card-footer">
            <React.Fragment>
              <Skeleton animation="wave" height={40} width="20%" />
            </React.Fragment>
            <React.Fragment>
              <Skeleton animation="wave" height={40} width="20%" />
            </React.Fragment>
            <React.Fragment>
              <Skeleton animation="wave" height={40} width="20%" />
            </React.Fragment>
          </div>
        ) : (
          <div className="card-footer">
            <div>
              <ThumbUpIcon />
              <span>{data?.likes.length}</span>
            </div>
            <div>
              <CommentIcon />
              <span>{data?.comments.length}</span>
            </div>
            <div>
              <ShareIcon />
              <span>{data?.share}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
const BlogDetails = () => {
  const routerLocation = useLocation();
  const currentPath = routerLocation.pathname.slice(14);
  const db = getFirestore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    onSnapshot(doc(db, "blogs", currentPath), (blogRes) => {
      if (blogRes.data()) {
        onSnapshot(doc(db, "users", blogRes.data().uid), (userRes) => {
          let newData = {
            ...blogRes.data(),
            user: userRes.data(),
          };
          setData(newData);
          setLoading(false);
        });
      } else {
        navigate("/");
      }
    });
  }, []);
  console.log("Current data: ", data);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1} />
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <Media loading={loading} data={data} />
          </Grid>
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1} />
        </Grid>
      </Box>
    </div>
  );
};
export default BlogDetails;
