import React, {
    useEffect,
    useState
} from "react";
import {
    getAllProducts,
    getAllCart,
    getProductsById,
    getAllProductPostedByUser,
    getAllOrdersToApprove,
    getAllOrdersForUser,
    getAllWishlist
} from "../api/api";
import {
    isAuthenticated
} from '../auth';

export const Context = React.createContext();

export default function ContextWrapper(props) {

    const {
        user,
        token
    } = isAuthenticated();

    const [products, setProducts] = useState("");
    const [cartProducts, setCartProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [myItems, setMyItems] = useState([])
    const [ordersToApprove, setOrdersToApprove] = useState([]);
    const [orders, setOrders] = useState([]);
    const [itemsInWishlist, setItemsInWishlist, ] = useState([]);
    const [productsInWishlist, setProductsInWishlist] = useState([]);


    const confirmedOrders = async () => {
        let x = await getAllOrdersToApprove(token);
        setOrdersToApprove(x)
    }

    const allPostedProducts = async () => {
        let postedProducts = await getAllProductPostedByUser(user.id, token);
        setMyItems(postedProducts);
    }

    const loadItems = async () => {
        await getAllProducts().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const cartItems = async () => {
        let itemsInCart = await getAllCart(token);
        setItems(itemsInCart);
        if (itemsInCart.length !== 0) {
            let Ids = itemsInCart.map((e, idx) => {
                if (e.product_id) {
                    return e.product_id;
                }
            });
            let productsInCart = await getProductsById(Ids);
            setCartProducts(productsInCart);
        }
    };


    const wislistItems = async () => {
        let itemsInWishlist = await getAllWishlist(token);
        setItemsInWishlist(itemsInWishlist);
        if (itemsInWishlist.length !== 0) {
            let Ids = itemsInWishlist.map((e) => {
                return e.product_id;
            });
            let productsInWishlist = await getProductsById(Ids);
            setProductsInWishlist(productsInWishlist);
        }
    };

    const orderDetails = async () => {
        let x = await getAllOrdersForUser(token);
        setOrders(x)
    }

    useEffect(() => {
        orderDetails()
    }, [orders])

    useEffect(() => {
        cartItems();
    }, [cartProducts]);

    useEffect(() => {
        ;
        loadItems();
    }, []);

    useEffect(() => {
        allPostedProducts();
    }, [])

    useEffect(() => {
        confirmedOrders()
    }, [ordersToApprove])



    useEffect(() => {
        wislistItems();
    }, [productsInWishlist]);

    const allStates = {
        user,
        token,
        products,
        cartProducts,
        items,
        myItems,
        ordersToApprove,
        orders,
        productsInWishlist,
        itemsInWishlist
    }
    return (
        <Context.Provider value={allStates}>
            {props.children}
        </Context.Provider>
    )
}