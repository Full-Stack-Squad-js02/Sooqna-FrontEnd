import axios from 'axios';

// let url = 'http://localhost:3000'
let url = 'https://sooqna.herokuapp.com'

/*-----------------------------------------------PRODUCT-------------------------------------------- */

export const getAllProducts = async () => {
    // let url = `https://sooqna.herokuapp.com/product`
    const result = await axios.get(`${url}/product`, {});
    // console.log('sssssssss', result.data)
    return result.data;
}

export const getAllProductPostedByUser = async (userId,token) => {
    // let url = `https://sooqna.herokuapp.com/product/user/${userId}`
    const result = await axios.get(`${url}/product/user/${userId}`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    // console.log('sssssssss', result.data);
    return result.data;
}

export const getOneProducts = async (itemId) => {
    // console.log('ppppppppppppppppppppp',itemId);
    // let url = `https://sooqna.herokuapp.com/product/${itemId}`
    const result = await axios.get(`${url}/product/${itemId}`, {});
    // console.log('sssssssss',result.data)
    return result.data;
}

export const createItem = async (userId, token, data) => {
    // console.log(userId, token, data)
    const result = await axios.post(`${url}/product`, data, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    // console.log('uuuuuuuu', result)
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

    // let url = `https://sooqna.herokuapp.com/product`
    const products = await Promise.all(productsIds.map(async (itemId) => {
        //  url = `${url}/product/${itemId}`
        let result = await axios.get(`${url}/product/${itemId}`, {});
        // console.log('RRRRRRRRR',result.data)
        return result.data;
    }));
    // console.log('PPPPPPPPPP',products)
    return products;
}


/*-----------------------------------------------SEARCH-------------------------------------------- */

export const searchBy = async ({ input, filteredBy }) => {
    // console.log(input, filteredBy)
    if (input && filteredBy) {
        const result = await axios.get(`${url}/search${filteredBy}?${filteredBy}=${input}`, {});
        if (result.data) {
            // console.log('00000000000',result.data)
            return result.data;
        }
        else {
            return [];
         }
    } else {
        return [];
    }
}


/*-----------------------------------------------WISHLIST-------------------------------------------- */

export const getAllWishlist= async (token) => {

    // console.log('RRRRRRRRRR',token);
    // let url = `https://sooqna.herokuapp.com/wishlist`

    const result = await axios.get(`${url}/wishlist`, {
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
//    console.log("222222")
    // console.log('GGGGGGGGG',itemId, token);
    return fetch(`${url}/addtowishlist/${itemId}`, {

        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        
    })
    .then((response) => {
            // console.log('response',response);
            response.json()
        })
        .then((result) => {
            console.log('Success:', result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};


export const removeOneFromWishList = async(id, token) => {
    // console.log("eeeeeeeee",id," ",token)
    
        return fetch(`${url}/wishlist/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            // console.log('gggggggg',response)
            return response.json();
        }).catch(err => {
            // console.log("hhhhhhhhh",err);
        })
    };
        

/*-----------------------------------------------CART-------------------------------------------- */

export const getAllCart = async (token) => {

    // let url = `https://sooqna.herokuapp.com/cart`

    const result = await axios.get(`${url}/cart`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    // console.log('RRRRRRRRRR',result);
    return result.data;
};

export const addToCart = async (itemId, token) => {
    // console.log("eeeeeeee", itemId, token)
    return fetch(`${url}/addtocart/${itemId}`, {
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
    
     export const removeAllCart = async(token) => {
        // console.log("eeeeeeeee",id," ",token)
        
            return fetch(`${url}/cart`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                // console.log('gggggggg',response)
                return response.json();
            }).catch(err => {
                console.log("hhhhhhhhh",err);
            })
    };
    
/*-----------------------------------------------SHOPPING-------------------------------------------- */

export const moveFromWishlistToCart = async (itemId, token) => {

    // console.log("eeeeeeee", itemId, token)

    return fetch(`${url}/productfromwishlisttocart/${itemId}`, {
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



export const removeOneFromCart = async(id, token) => {
    return fetch(`${url}/cart/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {

        return response.json();
    }).catch(err => {
        console.log("hhhhhhhhh",err);
    })
};
// const result = await axios.delete(`https://sooqna.herokuapp.com/cart/${id}`, {
    //     headers: {
        //         Accept: 'application/json',
    //         Authorization: `Bearer ${token}`
    //     }
    // });
    // return result


export const submitOrder = async (order, token) => { 
    // console.log('OOOOOOOOOOo',order, token);
    const result = await axios.post(`${url}/submitorder`, order, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    });
    // console.log('uuuuuuuu', result.data)
    return result.data;
}

export const confirmOrder = async ( token) => { 
    // console.log(token);
    const result = await axios.put(`${url}/confirmorder`, {status : "confirmed"}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        // body: JSON.stringify(order)
    });
    // console.log('uuuuuuuu', result.data)
    return result.data;
}

/*-----------------------------------------------ORDERS-------------------------------------------- */
export const getAllOrdersForUser = async (token) => {
    // console.log('QWWWQQQQQ', token);
    
    const result = await axios.get(`${url}/order`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    // console.log('QWWWQQQQQ', result.data);
    return result.data;
}

export const deleteOneOrder = async(id,token) => {
// console.log("eeeeeeeee",id," ",token)

    return fetch(`${url}/order/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        // console.log('gggggggg',response)
        return response.json();
    }).catch(err => {
        // console.log("hhhhhhhhh",err);
    })
};

        export const removeOneMyProduct = async(id, token) => {

                return fetch(`${url}/product/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }).then(response => {
                    return response.json();
                }).catch(err => {
                })
            };

            // export const getOrderById = async (orderIds) => {

            //     const products = await Promise.all(orderIds.map(async (itemId) => {
            //         let result = await axios.get(`${url}/submitorder/${itemId}`, {});
            //         return result.data;
            //     }));
            //     return products;
            // }
/*-----------------------------------------------Admin-------------------------------------------- */
export const getAllOrdersToApprove = async (token) => {

    const result = await axios.get(`${url}/admin/confirmedorder`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    });
    // console.log("hhhhhhhhhhhhh",result.data)
    return result.data;
}

export const approveOrders = async (token) => {
    // console.log(token);
    const result = await axios.put(`${url}/admin/confirmorders`, {status : "In Delivery"}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        // body: JSON.stringify(order)
    });
    // console.log('uuuuuuuu', result.data)
    return result.data;
}


export const reciveOrder = async (token) => {
    // console.log(token);
    const result = await axios.put(`${url}/reciveorder`, {
    status : "recived"
}, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        // body: JSON.stringify(order)
    });
    // console.log('uuuuuuuu', result.data)
    return result.data;
}


export const getAllUser= async (token) => {
  

    const result = await axios.get(`${url}/admin/users`, {
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    return result.data;
};

export const removeUserById = async(id, token) => {
   
    console.log(id,token)
        return fetch(`${url}/admin/deleteuser/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            
            return response.json();
        }).catch(err => {
         
        })
    };
