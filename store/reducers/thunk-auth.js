import axios from "../../util/axios";
import * as actions from './state-auth'
import * as SecureStore from 'expo-secure-store';
import { fetchUserDetails } from '../state-user-details/thunk-user-details'

export const authenticate = (data) => {
    return dispatch => {
        dispatch(actions.authenticate(data));
    };
};

export const setDidTryAL = () => {
    return dispatch => {
        dispatch(actions.setDidTryAL());
    };
};

export const setIsRegister = (isRegister) => {
    return dispatch => {
        dispatch(actions.setIsRegister(isRegister));
    };
};

export const login = (username, password) => {
    return async dispatch => {
        await axios().post('https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json', {
            username: username,
            password: password,
            // mobile: true
        }).then(async response => {
            if (response.data.isAuthenticated) {
                await dispatch(checkUserRegister(response.data))
                await dispatch(authenticate(response.data));
            }
        }).catch((error) => {
            let message = 'Something went wrong!';
            if (error.response)
                if (error.response.status === 401) {
                    if (error.response.data.error === null)
                        message = "Email Not Found";
                    else
                        message = error.response.data.error
                }
            throw new Error(message);
        });
    }
}

const checkUserRegister = (userData) => {
    return async dispatch => {
        if (userData.roleCode === "USER") {
            await dispatch(fetchUserDetails(userData)).then(async () => {
                dispatch(setIsRegister(true));
                await saveDataToStorage({ ...userData, isRegister: true })
            }).catch(async error => {
                dispatch(setIsRegister(false));
                await saveDataToStorage({ ...userData, isRegister: false })
            })
        } else if (userData.roleCode === "COACH") {
            await dispatch(fetchCoachDetails(userData)).then(async () => {
                dispatch(setIsRegister(true));
                await saveDataToStorage({ ...userData, isRegister: true })
            }).catch(async error => {
                console.log(error);
                dispatch(setIsRegister(false));
                await saveDataToStorage({ ...userData, isRegister: false })
            })
        }
    }
}


export const signup = (username, password, role) => {
    return async dispatch => {
        await axios().post('https://todo-rn-4c31a-default-rtdb.firebaseio.com/authentication/users.json', {
            userName: username,
            Email: username,
            Password: password,
        }).then(response => {
            if (response.data.isRegistered !== true)
                throw new Error(response.data.error);
        }).catch((error) => {
            let message = 'Something went wrong!';
            if (error.message)
                message = error.message;
            throw new Error(message);
        });
    }
}

export const logout = () => {
    return async dispatch => {
        await SecureStore.deleteItemAsync('userData');
        dispatch(actions.logout());
    };


};

const saveDataToStorage = async (data) => {
    await SecureStore.setItemAsync('userData', JSON.stringify(data));
}



function InvalidToken(value) {
    this.message = value

}





