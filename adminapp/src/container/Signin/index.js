import React from 'react'
import Layout from '../../components/'
import {Container,Form,Button,Row,Col} from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
/**

/**
* @author
* @function Signin
**/

export const Signin = (props) => {
  return(
    
      <Layout>
      <Container>
     <Row style={{marginTop: "50px"}}>
       <Col md={{span:6,offset: 3}}>
       <Form>
       <Input 
       Label="email"
       placeholder="email"
       value=""
       type="email"
       onChange={() =>{}}
    />

{/* <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group> */}
<Input 
       Label="password"
       placeholder="password"
       value=""
       type="password"
       onChange={() =>{}}
    />
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       </Col>
     </Row>
      </Container>
      </Layout>
   )

 }
 export default Signin;