import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import moment from 'react-moment';
import Results from '../results/results.js';

export default class Passenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            destination: "",
            date: "",
            start_time: "",
            end_time: "",
            isResult: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.gotoResults = this.gotoResults.bind(this);
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

    gotoResults = () => {
        //TODO go to server

        this.setState({isResult:true})
    }

    gotoPassenger = () => {
        //TODO go to server

        this.setState({isResult:false})
    }

    render() {
        const isResult = this.state.isResult;

        return (
            <div className="passenger">
                {!isResult ? (
                    <FormControl>
                        <TextField
                            required
                            label="יעד"
                            dir="rtl"
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
                            defaultValue="2017-04-07"
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
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            id="end_time"
                            label="עד"
                            type="time"
                            name="end_time"
                            onChange={this.handleChange}
                            defaultValue="09:00"
                            InputLabelProps={{ shrink: true }}
                        />
                        <Button
                            variant="contained"
                            disabled={  this.validateForm()}
                            onClick={this.gotoResults}>חפש</Button>
                    </FormControl>
                ) : (
                        <Results action={this.gotoPassenger}/>
                    )}
            </div>
        );
    }
}