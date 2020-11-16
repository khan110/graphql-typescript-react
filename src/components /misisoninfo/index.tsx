import React from 'react';
import { useLaunchMissionInfoQuery } from './../../generated/graphql'
import MissionInfo from './Missioninfo';

interface OwnProps {
    id: number;
  }
  
  const MissionInfoContainer = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchMissionInfoQuery({
      variables: { id: String(id) },
    });
    React.useEffect(() => {
      refetch();
    }, [id, refetch]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>ERROR</div>;
    } console.log(error)
  
    if (!data) {
      return <div>Select a flight from the panel</div>;
    }
  
    return <MissionInfo data={data} />;
  };
  
export default MissionInfoContainer