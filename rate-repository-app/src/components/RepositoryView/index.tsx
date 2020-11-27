import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import RepositoryData from './RepositoryData';
import ReviewItem from './ReviewItem';
import Text from '../utilities/Text';

import theme from '../../utils/theme';
import { Repository, Review } from '../../types';

const RepositoryView: React.FC<RepositoryViewProps> = ({
  repository,
  reviews = [],
  githubLink = false,
  handleFetchMore,
  loadingReviews = false,
  refetch
}) => {
  
  const listHeaderComponent = repository
    ? <RepositoryData repository={repository} githubLink={githubLink} />
    : null;

  return (reviews.length
    ? (<>
        <FlatList
          data={reviews}
          keyExtractor={review => review.id}
          renderItem={({ item }) => <ReviewItem review={item} reviewsOnly={!repository} refetch={refetch} />}
          ItemSeparatorComponent={ItemSeparator}
          ListHeaderComponent={listHeaderComponent}
          onEndReached={handleFetchMore}
          onEndReachedThreshold={0.1}
        />
        {loadingReviews && <Text>Loading more reviews...</Text>}
      </>)
    : listHeaderComponent
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

export interface RepositoryViewProps {
  repository?: Repository;
  githubLink?: boolean;
  reviews?: Review[];
  handleFetchMore?: () => void;
  loadingReviews?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch?: (variables: any) => Promise<any>
}

export default RepositoryView;