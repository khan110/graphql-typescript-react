  
import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql'
import  './style.css';

export interface OwnProps {
    handleIdChange : (newId:any ) => void;}
    interface Props extends OwnProps {
    data: MissionsInfoQuery
}
const MissionList: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className='MissionList'>
            <h3>Missions</h3>
            <ul className='MissionList_list'>
                {data.launches?.map((launchObj, ind) => 
                   !!launchObj &&  (<li key={ind} className='MissionList_item' 
                    onClick={() => handleIdChange(launchObj.mission_name)}> 
                      {launchObj.mission_name}
                    </li>)
                )}
            </ul>
        </div>
    )
}

export default MissionList;
