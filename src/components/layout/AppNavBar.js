import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNavBar extends Component {
	render() {
		return (
			<navbar className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
				<div className='container'>
					<Link to='/' className='navbar-brand'>
						Freelanciful
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarMain'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarMain'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item'>
								<Link to='/' className='nav-link'>
									Dashboard
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</navbar>
		);
	}
}

export default AppNavBar;
