import React, { useState } from "react";
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
import "./index.css";
import ShareIcon from "@mui/icons-material/Share";
import moment from "moment/moment";
import ReactPlayer from "react-player";
import Input from "../input";
import { useNavigate } from "react-router-dom";
function Media(props) {
  const { loading, data } = props;
  const navigate = useNavigate();
  return (
    <Card
      onClick={() => navigate(`/blog-details/${data?.id}`)}
      style={{ cursor: "pointer" }}
    >
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
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <div>
          {data?.fileType.slice(0, 5) === "video" ? (
            <ReactPlayer
              url={data?.fileURL}
              controls={true}
              height={190}
              width={"100%"}
            />
          ) : (
            <CardMedia
              component="img"
              height="190"
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
            className="card-title"
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
            className="card-details"
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
const BlogCard = ({ loading, data }) => {
  const [search, setSearch] = useState("");
  // sort
  let sortData = data.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  console.log("sortData", sortData);
  const filterResult = sortData?.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1} />
          <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
            <Grid container spacing={2}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Input
                  type="search"
                  title="Search"
                  placeholder="Search ...."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Grid>
              {/* {(loading ? Array.from(new Array(8)) : data).map(
                (val, index) => {
                  return (
                    <Grid item key={index} xl={3} lg={3} md={4} sm={6} xs={12}>
                      <Media loading={loading} />
                    </Grid>
                  );
                }
              )} */}
              {loading ? (
                Array.from(new Array(8)).map((val, index) => {
                  return (
                    <Grid item key={index} xl={3} lg={3} md={4} sm={6} xs={12}>
                      <Media loading={loading} />
                    </Grid>
                  );
                })
              ) : filterResult?.length === 0 ? (
                <div style={{ marginTop: "150px" }}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLVwmq2Npv0ZYmby3axjvoMykUvTPt48T5DA&s" />
                  <h1>Data not Found!</h1>
                </div>
              ) : (
                filterResult?.map((val, index) => {
                  return (
                    <Grid item key={index} xl={3} lg={3} md={4} sm={6} xs={12}>
                      <Media loading={loading} data={val} />
                    </Grid>
                  );
                })
              )}
            </Grid>
          </Grid>
          <Grid item xl={1} lg={1} md={1} sm={1} xs={1} />
        </Grid>
      </Box>
    </div>
  );
};
export default BlogCard;
