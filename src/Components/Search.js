import React, { useEffect, useState } from 'react'
import './style.css'
import Fooddata from './foodData'
import Form from 'react-bootstrap/Form'
import Cards from './cards'

import Skelton from './Skelton'
const Search = () => {
    const [data, setData] = useState(Fooddata)
    const [copydata,setCopydata] = useState([])
    console.log(copydata)

const changedata=(e)=>{
 let getchangedata = e.toLowerCase()
  if(getchangedata==''){
    setCopydata(data)
  }
  else
  {
    let filterdata = copydata.filter((e,i)=>{
        return e.rname.toLowerCase().match(getchangedata);
    })
    setCopydata(filterdata)
  }
}
    useEffect(()=>{
        setTimeout(()=>{
            setCopydata(data) 
        },3000)
      
    },[])
    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center'>
                <img src={zomatologo} style={{ width: '8rem', position: 'relative', left: '2%', cursor: 'pointer' }} alt='' />
                <h2 >Search Filter</h2>
            </div>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                   <Form.Control type='text' onChange={(e)=>changedata(e.target.value)} placeholder='Search Retaurant'/>
                    
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
            </Form>
            <section className='iteam_section mt-4  container'>
                <h4 className='px-4' style={{fontWeight:400}}>Restaurant in Mumbai Open Now</h4>
                <div className='row'>
                 {copydata && copydata.length ?<Cards data={copydata}/>:<Skelton sdata={data}/>} 
                </div>
            </section>
            
        </>
    )
}

export default Search