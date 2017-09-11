import React, { Component } from 'react'
import { connect } from 'react-redux';

class ListofCars extends Component {
    
    listofCars=({cars}) => {
        if(cars){
            return cars.map((car)=> {
                return(
                    <div className="car_item">
                        {car.model}
                    </div>
                )
            })
        }
    }
    
    
    render() {
        return (
            <div className="cars_comp">
                {this.listofCars(this.props)}
            </div>
        )
    }
}

function mapStateToProps(state) {
  console.log(state)
  return{
      cars:state.cars
  }
}

export default connect(mapStateToProps,null)(ListofCars);