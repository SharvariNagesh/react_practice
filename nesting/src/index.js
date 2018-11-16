import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Component from './Component';
import Card from './Card';

const App = () => {
	return(
	  <Card>
		<div className="ui container comments">
			<Component author="Sam" />
		</div>
	  </Card>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));


