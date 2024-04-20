import React, { useState } from 'react'
import { 
    Card, CardBody, CardText, 
    CardTitle, CardSubtitle, Row, 
    Col, Container, Button 
} from 'reactstrap';

const Projects = ({theme}) => {
    const [tab, setTab] = useState(0);

    return (
        <div style={theme===true ? {backgroundColor: '#242424', height: '100%'} : {backgroundColor: '#b0c4de', height: '100%'}}>
            <h3 style={theme===true ? {color: 'white', textAlign: 'center'} : {color: 'black', textAlign: 'center'}}>Projects</h3>

            <div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <Button 
                        color="info" outline={theme}
                        onClick={() => setTab(0)}
                    >
                        <b>React JS</b>
                    </Button>
                    
                    <Button 
                        color="info" outline={theme}
                        onClick={() => setTab(1)}
                    >
                        <b>React Native</b>
                    </Button>

                    <Button 
                        color="primary" outline={theme}
                        onClick={() => setTab(2)}
                    >
                        <b>Other</b>
                    </Button>
                </div>

                <Container>
                    {tab===0 && <Row xs="2" sm="3">
                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Telangana Nijam Newspaper
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, CSS, HTML, Bootstrap
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        ATUM Life 
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, Firebase, HTML, CSS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        PlugXR
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, Firebase, Three JS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-4'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Linview
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, Kibana, SASS, Bootstrap 
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-4'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Split Deals
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, CSS, HTML
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-4'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Mee Bazaar
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, HTML, CSS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-4'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Gifteria
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, HTML, CSS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>}

                    {tab===1 && <Row xs="1" sm="2" md="3">
                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        ATUM Life
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React Native, Paytm, Firebase
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Mee Bazaar
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React Native, Razorpay, CSS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Gifteria
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React Native, CSS
                                    </CardSubtitle>

                                    <CardText>
                                        Some quick example text to build.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>}
                    
                    {tab===2 && <Row xs="2" sm="3">
                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        WebXR - Augmented Reality (Surface Target)
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, WebXR, Google Model-Viewer
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        WebXR - Augmented Reality (Image Target)
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-1 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, WebXR, AR.JS
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-2'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Web XR - Virtual Reality
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, WebXR, A-Frame
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className='mt-4'>
                            <Card className='project_card'>
                                <img
                                    alt="Sample"
                                    src="https://picsum.photos/300/200"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Web Games
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted project_card_sub"
                                        tag="h6"
                                    >
                                        React JS, Three JS, React Three Fiber
                                    </CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>}
                </Container>
            </div>
        </div>
    );
};

export default Projects;