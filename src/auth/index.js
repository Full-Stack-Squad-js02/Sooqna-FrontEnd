import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const signUp = (data) => {
    // console.log(data);
    return fetch(`https://sooqna.herokuapp.com/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const signIn = ({
    username,
    password
}) => {
    console.log(username, password)
    let url = "https://sooqna.herokuapp.com/signin";
    return fetch(url, {
        method: 'POST',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        },
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}


export const authenticate = (data, next) => {
    cookies.set('data', data, {
        path: '/'
    });
    window
        .location
        .reload();
    next();
};

export const logOut = next => {
    cookies.remove('data', {
        path: '/'
    })
    // window
    //     .location
    //     .reload();

};

export const isAuthenticated = () => {
    if (cookies.get('data') === 'undefined') {
        return false;
    }
    if (cookies.get('data')) {
        return cookies.get('data');
    } else {
        return false;
    }
};

export const userInfo = () => {
    if (cookies.get('data') === 'undefined') {
        return null;
    }
    if (cookies.get('data')) {
        let userInfo = cookies.get('data')
        // console.log('tttttt',userInfo);
        return userInfo.user;
    } else {
        return null;
    }
};

export const updateUserInfo = (data,token) => {
    // console.log('mmmmmmmmmmh',data);
    return fetch('https://sooqna.herokuapp.com/updateprofile', {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: data
        })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};