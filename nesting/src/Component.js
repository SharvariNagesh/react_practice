import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const Component = props => {
  	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={faker.image.avatar()} />
			</a>
		
			<div className="content">
				<a href="/" className="author">
					{props.author}
				</a>
				
				<div className="metadata">
					<span className="date"> at 6pm </span>
				</div>
				<div className="text"> Nice article! </div>
			</div>
		</div>
	);
}

export default Component;