// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';


var APPID = "36babaf487f8cfb917ed8bdca38e99c5";



export default class Iphone extends Component
{



//var Iphone = React.createClass({
	state = {
    selectedDay: new Date(),
  }

	// a constructor with initial set states
	constructor(props)
	{

		super(props);
		// temperature state
		this.state.temp = "";
		this.state = {value: ''};
		this.state = {value2: ''};
		//this.state = {value2: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// button display state
		//this.setState({ display: true });
		this.fetchWeatherData();
		this.setState({ display: true });
		this.setState({showForm: false});
		this.setState({showInfo : true});
		this.setState({showList : true});
		this.setState({showHiker : true});
		this.setState({showPlanHike : false});
		this.setState({showSettings : false});
		this.setState({showSettingsIc : true});
		this.setState({showHikeIc : true});
		this.setState({showTemp : true});
		this.setState({showSunItems : true});
		this.setState({showCloudItems : true});
		this.setState({showSnowItems : true});
		this.setState({showNotifications : false});


	}



	// a call to fetch weather data via wunderground  AIzaSyCIsUjF0fuDrLZurp8q012USSKemz9rmYc
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json

		var url = "http://api.wunderground.com/api/650ab76abebb0266/conditions/forecast10day/q/UK/London.json";
		//var url = " http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=36babaf487f8cfb917ed8bdca38e99c5 ";



		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		// this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {


		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		const temp =  this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		// display all weather data
		return (
			<div class={ style.container }>
				<div class={ style.header }>

					<div class={ style.city }>{ this.state.locate }</div>
					<div class={ style.conditions }>{ this.state.cond }</div>
					<div class={style.date}>{this.state.day}</div>
					{this.state.showTemp? <span class={ tempStyles }>{ this.state.temp }</span> :null}
					<div class = {style.table}>
					{ this.state.display ?
					<table align = "center">
					<tr>
					    <th></th>
						<th> Day </th>
					    <td><th> Temp</th></td>
					    <td> <th> Wind</th></td>
					    <td> <th> Hum</th> </td>
					</tr>
						<tr><td><img src= {this.state.image} height="20"> </img> </td><td>{ this.state.t1 }</td><td>{ this.state.forc}° </td> <td>{this.state.wind1 }mph</td> <td> {this.state.hum1}%</td></tr>
						<tr><td><img src= {this.state.image1} height="20"> </img> </td><td>{ this.state.t2 }</td><td>{ this.state.forc2 }° </td> <td> {this.state.wind2 }mph </td> <td> {this.state.hum2}%</td></tr>
						<tr><td><img src= {this.state.image2} height="20"> </img> </td><td>{ this.state.t3 }</td><td>{ this.state.forc3 }° </td> <td> {this.state.wind3 }mph </td> <td>{this.state.hum3}%</td></tr>
						<tr><td><img src= {this.state.image3} height="20"> </img> </td><td>{ this.state.t4 }</td><td>{ this.state.forc4 }° </td> <td> {this.state.wind4 }mph</td> <td> {this.state.hum4}%</td></tr>
						<tr><td><img src= {this.state.image4} height="20"> </img> </td><td>{ this.state.t5 }</td><td>{ this.state.forc5 }° </td> <td> {this.state.wind5 }mph </td> <td>{this.state.hum5}%</td></tr>
						<tr><td><img src= {this.state.image5} height="20"> </img> </td><td>{ this.state.t6 }</td><td>{ this.state.forc6 }° </td> <td> {this.state.wind6 }mph </td> <td>{this.state.hum6}%</td></tr>
						<tr><td><img src= {this.state.image6} height="20"> </img> </td><td>{ this.state.t7 }</td><td>{ this.state.forc7 }° </td> <td> {this.state.wind7 }mph </td> <td>{this.state.hum7}%</td></tr>
					</table>
                 : null }

					 <ul>

   					 	<li> {this.state.showList ? <img src= {this.state.image} height="50"> </img>  : null} </li>
    					<li> {this.state.showCloudItems ? <img src= "../../assets/backgrounds/jacket.png" height="50"> </img>  : null}</li>
    					<li> {this.state.showCloudItems ? <img src="../../assets/backgrounds/boots.png" height="50"> </img>  : null}</li>
    					<li> {this.state.showSunItems ? <img src= "../../assets/backgrounds/tshirt.png" height="50"> </img>  : null}</li>
    					<li> {this.state.showSunItems ? <img src="../../assets/backgrounds/water-bottle.png" height="50"> </img>  : null}</li>
    					<li> {this.state.showSnowItems ? <img src= "../../assets/backgrounds/hat.png" height="50"> </img>  : null}</li>
    					<li> {this.state.showSnowItems ? <img src="../../assets/backgrounds/micros.png" height="50"> </img>  : null}</li>

					</ul>




                    {this.state.showInfo ?
					<hr>
					                <div class = {style.paragraph}> { this.state.info } <p>  </p>  </div>
					        </hr>
                            :null}
                 </div>

                 {this.state.showSettingsIc ?
                 <ul>
					     <div class = {style.settingsIc}><li> <img src= "../../assets/backgrounds/settings-icon-6.png" height="90" onClick={::this.handleSetting}/>  </li>
    					 </div>

    			    </ul>
    			 : null}
    			 {this.state.showHikeIc ?
                    <ul>
    					 <div class = {style.hikeIc}><img src="../../assets/backgrounds/route.png" height="70" onClick={::this.handleClick}/>
					     </div>
					</ul>
					: null}

		
                 <div class={ style.city }>
                 {this.state.showPlanHike ?

                      <label>
                      Plan Hike
                      </label>


                 	:null}
                 	</div>


                 <div class={ style.city }>
                 {this.state.showSettings ?
                      <label>
                      Settings
                      </label>



                 	:null}
                 	</div>

				</div>



                 <div class = {style.tableForm}>
                 {this.state.showForm ?
                 <form onSubmit={this.loadPages}>
                 <table align = "center">
                 <tr>
                 <label>
                  Origin:
                  <td>
                  <input type="text" value={this.state.value2} onChange = {this.handleChange} align = "center" />
                  </td>
                  </label>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                  <label>
                  Destination:
                  <td>
                  <input type="text" value={this.state.value} onChange = {this.handleChange} align="center" />
                  </td>
                  </label>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                  </tr>
                  <tr>
                 
                 </tr>
                 </table>
                  </form>
                  : null }
                  </div>
				<div class={ style.details }> </div>
				<div class={ style.details }></div>
				<div class={ style.image }> {this.state.showHiker ?<img src="../../assets/backgrounds/hike.gif"  height="40" alt="hiker" > </img> :null} </div>
				<div class= { style_iphone.container }>
				<div class= { style_iphone.container }> </div>
				<div >  {this.state.showIframe ?  <iframe id="myFrame" align="center" width="350" height="300" frameborder="0" style="border:0"
					 src="https://www.google.com/maps/embed/v1/search?key=&q=London" allowfullscreen></iframe> :null}</div>

					 

			<div class= { style.buttonHike }>  {this.state.showButton ? <button onClick={::this.handleClick} > Plan hike</button> :null}</div>
			<div class = {style.settings}> {this.state.showSetting ? <button onClick= {:: this.handleSetting} > Settings </button> :null} </div>


			<div class= { style.buttonHike }>  {this.state.showButtonSub ? <button onClick={::this.loadPages} > Submit</button> :null}</div>


					     <div class = {style.settingsIc}> {this.state.showSettingsIc ? <img src= "../../assets/backgrounds/settings-icon-6.png" height="90" onClick={::this.handleSetting}/> : null}
    					 </div>





    					 <div class = {style.hikeIc}>{this.state.showHikeIc ? <img src="../../assets/backgrounds/route.png" height="70" onClick={::this.handleClick}/>: null}
					     </div>

					<div class = {style.not}> {this.state.showNotifications ?
		    	<form>
		    	<label>
		    	Notifications :
		    	</label>
		    	<input type = "radio" name = "n1" value = "on1" ></input> On
		    	<input type = "radio" name = "n1" value = "off1"> </input> Off
		    	<input type = "submit" value = "Save" onClick={::this.not1} > </input>
		    	</form>
		    	:null}
		    	</div>


			</div>
		 			</div>

		);
	}
	loadPages(event){
		var ori="https://www.google.com/maps/embed/v1/directions?key=AIzaSyDnhFgAWLBSWIzi0W9j8Q8cwP1byX86bV0&origin=";
		var fir="Lewisham";
		var sec="&destination=";
		var dest=this.state.value;
		var loc =ori.concat(fir,sec,dest);
		document.getElementById('myFrame').setAttribute('src', loc);
    }

	handleClick() {
 this.setState({ display: false });
 this.setState({showForm : true});
 this.setState({showInfo:false});
 this.setState({showHiker:false});
 this.setState({showPlanHike : true});
 this.setState({showSettings:false});
 this.setState({showSettingsIc:true});
 this.setState({showHikeIc:false});
 this.setState({showTemp : false});
 this.setState({showSunItems : false});
 this.setState({showCloudItems : false});
 this.setState({showSnowItems : false});
 this.setState({showNotifications:false});
 this.setState({showButtonSub : true});
 this.setState({showIframe : true});


}

handleSubmit(event)
{
     alert('A form was submitted: ' + this.state.value +  this.state.value2);
     event.preventDefault();
     this.setState({showForm : false});
	 this.setState({ display: true });
	 this.setState({showList : true});
	 this.setState({showHiker:true});
	 this.setState({showSettingsIc:true});
	 this.setState({showHikeIc:true});
	 this.setState({showPlanHike:false});
	 this.setState({showSettings:false});
	 this.setState({showTemp : true});
     this.setState({showInfo : true});
     this.setState({showNotifications:false});
		 this.setState({showButtonSub : false});

		// iframeCh(value);
		 this.setState({showIframe :false});

		if(this.state.temp > '20')
	    {
             this.setState({showSunItems : true});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp > 0 || this.state.temp <20)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : true});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp < 0)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : true});
	    }
}


// hand the setting on click method below

handleSetting(){

     this.setState({showHiker:false});
     this.setState({showForm:false});
     this.setState({display:false});
     this.setState({showSetting:false});
     this.setState({showButton : false});
     this.setState({showList:false});
     this.setState({showInfo : false});
     this.setState({showPlanHike:false});
     this.setState({showSettings : true});
     this.setState({showSettingsIc:false});
	 this.setState({showHikeIc:true});
	 this.setState({showTemp:false});
	 this.setState({showSunItems : false});
     this.setState({showCloudItems : false});
     this.setState({showSnowItems : false});
     this.setState({showNotifications:true});
		 this.setState({showButtonSub : false});

	 // iframeCh(value);
		this.setState({showIframe :false});
}


not1(event)
{

	this.setState({showForm : false});
	 this.setState({ display: true });
	 this.setState({showList : true});
	 this.setState({showHiker:true});
	 this.setState({showSettingsIc:true});
	 this.setState({showHikeIc:true});
	 this.setState({showPlanHike:false});
	 this.setState({showSettings:false});
	 this.setState({showTemp : true});
     this.setState({showInfo : true});
     this.setState({showNotifications:false});
		 this.setState({showButtonSub : false});

	 // iframeCh(value);
		this.setState({showIframe :false});
     if(this.state.temp > '20')
	    {
             this.setState({showSunItems : true});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp > 0 || this.state.temp <20)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : true});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp < 0)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : true});
	    }

	event.preventDefault();
	var radios = document.getElementsByName('n1');
	for (var i = 0, length = radios.length; i < length; i++) {
    /*if (radios[i].checked)
    {
        // do whatever you want with the checked radio
        alert(radios[i].value);
        break;
        // only one radio can be logically checked, don't check the rest


        /*if(this.state.forc>17  && radios[i].value == 'on1')
	{
		alert("Hi, love");
		break;
	}

        if(this.state.forc<17  && radios[i].value == 'on1')
	{
		alert("Bye");
		break;
	}
    }*/

    if(radios[i].checked && radios[i].value == 'on1' && this.state.forc<17)
    {
    	alert("Notifications turned on");
    }

    if(radios[i].checked && radios[i].value == 'off1' && this.state.forc<17)
    {
    	alert("your mum");
    }

    else
    {
        alert("Please select on or off for notifications");
    }



}








}
 handleChange(event) {
 	this.setState({value: event.target.value});
    this.setState({value2: event.target.value2});
  }


	parseResponse = (parsed_json) => {
		var location = parsed_json['current_observation']['display_location']['city'];
		var temp_c = parsed_json['current_observation']['temp_c'];
		var conditions = parsed_json['current_observation']['weather'];
		var date = parsed_json['current_observation']['local_time_rfc822'];

		var day1 = parsed_json['forecast']['txt_forecast']['forecastday'][0]['title'];
		var forecast = parsed_json['forecast']['simpleforecast']['forecastday'][1]['high']['celsius'];
		var windSpeed = parsed_json['forecast']['simpleforecast']['forecastday'][1]['maxwind']['mph'];
		var humidity1 = parsed_json['forecast']['simpleforecast']['forecastday'][1]['avehumidity'];

		var day2 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['title'];
		var forecast1 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['high']['celsius'];
		var windSpeed2 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['maxwind']['mph'];
		var humidity2 = parsed_json['forecast']['simpleforecast']['forecastday'][2]['avehumidity'];

		var day3 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['title'];
		var forecast2 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['high']['celsius'];
		var windSpeed3 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['maxwind']['mph'];
		var humidity3 = parsed_json['forecast']['simpleforecast']['forecastday'][3]['avehumidity'];

		var day4 = parsed_json['forecast']['txt_forecast']['forecastday'][6]['title'];
		var forecast3  = parsed_json['forecast']['simpleforecast']['forecastday'][4]['high']['celsius'];
		var windSpeed4 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['maxwind']['mph'];
		var humidity4 = parsed_json['forecast']['simpleforecast']['forecastday'][4]['avehumidity'];

		var day5 = parsed_json['forecast']['txt_forecast']['forecastday'][8]['title'];
		var forecast4 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['high']['celsius'];
		var windSpeed5 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['maxwind']['mph'];
		var humidity5 = parsed_json['forecast']['simpleforecast']['forecastday'][5]['avehumidity'];

		var day6 = parsed_json['forecast']['txt_forecast']['forecastday'][10]['title'];
		var forecast5 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['high']['celsius'];
		var windSpeed6 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['maxwind']['mph'];
		var humidity6 = parsed_json['forecast']['simpleforecast']['forecastday'][6]['avehumidity'];


		var day7 = parsed_json['forecast']['txt_forecast']['forecastday'][12]['title'];
		var forecast6 = parsed_json['forecast']['simpleforecast']['forecastday'][7]['high']['celsius'];
		var windSpeed7 = parsed_json['forecast']['simpleforecast']['forecastday'][7]['maxwind']['mph'];
		var humidity7 = parsed_json['forecast']['simpleforecast']['forecastday'][7]['avehumidity'];

		var img = parsed_json['forecast']['txt_forecast']['forecastday'][0]['icon_url'];
		var img1 = parsed_json['forecast']['txt_forecast']['forecastday'][2]['icon_url'];
		var img2 = parsed_json['forecast']['txt_forecast']['forecastday'][4]['icon_url'];
		var img3 = parsed_json['forecast']['txt_forecast']['forecastday'][6]['icon_url'];
		var img4 = parsed_json['forecast']['txt_forecast']['forecastday'][8]['icon_url'];
		var img5 = parsed_json['forecast']['txt_forecast']['forecastday'][10]['icon_url'];
		var img6 = parsed_json['forecast']['txt_forecast']['forecastday'][12]['icon_url'];
		var description = parsed_json['forecast']['txt_forecast']['forecastday'][0]['fcttext'];

		// set states for fields so they could be rendered later on
		this.setState({
			locate: location,
			temp: temp_c,
			cond : conditions,
			day : date,
			forc : forecast,
			forc2 : forecast1,
			forc3 : forecast2,
			forc4 : forecast3,
			forc5 : forecast4,
			forc6 : forecast5,
			forc7 : forecast6,
			wind1 : windSpeed,
			wind2 : windSpeed2,
			wind3 : windSpeed3,
			wind4 : windSpeed4,
			wind5 : windSpeed5,
			wind6 : windSpeed6,
			wind7 : windSpeed7,
			hum1 : humidity1,
			hum2 : humidity2,
			hum3 : humidity3,
			hum4 : humidity4,
			hum5 : humidity5,
			hum6 : humidity6,
			hum7 : humidity7,
			t1 : day1,
			t2 : day2,
			t3 : day3,
			t4 : day4,
			t5 : day5,
			t6 : day6,
			t7 : day7,
			image : img,
			image1: img1,
			image2: img2,
			image3: img3,
			image4: img4,
			image5: img5,
			image6: img6,
			info : description,

		});

		if(this.state.temp > '20')
	    {
             this.setState({showSunItems : true});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp > 0 || this.state.temp <20)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : true});
	    	this.setState({showSnowItems : false});
	    }

	    else if(this.state.temp < 0)
	    {
	    	this.setState({showSunItems : false});
	    	this.setState({showCloudItems : false});
	    	this.setState({showSnowItems : true});
	    }

	}
}
