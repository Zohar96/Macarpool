import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./register.css";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: "",
            name: ""
        };
    }

    validateForm() {
        return this.state.phone.length > 0 && this.state.name.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {

    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>איך קוראים לך? </Label>
                        <Input name="name" type="text" id="name" placeholder="כינוי" value={this.state.name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>טלפון</Label>
                        <Input name="phone" type="text" id="phone" placeholder="טלפון" value={this.state.phone} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button
                        disabled={!this.validateForm()}
                        type="submit"
                        bsStyle="primary"
                    >אפשר להיכנס פליזזזז?</Button>
                </Form>
            </div>
        );
    }
}

export default Register;