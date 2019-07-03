import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { isNull } from 'util';

export default class Passenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { destination: "", date: "", start_time: "", end_time:""};

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        let value = event.target.value;
        let name = event.target.name;
        this.setState({ [name]: value });
    }

    validateForm = () => {
        return this.state.end_time > this.state.start_time;
}
    render() {
        return (
            <div className="passenger">
                <FormControl>
                    <TextField
                        required
                        label="יעד"
                        name="destination"
                        onChange={this.handleChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="date"
                        label="תאריך"
                        name="date"
                        type="date"
                        onChange={this.handleChange}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        id="start_time"
                        label="החל מ-"
                        type="time"
                        name="start_time"
                        defaultValue="07:00"
                        onChange={this.handleChange}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        id="end_time"
                        label="עד"
                        type="time"
                        name="end_time"
                        onChange={this.handleChange}
                        defaultValue="09:00"                        
                        InputLabelProps={{shrink: true}}
                    />
                    <Button variant="contained" disabled={this.validateForm()} onClick={this.props.handleLogin}>חפש</Button>
                </FormControl>
            </div>
        );
    }
}