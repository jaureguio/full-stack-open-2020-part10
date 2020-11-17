import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '../utilities/Text';

import { parseThousands } from '../../utils/helpers';
import { Repository } from '../../types';
import theme from '../../utils/theme';

type RepositoryStatsProps = Record<'stars' | 'forks' | 'reviews' | 'ratingAvg', number> & { id: string }; 

const RepositoryView: React.FC<{ data: Repository }> = ({ data }) => (
  <>
    <View style={styles.sectionContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          source={{
            uri: data.ownerAvatarUrl
          }}
        />
      </View>
      <View style={styles.repoInfo}>
        <Text style={styles.subheading}>{data.fullName}</Text>
        <Text style={styles.bodyText}>{data.description}</Text>
        <Text style={styles.language} testID={`${data.id}/lang`}>{data.language}</Text>
      </View>
    </View>
    <RepositoryStats
      id={data.id}
      stars={data.stargazersCount}
      forks={data.forksCount}
      reviews={data.reviewCount}
      ratingAvg={data.ratingAverage}
    />
  </>
);

const RepositoryStats: React.FC<RepositoryStatsProps> = ({ id, stars, forks, reviews, ratingAvg }) => {
  return (
    <View style={[ styles.sectionContainer, styles.repoStats ]}>
      <View>
        <Text style={styles.boldText} testID={`${id}/stars`}>{parseThousands(stars)}</Text>
        <Text style={styles.bodyText}>Stars</Text>
      </View>
      <View>
        <Text style={styles.boldText}  testID={`${id}/forks`}>{parseThousands(forks)}</Text>
        <Text style={styles.bodyText}>Forks</Text>
      </View>
      <View>
        <Text style={styles.boldText}  testID={`${id}/reviewCount`}>{parseThousands(reviews)}</Text>
        <Text style={styles.bodyText}>Reviews</Text>
      </View>
      <View>
        <Text style={styles.boldText}  testID={`${id}/ratingAvg`}>{parseThousands(ratingAvg)}</Text>
        <Text style={styles.bodyText}>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    flex: 3,
  },
  imageStyles: {
    margin: 'auto',
    borderRadius: 4,
    height: 48,
    width: 48,
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

export default RepositoryView;