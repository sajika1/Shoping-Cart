export const shortTitle = (text)=> {
    const tempArrayOfTitle = text.split(' ');
    const shortTitle = `${tempArrayOfTitle[0]} ${tempArrayOfTitle[1]}`;
    return shortTitle;
}