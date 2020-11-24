import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { RepositoryListContainerProps } from '../../types';

type SortingMenuProps = Pick<RepositoryListContainerProps, 'sorting' | 'setSortingCriteria'>;

const SortingMenu: React.FC<SortingMenuProps> = ({ setSortingCriteria, sorting }) => {
  return (
    <RNPickerSelect
      onValueChange={(val) => setSortingCriteria(val)}
      value={sorting}
      items={[
        { label: 'Latest repositories', value: 'latest_repos' },
        { label: 'Highest rated repositories', value: 'highest_rated_repos' },
        { label: 'Lowest rated repositories', value: 'lowest_rated_repos' },
      ]} />
  );
};

export default SortingMenu;