import * as types from '../constant'
import {action} from 'typesafe-actions'

// export const cartActions = {
//     addToCart: (id: number ) => action(types.ADD_TO_CART, id),
//     removeFromCart: (id:number) => action(types.REMOVE_FROM_CART, {id}),
//     increaseInCart: (id:number) => action(types.INCREASE_IN_CART, {id}),
//     decreaseInCart: (id:number) => action(types.DECREASE_IN_CART, {id}),

// }
export const addToCart = (id: number ) => action(types.ADD_TO_CART, id);
export const removeFromCart = (id: number ) => action(types.REMOVE_FROM_CART, id);
export const increaseInCart = (id: number ) => action(types.INCREASE_IN_CART, id);
export const decreaseInCart = (id: number ) => action(types.DECREASE_IN_CART, id);