import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Post() {
  const [inputValue, setInputValue] = useState("");
  const handlePost = () => {
    console.log(inputValue);
  };
  return (
    <div>
      <TextField id="fullWidth" label="글" multiline rows={30} onChange={e => setInputValue(e.target.value)} />
      <Button variant="contained" onClick={handlePost}>
        제출
      </Button>
    </div>
  );
}
