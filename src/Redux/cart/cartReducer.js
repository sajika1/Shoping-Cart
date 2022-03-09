
const initialState = {
    selectedItems: [],
    totalCount: 0,
    isCheckout: false,
}

const cartReducer = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find( item=> item.id === action.selectedItem.id )) {
                state.selectedItems.push(
                    {
                        ...action.selectedItem , 
                        count:1
                    }
                )
                state.totalCount++;
                state.isCheckout = true;
            }

            return {
                ...state ,
                selectedItems: [...state.selectedItems]
            }
                
        case "INCREASE":
            const increaseItemIndex = state.selectedItems.findIndex(item => item.id === action.selectedItem.id );
            state.selectedItems[increaseItemIndex].count++;
            state.totalCount++;
            return { ...state }

        case "DECREASE":
            const decreaseItemIndex = state.selectedItems.findIndex(item => item.id === action.selectedItem.id );
            if (state.selectedItems[decreaseItemIndex].count>0) {
                state.selectedItems[decreaseItemIndex].count--;
                state.totalCount--;
            }else{
                state.selectedItems = state.selectedItems.filter(item=>item.id !== state.selectedItems[decreaseItemIndex].id)
            }
            return { ...state  }
        
        case "CLEAR":
            return {
                isCheckout:false,
                totalCount:0,
                selectedItems:[]
            }
        case "DELETE":
            const index = state.selectedItems.findIndex(item => item.id === action.selectedItem.id );
            state.selectedItems = state.selectedItems.filter(item=>item.id !== state.selectedItems[index].id);
            state.totalCount--;
            return { ...state  }
            
        default:
            return state;
    }
}

export default cartReducer;