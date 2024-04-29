export const intialState ={
    basket: [],
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
    }
}

export default reducer;