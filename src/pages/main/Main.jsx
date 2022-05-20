import {React, useState} from 'react'
import Category from 'pages/main/Category'
import Platform from 'pages/main/Platform';
import Problems from 'pages/main/Problems';

export default function Main() {
  
  const [platform, setPlatform] = useState(0);
  const handlePlatform = (event, newPlatform) => {
    setPlatform(newPlatform);
  };
  
  console.log("Main Render");
  return (
    <>
      <Platform value={platform} handlePlatform={handlePlatform}></Platform>
      <Category />
      <Problems platform={platform}></Problems>
    </>
  )
}