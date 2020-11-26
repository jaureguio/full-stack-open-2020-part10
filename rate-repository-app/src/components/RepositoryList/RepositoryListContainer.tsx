import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withRouter, RouteComponentProps } from 'react-router-native';

import RepositoryView from '../RepositoryView';
import FilterInput from './FilterInput';
import SortingMenu from './SortingMenu';
import Text from '../../components/utilities/Text';

import { RepositoryListContainerProps as RLCProps, Repository } from '../../types';

type RLCRoutedProps = RLCProps & RouteComponentProps;

/**
 * 
 * Class component is used here in order to avoid losing focus on the TextInput from
 * FilterInput component when FlatList unmounts whats rendered from the
 * ListHeaderComponent prop (this.renderHeader). My understanding of this is that,
 * because renderHeader component is being defined as part of the class, which is
 * instantiated by React, FlatList ends up mounting and unmounting a component which is 
 * permanently instantiated (hence being stateful) during the lifetime of the
 * application.
 */

class RepositoryListContainer extends Component<RLCRoutedProps> {

  renderHeader = (): JSX.Element => {
    const {
      filter,
      setFilter,
      sorting,
      setSortingCriteria
    } = this.props;
    
    return (
      <>
        <FilterInput filter={filter} setFilter={setFilter}  />
        <SortingMenu setSortingCriteria={setSortingCriteria} sorting={sorting} />
      </>
    );
  };

  render() {
    const { repositories, loading, onEndReached, history } = this.props;

    const renderItem: React.FC<{ item: Repository }> = ({ item: repository }) => (
      <TouchableOpacity onPress={() => history.push(`/${repository.id}`)}>
        <View style={styles.mainContainer}>
          <RepositoryView repository={repository} />
        </View>
      </TouchableOpacity>
    );

    return (
      <>
        <FlatList
          data={repositories}
          keyExtractor={repo => repo.id}
          ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
        {loading && <Text>Loading repos...</Text>}
      </>
    );
  }
}

const ItemSeparator = () => <View style={{ height: 10 }} />;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  }
});

export default withRouter(RepositoryListContainer);
