import './Rate.css'
import React from "react";
import rateInactive from '../../assets/images/rate-inactive.svg'
import rateActive from '../../assets/images/rate-active.svg'

const Rate = ({score}) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rate">
      {stars.map((star) => {
        const src = star <= score ? rateActive : rateInactive
        return <img src={src} alt="" key={star} />
      })}
    </div>
  )}

export default Rate
