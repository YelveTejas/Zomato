import React from 'react'
import Card from 'react-bootstrap/Card'
const Cards = ({ data }) => {
  return (
    <>
      {
        data.map((e, k) => {
          return (
            <>
              <Card style={{ width: '22rem',border:'none'}} className='hover mb-4'>
                <Card.Img variant="top" className='cd' src={e.imgdata} />
                <div className='card_body'>
                  <div className='upper_data d-flex justify-content-between align-items-center mt-2 '>
                    <h4 className='mt-2' >{e.rname}</h4>
                    <span>{e.rating}★</span>
                  </div>
                  <div className='lower_data d-flex justify-content-between'>
                    <h5>{e.address}</h5>
                    <span>{e.price}</span>
                  </div>
                  <div className='extra'>
                    
                  </div>
                  <div className='lower_datas d-flex '>
                   <img src={e.arrimg} alt='' className='limb'></img>
                   <p >{e.somedata}</p>
                   <img src={e.delimg} alt=''className='laimg'></img>
                  </div>
                </div>
              </Card>
            </>
          )
        })
      }

    </>
  )
}

export default Cards