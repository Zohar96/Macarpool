import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", phone: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value });
    }

    validateForm = () => {
        return this.state.phone.length > 0 && this.state.name.length > 0;
    }

    handleSubmit = event => {
        alert("good");
        //context.router.history.push('/home');
    }

    render() {
        return (
            <div className="Login">
                <FormControl>
                    <TextField
                        required
                        id="outlined-name"
                        label="איך קוראים לך?"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-name"
                        label="טלפון"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained" className={useStyles.button} disabled={!this.validateForm()} onClick={this.handleSubmit}>אפשר להיכנס פליזזזז?</Button>
                </FormControl>
            </div>
        );
    }
}