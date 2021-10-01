export const wasAdded = (state , id)=> {
    if (state.selectedItems.find(item => item.id === id )) {
        return true;
    }else{
        return false;
    }
}