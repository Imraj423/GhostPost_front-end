import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Navi from "../NavBar/nav";
import { Redirect } from "react-router-dom";

// help from jt to make use of react hooks
export default function PostMessage() {
  const [home, setHome] = useState(false);
  const [message, setMessage] = useState("");
  const [is_Boast, setIs_Boast] = useState(false);

  const handleMessageChange = e => setMessage(e.currentTarget.value);
  const handleis_BoastChange = e => setIs_Boast(!e.is_Boast);

  const SubmitPost = e => {
    fetch("http://127.0.0.1:8000/api/ghostpost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        is_Boast,
        message
      })
    })
      .then(res => res.json())
      .then(result => {
        setHome(true)
        console.log(result)});
      
    e.preventDefault();
  };

  return home ? <Redirect to = "/"/> : (
    <Container>
      <Navi />
      <Form onSubmit={SubmitPost}>
        <label htmlFor="message"> Words go here </label>{" "}
        <input
          className="textbox"
          id="message"
          type="text"
          max_length="280"
          value={message}
          onChange={handleMessageChange}
        />{" "}
        <div>
          <label htmlFor="is_Boast"> Boast </label>{" "}
          <input
            id="is_Boast"
            className="checkbox"
            type="checkbox"
            value={is_Boast}
            onChange={handleis_BoastChange}
          />{" "}
        </div>{" "}
        <input type="submit" value="Submit post" />
      </Form>{" "}
    </Container>
  );
}
