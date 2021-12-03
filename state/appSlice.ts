import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';

interface IAppData {
  connected: boolean;
  loading: boolean;
  address?: string;
  chainId?: number;
}

export const loadAppDetails = createAsyncThunk('app/loadAppDetails', async () => {
  return {
    address: '',
    chaindId: 1,
    connected: true,
  };
});

const initialState: IAppData = {
  loading: false,
  connected: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppState(state, { payload }) {
      if (payload.address) state.address = payload.address;
      if (payload.chainId) state.chainId = payload.chainId;
      if (payload.connected) state.connected = payload.connected;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAppDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadAppDetails.fulfilled, (state, action) => {
        const { address, chaindId, connected } = action.payload;
        state.address = address;
        state.chainId = chaindId;
        state.connected = connected;
        state.loading = false;
      })
      .addCase(loadAppDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.error(error.name, error.message, error.stack);
      });
  },
});

const baseInfo = (state: RootState) => state.app;

export default appSlice.reducer;

export const { setAppState } = appSlice.actions;

export const getAppState = createSelector(baseInfo, (app) => app);
