//import react into the bundle
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

 function SimpleCounter(props){
	return (
		<div className="container">
			<div className="clock"><i class="fa-solid fa-clock"></i></div>
			<div className="four">{props.numeroCuatro %10}</div>
			<div className="three">{props.numeroTres %10}</div>
			<div className="two">{props.numeroDos %10}</div>
			<div className="one">{props.numeroUno %10}</div>
		</div>
	);
};
SimpleCounter.propTypes={
	numeroCuatro: PropTypes.number,
	numeroTres: PropTypes.number,
	numeroDos: PropTypes.number,
	numeroUno: PropTypes.number,
}
let counter=0;
setInterval(function(){
	const four = Math.floor(counter/1000);
	const three = Math.floor(counter/100);
	const two = Math.floor(counter/10);
	const one = Math.floor(counter/1);
	counter++;
	console.log(four, three,two, one)
	//render your react application
ReactDOM.render(<SimpleCounter numeroUno= {one}numeroDos= {two} numeroTres= {three} numeroCuatro= {four}  />, document.querySelector("#app"));
}, 1000)


