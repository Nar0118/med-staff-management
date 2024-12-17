export const SET_DOCTORS = "SET_DOCTORS";
export const SET_NURSES = "SET_NURSES";

export const setDoctors = (doctors: any) => ({
  type: SET_DOCTORS,
  payload: doctors,
});

export const setNurses = (nurses: any) => ({
  type: SET_NURSES,
  payload: nurses,
});
