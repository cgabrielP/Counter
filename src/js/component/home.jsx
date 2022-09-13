import React from "react";
import PropTypes from 'prop-types';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function SimpleCounter(props){
	return (
		<div className="container">
			
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
	

}, 1000)

export default SimpleCounter;
