import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
            degree: "",
            branch: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmpasswordhandler = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    degreehandler = (event) => {
        this.setState({
            degree:event.target.value
        })
    }
    branchhandler = (event) => {
        this.setState({
            branch:event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            password: '',
            confirmPassword: "",
            degree: "",
            branch: "",
            gender: "",
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>Student Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                    <label>Confirm password :</label> <input type="password" value={this.state.confirmpassword} onChange={this.confirmpasswordhandler} placeholder="Confirm password..." /><br />
                    <label>Degree :</label><select onChange={this.degreehandler} defaultValue="Select Degree">
                        <option defaultValue>Select Degree</option>
                        <option value="B.E">B.E</option>
                        <option value="B.TECH">B.TECH</option>
                        </select><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>Branch :</label><select onChange={this.branchhandler} defaultValue="Select Branch">
                        <option defaultValue>Select Branch</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="FT">FT</option>
                        <option value="BME">BME</option>
                        <option value="MCT">MCT</option>
                        </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form