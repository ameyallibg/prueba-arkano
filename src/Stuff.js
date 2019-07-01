import React, { Component } from "react";
import style from './style.css'

 class Stuff extends Component {

	render() {
		const {newSales,sales, users, visit,date, handleChange, handleFormSubmit} = this.context
		return(
			<form className="center" onSubmit={handleFormSubmit}>
			<label>
			  Cantidad de nuevas compras
			  <input name="newSales" type="text"  value={newSales} onChange={handleChange} />
			</label>
			<label>
			  Incremento de compras
			  <input name="sales" type="text"  value={sales} onChange={handleChange} />
			</label>
			<label>
			  Cantidad de nuevos usuarios
			  <input name="users" type="text"  value={users} onChange={handleChange} />
			</label>
			<label>
			  Cantidad de nuevas  visitas
			  <input name="visit" type="text"  value={visit} onChange={handleChange} />
			</label>
			<label>
			  Fechas de ingreso
			  <input name="date" type="text"  value={date} onChange={handleChange} />
			</label>
			<input  className="waves-effect waves-light btn" type="submit" value="Submit" />
		  </form>
		);
	}
}
 
export default Stuff;