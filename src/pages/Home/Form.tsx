import { Button as MuiButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Autocomplete,
  CheckboxGroup,
  CheckboxWithLabel,
  Dropdown,
  RadioButtonWithLabel,
  RadioGroup,
  Select,
  Textarea,
  TextField,
} from '~/components/atoms';

// Update this interface according to your form and move it outside this file
interface FormData {
  firstName: string;
  country: string;
  isContactInfoSame: boolean;
  model: string;
  model1: string;
  model2: string;
  cities: string[];
  description: string;
  isInfoSame: boolean;
}

const defaultValues = {
  firstName: '',
  country: 'PL',
  isContactInfoSame: true,
  model: 'test2',
  model1: 'test2',
  model2: 'test1',
  cities: ['09'],
  description: '',
  isInfoSame: false,
};

const countriesList = [
  {
    label: 'Poland',
    value: 'PL',
  },
  {
    label: 'Czech Republic',
    value: 'CZ',
  },
  {
    label: 'Lithuania',
    value: 'LT',
  },
];

const dataItemsList = [
  {
    label: 'Test 1',
    value: 'test1',
  },
  {
    label: 'Test 2',
    value: 'test2',
  },
  {
    label: 'Test 3',
    value: 'test3',
  },
];

const citiesList = [
  {
    label: 'Kyiv',
    value: '11',
  },
  {
    label: 'Lviv',
    value: '14',
  },
  {
    label: 'Ivano-Frankivsk',
    value: '09',
  },
];

export const Form = () => {
  const [result, setResult] = useState<FormData | null>(null);
  const methods = useForm<FormData>({
    defaultValues,
    // resolver: yupResolver(schema), TODO: update resolver here
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data) => {
    console.log('data', data);
    setResult(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack width="400px">
        <Stack direction="row" mb={2}>
          <TextField control={control} name="firstName" label="First name" />
        </Stack>
        <Stack direction="row" mb={2}>
          <RadioGroup
            name="country"
            label="Country"
            control={control}
            options={countriesList}
            sx={{
              '& .MuiFormControlLabel-root': {
                mr: 6,
                '&:last-child': {
                  mr: 0,
                },
              },
            }}
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <CheckboxWithLabel
            control={control}
            name="isContactInfoSame"
            label="Same details?"
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <RadioButtonWithLabel
            control={control}
            name="isInfoSame"
            label="Same info?"
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <Select
            label="Choose model"
            name="model"
            control={control}
            options={dataItemsList}
            width={264}
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <Dropdown
            label="Choose model"
            name="model1"
            control={control}
            options={dataItemsList}
            wrapProps={{
              sx: {
                width: 264,
              },
            }}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                height: '42px',
                outline: 'none',
              },
            }}
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <CheckboxGroup
            name="cities"
            label="City"
            control={control}
            options={citiesList}
            sx={{
              '& .MuiFormControlLabel-root': {
                mr: 6,
                '&:last-child': {
                  mr: 0,
                },
              },
            }}
            gridSize={4}
            gridProps={{
              direction: 'column',
              alignContent: 'flex-start',
              columnSpacing: 16,
              sx: { height: '108px' },
            }}
          />
        </Stack>
        <Stack direction="row" mb={2}>
          <Autocomplete
            name="model2"
            label="Check data item"
            control={control}
            options={dataItemsList}
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                height: '42px',
                padding: '9px 14px',
                outline: 'none',
              },
            }}
          />
        </Stack>
        <Textarea name="description" label="Description" control={control} />
        <Stack direction="row" mb={2}>
          <MuiButton type="submit" variant="contained">
            Submit
          </MuiButton>
        </Stack>
        <Stack>
          <Typography>Form result:</Typography>
          <code>{JSON.stringify(result)}</code>
        </Stack>
      </Stack>
    </form>
  );
};
