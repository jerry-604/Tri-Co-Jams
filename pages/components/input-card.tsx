 import Card from 'react-bootstrap/Card';
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row'; 
 import Form from 'react-bootstrap/Form';
 import CardElement from './card-element';

function InputForm() {
  return (
    <Row xs={1} md={2} lg= {3} className="justify-content-center g-4">
      <CardElement title= "Session Name" holder= "Enter Session Name" format= 'text' />
      <CardElement title= "Date" holder= "" format= 'date' />
      <CardElement title= "Genre" holder= "Enter Music Genre" format= 'text' />
      <CardElement title= "Host Name" holder= "Enter Your Name" format= 'textarea' />
      <CardElement title= "Time" holder= "" format= 'time' />
      <CardElement title= "Description" holder= "Describe Session" textar={true} />
      <CardElement title= "Host Contact" holder= "Enter Your Email" format= 'email' />
      <CardElement title= "Location" holder= "Describe Location" textar={true} />
      <CardElement title= "Roles" select={true} options={["Vocals","Guitar", "Piano", "Drums", "Any"]} />
    </Row>
  );
}

export default InputForm;