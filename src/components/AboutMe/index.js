import React from 'react';
import gitHubIcon from '../../assets/images/github.svg';
import linkedInIcon from '../../assets/images/linkedIn.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import './style.css';
import { Row, Col } from 'reactstrap';

function AboutMe() {
    return(
        <Row className="aboutRow">
            <Col lg="3"></Col>
            <Col xs="6" lg="2" className="aboutMe">
                <div className="aboutText">
                    <h3 className="aboutHead">About Me</h3>
                    <p className="aboutBody">Full Stack Web Developer from Charlotte, NC.</p>
                </div>
            </Col>
            <Col lg="1">
                <div className='iconRow'>
                    <a href='https://github.com/mfomin93' id='icon1'>
                        <img src={gitHubIcon} id='githubIcon' alt='github'></img>
                    </a>
                    <a href='https://www.linkedin.com/in/markfomin/' id='icon2'>
                        <img src={linkedInIcon} id='linkedInIcon' alt='linkedin'></img>
                    </a>
                    <a href='https://twitter.com/vostokRL' id='icon3'>
                        <img src={twitterIcon} id='twitterIcon' alt='twitter'></img>
                    </a>
                </div>
            </Col>
            <Col lg="1">
            </Col>
            <Col lg="2">
            </Col>
            
                
                
                
        </Row>
        
    )
}

export default AboutMe;