import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getCars} from '../actions/getCars';
import { bindActionCreators } from 'redux';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ""
        }
    }

    componentWillUpdate(nextProp, nextState) {

    }

    searchCars = (event)=> {
        event.preventDefault();
        this.props.getCars(this.state.keyword)
    }

    handleChange = (event)=> {
        this.setState({
            keyword: event.target.value
        });
    }

    
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state)
    }
    

    
    componentDidMount() {
        console.log(this.state)
    }
    

    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                <input type="text" value={this.state.keyword} onChange={this.handleChange}/> 
                </form>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getCars},dispatch)
}
export default connect(null,mapDispatchToProps)(Search);