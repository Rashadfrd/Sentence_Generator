import { useState} from 'react'
import data from './data';
import Text from './components/Text';
import './App.css'

function App() {
  const [numberInput,setNumberInput] = useState('');
  const [text,setText] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(numberInput)
    if (amount <= 1) {
      setText(data.slice(0,1))
    }
    else if(amount > 8){
      setText(data.slice(0,8))
    }
    else{
      setText(data.slice(0,amount))
    }
  };  
  return (
    <div className="App">
      <h1>Tired of Boring Lorem Ipsum ?</h1>
      <form onSubmit={submitHandler}>
        <input className='input' type="number" onChange={(e)=>{setNumberInput(e.target.value)}}/>
        <button type='submit' style={{marginLeft:'10px'}}>Generate</button>
      </form>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {text.map((content,index)=>{
          return <Text key={index} content={content} />
        })}
      </div>
    </div>
  )
}

export default App
