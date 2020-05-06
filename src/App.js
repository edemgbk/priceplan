
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



         const Pricing = ({ title, price, description,buttonText }) => (
        // <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{title}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{price} <small className="text-muted">/ mo</small></h1>
            <p>{description} </p>
          

            <button type="button" className="btn btn-lg btn-block btn-outline-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">{buttonText}</button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Subscribe</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label for="recipient-name" className="col-form-label">Email:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
         
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" >Subscribe</button>
      </div>
    </div>
  </div>
</div>
          </div>
           </div>
            );
