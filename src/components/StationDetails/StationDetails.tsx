import styled from '@emotion/styled';

import { Fragment } from 'react';

import { getTypedObjectEntries } from '@util/typed-object/getTypedObjectEntries';

import { useFetchStationDetails } from '@hook/stations/useFetchStationDetails';

import { STATION_DETAILS_CATEGORIES } from '@constant';

interface Props {
  stationId: string;
}

function StationDetails({ stationId }: Props) {
  const { data: details } = useFetchStationDetails(stationId);

  return (
    <Container>
      <Title>상세 정보</Title>
      {getTypedObjectEntries(STATION_DETAILS_CATEGORIES).map(([key, category]) => {
        return (
          <Fragment key={key}>
            <h4>{category}</h4>
            <p>{String(details[key])}</p>
          </Fragment>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 8px auto 48px;
  text-align: center;
  font-size: 15px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

export default StationDetails;
