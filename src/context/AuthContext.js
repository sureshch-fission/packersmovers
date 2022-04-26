
import createDataContext from './createDataContext';

const authReducer = (state, action) => {

    switch (action.type) {

        case 'register':
            return [...state, {
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password
            }]

        default:
            return state
    }
}
// for register purpose
const register = dispatch => {
    return (email, password, username, callback) => {
        dispatch({ type: "register", payload: { username, email, password } });
       callback()
    }


}

export const { Context, Provider } = createDataContext(
    authReducer,
    { register }
    // {isSignedin: false}
);
