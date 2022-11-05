import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.scss'
import InputForm from './components/input-card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TriCoJams</title>
        <meta name="description" content="Jam session finder for the Swarthmore/Haverford/Bryn Mawr community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>

        <Container>
            <Row height="50vh">
                <Col height="50vh" className="mt-4 d-flex justify-content-end" xs={2} s={2} md={4} lg={5} >
                    <Image className="float-right" src="/treble.svg" alt="Treble cleff vector art" width="100" height="200" />
                </Col>
                <Col height="50vh" className="mr-4" fluid="s" s={8} md={6} lg={4}>
                    <h4 className="mt-4 mr-4">
                        TriCo Jams is a student-run,
                        passion-driven site for finding
                        jam sessions in the Swarthmore/
                        Haverford/Bryn Mawr community.
                    </h4>
                </Col>
            </Row>
            <Row height="50vh" className="mt-4 justify-content-center">
                <Col height="50vh" className="mt-4 justify-content-center">
                <style type="text/css">
                    {`
                    .btn-xxl {
                        font-size: 3rem !important;
                        width: 100%;
                        height: 10rem;
                    }
                    `}
                </style>
                    <Button className="justify-content-center btn-xxl" size="xxl" variant="primary">Host</Button>
                </Col>
                <Col height="50vh" className="mt-4 justify-content-center">
                    <Button className="justify-content-center btn-xxl" variant="primary">Join</Button>
                </Col>
            </Row>
        </Container>
      </main>
    </div>
  )
}
