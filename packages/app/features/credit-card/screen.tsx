import React from 'react'
import './style.css'

const CreditCard = () => {
  return (
    <div>
      <div className="card">
        <div className="card__side card__side_front">
          <div className="flex__1">
            <p className="card__side__name-bank">Mastercard</p>
            <div className="card__side__chip"></div>
            <p className="card__side__name-person">Edmauro Goma</p>
          </div>
        </div>
        <div className="card__side card__side_back">
          <div className="card__side__black"></div>
          <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
          <div className="flex__2">
            <p className="card__side__other-numbers card__side__other-numbers_1">XX/XX</p>
            <p className="card__side__other-numbers card__side__other-numbers_2">XXX</p>
            <img
              className="card__side__photo"
              src="https://github.com/EdmauroGoma.png"
              alt=""
              width={50}
              height={50}
            />
            <div className="card__side__debit">Debito</div>
          </div>
          <p className="card__side__other-info">Este cartão é propriedade da MASTERCARD</p>
        </div>
      </div>
    </div>
  )
}

export { CreditCard }
