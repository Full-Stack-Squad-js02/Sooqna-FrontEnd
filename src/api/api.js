import axios from 'axios';


/*-----------------------------------------------PRODUCT-------------------------------------------- */

export const getAllProducts = async () => {
    let url = `https://sooqna.herokuapp.com/product`
    const result = await axios.get(url, {});
    console.log('sssssssss', result.data)
    return result.data;
}

export const getOneProducts = async (itemId) => {
    console.log('ppppppppppppppppppppp',itemId);
    let url = `https://sooqna.herokuapp.com/product/${itemId}`
    const result = await axios.get(url, {});
    console.log('sssssssss',result.data)
    return result.data;
}

export const createItem = async (userId, token, data) => {
    console.log(userId, token, data)
    const result = await axios.post(`https://sooqna.herokuapp.com/product`, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    console.log('uuuuuuuu', result)
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

export const getProductsById = async (productsIds) => {

    let url = `https://sooqna.herokuapp.com/product`
    const products = await Promise.all(productsIds.map(async (itemId) => {
	 url = `https://sooqna.herokuapp.com/product/${itemId}`
            let result = await axios.get(url, {});
                return result.data;
    }));
    return products;

}


/*-----------------------------------------------SEARCH-------------------------------------------- */

export const searchBy = async ({ input, filteredBy }) => {
    console.log(input, filteredBy)
    
    const result = await axios.get(`https://sooqna.herokuapp.com/search${filteredBy}?${filteredBy}=${input}`, {});
    // console.log('00000000000',result.data)
    return result.data;
}


/*-----------------------------------------------WISHLIST-------------------------------------------- */

export const getAllWishlist= async (token) => {

    let url = `https://sooqna.herokuapp.com/wishlist`

    const result = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    // console.log('RRRRRRRRRR',result);
    return result.data;
};

// export const getAllwishlest = async (token) => {
//     let url = `https://sooqna.herokuapp.com/wishlist`
//     const result = await axios.get(url, {
//         headers: {
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`
//         }
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };


export const addToFavourite = (itemId, token) => {
    return fetch(`https://sooqna.herokuapp.com/addtowishlist/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


export const removeFromFavorite = (id, token) => {
    // console.log(favouriteId, userId, token)
    return fetch(`https://sooqna.herokuapp.com/wishlist/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
};



/*-----------------------------------------------CART-------------------------------------------- */

export const getAllCart = async (token) => {

    let url = `https://sooqna.herokuapp.com/cart`

    const result = await axios.get(url, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    // console.log('RRRRRRRRRR',result);
    return result.data;
};

export const addToCart = async (itemId, token) => {
    console.log("eeeeeeee", itemId, token)
    return fetch(`https://sooqna.herokuapp.com/addtocart/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },

    })
        .then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    
    
/*-----------------------------------------------SHOPPING-------------------------------------------- */

export const moveFromWishlistToCart = async (itemId, token) => {
    console.log("eeeeeeee", itemId, token)
    // return fetch(`https://sooqna.herokuapp.com/productfromwishlisttocart/${itemId}`, {
    //     method: 'POST',
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         console.log('Success:', result);
    //     })
    //     .catch((error) => {
    //         console.error('Error:', error);
    //     });
    // console.log('sssssssss', result.data)
    // return result.data;
}
