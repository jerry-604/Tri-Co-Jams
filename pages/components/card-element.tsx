import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 
import Form from 'react-bootstrap/Form';

function CardElement(props) {
 return (
       <Col>
         <Card  style={{ width: '18rem' }} bg='primary' >
         <Card.Header>{props.title}</Card.Header>
           <Card.Body>
            {props.select && <Form.Select size="lg" aria-label="Default select example">
                                {props.options.map((x) => (
                                    <option>{x}</option>
                                ))}
                            </Form.Select>
            }
            {!props.textar && !props.select && <Form.Control size="lg" type= {props.format} placeholder={props.holder} as={props.textarea} />}
            {props.textar && <Form.Control size="lg" placeholder={props.holder} as="textarea" rows={1} />}
                                <br />
           </Card.Body>
         </Card>
       </Col>
 );
}

export default CardElement;