import { useReducer } from "react"
import { globalReducer, initialState } from "./components/store"
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  function textFn(e) {
    dispatch({
      type: 'text',
      text: e.target.value
    })
  }
  function imgLinkFn(e) {
    dispatch({
      type: 'imgSrc',
      imgSrc: e.target.value
    })
  }
  function borderLightFn(e){
    dispatch({
      type:'rangeChange',
      borderLight:e.target.value
    })
  }
  return (
    <div className="App">
      <div className="grid">
        <div className="card"><p>Посчитать количество букв в предложении</p>
          <br />
          {state.text.length}
          <br />
          <br />
          <input type="text" onChange={textFn} />
          <br />
          <br />

        </div>
        <div className="card">
          <p>Просмотр картинок</p>
          <img src={state.imgSrc} width={"80%"} alt="" />
          <br />
          <br />
          <input type="text" placeholder="Вставь сюда URL картинки" style={{padding:'10px 20px'}} onChange={imgLinkFn} />
        </div>
        <div className="card" style={{boxShadow:`
         ${state.borderLight}px ${state.borderLight}px ${state.borderLight * 3}px blueviolet,
         -${state.borderLight}px -${state.borderLight}px ${state.borderLight * 3}px blueviolet,
         inset ${state.borderLight}px ${state.borderLight}px ${state.borderLight * 3}px blueviolet,
         inset -${state.borderLight}px -${state.borderLight}px ${state.borderLight * 3}px blueviolet
        `}}>
          <p>Свечение линий</p>
         <p>Уровень свечения: {state.borderLight}</p> 
          <br />
          {/* <button onClick={() => {
            dispatch({type:'incr'})
          }}>
            Прибавить
          </button>
          <button onClick={() => {
            dispatch({type:'decr'})
          }}>
            Убавить
          </button> */}
          <input type="range" onChange={borderLightFn} step={5} min={5} />
        </div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  )
}

export default App
