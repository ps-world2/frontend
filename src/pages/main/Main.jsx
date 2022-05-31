import { React, useState } from "react";
import Tag from "pages/main/Tag";
import Platform from "pages/main/Platform";
import Problems from "pages/main/Problems";

export default function Main() {
  const [platform, setPlatform] = useState(0);
  const handlePlatform = (event, newPlatform) => {
    setPlatform(newPlatform);
  };
  return (
    <>
      <Platform value={platform} handlePlatform={handlePlatform} />
      <Tag />
      <Problems platform={platform} />
    </>
  );
}
