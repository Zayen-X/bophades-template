import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useWallet } from 'use-wallet';
import { Box, TextField, Button, Typography } from '@mui/material';

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
      <Button id="wallet-button" variant="contained" color="secondary" size="large" onClick={clickFunc} key={1}>
        {buttonText}
      </Button>
    </div>
  );
}

export default function ButtonAppBar({ title }) {
  const wallet = useWallet();
  const account = wallet.account;
  return (
    <Box>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {wallet.isConnected() && (
            <TextField
              variant="standard"
              label="Address"
              defaultValue={account}
              InputProps={{
                readOnly: true,
              }}
              sx={{ flexGrow: 1 }}
            />
          )}
          <ConnectMenu connect={wallet.connect} disconnect={wallet.reset} connected={wallet.isConnected()} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
