import React, { useEffect, useState } from 'react';

import TextInput from '../../components/utilities/TextInput';
import { RepositoryListContainerProps } from '../../types';

type FilterInputProps = Pick<RepositoryListContainerProps, 'filter' | 'setFilter'>;

const FilterInput: React.FC<FilterInputProps> = ({ filter, setFilter }) => {
  const [input, setInput] = useState(filter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilter(input);
    }, 500);
    return () => clearInterval(timer);
  }, [input]);
  
  return (
    <TextInput
      value={input}
      onChangeText={setInput}
      placeholder='Filter repositories'
    />
  );
};

export default FilterInput;