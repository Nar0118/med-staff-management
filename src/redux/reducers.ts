import { combineReducers } from "redux";
import { SET_DOCTORS, SET_NURSES } from "./actions";
import doctorsData from "../data/doctors.json";
import nursesData from "../data/nurses.json";

const doctorsReducer = (state = doctorsData, action: any) => {
  switch (action.type) {
    case SET_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

const nursesReducer = (state = nursesData, action: any) => {
  switch (action.type) {
    case SET_NURSES:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  doctors: doctorsReducer,
  nurses: nursesReducer,
});

export default rootReducer;
