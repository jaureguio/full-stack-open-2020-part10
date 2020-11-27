import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import FormikTextInput from '../utilities/FormikTextInput';

import { CREATE_REVIEW } from '../../graphql/mutations';
import { TouchableNativeHandleSubmit } from '../../types';
import Button from '../utilities/Button';

const initialValues: ReviewInput<string> = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

// TODO: IMPLEMENT THIS USING THE <Form /> COMPONENT FROM UTILITIES

const ReviewForm: React.FC = () => {
  const [createReview] = useMutation<ReviewData, ReviewInput<number>>(CREATE_REVIEW);
  const history = useHistory();

  const saveReview = async (reviewInput: ReviewInput<string>) => {
    const formattedReviewInput: ReviewInput<number> = { ...reviewInput, rating: Number(reviewInput.rating) };

    try {
      const { data } = await createReview({ variables: formattedReviewInput });
      if(data?.createReview) {
        history.push(`/${data.createReview.repositoryId}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={saveReview}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }: TouchableNativeHandleSubmit) => (
        <View style={{
          paddingHorizontal: 12,
          paddingVertical: 8,
          justifyContent: 'space-evenly',
          backgroundColor: 'white',
        }}>
          <FormikTextInput name='ownerName' placeholder='Repository owner username' />
          <FormikTextInput name='repositoryName' placeholder='Repository name' />
          <FormikTextInput name='rating' placeholder='Rating' keyboardType='numeric' />
          <FormikTextInput name='text' placeholder='Review text' multiline />
          <Button
            backgroundColor='primary'
            fontWeight='bold'
            customStyles={styles}
            onPress={handleSubmit}
          >
            Save Review
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  }
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .trim()
    .required('Repository owner username is required'),
  repositoryName: yup
    .string()
    .trim()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Minimum rating is 0')
    .max(100, 'Maximium rating is 100')
    .required('Please provide a rating between 0 and 100'),
  review: yup
    .string()
    .trim()
});

/**
 * Generic interface in order to account for inputs from the form fields (rating: string)
 * and for the data used as variable for the graphql mutation (rating: number)
 */

interface ReviewInput<T> {
  ownerName: string;
  repositoryName: string;
  rating: T;
  text: string;
}

interface ReviewData {
  createReview: {
    repositoryId: string;
    id: string;
    text: string;
    createdAt: string;
    rating: number;
    user: {
      username: string;
    }
  }
}

export default ReviewForm;