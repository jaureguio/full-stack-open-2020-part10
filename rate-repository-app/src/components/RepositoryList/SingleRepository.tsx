import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useQuery } from '@apollo/react-hooks';

import Text from '../utilities/Text';

import { SINGLE_REPO_REVIEWS } from '../../graphql/queries';
import { parseThousands, formatDate } from '../../utils/helpers';
import { Repository } from '../../types';
import theme from '../../utils/theme';

interface Review {
  id: string;
  text: string;
  rating: number;
  createdAt: string;
  user: {
    id: string;
    username: string;
  }
}

interface SingleRepositoryReviewsData {
  repository: {
    reviews: {
      edges: { node: Review }[]
    }
  }
}

interface SingleRepositoryProps {
  repository: Repository;
  singleView?: boolean;
}

const SingleRepository: React.FC<SingleRepositoryProps> = ({ repository, singleView = false}) => {
  const { data, loading } = useQuery<SingleRepositoryReviewsData, { id: string }>(SINGLE_REPO_REVIEWS, { variables: { id: repository.id }});
  
  let reviews: Review[] = [];

  if(data?.repository.reviews) {
    reviews = data.repository.reviews.edges.map(({ node }) => node);
  }

  return (singleView
    ? (
      <>
        <FlatList
          data={reviews}
          keyExtractor={review => review.id}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item: review }) => <ReviewItem review={review} />}
          ListHeaderComponent={() => (
            <RepositoryView repository={repository} singleView={singleView} />
          )}
        />
        {loading && <Text>Loading reviews...</Text>}
      </>
    ) : (
      <RepositoryView repository={repository} singleView={singleView} />
    )
  );
};

const ItemSeparator = () => <View style={{ height: 10 }} />;

const RepositoryView: React.FC<SingleRepositoryProps> = ({ repository, singleView = false }) => (
  <View style={singleView && { marginBottom: 10, backgroundColor: 'white' }}>
    <RepositoryInfo 
      ownerAvatarUrl={repository.ownerAvatarUrl}
      fullName={repository.fullName}
      description={repository.description}
      id={repository.id}
      language={repository.language}
    />
    <RepositoryStats
      id={repository.id}
      stars={repository.stargazersCount}
      forks={repository.forksCount}
      reviews={repository.reviewCount}
      ratingAvg={repository.ratingAverage}
    />
    {singleView && <GitHubLink repositoryUrl={repository.url} />}
  </View>
);

type RepositoryInfoProps = Record<'ownerAvatarUrl' | 'fullName' | 'description' | 'id' | 'language', string>;

const RepositoryInfo: React.FC<RepositoryInfoProps> = ({ ownerAvatarUrl, fullName, description, id, language}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyles}
          source={{
            uri: ownerAvatarUrl
          }}
        />
      </View>
      <View style={styles.repoInfo}>
        <Text style={styles.subheading}>{fullName}</Text>
        <Text style={styles.bodyText}>{description}</Text>
        <Text style={styles.language} testID={`${id}/lang`}>{language}</Text>
      </View>
    </View>
  );
};

type RepositoryStatsProps = Record<'stars' | 'forks' | 'reviews' | 'ratingAvg', number> & { id: string };

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

type GitHubLinkProps = Record<'repositoryUrl', string>;

const GitHubLink: React.FC<GitHubLinkProps> = ({ repositoryUrl }) => {
  return (
    <TouchableWithoutFeedback onPress={() => WebBrowser.openBrowserAsync(repositoryUrl)}>
      <View style={[styles.sectionContainer, styles.buttonContainer]}>
        <Text style={styles.buttonText}>Open in GitHub</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const ReviewItem: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <View style={{ backgroundColor: 'white', flexDirection: 'row', padding: 12 }}>
      <View style={{
          flex: 4,
          alignItems: 'center'
        }}
      >
        <View style={{
            height: 48,
            width: 48,
            borderRadius: 24,
            borderColor: theme.colors.primary,
            borderStyle: 'solid',
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            fontWeight='bold'
            color='primary'
            fontSize='subheading'
          >
            {review.rating}
          </Text>
        </View>
      </View>
      <View style={{ flex: 20, flexShrink: 1 }}>
        <View>
          <Text fontWeight='bold'>{review.user.username}</Text>
          <Text color='textSecondary'>{formatDate(review.createdAt)}</Text>
        </View>
        <Text style={{ flexShrink: 1 }}>{review.text}</Text>
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
  },
  buttonContainer: {
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold
  }
});

export default SingleRepository;