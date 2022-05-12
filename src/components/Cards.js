import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from "./CardData"
import "./style.css"
import CardsDetails from './CardsDetails'
import { fontSize } from '@mui/system'
import { useDispatch } from 'react-redux'
import { ADD } from '../redux/actions/action'



const Cards = () => {
    const [data, setData] = useState(Cardsdata)
    // console.log(data)

    const dispatch = useDispatch();

    const send = (e) =>{
        // console.log(e)
        
        dispatch(ADD(e))

    }
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Recommended for you</h2>
            <div className='row d-flex justify-content-center align-items-center' >
                {
                    data.map((elem, id) => {
                        const {image, name, qty, price,stprice}  = elem;
                        return (
                            <>
                                <Card style={{ width: '22rem',border:"none" }} className ="mx-2 mt-4 card_style" >
                                    <Card.Img variant="top" src={image} style = {{height:"16rem"}} className="mt-3"  />
                                    <Card.Body>
                                        <Card.Title className='text-center'>{name}</Card.Title> 
                                        <Card.Text className='text-center'>{qty}</Card.Text>
                                        <div className='d-flex justify-content-between'>
                                        <Card.Text style = {{border:"1px solid lightgrey",padding: "5px",borderRadius: "8px", textDecoration: "line-through"}}>₹{stprice}</Card.Text>
                                        <Card.Text style = {{border:"1px solid lightgrey",padding: "5px",borderRadius: "8px"}}>₹{price}</Card.Text>
                                        {/* <Button  ><img className='f-22' src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" /></Button> */}
                                        <img  onClick={()=> send(elem)} style = {{borderRadius:"8px",height:"2pc", width:"6pc"}} className='f-22' src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" />
                                        </div>
                                    </Card.Body>
                                </Card>

                            </>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards
