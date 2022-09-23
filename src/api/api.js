import axios from 'axios'
// export const getAllProducts = (input,filterdBy) => {
//     let url = `https://sooqna.herokuapp.com/search${filterdBy}?${filterdBy}=${input}`
//         return fetch(url, {method: "GET"}).then(response => {
//         return response.json();
//     }).catch(err => console.log(err));
// }
export const searchBy = ({input,filteredBy}) => {
    console.log(input,filteredBy)
    let url = `https://sooqna.herokuapp.com/search${filteredBy}?${filteredBy}=${input}`
        return fetch(url, {method: "GET"}).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}

export const createItem = async(token, data) => {
    const result = await axios.post(`https://sooqna.herokuapp.com/product`, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    return result
}