import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../utils/theme';

import Text from '../utilities/Text';

const RepositoryInfo: React.FC<RepositoryInfoProps> = ({ ownerAvatarUrl, fullName, description, id, language}) => {
  return (
    <View style={imageStyles.sectionContainer}>
      <View style={imageStyles.imageContainer}>
        <Image
          style={imageStyles.imageStyles}
          source={{
            uri: ownerAvatarUrl
          }}
        />
      </View>
      <View style={imageStyles.repoInfo}>
        <Text style={imageStyles.subheading}>{fullName}</Text>
        <Text style={imageStyles.bodyText}>{description}</Text>
        <Text style={imageStyles.language} testID={`${id}/lang`}>{language}</Text>
      </View>
    </View>
  );
};

const imageStyles = StyleSheet.create({
  sectionContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  repoInfo: {
    flex: 13,
    justifyContent: 'space-between',
  },
  subheading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  bodyText: {
    paddingVertical: 4,
    color: theme.colors.secondary,
  },
  language: {
    padding: 4,
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
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
});

type RepositoryInfoProps = Record<
  | 'ownerAvatarUrl'
  | 'fullName'
  | 'description'
  | 'id'
  | 'language', string>;

export default RepositoryInfo;