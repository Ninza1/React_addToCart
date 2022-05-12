export const ADD = (item) =>{
    return {
        type: "CHEESE",
        payload : item
    }
}

//remove items
export const DLT = (id) =>{
    return {
        type: "RMV_CART",
        payload: id
    }
}

//remove individual items

export const REMOVE = (item) =>{
    return{    
        type: "RMV_ONE",
        payload: item
    }
}