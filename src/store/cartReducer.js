const defaultStet = {cart:[]}


function cartReducer (state = defaultStet, action){
if(action.type == 'ADD'){
    let copid = [...state.cart]
    copid.push(action.payload)
    return {...state, cart:copid}

}else if(action.type == "REMOV"){
    let copid = [...state.cart]
    copid = copid.filter(function(value){
        return value.id != action.payload 
    })
    return {...state , cart:copid}
} else if(action.type == 'CLEAR'){
    return {...state , cart: []}
} 

else{
    return state
}
}


export default cartReducer;