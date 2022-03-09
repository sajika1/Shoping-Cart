export const addItem = productItem => {
    return {
        type: "ADD_ITEM",
        selectedItem: productItem
    }
}

export const increase = productItem => {
    return {
        type: "INCREASE", 
        selectedItem: productItem
    }
}

export const decrease = productItem => {
    return {
        type: "DECREASE", 
        selectedItem: productItem
    }
}

export const deleteItem = productItem => {
    return {
        type: "DELETE",
        selectedItem: productItem
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}
