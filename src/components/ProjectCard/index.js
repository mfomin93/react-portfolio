import React from 'react';
import './style.css';
import { Row, Col, Button } from 'reactstrap';

function ProjectCard(props) {
    return(
        <Row className="wholeCard" style={{margin: 'auto'}}>
            <Col lg="2"></Col>
            <Col lg="4" sm="12" className="leftP">
                <h1 className="pTitle">{props.name}</h1>
                <img className="pImg" src={props.imgSrc} alt='project'></img>
            </Col>
            <Col lg="1"></Col>
            <Col lg="4" sm="12" className="rightP">
                <p className="pDescrip">Description: {props.description}</p>
                <p>Tech Utilized: {props.responsibilities}</p>
                <a className="aBut" style={{display: !props.deploySrc && "none"}} href={props.deploySrc}><Button style={{color: 'white', backgroundColor: 'rgb(36, 36, 36)'}}>Deployed App</Button></a>
                <a className="aBut" href={props.codeSrc}><Button style={{color: 'white', backgroundColor: 'rgb(36, 36, 36)'}}>Github Repo</Button></a>
            </Col>
            <Col lg="1"></Col>
        </Row>
    )
    
}

export default ProjectCard;