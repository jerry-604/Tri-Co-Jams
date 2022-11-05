import InputForm from "./components/input-card"
import Header from "./components/header"
import { Col, Row } from "react-bootstrap"
import Image from 'next/image'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export default function Host() {
    return (
    <>
      <Header/>
      <Container>
      <Row className="mt-4 justify-content-center">
                <Col className="mt-4 justify-content-center">
                <Link href="/">
                  <Button className="justify-content-center btn-m" variant="primary" >Back</Button>
                </Link>
                </Col>
                <Col className="mt-4  d-flex justify-content-end">
                    <Button className="justify-content-center btn-xl btn-primary" variant="">Post Session</Button>
                </Col>
            </Row>
      <Row>
                <Col className="mt-4 d-flex justify-content-end" xs={2} s={2} md={4} lg={5} >
                    <Image className="float-right" src="/treble.svg" alt="Treble cleff vector art" width="100" height="200" />
                </Col>
                <Col className="mr-4 mt-4 d-flex justify-content-start align-items-center " fluid="s" s={8} md={6} lg={4}>
                    <h1 className="mt-4 mr-4 ">
                        Host
                    </h1>
                </Col>
        </Row>
        <Row>
          <Col  className="justify-content-center m-0 mt-5">
            <InputForm/>
          </Col>
        </Row>
      </Container>
      
    </>
    
    
    )
  } 