import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useWallet } from 'use-wallet';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import styles from '../styles/Home.module.css';

function ConnectMenu({ connect, disconnect, connected }) {
  const [isConnected, setConnected] = useState(connected);

  let buttonText = 'Connect Wallet';
  let clickFunc = () => {
    console.log('connecting to injected');
    connect('injected');
  };

  if (isConnected) {
    buttonText = 'Disconnect';
    clickFunc = disconnect;
  }

  useEffect(() => {
    setConnected(connected);
  }, [connected]);

  return (
    <div className="wallet-menu" id="wallet-menu">
      <Button id="wallet-button" variant="primary" onClick={clickFunc} key={1}>
        {buttonText}
      </Button>
    </div>
  );
}

export default function ButtonAppBar({ title }) {
  const wallet = useWallet();
  let account = '';
  if (wallet.isConnected()) {
    const accountAddress = wallet.account;
    account = accountAddress.slice(0, 10) + '...' + accountAddress.slice(accountAddress.length - 4);
  }
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand>{title}</Navbar.Brand>
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link href="/Page1" passHref>
              <Nav.Link>Page1</Nav.Link>
            </Link>
            <Link href="/Page2" passHref>
              <Nav.Link>Page2</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            {wallet.isConnected() && (
              <Form.Control type="text" placeholder={account} readOnly className={styles.monospace} />
            )}
            <ConnectMenu connect={wallet.connect} disconnect={wallet.reset} connected={wallet.isConnected()} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
