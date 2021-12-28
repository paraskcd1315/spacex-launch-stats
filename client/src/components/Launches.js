import React from 'react';
import { gql, useQuery } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

const Launches = () => {
	const { loading, error, data } = useQuery(LAUNCHES_QUERY);
	if (loading) return <h1 className='display-4 my-3'>Loading...</h1>;
	if (error) return <h1 className='display-4 my-3'>Error :(</h1>;
	return (
		<>
			<h1 className='display-4 m-5'>Launches</h1>
			<MissionKey />
			<div className='mx-5'>
				{data.launches.map((launch) => (
					<LaunchItem key={launch.flight_number} launch={launch} />
				))}
			</div>
		</>
	);
};

export default Launches;
