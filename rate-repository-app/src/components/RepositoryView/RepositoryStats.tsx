import React from 'react';
import { View } from 'react-native';

import Text from '../utilities/Text';
import { styles } from '.';
import { parseThousands } from '../../utils/helpers';

const RepositoryStats: React.FC<RepositoryStatsProps> = ({ id, stars, forks, reviews, ratingAvg }) => {
  return (
    <View style={[ styles.sectionContainer, styles.repoStats ]}>
      <View>
        <Text style={styles.boldText} testID={`${id}/stars`}>{parseThousands (stars)}</Text>
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

interface RepositoryStatsProps extends Record<'stars' | 'forks' | 'reviews' | 'ratingAvg', number> { 
  id: string
}

export default RepositoryStats;