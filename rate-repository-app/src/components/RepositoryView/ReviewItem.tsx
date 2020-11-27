import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-native';
import { useMutation, gql } from '@apollo/react-hooks';

import Text from '../utilities/Text';
import Button from '../utilities/Button';

import { formatDate } from '../../utils/helpers';
import theme from '../../utils/theme';
import { Review } from '../../types';

const DELETE_REVIEW = gql`
  mutation deleteReview($id: ID!) {
    deleteReview(id: $id)
  }
`;

const ReviewItem: React.FC<ReviewItemProps> = ({ review, reviewsOnly = false, refetch }) => {
  const history = useHistory();
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const handleViewRepository = () => {
    history.push(`/${review.repositoryId}`);
  };

  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'DELETE', onPress: async () => {
          if(refetch) {
            await deleteReview({ variables: { id: review.id } });
            await refetch({ includeReviews: true }); 
          }
        }},
      ]
    );
  };

  const callToAction = (
    <View style={[
      reviewStyles.ctaActionsContainer,
      reviewStyles.horizontalArrange]}
    >
      <Button
        fontWeight='bold'
        onPress={handleViewRepository}
        customStyles={{
          container: {
            paddingHorizontal: 36,
            paddingVertical: 12,
            backgroundColor: theme.colors.primary
          }
        }}
      >
        View Repository
      </Button>
      <Button
        fontWeight='bold'
        onPress={handleDelete}
        customStyles={{
          container: {
            paddingHorizontal: 36,
            paddingVertical: 12,
            backgroundColor: 'red'
          }
        }}
      >
        Delete Review
      </Button>
    </View>
  );
  
  return (
    <View style={reviewStyles.mainContainer}>
      <View style={reviewStyles.horizontalArrange}>
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
      { reviewsOnly && callToAction } 
    </View>
  );
};

const reviewStyles = StyleSheet.create({
  mainContainer: { 
    backgroundColor: 'white',
    padding: 12
  },
  horizontalArrange: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    flex: 16,
    flexShrink: 1
  },
  reviewText: { 
    flexShrink: 1
  },
  ctaActionsContainer: {
    marginTop: 12
  }
});

interface ReviewItemProps {
  review: Review;
  reviewsOnly?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch?: (variables: any) => Promise<any>;
}

export default ReviewItem;