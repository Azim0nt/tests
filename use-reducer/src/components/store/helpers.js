function globalReducer(state, payload){
    switch(payload.type){
        case 'text':
            return{...state, text:payload.text}
        case 'imgSrc':
            return{...state, imgSrc:payload.imgSrc}
        case 'rangeChange':
            return{...state, borderLight:payload.borderLight}
        // case 'incr':
        //     return{...state, borderLight:state.borderLight + 1}
        // case 'decr':
        //     return{...state, borderLight:state.borderLight - 1}
        default:
            return state
    }
}
export {
    globalReducer
}