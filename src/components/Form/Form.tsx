import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import type { ChangeEvent } from 'react';
import { useState, type FormEvent } from 'react';

import { useSetExternalState } from '@util/external-state';
import { getTypedObjectEntries } from '@util/getTypedObjectEntries';
import { getTypedObjectFromEntries } from '@util/getTypedObjectFromEntries';

import { modalStateStore } from '@store/modalStateStore';
import { toastActions } from '@store/toastStore';

import { STATION_DETAILS_CATEGORIES } from '@constant';

import type { StationCategoryValuesWithoutID } from '@type';
import { type StationEditProps } from '@type';

interface Props {
  element: StationEditProps;
}

function Form({ element }: Props) {
  const [inputs, setInputs] = useState(element);

  const setIsModalOpen = useSetExternalState(modalStateStore);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeInput = ({ target: { value, name } }: ChangeEvent<HTMLInputElement>) => {
    setInputs((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeSelect = ({ target: { value, name } }: SelectChangeEvent) => {
    setInputs((prevData) => ({
      ...prevData,
      [name]: value === 'true' ? true : false,
    }));
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { target } = event;
    if (!(target instanceof HTMLFormElement)) {
      return;
    }

    const { showToast } = toastActions;

    const formData = new FormData(target);
    const areValuesEqual = compareFormDataToObject(formData);

    if (areValuesEqual) {
      return showToast('변경사항이 없습니다', 'error');
    }

    handleCloseModal();
  };

  const compareFormDataToObject = (formData: FormData) => {
    const editedFormData = getTypedObjectFromEntries([...formData]);
    const originalValues: StationCategoryValuesWithoutID[] = Object.values(element);
    const formValues = Object.values(editedFormData).map((value) => convertValue(value));

    return JSON.stringify(originalValues) === JSON.stringify(formValues);
  };

  const convertValue = (value: string | FormDataEntryValue) => {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }

    const numValue = value === '' ? NaN : Number(value);
    if (!isNaN(numValue)) {
      return numValue;
    }

    return value;
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <Title>충전소 정보 수정</Title>
      <Fieldset>
        {getTypedObjectEntries(element).map(([key, value]) => {
          return (
            <div key={key}>
              {typeof value !== 'boolean' ? (
                <TextField
                  name={key}
                  type="text"
                  label={STATION_DETAILS_CATEGORIES[key]}
                  variant="outlined"
                  css={label}
                  value={inputs[key]}
                  onChange={handleChangeInput}
                />
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="select-label">{STATION_DETAILS_CATEGORIES[key]}</InputLabel>
                  <Select
                    labelId="select-label"
                    id="select"
                    name={key}
                    label={STATION_DETAILS_CATEGORIES[key]}
                    value={String(inputs[key])}
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value="true" css={selectItem}>
                      True
                    </MenuItem>
                    <MenuItem value="false" css={selectItem}>
                      False
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
              <Caption>{String(value)}</Caption>
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
  gap: 40px 6px;

  border: 0;

  & > div {
    width: 30%;

    & > div {
      width: 100%;
    }
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

const selectItem = css`
  padding: 0 inherit;
  font-size: 14px;
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
