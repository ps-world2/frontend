import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import Login from "pages/login/Login";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

export default function Navbar() {
  const [value, setValue] = useState(0);
  const [loginModal, setLoginModal] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogin = () => {
    setLoginModal(true);
  };
  const handleCloseModal = () => {
    setLoginModal(false);
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered aria-label="Main Tabs">
          <LinkTab label="Home" to="/" />
          <LinkTab label="Send" to="/network" />
          <Tab label="로그인" onClick={handleLogin} />
        </Tabs>
      </AppBar>
      {loginModal && <Login open={loginModal} handleClose={handleCloseModal} />}
    </>
  );
}
