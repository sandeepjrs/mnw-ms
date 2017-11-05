import React from 'react';


import { FormGroup, FormControl, HelpBlock, ControlLabel, ButtonToolbar, Button, Row, Col } from 'react-bootstrap';

 import msApi from "../service/msApi"
class RegisterClient extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      company_name : null,
      pin_code : null,
      email : null,
      error_message : null

    }

  }


  handleInputChange(event) {

    const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.company_name);


    if (this.state.company_name && this.state.email && this.state.pin_code ){
      console.log("go ahead", )

      var mydata = {
        company_name: this.state.company_name,
        pincode: this.state.pin_code,
        email: this.state.email,
        product: this.state.product,
      }


      msApi.create().registerNewClient(mydata).then(_=>{
        console.log("sandeep", _)
      }).catch((reason) => {

        console.log("reason of catch", reason)
      }
        )
      // msApi.create().registerNewClient(data)

      this.setState({ error_message: null })
    }
    else{
      console.log("problem", this.state)
      this.setState({error_message : "Please check some feilds are empty... "})
    }
    event.preventDefault();
  }

  render() {


    return (  
      <Row>
        <Col xs={8} xsOffset={2}>
        <h6 style={{color : "red"}}>{this.state.error_message} </h6>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup
              controlId="companyNameText"
            >
              <ControlLabel>Company Name</ControlLabel>
              <FormControl
              maxLength = "20"

                name = "company_name"
                type="text"
                onChange={this.handleInputChange.bind(this)}               
                placeholder="Enter the company name"             
              />
             
            </FormGroup>

            <FormGroup
              controlId="productNameText"
            >
              <ControlLabel>product Name</ControlLabel>
              <FormControl
                maxLength="20"
                value = "water"
                name="product"
                type="text"
                onChange={this.handleInputChange.bind(this)}
                placeholder="Enter the company name"
              />

            </FormGroup>
            <FormGroup
              controlId="pinCodeText"
       
            >
              <ControlLabel>Pin Code</ControlLabel>
              <FormControl
                type="text"
                name="pin_code" 
                pattern="[0-9]{6}" 
                maxLength="6"             
                placeholder="Enter the 6 digit Pin code"
                onChange={this.handleInputChange.bind(this)}   
              />
      
            </FormGroup>

            <FormGroup
              controlId="emailText"
            >
              <ControlLabel>Email</ControlLabel>
              <FormControl
                type="email"
                name="email"
                onChange={this.handleInputChange.bind(this)}   
                placeholder="Enter the email"
              />
            </FormGroup>           
            

            <Button type="submit" >
              Submit
    </Button>
          </form>       
        
        </Col>
      </Row>

    
        );
  }
}

export default RegisterClient;
