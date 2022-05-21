import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import kakaologo from "assets/img/kakao_login_medium_wide.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login({ open, handleClose }) {
  const [test, setTest] = useState(false);
  console.log(test);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="modal-title" align="center">
            로그인
          </h1>
          <LoginBody>
            <img src={kakaologo} onClick={() => setTest(true)}></img>
          </LoginBody>
        </Box>
      </Modal>
    </div>
  );
}

const LoginBody = styled.div`
  text-align: center;
`;
