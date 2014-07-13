/** @jsx React.DOM */
(function () {
	'use strict';

	var Technology = React.createClass({
		propTypes:{
			Tools: React.PropTypes.array.isRequired
		},
		render: function (){
			return <Appender>
				{this.props.Tools.map(function(t){
					return <Tools name={t} />;
				})}
			</Appender>;
		}
	});

	var Tools = React.createClass({
		propTypes:{
			name: React.PropTypes.string.isRequired
		},
		render: function (){
			return <dd><a>{this.props.name}</a></dd>;
		}
	})


var Appender = React.createClass({
  render: function () {
    return <dl className="accordion" data-accordion>{this.props.children}</dl>;
  }
});

	React.renderComponent(<Technology Tools={['Bootstrap', 'Foundation', 'Other']} />, document.getElementById('app'));

})();