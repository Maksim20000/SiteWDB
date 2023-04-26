import {CarouselMann} from "../Corousel/Carousel";
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import card1 from './../../assets/img/card1.jpg'
import card2 from './../../assets/img/card2.jpg'
import card3 from './../../assets/img/card3.jpg'



export let Home = () => {
    debugger
    return(
        <div>
            <CarouselMann />

            <Container>
                <CardGroup>
                    <Card text={'primary'} style={{ width: '18rem', margin: '20px' }} border="success"  bg={'light'}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" src={card1} />
                    </Card>

                    <Card style={{ width: '18rem', margin: '20px'}}  bg={'light'}>
                        <Card.Img variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', margin: '20px'}} bg={'light'}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" src={card3} />

                    </Card>
                </CardGroup>
            </Container>
        </div>
    )
}