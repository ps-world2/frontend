import { React, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CodeInput from "components/code/Code";

export default function Post() {
  const [inputValue, setInputValue] = useState("");
  const [code, setCode] = useState();

  const handlePost = () => {
    console.log(inputValue);
  };

  return (
    <div>
      <CodeInput code={code} setCode={setCode} />
      <ReactMarkdown children={inputValue} remarkPlugins={[remarkGfm]} />
      <TextField id="fullWidth" label="글" multiline rows={30} onChange={e => setInputValue(e.target.value)} />
      <Button variant="contained" onClick={handlePost}>
        제출
      </Button>
    </div>
  );
}
