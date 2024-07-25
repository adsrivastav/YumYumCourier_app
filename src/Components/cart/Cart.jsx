import {useFood} from '../../Context/food-context';
import {useState} from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";



const Cart = () => {
  
  const[quantity,setQuantity]=useState(1)
  const{cartItem,removeItem,setCartItem}=useFood();

  return (
    <div className='flex gap-20 flex-wrap mt-6 ml-9 '>
     {
        cartItem.map((item)=>{
          return(

            <div key={item.id} >
   <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                   Food
                  </th>
                  <th scope="col">Category</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">{item.name}</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      Fast Food
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        value={quantity}
                      
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      ${item.price}
                    </p>
                  </td>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500",marginLeft:'2rem',cursor:'pointer' }} onClick={()=>removeItem(item.id)}>
                      X
                    </p>
                  </td>
                </tr>
             
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
          <MDBCard
            className="shadow-2-strong mb-5 mb-lg-0"
            style={{ borderRadius: "16px" }}
          >
          
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    </section>
            </div>
          )
        })
      }
    </div>
  )
}

export{Cart};