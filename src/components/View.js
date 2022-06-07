import React from 'react';
import ReactDOM from 'react-dom';
import ReactStreetview from 'react-streetview';

const gooogleMapsApiKey = process.env.KEY;


export class View extends React.Component {
	
	render() {
		const { lat, long } = this.props;
		// see https://developers.google.com/maps/documentation/javascript

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