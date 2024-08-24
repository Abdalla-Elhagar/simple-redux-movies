export const details = (state={id:0,name:"",date:"",rating:0} , action) => {
    switch(action.type) {
        case "UPDATE_DETAILS":
            return{
                ...state,
                id:action.element.id,
                name: action.element.name,
                date: action.element.date,
                rating: action.element.rating,
            }
            default:{
                return state
            }
    }

    
}