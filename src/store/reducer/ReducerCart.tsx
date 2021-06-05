import { Reducer } from "react"
import { action, ActionType } from "typesafe-actions";
import * as actions from '../action/action'
import * as types from '../constant'

export type CartType = {
    id: number,
    quantity: number,
}

type CartAction = ActionType<typeof actions>

const initialState: CartType[] = [
    {
        id: 1,
        quantity: 2
    }
]

export const ReducerCart: Reducer<CartType[], CartAction> = (state = initialState, actions: CartAction) => {
    console.log('khj', actions.type);
    switch (actions.type) {
        case types.ADD_TO_CART: {
            let newList = state;
            let exitInCart = false;
            newList.map(item => {
                if (item.id === actions.payload) {
                    item.quantity += 1;
                    exitInCart = true;
                }
            })
            if (!exitInCart)
                newList = [
                    ...newList,
                    {
                        id: actions.payload,
                        quantity: 1
                    }
                ]

            return newList;

        }

        case types.REMOVE_FROM_CART: {
            let newList = state;
            const index = newList.findIndex(item => item.id === actions.payload);
            newList.splice(index, 1);
            return newList;
        }

        case types.INCREASE_IN_CART: {
            let newList = state;
            const index = newList.findIndex(item => item.id === actions.payload);
            newList[index] = {
                ...newList[index],
                quantity: newList[index].quantity + 1
            }
            return newList;
        }

        case types.DECREASE_IN_CART: {
            let newList = state;
            const index = newList.findIndex(item => item.id === actions.payload);
            if (newList[index].quantity === 1) newList.splice(index, 1);
            else
                newList[index] = {
                    ...newList[index],
                    quantity: newList[index].quantity - 1
                }
            return newList;
        }

        default:
            return state;
    }
}