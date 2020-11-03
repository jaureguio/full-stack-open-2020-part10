import React from 'react';
import { View, Text } from 'react-native';

import { RepositoryItemProps } from "../types";

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repo }) => (
  <View>
    <Text>Full name: {repo.fullName}</Text>
    <Text>Description: {repo.description}</Text>
    <Text>Language: {repo.language}</Text>
    <Text>Stars: {repo.stargazersCount}</Text>
    <Text>Forks: {repo.forksCount}</Text>
    <Text>Reviews: {repo.reviewCount}</Text>
    <Text>Rating: {repo.ratingAverage}</Text>
  </View>
);

export default RepositoryItem;