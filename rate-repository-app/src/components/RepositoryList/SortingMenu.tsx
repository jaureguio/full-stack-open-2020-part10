import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import { RepositoryListContainerProps } from '../../types';

type SortingMenuProps = Omit<RepositoryListContainerProps, 'repositories'>;

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