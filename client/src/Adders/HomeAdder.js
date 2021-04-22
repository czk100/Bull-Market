import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import "./HomeAdder.css";

const HomeAdder = (props) => {
  //guest view
  return (
    <Form>
      <TextArea placeholder="Content" name="details" class="home-edit" />
    </Form>
  );
};

export default HomeAdder;
