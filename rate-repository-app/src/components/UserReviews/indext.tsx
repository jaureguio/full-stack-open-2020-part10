import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import RepositoryView from '../RepositoryView';

import { AUTHORIZED_USER } from '../../graphql/queries';
import { AuthorizedUser, Review } from '../../types';


const UserReviews: React.FC = () => {
  const { data, loading, refetch } = useQuery<AuthorizedUser>(AUTHORIZED_USER, {
    variables: { includeReviews: true }
  });

  let userReviews: Review[] | undefined;

  if(data?.authorizedUser) {
    userReviews = data.authorizedUser.reviews.edges.map(({ node }) => node);
  }

  return <RepositoryView reviews={userReviews} loadingReviews={loading} refetch={refetch} />;
};

export default UserReviews;