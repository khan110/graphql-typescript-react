import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql'
import MissionList, { OwnProps } from './Missionlist';

const MissionContainer = (props: OwnProps) => {

    const { data, error, loading } = useMissionsInfoQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);

    return (
        <MissionList data={data} {...props} />
    )
}

export default MissionContainer