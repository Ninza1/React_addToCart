import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, DLT, REMOVE } from '../redux/actions/action'
import "./CardDetails.css"

const CardsDetails = () => {
  const [data, setData] = useState([])
  console.log(data)

  const { id } = useParams()
  // console.log(id)

  const history = useNavigate();

  const dispatch = useDispatch()


  const getdata = useSelector((state) => state.cartreducer.carts)
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    })
    setData(comparedata)
  }

  //add data
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e))
  }
  const dlt = (id) => {
    dispatch(DLT(id))
    history("/");
  }

  //remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }

  useEffect(() => {
    compare()
  }, [id])



  return (
    <div className="container mt-2">
      <h2 className='text-center color'> Items page</h2>
      <section className='container mt-3'>
        <div className="itemsdetails d-flex">
          {
            data.map((ele) => {
              return (
                <>
                  <div className="items_img border-red">
                    <img style = {{ boxShadow: "5px 10px lightgrey"}}  src={ele.image} />
                  </div>

                  <div style={{ }} className="details">
                    <Table>
                      <tr>
                        <td>
                          <p><b>{ele.name}</b></p>
                          <div className='d-flex seticon'>
                            <p>Share</p>
                            <i style={{ margin: "5px 20px" }} class="fa-brands fa-facebook"></i>
                            <i style={{ marginTop: "5px" }} class="fa-brands fa-twitter"></i>
                          </div>
                          <div className='buyrs'>
                            <img style={{width:"23px", height: "30px",marginRight:"10px"}} src="https://www.naturesbasket.co.in/Images/product-offer.jpg" alt="" />
                          <p>Buy@ Rs.{ele.price}/-</p>
                          </div>
                          <p> {ele.name}</p>
                          <p><b> Wgt</b> {ele.qty}</p>
                          <div className="add_rs_card">
                            <p>MRP {ele.price}</p>
                            <img style={{borderRadius: "6px",width:"5pc" }} src="https://www.naturesbasket.co.in/Images/CartAddBtn.PNG" alt="" />
                          </div>
                          <p><b>Total : {ele.price * ele.qty}</b></p>



                          <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                            <span style={{ fontSize: 23 }} onClick={ele.qty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                            <span style={{ fontSize: 23 }}>{ele.qty}</span>
                            <span style={{ fontSize: 23 }} onClick={() => send(ele)}>+</span>
                          </div>
                          <p>Remove <i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ cursor: "pointer", color: "red" }} ></i> </p>
                        </td>
                      </tr>

                    </Table>

                  </div>
                </>
              )

            })
          }
        </div>
      </section>
    </div>
  )
}

export default CardsDetails