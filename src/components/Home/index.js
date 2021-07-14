import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateName } from "../../app/userReducer";
import routes from "../../helper/constants";
import "./styles.css";
const { Row, Group, Label, Control } = Form;
const Home = (props) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
    dispatch(updateName(name));
    setValidated(true);
    history.push(`${routes.educations}?name=${name}`);
  };

  return (

      <div className="App">
        <h1 className="home_title">
          Hi there! Welcome to your Education Showcase.
        </h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Group controlId="validationCustom01" className="home_label">
              <Label className="label">
                Type your name and "Enter" below to begin!
              </Label>
              <Control
                required
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
          </Row>
          <div class="text-center">
            <Button className="home_button btn-primary btn" type="submit">
              Enter
            </Button>
          </div>
        </Form>
      </div>

  );
};

export default Home;
