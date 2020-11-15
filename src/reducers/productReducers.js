import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, ADD_TO_PREVIOUS } from "../constants/productConstants";

function productListReducer( state = {products: []}, action ){
    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []};
        case PRODUCT_LIST_SUCCESS:
            return {loading:false, products: action.payload};
        case PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

function productDetailsReducer( state = {product: {}}, action ){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state
    }
}

function productDeleteReducer( state = {product: {}}, action ){
    switch(action.type){
        case PRODUCT_DELETE_REQUEST:
            return {loading: true};
        case PRODUCT_DELETE_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_DELETE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state
    }
}

function productSaveReducer( state = {product: {}}, action ){
    switch(action.type){
        case PRODUCT_SAVE_REQUEST:
            return {loading: true};
        case PRODUCT_SAVE_SUCCESS:
            return {loading: false, success: true, product: action.payload};
        case PRODUCT_SAVE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state
    }
}

function previousProductReducer(state={previousItems: []}, action){
    switch(action.type){
        case ADD_TO_PREVIOUS:
            const item = action.payload;
            const product = state.previousItems.find(x=>x.product === item.product);
            console.log(state.previousItems);
            if(product){
                return {
                    previousItems: 
                    state.previousItems.map(x=>x.product === product.product ? item: x)
                };
            }
            return { previousItems: [...state.previousItems, item]};
        default:
            return state
            
    }
}


export { 
    productListReducer, productDetailsReducer, previousProductReducer, productSaveReducer, productDeleteReducer
}