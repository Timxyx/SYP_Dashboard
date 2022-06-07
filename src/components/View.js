import React from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-streetview';


export class View extends React.Component {
	
	render() {
		const { lat, long } = this.props;
		// see https://developers.google.com/maps/documentation/javascript
		const googleMapsApiKey = 'AIzaSyCOCxMa8GnHsSSYSXqB1cBuOla_bjRjMQM';

		// see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanoramaOptions
		const streetViewPanoramaOptions = {
			position: {lat: lat, lng: long},
			pov: {heading: 100, pitch: 0},
			zoom: 1
		};

		return (
			<div style={{
				width: '800px',
				height: '450px',
				backgroundColor: '#eeeeee'
			}}>
				<ReactStreetview
					apiKey={googleMapsApiKey}
					streetViewPanoramaOptions={streetViewPanoramaOptions}
				/>
			</div>
		);
	}
}
export default View;