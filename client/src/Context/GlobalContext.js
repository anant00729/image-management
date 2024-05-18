import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
SHOW_PRODUCT_LIST,
ADD_PRODUCT,
UPDATE_PRODUCT,
SEARCH_PRODUCT,
SET_ALERT,
REMOVE_ALERT,
GET_SINGLE_PRODUCT,
DELETE_PRODUCT,
LOGIN,
LOGOUT
} from "./types";
import { v4 as uuidv4 } from "uuid";


// Initial state
const initialState = {
  productList: [],
  currentProduct: {},
  alerts: [],
  selectedProduct: {},
  username: localStorage.getItem("username"),
  isAuthenticated:
    !!localStorage.getItem("username") &&
    localStorage.getItem("username") != "undefined",
};

const BASE_URL = 'https://cs-meridian-01.cmpt.sfu.ca/v1/'

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getAllProducts = async () => {
    const url = `${BASE_URL}image`;
  
    try {
      const response = await fetch(url);
      const res = await response.json();
      if (response?.status == 200){
        dispatch({
          type: SHOW_PRODUCT_LIST,
          payload: res,
        });
      }else if (response?.status == 400){
        dispatch({
          type: SHOW_PRODUCT_LIST,
          payload: [],
        });
      }
    } catch (err) {
      setAlert(`Error fetching ${url}: ${err}`)
    }
  };

  const addProduct = async (product, navigate) => {
    const url = `${BASE_URL}product`;

    product = {
      ...product,
      product_id: parseInt(product?.product_id)
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
      const res = await response.json();
  
      if (response.status == 200) {
        navigate('/')
        setAlert(res.message)
      } else if (response.status == 400){
        setAlert(res.message)
      }else {
        setAlert('Failed to add product:', res.message)
      }
    } catch (err) {
      setAlert(`Error adding product: ${err}`);
    }
  };

  const uploadImage = async (imageFile, info, navigate) => {
    const url = `${BASE_URL}upload`;
  
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('info', JSON.stringify(info));
  
      const response = await fetch(url, {
        method: 'POST',
        body: formData
      });
  
      const res = await response.json();
  
      if (response.status === 200) {
        navigate('/');
        setAlert(res.message);
      } else if (response.status === 400) {
        setAlert(res.message);
      } else {
        setAlert(`Failed to add product: ${res.message}`);
      }
    } catch (err) {
      setAlert(`Error adding product: ${err}`);
    }
  };
  
  
  const updateProduct = async (product, navigate) => {
    
    const url = `${BASE_URL}product/${product.id}`;
  
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  
  
      const res = await response.json();
      if (response.status == 200) {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: res,
        });
        navigate('/')
        setAlert('Product updated successfully!')
      } else if (response.status == 400){
        setAlert(res.message)
      }else {
        setAlert(res.message)
      }
    } catch (err) {
      setAlert(`Error fetching product: ${err}`);
      return;
    }
  }

  const deleteProduct = async (id, navigate) => {
    const url = `${BASE_URL}product/${id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const res = await response.json();
      if (response.status == 200) {
        dispatch({
          type: DELETE_PRODUCT,
          payload: id,
        });
        navigate('/')
        setAlert('Product deleted successfully!')
      } else if (response.status == 400){
        setAlert(res.message)
      }else {
        setAlert(res.message)
      }
    } catch (err) {
      setAlert(`Error fetching product: ${err}`);
      return;
    }
  }

  const search = async (query, searchType) => {
    try {
      const response = await fetch(`${BASE_URL}searchProduct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query,
          searchType
        })
      });
      const res = await response.json();
      if (res.status){
        dispatch({
          type: SHOW_PRODUCT_LIST,
          payload: res?.productList,
        });
      }else {
        setAlert(res.message)  
      }
    } catch (error) {
      console.error(error);
    }
  }
  

  const getSingleProductDetails = async (productId) => {
    const url = `${BASE_URL}image/${productId}`;
  
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        setAlert(`HTTP error! status: ${response.status}`)
      }
  
      const res = await response.json();
      console.log('res', res)
      dispatch({
        type: GET_SINGLE_PRODUCT,
        payload: res,
      });
    } catch (err) {
      setAlert(`Error fetching product: ${err}`);
      return;
    }
  };

  const signInUser = async (data, navigate) => {
    try {
      const response = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const res = await response.json();
      console.log(res)
      if (res.status){
        navigate('/')
        dispatch({
          type: LOGIN,
          payload: res,
        });
      }else {
        setAlert(res.message)  
      }
    } catch (error) {
      console.error(error);
    }
  }

  const signOutUser = async (navigate) => {
    navigate('/login')
    dispatch({
      type: LOGOUT
    });
  }
  
  
  
  const setAlert = (msg, timeout = 2500) => {
    if (msg) {
      const id = uuidv4();
      dispatch({
        type: SET_ALERT,
        payload: { msg, id },
      });
      setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        productList: state?.productList,
        currentProduct: state?.currentProduct,
        alerts: state?.alerts,
        selectedProduct: state?.selectedProduct,
        username: state?.username,
        isAuthenticated: state?.isAuthenticated,
        getAllProducts,
        addProduct,
        updateProduct,
        search,
        setAlert,
        getSingleProductDetails,
        deleteProduct,
        uploadImage,
        signInUser,
        signOutUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
