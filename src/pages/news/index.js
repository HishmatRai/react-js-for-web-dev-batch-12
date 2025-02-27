import React from "react";
import { Layout } from "../../components";
import moment from "moment";
import { useNavigate } from "react-router-dom";
const News = () => {
  const navigate = useNavigate();
  const newsArray = [
    {
      title: "Global Stock Markets Hit Record Highs",
      date: "2025-02-26",
      author: "Jane Doe",
      content:
        "Global stock markets surged to record highs today, driven by strong earnings reports and a boost in investor confidence. Analysts predict this upward trend will continue into the next quarter.",
      image: "https://example.com/images/stock-markets.jpg",
      createdAt: "2025-02-26T09:00:00Z",
    },
    {
      title: "Tech Giants Launch New AI Innovations",
      date: "2025-02-25",
      author: "John Smith",
      content:
        "In a highly anticipated event, major tech companies revealed new artificial intelligence tools aimed at revolutionizing industries such as healthcare and finance. The innovations are expected to have a significant impact on the global economy.",
      image: "https://example.com/images/ai-innovations.jpg",
      createdAt: "2025-02-25T14:30:00Z",
    },
    {
      title: "Global Warming: New Report Shows Alarming Trends",
      date: "2025-02-24",
      author: "Emma Johnson",
      content:
        "A recent report from the United Nations highlights alarming trends in global warming, with temperatures rising at an unprecedented rate. Experts call for immediate action to mitigate the environmental impact.",
      image: "https://example.com/images/global-warming.jpg",
      createdAt: "2025-02-24T08:00:00Z",
    },
    {
      title: "New Smartphone Model Unveiled",
      date: "2025-02-23",
      author: "Mark Lee",
      content:
        "The latest smartphone model by TechCorp has just been unveiled, featuring cutting-edge design and new capabilities, including an advanced camera system and longer battery life. Fans are eagerly awaiting its release. A recent report from the United Nations highlights alarming trends in global warming, with temperatures rising at an unprecedented rate. Experts call for immediate action to mitigate the environmental impact.",
      image: "https://example.com/images/smartphone.jpg",
      createdAt: "2025-02-23T10:15:00Z",
    },
    {
      title: "Historic Peace Agreement Signed Between Countries",
      date: "2025-02-22",
      author: "Lily Brown",
      content:
        "A historic peace agreement was signed today between two long-standing adversaries, marking the end of decades of conflict. The agreement is seen as a significant step toward lasting peace in the region.",
      image: "https://example.com/images/peace-agreement.jpg",
      createdAt: "2025-02-22T16:45:00Z",
    },
  ];

  return (
    <Layout url="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=">
      <h1>News</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {newsArray.map((val, index) => {
          return (
            <div
              key={index}
              style={{
                border: "1px solid red",
                padding: "5px",
                margin: "5px",
                width: "30%",
              }}
            >
              <p>Title :- {val.title}</p>
              <p>Author :- {val.author}</p>
              {/* <p>Content :- {val.content}</p> */}
              <p>Content :- {val.content.slice(0, 20)}</p>
              <p>createdAt :- {moment(val.createdAt).format("MMM DD, YYYY")}</p>
              {/* <p>createdAt :- {moment(val.createdAt).format('MMMM Do YYYY, h:mm:ss a').fromNow()}</p> */}
              <button onClick={() => navigate(`/news-details/${val.createdAt}`)}>
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default News;
