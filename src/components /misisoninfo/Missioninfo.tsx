
import React from 'react';
import { LaunchMissionInfoQuery } from './../../generated/graphql'

interface Props {
    data: LaunchMissionInfoQuery
}
const MissionInfo: React.FC<Props> = ({ data }) => {
    return (
        <div className='MissionInfo'>
          <div className='MissionInfo_status'>
            
            {data.launch?.launch_success ? (
              <span className='MissionInfo_success'>Success</span>
            ) : (
              <span className='MissionInfo_failed'>Failed</span>
            )}
          </div>
          <h1 className='Missioninfo_title'>
            {data.launch?.mission_name}
            {data.launch?.rocket &&
              ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
          </h1>
          <p className='MissionInfo_description'>{data.launch?.details}</p>
          {!!data.launch?.links && !!data.launch.links.flickr_images && (
            <div className='MissionInfo_image-list'>
              {data.launch.links.flickr_images.map(image =>
                image ? <img src={image} alt='abc' className='Missioninfo_image' key={image} /> : null,
              )}
            </div>
          )}
        </div>
      );
    };

export default MissionInfo
