
import React, { Component } from 'react';

class App extends Component {

constructor(props){
  super(props);
  this.state={
    plans:[],
  };
}

componentDidMount(){
  fetch('https://api.airtable.com/v0/app1z2A9TV8V4VtTe/productsplan?api_key=keyPelnAmMAmcLqh9')
  .then((resp)=> resp.json())
  .then(data => {
    this.setState({ plans:data.records });
  })
  .catch(err=>{
    //errror
  });
}

  render() {
    return (

        <div className="container mt-5">
        <div className="row">
           <div className="col">
            <div className="card-deck mb-3 text-center">
            {this.state.plans.map(plan => <Pricing{...plan.fields} /> )}
            </div>
          </div>
        </div>
        </div>

          

    );
  }
}

export default App;



  //       const PlanCard = ({ grade, price, description,buttonText }) => (
  //   <div className="card">
  //     <div className="card-body">
  //       <h5 className="card-title">{ grade }</h5>
  //       <p className="card-text">{description}</p>
  //       <p className="card-text">
  //         <small className="text-muted">{price}</small>
  //       </p>
  //     </div>
  //   </div>
  // );



         const Pricing = ({ title, price, description,buttonText }) => (
        // <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{title}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{price} <small className="text-muted">/ mo</small></h1>
            <p>{description} </p>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">{buttonText}</button>
          </div>
           </div>
            );
