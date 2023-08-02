import { useCallback, useState } from 'react';

import { Button, Counter } from '~/components/atoms';
import { displayToastSuccess } from '~/helpers';

import { Form } from './Form';

export const Home = () => {
  const [value, setValue] = useState<number>(0);
  const handleOnClick = useCallback(() => {
    setValue((value) => value + 1);
    displayToastSuccess('increased!');
  }, []);

  return (
    <div id="app">
      <Counter value={value} />
      <Button onClick={handleOnClick} />
      <br />
      <br />
      <Form />
    </div>
  );
};
