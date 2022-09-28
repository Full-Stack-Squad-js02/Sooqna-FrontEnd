import axios from 'axios'
export const getAllProducts = async () => {
    let url = `https://sooqna.herokuapp.com/product`
    const result = await axios.get(url, {});
    console.log('sssssssss',result.data)
    return result.data;
}
export const searchBy = async ({input,filteredBy}) => {
    console.log(input, filteredBy)
    // let url = `https://sooqna.herokuapp.com/search${filteredBy}?${filteredBy}=${input}`
    // return await fetch(url, {
    //     method: "GET"
    // }).then(response => {
    //     console.log('11111111111',response)
    //     let x= response.json();
    //     console.log('00000000000',x)
    //     return x
    // }).catch(err => console.log(err));
    
    const result = await axios.get(`https://sooqna.herokuapp.com/search${filteredBy}?${filteredBy}=${input}`, {});
    // console.log('00000000000',result.data)
    return result.data;
}

export const createItem = async (userId,token, data) => {
    console.log(userId,token,data)
    const result = await axios.post(`http://localhost:3002/product`, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    console.log('uuuuuuuu',result)
    return result
    // return fetch(`https://store-server-saleh.herokuapp.com/api/v1/users/signup`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(user)
    // }).then(response => {
    //     return response.json();
    // }).catch(err => {
    //     console.log(err);
    // });

}