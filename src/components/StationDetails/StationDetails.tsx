import styled from '@emotion/styled';

import { getTypedObjectEntries } from '@util/typed-object/getTypedObjectEntries';

import { useFetchStationDetails } from '@hook/stations/useFetchStationDetails';

import { STATION_DETAILS_CATEGORIES } from '@constant';

import ChargerCard from './ChargerCard';

export interface StationDetailsProps {
  stationId: string;
}

function StationDetails({ stationId }: StationDetailsProps) {
  const { data: details } = useFetchStationDetails(stationId);

  return (
    <Container>
      <Title>상세 정보</Title>
      <FlexContainer>
        {getTypedObjectEntries(STATION_DETAILS_CATEGORIES).map(([key, category]) => {
          return key !== 'chargers' ? (
            <DetailsContainer key={`station-details-${key}`}>
              <Category>{category}</Category>
              <Details>{details[key] === '' ? '정보 없음' : String(details[key])}</Details>
            </DetailsContainer>
          ) : null;
        })}
      </FlexContainer>
      <h4>{STATION_DETAILS_CATEGORIES['chargers']}</h4>
      <ChargerContainer>
        {details['chargers'].map((charger) => {
          return <ChargerCard key={charger.chargerId} {...charger} />;
        })}
      </ChargerContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 8px auto 48px;
  font-size: 15px;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 52px;
`;

const DetailsContainer = styled.div`
  width: 30%;
`;

const ChargerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 8px;
`;

const Category = styled.h4`
  margin-bottom: 0;
`;

const Details = styled.p`
  margin-top: 4px;
  font-size: 14px;
`;

export default StationDetails;
