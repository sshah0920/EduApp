import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateEducation } from '../../app/userReducer';
import AsyncSelector from '../widgets/AsyncSelector';

const { Header, Title, Body, Footer } = Modal;
const { Row, Group, Label, Control } = Form;

const EducationFormModal = (props) => {
    const [validated, setValidated] = useState(false);
    const [school, setSchool] = useState(null);
    const [degree, setDegree] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [startYear, setStartYear] = useState(null);
    const [endYear, setEndYear] = useState(null);
    const [grade, setGrade] = useState(null);
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      }
      const educationData = {
        school,
        degree,
        fieldOfStudy,
        startYear,
        endYear,
        grade,
        description,
      };
      dispatch(updateEducation(educationData));
      setValidated(true);
      props.onHide();
    };

    useEffect(() => {
        if (!props.show) {
            setValidated(false);
          setSchool(null);
          setDegree("");
          setFieldOfStudy("");
          setStartYear(null);
          setEndYear(null);
          setGrade(null);
          setDescription("");
        }
    }, [props.show])
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="education-form"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Header closeButton>
        <Title id="education-form">Add Education</Title>
      </Header>
      <Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Group as={Col} md="12" controlId="school">
              <Label>Name of School</Label>
              <AsyncSelector value={school} onChange={setSchool} />
            </Group>
            <Group as={Col} md="6" controlId="school">
              <Label>Degree</Label>
              <Control
                required
                type="text"
                placeholder="Enter you degree"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
            <Group as={Col} md="6" controlId="school">
              <Label>Field of study</Label>
              <Control
                required
                type="text"
                placeholder="Enter you field of study"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
            <Group as={Col} md="4" controlId="school">
              <Label>Start Year</Label>
              <Control
                required
                type="number"
                placeholder="Enter start year"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
            <Group as={Col} md="4" controlId="school">
              <Label>End Year</Label>
              <Control
                required
                type="number"
                placeholder="Enter end year"
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
            <Group as={Col} md="4" controlId="school">
              <Label>Grade</Label>
              <Control
                required
                type="number"
                placeholder="Enter your grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
            <Group as={Col} md="12" controlId="school">
              <Label>Description</Label>
              <Control
                type="text"
                placeholder="Enter your experience"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                rows={4}
              />
              <Control.Feedback>Looks good!</Control.Feedback>
            </Group>
          </Row>
        </Form>
      </Body>
      <Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save changes
        </Button>
      </Footer>
    </Modal>
  );
};

export default EducationFormModal;