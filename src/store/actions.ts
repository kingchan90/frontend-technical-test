export const FETCH_INIT = "FETCH_JOB";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const CLEAR_JOB = 'CLEAR_JOB';

export interface FetchInitAction {
  type: typeof FETCH_INIT;
}

export function FetchInit(): FetchInitAction {
  return {
    type: FETCH_INIT,
  };
}

export interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
}

export function FetchFailure(): FetchFailureAction {
  return {
    type: FETCH_FAILURE,
  };
}

export interface FetchSuccessAction {
  type: typeof FETCH_SUCCESS;
  payload: Array<any>;
}

export function FetchSuccess(jobs: Array<any>): FetchSuccessAction {
  return {
    type: FETCH_SUCCESS,
    payload: jobs,
  };
}

export interface ClearJobAction {
  type: typeof CLEAR_JOB;
}

export function ClearJob(): ClearJobAction {
  return {
    type: CLEAR_JOB
  };
}

export type AppActions =
  | FetchInitAction
  | FetchFailureAction
  | ClearJobAction
  | FetchSuccessAction;
