import React, { useRef } from 'react'
import Button from '../ui/Button'
import logoDocument from '../../images/logo1.jpg'
import logoText from '../../images/logo2.jpg'
import './header.scss'

const Header = ({result}) => {
  const inputRef = useRef()
  const inputClick = () =>{
   
    inputRef.current.click();
  }

  const openFile = (event) => {
    const file = event.target.files[0]; 
    const reader = new FileReader();

   

    reader.onload = function(e) {
      const pdfContainer = document.querySelector('.pdf__container');
      pdfContainer.data = e.target.result;
    };

    
    reader.readAsDataURL(file);
    
  };

  return (
    <div className="header">
      <div className="logo">
        <img className='logo__document' src={logoDocument} alt="Logo" />
        <img className='logo__text' src={logoText} alt="Logo" />
      </div>

    <div className="panel">
      <Button onClick = {inputClick}>Загрузить файл +</Button>
      <Button onClick={result}>Обработать</Button>
      <input onChange={openFile} ref={inputRef} type="file" />
    </div>

    </div>
  )
}

export default Header