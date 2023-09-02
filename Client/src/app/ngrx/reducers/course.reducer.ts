import { createReducer, on } from '@ngrx/store';
import * as CourseAction from '../actions/course.actions';
import { CourseState } from '../states/course.state';

export const initualState: CourseState = {
  isLoading: false,
  isSuccess: false,
  isDelloading: false,
  isDelSuccess: false,
  isAddSuccess: false,
  isAddloading: false,
  isUpSuccess: false,
  isUpLoading: false,
  courseList: [],
  error: '',
};
export const CourseReducer = createReducer(
  initualState,
  on(CourseAction.get, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: true,
      isSuccess: false,
      error: '',
    };
    return newState;
  }),
  on(CourseAction.getSuccess, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: true,
      courseList: action.courseList,
    };
    return newState;
  }),

  on(CourseAction.getFailure, (state, action) => {
    console.log(action.type);
    let newState = {
      ...state,
      isLoading: false,
      isSuccess: false,
      error: action.error,
    };
    console.log(newState.error);
    return newState;
  })
);
