import React, { useState } from 'react';
import Card from './Card';
// import Parser from 'html-react-parser';
import CardIdent from 'global-card-ident'
import HtmlParse from 'html-react-parser'



function Form() {


  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [date, setCardDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [btnDisable, setBtnDisable] = useState(true)
   const [err, setErr] = useState({nameErr:'', 
   numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
  const [isBank, setIsBank] =useState('')
  const[issuer, setIssuer]= useState('');
  const [cardLogo, setCardLogo] =useState('')

 


  const handleCardName = (e) => {
    setCardName(e.target.value)
    if (e.target.value === '') {
      setErr({nameErr:'err', 
      numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
  
      
    
    }

   
    else {
      setErr({nameErr:'', 
      numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
  
      }


  }
  const handleCardNumber = (e) => {

    
    if(e.target.value.length >= 3){
      const isValid = CardIdent(e.target.value)
     
      setIsBank(isValid.industry)
      setIssuer(isValid.issuer)
      setCardLogo(isValid.logo)
    }
    if (isBank === 'Banking and financial' && (issuer === "Visa" || issuer === "Mastercard" || issuer === "American Express")) {
      console.log('card is valid')
      setCardNumber(e.target.value)
      setErr({nameErr:'', 
    numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
      if (e.target.value.length > 16) {
        console.log('invalid card: more than 16')
        setCardNumber('inavlid card')
        setErr({nameErr:'', 
    numberErr: 'err', mmErr: '', yyErr: '', cvcErr: '' })
        
      }
    }

    else {
      console.log('inavlid card')
      setCardNumber('inavlid card')
      setErr({nameErr:'', 
    numberErr: 'err', mmErr: '', yyErr: '', cvcErr: '' })
    }




  

  }
  const handleDateMM = (e) => {
    setCardDate(e.target.value)
    
    if(e.target.value >=13 || e.target.value === ''){
      setErr({nameErr:'', 
    numberErr: '', mmErr: 'err', yyErr: '', cvcErr: '' })
    }
    else{
      setErr({nameErr:'', 
      numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
    }
  }
  const handleDateYY = (e) => {
    const currentDate = new Date().getFullYear().toString().slice(2)
  
    setCardDate(e.target.value)
    if(e.target.value < currentDate||e.target.value >= 44|| e.target.value === ''){
      setErr({nameErr:'', 
    numberErr: '', mmErr: '', yyErr: 'err', cvcErr: '' })
    }
  
    else{
      setErr({nameErr:'', 
      numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
    }
  }
  const handleCvc = (e) => {
    if(e.target.value.length <=2||e.target.value.length >= 4|| e.target.value === ''){
      setErr({nameErr:'', 
    numberErr: '', mmErr: '', yyErr: '', cvcErr: 'err' })
    }
  
    else{
      setErr({nameErr:'', 
      numberErr: '', mmErr: '', yyErr: '', cvcErr: '' })
    }

    setCvc(e.target.value)

  }
  const submitForm = (e) => {
    e.preventDefault()

    console.log(cardName)
  }


  // const card = CardIdent(4213630002697489)
  // const Cardlogo = card.logo
  return (
    <div className='container'>
      <div className='card'>
      
        <Card
          CardName={`${cardName}`}
          CardNumb={`${cardNumber}`}
          CardLogo={HtmlParse(cardLogo)}

        />
      </div>
      <form className='form'>
        <label htmlFor={'cardHolderName'}>cardholder name</label>
        <input className={`${err.nameErr}`} onChange={handleCardName} type={'text'} name={'cardHolderName'} placeholder={'e.g. Jane Appleseed'} />
        <label htmlFor={'cardNumber'}>card number</label>
        <input className={`${err.numberErr}`} onChange={handleCardNumber} type={'number'} name={'cardNumber'} placeholder='e.g 1234 5678 9123 0000' />
        <div className='card__lastPart'>
          <div className='date'>
            <label htmlFor={'cardExpDate'}>exp. date(mm/yy)</label>
            <div>
              <input className={`${err.mmErr}`} onChange={handleDateMM} type={'number'} name={'cardExpDateMM'} placeholder='MM' min={1} max={12} />
              <input className={`${err.yyErr}`} onChange={handleDateYY} type={'number'} name={'cardExpDateYY'} placeholder='YY' min={22} max={45} />
            </div>

          </div>
          <div className='cvc'>
            <label htmlFor={'cvc'}>cvc</label>
            <input className={`${err.cvcErr}`} onChange={handleCvc} type={'number'} name={'cvc'} placeholder='e.g. 123' />
          </div>
        </div>
        <button className='btn btn-disable' type='submit' onClick={submitForm}>Confirm</button>

      </form>
    </div>
  )
}

export default Form
