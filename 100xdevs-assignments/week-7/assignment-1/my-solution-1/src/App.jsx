// src/App.jsx
import React from 'react';
import Profile from "./components/Profile";


function App() {
  
  const userDetails={
    username:"Soumik Ghosh",
    location:"London",
    age:"32",
    followerCount:"80k",
    likes:"803k",
    photoCount:"1.4k",
    image:""
  }
  
  return (
    <>
      <div>
        <Profile user={userDetails}></Profile>{/*passing userdetails in the form of user as the props aggruement in profile.jsx*/}
      </div>
    </>
  )
}

export default App
