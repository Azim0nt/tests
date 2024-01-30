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
  function borderLightFn(e) {
    dispatch({
      type: 'rangeChange',
      borderLight: e.target.value
    })
  }
  function changeColorFn(e) {
    dispatch({
      type: 'changeColor',
      borderColor: e.target.value
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
          <input type="text" placeholder="Вставь сюда URL картинки" style={{ padding: '10px 20px' }} onChange={imgLinkFn} />
        </div>
        <div className="card" style={{
          boxShadow: `
          ${state.borderLight}px ${state.borderLight}px ${state.borderLight * 3}px blueviolet,
          -${state.borderLight}px -${state.borderLight}px ${state.borderLight * 3}px blueviolet,
          inset ${state.borderLight}px ${state.borderLight}px ${state.borderLight * 3}px blueviolet,
          inset -${state.borderLight}px -${state.borderLight}px ${state.borderLight * 3}px blueviolet
          `}}>
          <p>Свечение линий</p>
          <p>Уровень свечения: {state.borderLight}</p>
          <br />

          <input type="range" onChange={borderLightFn} step={5} min={5} />
        </div>
        <div className="card" style={{
          boxShadow: ` 
                        5px 5px 20px ${state.borderColor},
                        -5px -5px 20px ${state.borderColor},
                        inset 5px 5px 20px ${state.borderColor},
                        inset -5px -5px 20px ${state.borderColor}`
        }}>
          <p>поменять цвет свечения</p>
          <br />
          <br />
          <input type="color" value={'#fff'} onChange={changeColorFn} />
        </div>
        <div className="card" style={{ border: `${state.borderSize}px solid #fff` }}>
          Увеличить рамки
          <br />
          <p>размер сейчас: {state.borderSize}</p>
          <br />
          <button onClick={() => {
            dispatch({ type: 'incr' })
          }}>
            Прибавить
          </button>
          <button onClick={() => {
            dispatch({ type: 'decr' })
          }}>
            Убавить
          </button>
        </div>
        <div className="card">
          <button onClick={() => {
            dispatch({
              type: 'modalChange',
              modal: 'flex'
            })
          }}>Открыть окно</button>
        </div>
      </div>
      <div className="modal" style={{ display: state.modal }}>
        <div className="container">
          <button onClick={() => {
            dispatch({
              type: 'modalChange',
              modal: 'none'
            })
          }}>&times;</button> <br />
          <img src="https://i.pinimg.com/564x/fd/f2/f0/fdf2f0a0a8dea80933fcbb0ce09088e4.jpg" width={'20%'} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
