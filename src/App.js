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
    console.log(data.records);
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
            <div className="card-deck">
            {this.state.plans.map(plan => <PlanCard {...plan.fields} /> )}
            </div>
          </div>
        </div>

        </div>

    );
  }
}

export default App;

        const PlanCard = ({ title, price, description,buttonVariant,buttonText }) => (
    <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">{ title }</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">{price}</small>
        </p>
        <button fullWidth variant={buttonVariant} color="primary">
                    {buttonText}
                  </button>
      </div>
    </div>
  );

   

  
