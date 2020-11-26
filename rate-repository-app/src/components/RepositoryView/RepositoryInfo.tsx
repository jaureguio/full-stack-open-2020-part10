import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Text from '../utilities/Text';
import { styles } from '.';

const RepositoryInfo: React.FC<RepositoryInfoProps> = ({ ownerAvatarUrl, fullName, description, id, language}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={imageStyles.imageContainer}>
        <Image
          style={imageStyles.imageStyles}
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

const imageStyles = StyleSheet.create({
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