import { React, useState } from "react";
import CodeInput from "components/code/Code";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CodeAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [codes, setCodes] = useState([
    {
      code_id: 1,
      title: "code 1",
      language: "python",
      description: "code 1 desc",
      code: "import sys python",
    },
    {
      code_id: 2,
      title: "code 2",
      language: "c++",
      description: "code 2 desc",
      code: "import sys c++",
    },
    {
      code_id: 3,
      title: "code 3",
      language: "java",
      description: "code 3 desc",
      code: "import sys java",
    },
  ]);

  const handlerSetCodes = (id, val) => {
    setCodes(codes.map(code => (code.code_id === id ? { ...code, code: val } : code)));
  };

  return (
    <div>
      {codes.map((code, index) => {
        return (
          <Accordion expanded={expanded === index} onChange={handleChange(index)} key={`test${String(index)}`}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography sx={{ width: "33%", flexShrink: 0 }}>{code.title}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{code.description}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CodeInput
                id={code.code_id}
                code={code.code}
                language={code.language}
                update={handlerSetCodes}
                readOnly={false}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
