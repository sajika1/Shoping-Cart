export const totalPrice = (state)=> {
    let total=0;
    state.selectedItems.forEach(element => {
        total += element.count * element.price ;        
    });

    return total.toFixed(2);
}