import { Button as MuiButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  CheckboxGroup,
  CheckboxWithLabel,
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
  bootsStyleNumber: string;
  cities: string[];
  description: string;
  isInfoSame: boolean;
}

const defaultValues = {
  firstName: '',
  country: 'PL',
  isContactInfoSame: true,
  bootsStyleNumber: 'test2',
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

const bootsModelsList = [
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

  const toggleDetails = (isOpen: boolean) => {
    console.log('isOpen', isOpen);
  };

  const onChangeBoot = (value: string) => {
    console.log('value', value);
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
            onChange={toggleDetails}
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
            label="Boot model"
            name="bootsStyleNumber"
            onChange={onChangeBoot}
            control={control}
            options={bootsModelsList}
            width={264}
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
