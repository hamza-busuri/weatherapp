// import preact
import { h, render, Component } from 'preact';

export default class Button extends Component {
	render() {
	    return (
	      <button onClick={::this.handleClick} />
	    );
	  }
		handleClick() {
  // do something meaningful, Promises, if/else, whatever, and then
  window.location.assign('http://github.com');
}
	// rendering a function when the button is clicked
	/*render({clickFunction}) {
		if(!clickFunction){
			clickFunction = () => {
				console.log("passed something as 'clickFunction' that wasn't a function !");
			}
		}
		return (
			<div>
				<button onClick={clickFunction}>
					Click me
				</button>
			</div>
		);
	}*/

}
