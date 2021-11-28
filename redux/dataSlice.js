import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    name: 'George Box',
    born: '13 декабря 2000 г.',
    city: 'г. Минск',
    gender: 'Мужчина',
  },
  medData: {
    alat: {
      name: 'Alan',
      result: '41.7 U/L',
    },
    asat: {
      name: 'Astar',
      result: '23.0 U/L',
    },
    ggt: {
      name: 'GGT',
      result: '28.5 U/L',
    },
    creatine: {
      name: 'Креатинин',
      result: '100.1 мкмоль/л',
    },
    moche: {
      name: 'Мочевина',
      result: '3.9 ммоль/л',
    },
    mocheKisl: {
      name: 'Мочевая кислота',
      result: '442.0 мкмоль/л',
    },
    billAll: {
      name: 'BR/ALL',
      result: '22.52 мкмоль/л',
    },
    billIndir: {
      name: 'BR/IND',
      result: '5.57 мкмоль/л',
    },
    billStrai: {
      name: 'BR/STR',
      result: '16.95 мкмоль/л',
    },
    cholesterol: {
      name: 'Cholesterol',
      result: '5.16 ммоль/л',
    },
    glucose: {
      name: 'Glucose',
      result: '5.58 ммоль/л',
    },
  },
};

// export const getDataAsync = createAsyncThunk('fetchData', async () => {
//   try {
//     const response = await fetch('https://api.coincap.io/v2/assets').then(res =>
//       res.json(),
//     );
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// });

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    // selectCoin: (state, action) => {
    //   state.medData
    // },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(getDataAsync.pending, state => {
    //     state.status = 'loading';
    //   })
    //   .addCase(getDataAsync.fulfilled, (state, action) => {
    //     state.coins = action.payload;
    //     state.status = 'fin';
    //   })
    //   .addCase(getHistoryAsync.pending, state => {
    //     state.status = 'loading';
    //   })
    //   .addCase(getHistoryAsync.fulfilled, (state, action) => {
    //     state.history = action.payload;
    //     state.status = 'fin';
    //   });
  },
});

// export const { selectCoin } = mainSlice.actions;
export const mainData = state => state;
export default mainSlice.reducer;
