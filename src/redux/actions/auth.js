import {ACTION_TYPES} from './action_types';
import {API_V1} from '../../helpers/api';
import {getResponseData} from '../../helpers/utils';
import {STATUS_CODES} from '../../helpers/status_codes';

export const signIn = formValues => async (dispatch, getState) => {
    const res = await API_V1.post('/sign-in', {...formValues});

    if (res.status === STATUS_CODES.http200Ok) {
        // TODO: register user token in local storage

        dispatch({
            type: ACTION_TYPES.signIn,
            payload: getResponseData(res)
        });
    }
};

export const signUp = formValues => async (dispatch, getState) => {
    const res = await API_V1.post('/sign-up', {...formValues});

    if (res.status === STATUS_CODES.http200Ok) {
        // TODO: register user token in local storage

        dispatch({
            type: ACTION_TYPES.signUp,
            payload: getResponseData(res)
        });
    }
};

export const signOut = () => {
    // TODO: remove user token from local storage

    return {
        type: ACTION_TYPES.signOut
    };
};