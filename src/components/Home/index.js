import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { updateName } from '../../app/userReducer';
import routes from '../../helper/constants';
import './styles.css';
// or less ideally
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
      <h1>Hi there! Welcome to your education showcase.</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Group controlId="validationCustom01">
            <Label>First name</Label>
            <Control
              required
              type="text"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Control.Feedback>Looks good!</Control.Feedback>
          </Group>
        </Row>
        <Button type="submit">Enter</Button>
      </Form>
    </div>
  );
}

export default Home;
