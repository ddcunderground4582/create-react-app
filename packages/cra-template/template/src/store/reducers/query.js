import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../sharedFunctions/utility';



const initialState = {
    error: null
    ,loading: false
    ,darkTheme: true
};





const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default reducer;