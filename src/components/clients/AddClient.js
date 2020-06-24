import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddClient extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		balance: ''
	};

	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-6'>
						<Link to='/' className='btn btn-link'>
							<i className='fas fa-arrow-circle-left'></i> Back to Dashboard
						</Link>
					</div>
				</div>
				<div className='card'>
					<div className='card-header'>
						<div className='card-body'>
							<form>
								<div className='form-group'>
									<label htmlFor='firstName'>First Name</label>
									<input
										type='text'
										class='form-control'
										name='firstName'
										minLength='2'
										required
										onChange={this.onChange}
										value={this.state.firstName}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddClient;
