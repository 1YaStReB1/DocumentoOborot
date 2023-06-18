
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { PulseLoader } from 'react-spinners';

function App() {
  const words = ['Образование', 'Спорт', 'Культура', 'Здравоохранение', 'Экономическое развитие', 'Другое']
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  const [show, setShow] = useState(false)
  const [answer, setAnswer] = useState('')
  const result = () => {
    setShow(true)
    setTimeout(() => {
      setAnswer(words[getRandomInt(6)])
      setShow(false)
    }, 1500)
    
  }

  return (
    <div className="App">
      <Header result = {result}/>
      <div className="text">Просмотр файла</div>
      <object className='pdf__container' data="" width="490" height="490" type="application/pdf">не удалось показать документ</object>
      {show ? <PulseLoader color="#36d7b7" /> : <div className="text">Класс документа: {answer}</div> }
    </div>
  );
}

export default App;
