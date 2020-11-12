import React from "react";
import {
  Card,
  CardDeck,
  CardColumns,
  CardGroup,
  Row,
  Col,
} from "react-bootstrap";
import "../styles/cardStyle.css";
import "../styles/youtubeContainer.css";
import YouTube from "react-youtube";

const thumbnailOpt = {};

const cardsArray = [
  {
    youtube: true,
    videoId: "-zKE04TVxGk",
    opts: thumbnailOpt,
    onReady: (e) => e.target.pauseVideo(),
  },
  {
    name: "PIV-IT",
    author: "autor",
    link: "https://simmer.io/@bubbybumble/piv-it",
    image:
      "https://process.filestackapi.com/AnP4G3pixRCyMaUo5jr8bz/output=format:webp/resize=height:220/https://simmercdn.com/unity/2f5D0OoCwfSmxd0UWqRWb31mpj92/content/ca123aa3-17a8-e2fa-a4fb-6a7c4754d2ea/screens/2.png",
  },
  {
    name: "Cleos Haunted House 1st draft",
    author: "Will Lewis",
    link: "https://poly.google.com/view/2rujmCTRgjV",
    image:
      "https://lh3.googleusercontent.com/HcOr2RfBwWWasVwyZuco41j9YZ7RcnUYh2jbF4IaU7a82hNZMigpDCtyy4MxujoR=w576-h432-n-rw",
  },
  {
    name: "PIV-IT",
    author: "autor",
    link: "https://simmer.io/@bubbybumble/piv-it",
    image:
      "https://process.filestackapi.com/AnP4G3pixRCyMaUo5jr8bz/output=format:webp/resize=height:220/https://simmercdn.com/unity/2f5D0OoCwfSmxd0UWqRWb31mpj92/content/ca123aa3-17a8-e2fa-a4fb-6a7c4754d2ea/screens/2.png",
  },
  {
    name: "Cleos Haunted House 1st draft",
    author: "Will Lewis",
    link: "https://poly.google.com/view/2rujmCTRgjV",
    image:
      "https://lh3.googleusercontent.com/HcOr2RfBwWWasVwyZuco41j9YZ7RcnUYh2jbF4IaU7a82hNZMigpDCtyy4MxujoR=w576-h432-n-rw",
  },
  {
    youtube: true,
    videoId: "D2qbDHMP_-4",
    opts: thumbnailOpt,
    onReady: (e) => e.target.pauseVideo(),
  },
  {
    name: "PIV-IT",
    author: "autor",
    link: "https://simmer.io/@bubbybumble/piv-it",
    image:
      "https://process.filestackapi.com/AnP4G3pixRCyMaUo5jr8bz/output=format:webp/resize=height:220/https://simmercdn.com/unity/2f5D0OoCwfSmxd0UWqRWb31mpj92/content/ca123aa3-17a8-e2fa-a4fb-6a7c4754d2ea/screens/2.png",
  },
  {
    name: "Cleos Haunted House 1st draft",
    author: "Will Lewis",
    link: "https://poly.google.com/view/2rujmCTRgjV",
    image:
      "https://lh3.googleusercontent.com/HcOr2RfBwWWasVwyZuco41j9YZ7RcnUYh2jbF4IaU7a82hNZMigpDCtyy4MxujoR=w576-h432-n-rw",
  },
  {
    name: "PIV-IT",
    author: "autor",
    link: "https://simmer.io/@bubbybumble/piv-it",
    image:
      "https://process.filestackapi.com/AnP4G3pixRCyMaUo5jr8bz/output=format:webp/resize=height:220/https://simmercdn.com/unity/2f5D0OoCwfSmxd0UWqRWb31mpj92/content/ca123aa3-17a8-e2fa-a4fb-6a7c4754d2ea/screens/2.png",
  },
  {
    name: "Cleos Haunted House 1st draft",
    author: "Will Lewis",
    link: "https://poly.google.com/view/2rujmCTRgjV",
    image:
      "https://lh3.googleusercontent.com/HcOr2RfBwWWasVwyZuco41j9YZ7RcnUYh2jbF4IaU7a82hNZMigpDCtyy4MxujoR=w576-h432-n-rw",
  },
  {
    youtube: true,
    videoId: "5Lmef4NlXMI",
    opts: thumbnailOpt,
    onReady: (e) => e.target.pauseVideo(),
  },
  {
    name: "PIV-IT",
    author: "autor",
    link: "https://simmer.io/@bubbybumble/piv-it",
    image:
      "https://process.filestackapi.com/AnP4G3pixRCyMaUo5jr8bz/output=format:webp/resize=height:220/https://simmercdn.com/unity/2f5D0OoCwfSmxd0UWqRWb31mpj92/content/ca123aa3-17a8-e2fa-a4fb-6a7c4754d2ea/screens/2.png",
  },
  {
    name: "Cleos Haunted House 1st draft",
    author: "Will Lewis",
    link: "https://poly.google.com/view/2rujmCTRgjV",
    image:
      "https://lh3.googleusercontent.com/HcOr2RfBwWWasVwyZuco41j9YZ7RcnUYh2jbF4IaU7a82hNZMigpDCtyy4MxujoR=w576-h432-n-rw",
  },
  {
    youtube: true,
    videoId: "-zKE04TVxGk",
    opts: thumbnailOpt,
    onReady: (e) => e.target.pauseVideo(),
  },
];

const CardsComponent = () => {
  return (
    <Row
      className="p-5 col-xl-10 col-sm-11 mx-auto"
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        overflow: "auto",
        height: "80vh",
        flexDirection: "row",
      }}
    >
      {cardsArray.map((item) => (
        <Col lg={4} md={6}>
          {item.youtube ? (
            <YouTube
              className="col-12"
              videoId={item.videoId}
              opts={item.opts}
              onReady={item.onReady}
            />
          ) : (
            <Card
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              className="cardContainer"
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <Card.Img
                  src={item.image}
                  style={{
                    backgroundColor: "gray",
                    objectFit: "contain",
                    borderRadius: "10px",
                    borderColor: "transparent",
                  }}
                />
                <Card.ImgOverlay>
                  <div style={{ position: "absolute", bottom: "10px" }}>
                    <h3>
                      <b>{item.name}</b>
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "1.2rem",
                      }}
                    >
                      {item.author}
                    </p>
                  </div>
                </Card.ImgOverlay>
              </a>
            </Card>
          )}
        </Col>
      ))}
    </Row>
  );
};

export default CardsComponent;
