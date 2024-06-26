import ACTION_TYPES from './actionTypes';

export const createUserRequest = ({values}) =>({
    type:ACTION_TYPES.CREATE_USER_REQUEST,
    payload:{values}
})
export const createUserSuccess = ({user}) =>({
    type:ACTION_TYPES.CREATE_USER_SUCCESS,
    payload:{user}
})
export const createUserError = ({error}) =>({
    type:ACTION_TYPES.CREATE_USER_ERROR,
    payload:{error}
});