
import store from '../store'

export function setUsername(username){
    store.dispatch({
        type:'UPDATE_USERNAME',
        payload:{
            username
        }
    });
}

export function setPassword(password){
    store.dispatch({
        type:'UPDATE_PASSWORD',
        payload:{
            password
        }
    });
}