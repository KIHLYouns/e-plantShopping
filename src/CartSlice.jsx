import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [], // Initialize items as an empty array
	},
	reducers: {
		addItem: (state, action) => {
			// Assuming the action.payload contains the entire item object
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			// Removes an item from the cart based on its name
			state.items = state.items.filter(
				(item) => item.name !== action.payload
			);
		},
		updateQuantity: (state, action) => {
			// Updates the quantity of an item in the cart
			const { name, quantity } = action.payload;
			const itemToUpdate = state.items.find((item) => item.name === name);
			if (itemToUpdate) {
				itemToUpdate.quantity = quantity;
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
