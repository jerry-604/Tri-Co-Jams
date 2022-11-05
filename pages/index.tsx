import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/Home.module.scss'

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
            <Row width="100%">
                <Col className="mt-4 d-flex justify-content-end" xs={4} >
                    <Image className="float-right" src="/treble.svg" alt="Treble cleff vector art" width="100" height="200" />
                </Col>
                <Col xs={4}>
                    <h4 className="mt-4">
                        TriCo Jams is a student-run,
                        passion-driven site for finding
                        jam sessions in the Swarthmore/
                        Haverford/Bryn Mawr community.
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
      </main>
    </div>
  )
}
