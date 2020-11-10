import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from './Text';

import theme from '../utils/theme';
import { RepositoryItemProps, RepositoryStatsProps } from "../types";

const RepositoryListItem: React.FC<RepositoryItemProps> = ({ repo }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sectionContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyles}
            source={{
              uri: repo.ownerAvatarUrl
            }}
          />
        </View>
        <View style={styles.repoInfo}>
          <Text style={styles.subheading}>{repo.fullName}</Text>
          <Text style={styles.bodyText}>{repo.description}</Text>
          <Text style={styles.language}>{repo.language}</Text>
        </View>
      </View>
      <RepositoryStats
        stars={repo.stargazersCount}
        forks={repo.forksCount}
        reviews={repo.reviewCount}
        ratingAvg={repo.ratingAverage}
      />
    </View>
  );
};

const RepositoryStats: React.FC<RepositoryStatsProps> = ({ stars, forks, reviews, ratingAvg }) => {
  const parseThousands = (value: number) => {
    return value >= 1000 
     ? `${Math.round(value/100)/10}k`
     : value;
  };

  return (
    <View style={[ styles.sectionContainer, styles.repoStats ]}>
      <View>
        <Text style={styles.boldText}>{parseThousands(stars)}</Text>
        <Text style={styles.bodyText}>Stars</Text>
      </View>
      <View>
        <Text style={styles.boldText}>{parseThousands(forks)}</Text>
        <Text style={styles.bodyText}>Forks</Text>
      </View>
      <View>
        <Text style={styles.boldText}>{parseThousands(reviews)}</Text>
        <Text style={styles.bodyText}>Reviews</Text>
      </View>
      <View>
        <Text style={styles.boldText}>{parseThousands(ratingAvg)}</Text>
        <Text style={styles.bodyText}>Rating</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
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

export default RepositoryListItem;