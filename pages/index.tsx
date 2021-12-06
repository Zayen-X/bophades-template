import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';

export default function Home() {
  const title = 'Bophades';

  return (
    <Container fluid>
      <Head>
        <title>Bophades</title>
        <meta name="description" content="ZayenX's Template app" />
      </Head>
      <Menu title={title} />

      <Row>
        <h1> Oh are we doing things?</h1>
        <p>Lolchocotacos Web3-template</p>
      </Row>

      <footer className={styles.footer}>Powered by Bophades</footer>
    </Container>
  );
}
