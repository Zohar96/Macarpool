import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

export default class Passenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { destination: "",date: "" ,time: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
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
            <div className="passenger">
                <FormControl>
                    <TextField
                        required
                        label="יעד"
                        name="destination"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="date"
                        label="תאריך"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        id="start_time"
                        label="החל מ-"
                        type="time"
                        defaultValue="07:00"
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        id="end_time"
                        label="עד"
                        type="time"
                        defaultValue="09:00"
                        InputLabelProps={{shrink: true}}
                    />
                    <Button>חפש</Button>
                </FormControl>
            </div>
        );
    }
}