import {GET_ITEMS, GET_ITEM_DETAIL} from './types'

export default (state, action )=>{
    const {payload,type}= action;

    switch(type) {
        case GET_ITEMS:
            return {
                ...state,
                items: payload
            }
        case GET_ITEM_DETAIL:
            return{
                ...state,
                selectedItems: payload

            }
    }
}