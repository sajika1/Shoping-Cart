export const findIndex = (state , id)=> {
    const index = state.selectedItems.findIndex(item => item.id === id);
    return index;
}