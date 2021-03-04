import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  name: 'user',
  initialState: {
    name: '',
    educations: []
  },
  reducers: {
    updateName: (state, { payload }) => {
      return state = {
        ...state,
        name: payload
      }
    },
    updateEducation: ({ educations, ...state }, { payload }) => {
      return state = {
        ...state,
        educations: [
          payload,
          ...educations, 
        ]
      }
    }
  },
});

export const { updateName, updateEducation } = user.actions;

export const selectName = state => state.user.name;
export const selectEducations = state => state.user.educations;

export default user.reducer;
