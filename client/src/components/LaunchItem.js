import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
	launch: { flight_number, mission_name, launch_date_local, launch_success }
}) => {
	return (
		<div className='card card-body mb-3'>
			<div className='row' style={{ justifyContent: 'space-between' }}>
				<div className='col-md-9'>
					<h4>
						Mission:{' '}
						<span
							className={classNames({
								'text-success': launch_success,
								'text-danger': !launch_success
							})}>
							{mission_name}
						</span>
					</h4>
					<p>
						Date: <Moment format='DD-MM-YYYY HH:mm'>{launch_date_local}</Moment>
					</p>
				</div>
				<div className='col-md-2'>
					<Link className='btn btn-secondary' to={`/launch/${flight_number}`}>
						Launch Details
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LaunchItem;
