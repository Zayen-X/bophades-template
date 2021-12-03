import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@mui/material';
import styles from '../styles/Home.module.css';
import Menu from '../components/Menu';

export default function Home() {
  const title = 'Send.Money';

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Head>
        <title>Bophades</title>
        <meta name="description" content="Template app" />
      </Head>
      <Menu title={title} />

      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>Send any ETH + ANY ERC20 to any address.</p>

      <div className={styles.grid}>
        <h2>
          <Link href="/connectors"> Click here for connectors</Link>
        </h2>
      </div>

      <footer className={styles.footer}>Powered by Bophades</footer>
    </Container>
  );
}
