import {ACTION_TYPES} from '../actions/action_types';
import {PERM_TYPES} from '../../helpers/permission_types';

const INITIAL_AUTH_STATE = {
    isAuthenticated: false,
    permissions: [PERM_TYPES.isNotAuthenticated],
    token: null
};

export default (state = INITIAL_AUTH_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.signIn:
            return {
                ...state,
                isAuthenticated: true,
                permissions: [...action.payload.permissions, PERM_TYPES.isAuthenticated],
                token: action.payload.token
            };
        case ACTION_TYPES.signUp:
            return {
                ...state,
                isAuthenticated: true,
                permissions: [...action.payload.permissions, PERM_TYPES.isAuthenticated],
                token: action.payload.token
            };
        case ACTION_TYPES.signOut:
            return {...state, ...INITIAL_AUTH_STATE};
        default:
            return state;
    }
};