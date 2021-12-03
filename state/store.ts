import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import txnReducer from './txnSlice';

import messagesReducer from './messageSlice';
// reducers are named automatically based on the name field in the slice
// exported in slice files by default as nameOfSlice.reducer

const store = configureStore({
  reducer: {
    // reducer imported from the slice file
    app: appReducer,
    messages: messagesReducer,
    pendingTransactions: txnReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
