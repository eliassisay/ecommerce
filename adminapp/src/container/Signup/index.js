import React from 'react'
import Layout from '../../components/'
import {Container,Form,Button,Row,Col} from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return(
    <Layout>
    <Container>
   <Row style={{marginTop: "50px"}}>
     <Col md={{span:6,offset: 3}}>

<Form>
  <Row>
    <Col md={6}>
    <Input 
       Label="first Name"
       placeholder="first Name"
       value=""
       type="text"
       onChange={() =>{}}
    />
       </Col>

    <Col md={6}>
    <Input 
       Label="last Name"
       placeholder="last Name"
       value=""
       type="text"
       onChange={() =>{}}
    />
    </Col>
  </Row>

</Form>

     <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group> */}
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
 export default Signup;