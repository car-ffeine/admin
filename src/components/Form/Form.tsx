import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import type { ChangeEvent } from 'react';
import { useState, type FormEvent } from 'react';

import { useSetExternalState } from '@util/external-state';
import { getTypedObjectEntries } from '@util/getTypedObjectEntries';
import { getTypedObjectFromEntries } from '@util/getTypedObjectFromEntries';

import { modalStateStore } from '@store/modalStateStore';

import { STATION_DETAILS_CATEGORIES } from '@constant';

import type { StationEditProps } from '@type';

interface Props {
  element: StationEditProps;
}

function Form({ element }: Props) {
  const [inputs, setInputs] = useState(element);
  const setIsModalOpen = useSetExternalState(modalStateStore);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitForm = ({ target }: FormEvent<HTMLFormElement>) => {
    handleCloseModal();

    if (!(target instanceof HTMLFormElement)) {
      return;
    }

    const formData = new FormData(target);

    const editedData = getTypedObjectFromEntries([...formData]);
    console.log(getTypedObjectFromEntries([...formData]));

    if (Object.is(element, editedData)) {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Title>충전소 정보 수정</Title>
      <Fieldset>
        {getTypedObjectEntries(element).map(([key, value]) => {
          return (
            <div key={key}>
              <TextField
                name={key}
                type="text"
                label={STATION_DETAILS_CATEGORIES[key]}
                variant="outlined"
                css={label}
                value={inputs[key]}
                onChange={handleInputChange}
              />
              <Caption>{value}</Caption>
            </div>
          );
        })}
      </Fieldset>
      <ButtonContainer>
        <Button
          type="button"
          sx={{ marginRight: 1, color: '#6e6e6e' }}
          color="inherit"
          onClick={handleCloseModal}
        >
          취소하기
        </Button>
        <Button type="submit">수정하기</Button>
      </ButtonContainer>
    </form>
  );
}

const Fieldset = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 26px 6px;

  border: 0;

  & > div {
    width: 30%;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 40px;
`;

const label = css`
  & label {
    font-size: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;
  word-break: keep-all;

  &button {
    justify-content: end;
  }
`;

const Caption = styled.p`
  font-size: 14px;
  color: #333;
`;

export default Form;
