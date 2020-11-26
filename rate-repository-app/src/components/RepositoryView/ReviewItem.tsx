import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../utilities/Text';

import { formatDate } from '../../utils/helpers';
import theme from '../../utils/theme';
import { Review } from '../../types';

const ReviewItem: React.FC<ReviewItemProps> = ({ review, reviewsOnly = false }) => {
  return (
    <View style={reviewStyles.mainContainer}>
      <View style={reviewStyles.ratingContainer}>
        <View style={reviewStyles.rating}>
          <Text fontWeight='bold' color='primary' fontSize='subheading'>
            {review.rating}
          </Text>
        </View>
      </View>
      <View style={reviewStyles.reviewTextContainer}>
        <View>
          <Text fontWeight='bold'>
            {reviewsOnly
              ? review.repositoryId.replace('.', '/')
              : review.user.username}
          </Text>
          <Text color='textSecondary'>{formatDate(review.createdAt)}</Text>
        </View>
        <Text style={reviewStyles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

const reviewStyles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 12
  },
  ratingContainer: {
    flex: 4,
    alignItems: 'center'
  },
  rating: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  reviewTextContainer: {
    flex: 20,
    flexShrink: 1
  },
  reviewText: { 
    flexShrink: 1
  }
});

interface ReviewItemProps {
  review: Review;
  reviewsOnly?: boolean;
}

export default ReviewItem;