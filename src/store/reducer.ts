import { Job } from "../common/types";
import {
  AppActions,
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CLEAR_JOB
} from "../store/actions";

export interface AppState {
  jobs: Array<Job>;
  isLoading: boolean;
  isError: boolean;
}

export const initialState: AppState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        jobs: action.payload
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case CLEAR_JOB:
      return {
        jobs: [],
        isLoading: false,
        isError: false
      }
    default:
      throw new Error();
  }
};

export default reducer;
