import React, { Component } from "react";

export const AppContext = React.createContext()

 export class AppContextProvider extends Component {
    constructor(props) {
      super(props);
      this.state = {
          newSales: '',
          sales:'',
          users:'',
          visit:'',
          date:'',
          
          
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }
  
    handleChange = (event) =>  {
      
      
      this.setState({[event.target.name]: event.target.value});

    }
    handleFormSubmit = (event) => {
      const { newSales,sales, users, visit, date } = this.state;
      if(newSales && sales && users && visit && date !== ""){
      localStorage.setItem('newSales', newSales);
      localStorage.setItem('sales', sales);
      localStorage.setItem('users', users);
      localStorage.setItem('visit', visit);
      localStorage.setItem('date', date);
      event.preventDefault();
      }else{
        alert("llena todos los campos")
      }
    };

    componentDidMount() {
      const newSales = localStorage.getItem('newSales');
      const sales = newSales ? localStorage.getItem('sales') : '';
      this.setState({newSales,sales}); 
    }

  
    render() {
      return (
        <AppContext.Provider
        value={{
          sales:this.state.sales,
          newSales: this.state.newSales,
          users: this.state.users,
          visit: this.state.visit,
          date:this.state.date,
          handleChange: this.handleChange,
          handleFormSubmit: this.handleFormSubmit ,

        }}
        >
          {this.props.children}

        </AppContext.Provider>
      );
    }
  }
 
  export const AppContextConsumer = AppContext.Consumer;