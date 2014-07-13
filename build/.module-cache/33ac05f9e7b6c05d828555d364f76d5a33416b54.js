/** @jsx React.DOM */
(function () {
	'use strict';

	var TechnologyComponent = React.createClass({displayName: 'Technology',
		propTypes:{
			Features: React.PropTypes.array.isRequired
		},
		getInitialState: function(){
			return {
				name: this.props.data[0],
				Features: this.props.data[0].Features
			};
		},
		render: function (){
			//return React.DOM.div(null, 
			//	this.props.Features.map(function(t){
			//		return Features( {name:t} );
			//	})
			//);
			return (
				<div>
				<div className="row">
					<div className="col-md-4">
 						<img src="{this.state.Features.imageUrl" className="feature"/>
 					</div>
 					<div className="col-md-7">
						{this.state.Features.map(function(feature){
							return <Features name={feature}, this/>
						})}
 						</div>
						<div className="col-md-1"></div>
					</div>
				</div>)
		}
	});

	var Features = React.createClass({displayName: 'Features',
		propTypes:{
			name: React.PropTypes.string.isRequired
		},
		render: function (){
			return React.DOM.div(null, React.DOM.h4(null, this.props.name));
		}
	})

	var data = [
	{
		name:'Twitter BootStrap'
		imageUrl: 'images/twitter-boostrap.jpg'
		Features:['css', 'javascript']
	},
	{
		name:'Zurb Foundation'
		imageUrl: 'images/foundation-logo.jpg'
		Features: ['responsive', 'mobile first', 'encouraged to hack']
	}
	]

	React.renderComponent(TechnologyComponent( {data={data} ), document.getElementById('app'));

})();