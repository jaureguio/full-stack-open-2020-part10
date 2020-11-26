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
  loadingReviews = false
}) => {
  
  const listHeaderComponent = repository
    ? <RepositoryData repository={repository} githubLink={githubLink} />
    : null;

  return (reviews.length
    ? (<>
        <FlatList
          data={reviews}
          keyExtractor={review => review.id}
          renderItem={({ item }) => <ReviewItem review={item} reviewsOnly={!repository} />}
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

export const styles = StyleSheet.create({
  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 3,
  },
  repoInfo: {
    flex: 13,
    justifyContent: 'space-between',
  },
  language: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  repoStats: {
    justifyContent: 'space-around'
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  boldText: {
    textAlign: 'center',
    paddingVertical: 4,
    fontWeight: theme.fontWeights.bold,
  },
  bodyText: {
    paddingVertical: 4,
    color: theme.colors.secondary,
  }
});

export interface RepositoryViewProps {
  repository?: Repository;
  githubLink?: boolean;
  reviews?: Review[];
  handleFetchMore?: () => void;
  loadingReviews?: boolean;
}

export default RepositoryView;