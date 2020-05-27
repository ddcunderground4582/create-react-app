export const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true;
    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }
    if(rules.isInteger) {
        isValid = (!isNaN(Number(value)) && value.trim() !== '') && isValid;
    }
    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if (rules.isLettersOnly) {
        if (value.length>0){
            const lettersPattern = /^[a-zA-Z ]+$/;
            isValid = lettersPattern.test(value) && isValid;
        }
    }
    if (rules.isTel) {
        if(rules.required || value.length > 0){
            const pattern = /\(\d{3}\) {1}\d{3}-\d{4}/;
            isValid = pattern.test(value) && isValid
        }
    }
    if (rules.isURL) {
        if(rules.required || value.length > 20){
            const pattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm;
            isValid = pattern.test(value) && isValid
        }
    }
    return isValid;
} 

export const uuid4 = () => {
    // eslint-disable-next-line
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

 export const getWeek = (dateObject) => {
    var date = new Date(dateObject.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  }


export const toProperCase = (s) =>{
  return s.toLowerCase().replace(/^(.)|\s(.)/g, function($1) { return $1.toUpperCase(); });
}

export function headerWithBearer (authToken) {
    const headerObject = {
        headers: {'Authorization': "bearer " + authToken}
    };
    return headerObject;
}

export const createDataTableColumnObject = (name = "", label = toProperCase(name), filter = true, sort = true) => {
    return {
        name: name,
        label: label,
        options: {
            filter: filter,
            sort: sort
        }
    }
}

export const validateObjectDefined = (objectProp) => {
    return (objectProp === undefined) ? false : ((objectProp === null) ? false : true);
}

export const validateStringProp = (stringValue) => {
    return (stringValue === undefined) ? false : ((stringValue === null) ? false : ((stringValue.length === 0) ? false : ((stringValue.trim().length === 0) ? false : true)));
}

export const validateBooleanProp = (booleanValue) => {
    return (booleanValue === undefined) ? false : ((booleanValue === null) ? false : ((toString.call(booleanValue) === '[object Boolean]') ? true : ((booleanValue === false) ? true : ((booleanValue === true) ? true : false))));
}