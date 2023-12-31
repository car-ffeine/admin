import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import type { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import type { FormEvent, ChangeEvent } from 'react';
import { useState } from 'react';

import { useSetExternalState } from '@util/external-state';
import { getTypedObjectEntries } from '@util/typed-object/getTypedObjectEntries';
import { getTypedObjectFromEntries } from '@util/typed-object/getTypedObjectFromEntries';

import { modalOpenStore } from '@store/modalStateStore';
import { toastActions } from '@store/toastStore';

import { useRequestStationEdit } from '@hook/stations/useRequestStationEdit';

import { lineClampCss } from '@style';

import { STATION_SUMMARY_CATEGORIES } from '@constant';

import type { StationSummary } from '@type';

export interface FormProps {
  element: StationSummary;
}

function Form({ element }: FormProps) {
  const [inputs, setInputs] = useState(element);

  const setIsModalOpen = useSetExternalState(modalOpenStore);
  const { requestEdit } = useRequestStationEdit();

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
      showToast('변경사항이 없습니다', 'error');

      return;
    }

    requestEdit(element.stationId, formData);
    handleCloseModal();
  };

  const compareFormDataToObject = (formData: FormData) => {
    const editedFormData = getTypedObjectFromEntries([...formData]);
    const originalValuesWithoutId = getTypedObjectEntries(element)
      .filter(([key]) => key !== 'stationId')
      .map(([_, value]) => value ?? '');
    const formValues = Object.values(editedFormData).map((value) => convertValue(value));

    return JSON.stringify(originalValuesWithoutId) === JSON.stringify(formValues);
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
    <AdminForm onSubmit={handleSubmitForm}>
      <Title>충전소 정보 수정</Title>
      <Fieldset>
        {getTypedObjectEntries(element).map(([key, value]) => {
          if (key === 'stationId') {
            return null;
          }

          return (
            <div key={`station-edit-form-${key}`}>
              {typeof value !== 'boolean' ? (
                <TextField
                  name={key}
                  type="text"
                  label={STATION_SUMMARY_CATEGORIES[key]}
                  variant="outlined"
                  css={labelCss}
                  value={inputs[key] ?? ''}
                  onChange={handleChangeInput}
                />
              ) : (
                <FormControl fullWidth>
                  <InputLabel id={`select-label-${key}`}>
                    {STATION_SUMMARY_CATEGORIES[key]}
                  </InputLabel>
                  <Select
                    labelId={`select-label-${key}`}
                    id={`select-${key}`}
                    name={key}
                    label={STATION_SUMMARY_CATEGORIES[key]}
                    value={String(inputs[key])}
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value="true" css={selectItemCss}>
                      true
                    </MenuItem>
                    <MenuItem value="false" css={selectItemCss}>
                      false
                    </MenuItem>
                  </Select>
                </FormControl>
              )}
              <Caption title={String(value)}>{String(value)}</Caption>
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
    </AdminForm>
  );
}

const AdminForm = styled.form`
  max-width: 800px;
`;

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

const labelCss = css`
  & label {
    font-size: 15px;
  }
`;

const selectItemCss = css`
  padding: 0 inherit;
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 16px;

  &button {
    justify-content: end;
  }
`;

const Caption = styled.p`
  ${lineClampCss(2)}

  padding: 0 14px;
  font-size: 14px;
  color: #333;
`;

export default Form;
