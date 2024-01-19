// src/components/Profile.jsx
import PropTypes from "prop-types";
import React from "react";
import "./Profile.css";

const Profile = (props) => {
  const { username, location, age, followerCount, likes, photoCount, image } =
    props.user;

  return (
    <div style={{ height: "340px", width: "340px", display: "flex", flexDirection: "column", border: "1px solid black" }}>
      {/* this div is for the entire profile card */}
      <div className="image">
        <img
          // Hardcoded image source for demonstration purposes
          src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
          alt="displaypicture"
        />
      </div>
      {/* Container for a background element (empty in this case) */}
      <div className="background"></div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Display username and age */}
        <div style={{ marginTop: '20px' }}>
          <span><b>{username}</b></span><span>{age}</span>{/* side by side so span is used */}
        </div>
        {/* Display user location */}
        <span style={{ marginBottom: "8px", marginTop: "10px" }}>{location}</span>
      </div>

      {/* Horizontal line to separate sections */}
      <div style={{ backgroundColor: "black", height: "1px", marginTop: '10px' }}></div>

      {/* Container for user statistics with flex layout */}
      <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 30 }}>{/* justifyContent:"space-around" - it helps in balanced and visually appealing layout */}
        {/* Container for followers count */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div><b>{followerCount}</b></div>
          <span>Followers</span>
        </div>

        {/* Container for likes count */}
        <div>
          <div><b>{likes}</b></div>
          <span>Likes</span>
        </div>

        {/* Container for photo count */}
        <div>
          <div><b>{photoCount}</b></div>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    location: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    followerCount: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    photoCount: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    // other prop types
  }).isRequired,
};

export default Profile;
