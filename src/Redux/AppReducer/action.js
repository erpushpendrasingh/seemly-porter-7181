import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (params) => (dispatch) => {
     dispatch({ type: types.GET_DATA_REQUEST });

     return axios
          .get("http://localhost:8080/product", params)
          .then((r) =>
               dispatch({
                    type: types.GET_DATA_SUCCESS,
                    payload: r.data,
               })
          )
          .catch((e) => {
               dispatch({ type: types.GET_DATA_FAILURE, payload: e });
          });
};

const addProducts = (payload) => (dispatch) => {
     dispatch({ type: types.ADD_DATA_REQUEST });
     return axios
          .post("http://localhost:8080/product", payload)
          .then((r) => {
               dispatch({
                    type: types.ADD_DATA_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.ADD_DATA_FAILURE, payload: e });
          });
};
const deleteProducts = (id) => (dispatch) => {
     dispatch({ type: types.DELETE_DATA_REQUEST });
     return axios
          .delete(`http://localhost:8080/product/${id}`)
          .then((r) => {
               dispatch({
                    type: types.DELETE_DATA_SUCCESS,
                    payload: r.data,
               });
          })
          .catch((e) => {
               dispatch({ type: types.DELETE_DATA_FAILURE, payload: e });
          });
};

const updateProduct = (id, payload) => (dispatch) => {
     dispatch({ type: types.UPDATE_DATA_REQUEST });
     return axios
          .patch(`http://localhost:8080/product/${id}`, payload)
          .then((r) => {
               dispatch({ type: types.UPDATE_DATA_SUCCESS });
          })
          .catch((e) => {
               dispatch({ type: types.UPDATE_DATA_FAILURE });
          });
};
export { getProduct, addProducts, deleteProducts, updateProduct };
