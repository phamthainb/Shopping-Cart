import { Reducer } from "react"
import { action, ActionType } from "typesafe-actions";
import * as actions from '../action/action'
import * as types from '../constant'

export type ProductType = {
    id: number,
    img: string,
    name: string,
    price: number
}

type ProductAction = ActionType<typeof actions>

const initialState: ProductType[] = [
    {
        id: 1,
        img: 'https://sg.saturdayclubcdn.com/4090-42288-product_cat/limited-edition-cheongsam-wrap-dress.jpg',
        name: 'Black floral dress',
        price: 120000
    },
    {
        id: 2,
        img: 'https://dynamic.zacdn.com/XffIwmyZrD1hqtyRDUAAj1zNYiA=/fit-in/346x500/filters:quality(95):fill(ffffff)/http://static.ph.zalora.net/p/pomelo-3678-1354241-1.jpg',
        name: 'Red floral dress',
        price: 130000
    },
    {
        id: 3,
        img: 'https://www.monsoon.co.uk/dw/image/v2/BDLV_PRD/on/demandware.static/-/Sites-monsoon-master-catalog/default/dw181a6835/images/large/21_95707999_1.jpg?sw=500&sh=640&sm=cut',
        name: 'Dark green long coat',
        price: 1300000
    },
    {
        id: 4,
        img: 'https://www.samuel-windsor.co.uk/images/products/p-F-BVJ7W06LO1.jpg',
        name: 'Caro long coat',
        price: 130000
    },
    {
        id: 5,
        img: 'https://cf.shopee.co.id/file/d1a00c686dc58a74a477c8882239ec48',
        name: 'Knitted Sweaters',
        price: 130000
    },
    {
        id: 6,
        img: 'https://ii.ghbass.com/fcgi-bin/iipsrv.fcgi?FIF=/images/ghbass/source/M3000001_m3000001c03w.tif&qlt=90&wid=650&cvt=jpeg',
        name: 'Winter sweater for man',
        price: 130000
    },
]

export const ReducerProduct: Reducer<ProductType[], ProductAction> = (state = initialState, actions: ProductAction) => {
    return state
}