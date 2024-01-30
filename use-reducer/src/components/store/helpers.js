function globalReducer(state, payload){
    switch(payload.type){
        case 'text':
            return{...state, text:payload.text}
        case 'imgSrc':
            return{...state, imgSrc:payload.imgSrc}
        case 'rangeChange':
            return{...state, borderLight:payload.borderLight}
        case 'changeColor':
            return{...state, borderColor:payload.borderColor}
        case 'incr':
            return{...state, borderSize:state.borderSize + 1}
        case 'decr':
            return{...state, borderSize:state.borderSize - 1}
        case 'modalChange':
            return{...state, modal:payload.modal}
        default:
            return state
    }
}
export {
    globalReducer
}