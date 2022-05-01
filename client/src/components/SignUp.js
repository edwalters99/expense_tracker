import React, {Component} from 'react'

class SignUp extends Component {
    // doesn't need constructor because doesnt use the inicial state
    state = {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
    }

    // dynamic function
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.signUp(this.state)
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>

                <label>Email: </label>
                <input name='email' value={this.state.email} onChange={this.handleChange} />

                <label>Name: </label>
                <input name='first_name' value={this.state.first_name} onChange={this.handleChange} />

                <label>Surname: </label>
                <input name='last_name' value={this.state.last_name} onChange={this.handleChange} />

                <label>Password: </label>
                <input name='password' type='password' value={this.state.password} onChange={this.handleChange} />

                <label>Password: </label>
                <input name='password_confirmation' type='password' value={this.state.password_confirmation} onChange={this.handleChange} />

                <input type='submit' value='Register' />
            </form>
        );
    }
}

export default SignUp;