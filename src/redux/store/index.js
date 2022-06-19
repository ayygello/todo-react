import { configureStore } from '@reduxjs/toolkit';
import fridayReducer from '../reducers/friday';
import mondayReducer from '../reducers/monday';
import saturDayReducer from '../reducers/saturday';
import sundayReducer from '../reducers/sunday';
import thursdayReducer from '../reducers/thursday';
import tuesdayReducer from '../reducers/tuesday';
import wednesdayReducer from '../reducers/wednesday';

const store = configureStore({
  reducer: {
    monday: mondayReducer,
    tuesday: tuesdayReducer,
    wednesday: wednesdayReducer,
    thursday: thursdayReducer,
    friday: fridayReducer,
    saturday: saturDayReducer,
    sunday: sundayReducer,
  },
});

export default store;
