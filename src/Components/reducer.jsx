export const intialState ={
    basket: [],
    user : null,
};

const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket : [...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            return{
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
    }
}

export default reducer;