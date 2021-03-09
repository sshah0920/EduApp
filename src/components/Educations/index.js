import React, { useState } from "react";
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectEducations, selectName } from '../../app/userReducer';
import EducationFormModal from './EductionForm';
import '../Educations/styles.css';
const { Item } = ListGroup;
const { Body, Title, Subtitle, Text } = Card;

const Educations = () => {
  const [ showEduModal, setShowEduModal ] = useState(false);
  const userName = useSelector(selectName);
  const location = useLocation();
  const educations = useSelector(selectEducations);

    const params = new URLSearchParams(location.search);
    const queryName = params.get("name");
  return (
    <div className="App">
      <h1>Welcome to {userName || queryName}'s education page</h1>
      <Button variant="primary" onClick={() => setShowEduModal(true)}>
        Add New Education
      </Button>
      <div className="content-box ">
        <ListGroup className="bookmarks">
          {educations?.map(({ school, degree }, index) => (
            <Item key={index}>
              <h6>{school}</h6>
              <p>{degree}</p>
            </Item>
          ))}
        </ListGroup>
        <ListGroup className="educations-list">
          {educations?.map(
            (
              {
                school,
                degree,
                fieldOfStudy,
                startYear,
                endYear,
                grade,
                description,
              },
              index
            ) => (
              <Item key={index}>
                <Card>
                  <Body>
                    <Title>
                      {school} - {degree}({fieldOfStudy})
                    </Title>
                    <Subtitle className="mb-2 text-muted">
                      {startYear} - {endYear}, Grade: {grade}
                    </Subtitle>
                    {description && <Text>{description}</Text>}
                  </Body>
                </Card>
              </Item>
            )
          )}
        </ListGroup>
      </div>
      <EducationFormModal
        show={showEduModal}
        onHide={() => setShowEduModal(false)}
      />
    </div>
  );
}

export default Educations;
