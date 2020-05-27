// cookieFunctions
import Cookies from 'universal-cookie';
import {cookieName} from '../globalVariables';

const cookieNames = [cookieName];



export const removeCookie = (props) => {
    const cookies = new Cookies();
    var propsType = typeof(props);
    switch (propsType) {
        case 'boolean':
            if (propsType) {
                for (var i=0, len=cookieNames.length; i<len; i++){ 
                    cookies.remove(cookieNames[i]);
                };
            };
            break;
        case 'string':
            cookies.remove(props);
            break;
        default:
            break; 
    };
};


export const addCookie = (props, cookieValue = null, expirationDateTime = null) => {
    const cookies = new Cookies();
    var propsType = typeof(props);
    switch (propsType) {
        case 'boolean':
            // if (propsType) {
            //     for (var i=0, len=cookieNames.length; i<len; i++){
            //         cookies.set(cookieNames[i], cookieValue[cookieNames[i]], {path: '/', expires: new Date(expirationDateTime), sameSite: 'strict' } );
            //     }
            // };
            break;
        case 'string':
            cookies.set(props, cookieValue);
            break;
        default:
            break; 
    };
};



export const getCookie = (props) => {
    const cookies = new Cookies();
    var propsType = typeof(props);
    switch (propsType) {
        case 'boolean':
            // if (propsType) {
            //     for (var i=0, len=cookieNames.length; i<len; i++){
            //         cookies.set(cookieNames[i], cookieValue[cookieNames[i]], {path: '/', expires: new Date(expirationDateTime), sameSite: 'strict' } );
            //     }
            // };
            break;
        case 'string':
            var cookieValue = cookies.get(props);
            return (cookieValue) ? cookieValue: null;
        default:
            return null;
    };
}