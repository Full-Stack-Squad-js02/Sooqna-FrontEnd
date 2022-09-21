
export const searchBy = (input,filterdBy) => {
    let url = `https://sooqna.herokuapp.com/search${filterdBy}?${filterdBy}=${input}`
        return fetch(url, {method: "GET"}).then(response => {
        return response.json();
    }).catch(err => console.log(err));
}
