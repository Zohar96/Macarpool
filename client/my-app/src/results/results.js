import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import moment from 'react-moment';
import Typography from '@material-ui/core/Typography';


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
                    <Typography variant="h4" gutterBottom>
                        תוצאות
                    </Typography>
                    <Button
                        variant="contained" 
                        disabled={this.validateForm()} 
                        onClick={this.props.action}>שנה נתוני חיפוש</Button>
                </FormControl>
            </div>
        );
    }
}