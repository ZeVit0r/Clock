import { useState } from 'preact/hooks'

export function App() {

  const [time, setTime] = useState(300) //5 * 60 segundos
  const [stop, setStop] = useState(true)


  const iniciar = () =>{
    console.log('iniciando')
    setStop(false)
  }

  const parar = () => {
    console.log('parando')
    setStop(true)
  }

  const resetar = async () => {
    parar()
    setTime(300)
    console.log('resetando')
  }

  if(stop == false && time > 0){
    setTimeout(() => {
      setTime(time-1)
    }, 1000) // 988-989
  } else if(time == 0) {
    setStop(true)
  }

  return (
      <div className="content">
        <div className="clock">
          <div className="clock-progress" style={{background: `conic-gradient(#023047 ${time/300 * 360}deg, rgb(225, 224, 224) 0deg)`}}>
          </div>
            <div className="clock-center">
              <h1>{Math.trunc(time/60)}:{("00"+time%60).slice(-2)}</h1>
            </div>
        </div>
        <div className="content-buttons">
          <button className="button-clock" onClick={()=>iniciar()}>iniciar</button>
          <button className="button-clock" onClick={()=>parar()}>parar</button>
          {
            stop == false
            ?
            <button className="button-disabled" disabled>resetar</button>
            :
            <button className="button-clock" onClick={()=>resetar()}>resetar</button>
          }
        </div>
      </div>
  )
}
