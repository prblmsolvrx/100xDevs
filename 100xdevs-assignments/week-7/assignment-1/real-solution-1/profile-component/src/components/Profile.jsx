// Import the React library to define React components
import React from "react";

// Import the stylesheet for styling the Profile component
import "./Profile.css";

// Define the Profile component as a functional component that takes props as input
function Profile(props) {
  // Destructure the user object from props into individual variables
  const { username, location, age, followerCount, likes, photoCount, image } = props.user;

  // Return the JSX for rendering the Profile component
  return (
    // Outer container with styling properties
    <div style={{ height: "340px", width: "340px", display: "flex", flexDirection: "column", border: "1px solid black" }}>

      {/* Container for the profile image */}
      <div className="image">
        <img
          // Hardcoded image source for demonstration purposes
          src="https://i.pinimg.com/originals/5a/26/db/5a26db0dad10a1770caf4d61a247b464.jpg"
          alt="displaypicture"
        />
      </div>

      {/* Container for a background element (empty in this case) */}
      <div className="background"></div>

      {/* Container for user details with flex layout */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
        <div style={{ height: 50 }}></div> {/* Empty space for vertical spacing */}
        {/* Display username and age */}
        <div style={{ marginTop: '4px' }}>
          <span><b>{username}</b></span> <span>{age}</span>
        </div>
        {/* Display user location */}
        <span style={{ marginBottom: "8px", marginTop: "10px" }}>{location}</span>
      </div>

      {/* Horizontal line to separate sections */}
      <div style={{ backgroundColor: "black", height: "1px", marginTop: '10px' }}></div>

      {/* Container for user statistics with flex layout */}
      <div style={{ display: "flex", justifyContent: "space-around", paddingTop: 30 }}>
        {/* Container for followers count */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
}

// Export the Profile component as the default export of this module
export default Profile;

