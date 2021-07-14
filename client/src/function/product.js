import axios from 'axios'

export const createProduct = async (product, authtoken) =>
	await axios.post(`${process.env.REACT_APP_API}/product`, product, {
		headers: {
			authtoken,
		},
	})

export const getProductByCount = async (count) =>
	await axios.get(`${process.env.REACT_APP_API}/products/${count}`)



export const deleteProduct = async (_id, authtoken) =>
	await axios.delete(`${process.env.REACT_APP_API}/product/${_id}`, {
		headers: {
			authtoken,
		},

	})
export const getProduct = async (_id,) =>
	await axios.get(`${process.env.REACT_APP_API}/product/${_id}`)



export const updateProduct = async (_id, product, authtoken) =>
	await axios.put(`${process.env.REACT_APP_API}/product/${_id}`, product, {
		headers: {
			authtoken,
		},

	})