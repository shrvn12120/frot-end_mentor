import React from 'react'
import cardFront from '..//assets/bg-card-front.png'
import cardBack from '..//assets/bg-card-back.png'

function Card(props) {
  return (
    <div className='card__container'>

      <div className='card__detail'>
        <div className='card__details__front'>
          <div className='upper'>
            <div className='card__type__logo'>
              {props.CardLogo}
            </div>
            <div>
              <p>{props.CardNumb}4213630002697489</p>
            </div>
          </div>
          <div className='lower'>
            <p>{props.cardName}abdullsh sharuwaan</p>
            <p>{props.expDate}08/22</p>
          </div>

          <img src={cardFront} className={'cards'}></img>
        </div>
        <div className='card__details__back'>
          <p>{props.CardCvc}123</p>
          <img src={cardBack} className={'cards'}></img>
        </div>
      </div>
    </div>
  )
}

export default Card