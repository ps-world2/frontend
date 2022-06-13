import React from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function Code({ id, code, update, language, readOnly }) {
  return (
    <CodeEditor
      value={code}
      language={language}
      placeholder="Input Code"
      onChange={e => update(id, e.target.value)}
      padding={15}
      style={{
        backgroundColor: "#30363d",
        fontFamily: "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        fontSize: 12,
      }}
      readOnly={readOnly}
    />
  );
}
