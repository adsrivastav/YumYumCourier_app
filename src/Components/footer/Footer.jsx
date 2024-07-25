import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <div>

<MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Provide users with creative and inspiring ideas for meals, recipes, and overall food experiences. It aims to help users overcome culinary challenges, spark their creativity in the kitchen, and discover new and exciting flavors.
          </p>
        </section>

        <section className=''>
          <MDBRow >
        

            <MDBCol >
              <h5 className='text-uppercase'>Connect</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    partner with us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    faq for partner
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    help
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                  privacy & policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol >
              <h5 className='text-uppercase no-underline'>Contact</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    faq
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    blog
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    address
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white no-underline'>
                    social
                  </a>
                </li>
              </ul>
            </MDBCol>

           
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='flex justify-center gap-5 text-xl  '>
<p ><a href="https://github.com/adsrivastav?tab=repositories"><AiOutlineGithub className='text-white '/></a></p>
<p><a href="https://www.linkedin.com/in/adarsh-srivastav-ab40931b1/"><AiFillLinkedin className='text-white '/></a></p>
<p><a href="https://www.instagram.com/invites/contact/?i=pup3suubsihp&utm_content=4vgztad"><AiFillInstagram className='text-white '/></a></p>
</div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright!!:
        <a className='text-white no-underline' > Adarsh Rakesh Shrivastava|| 2023
          
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export{Footer};