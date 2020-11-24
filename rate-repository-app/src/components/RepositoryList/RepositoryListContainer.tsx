import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withRouter, RouteComponentProps } from 'react-router-native';

import RepositoryView from '../RepositoryView';
import FilterInput from './FilterInput';
import SortingMenu from './SortingMenu';

import { RepositoryListContainerProps } from '../../types';

type RepositoryListContainerRoutedProps = 
  RepositoryListContainerProps & RouteComponentProps;

class RepositoryListContainer extends Component<RepositoryListContainerRoutedProps> {
  renderHeader = (): JSX.Element => {
    const { filter, setFilter, sorting, setSortingCriteria } = this.props;
    return (
      <>
        <FilterInput filter={filter} setFilter={setFilter}  />
        <SortingMenu setSortingCriteria={setSortingCriteria} sorting={sorting} />
      </>
    );
  };

  render() {
    const { repositories, history } = this.props;
    return (
      <FlatList
      data={repositories}
      keyExtractor={repo => repo.id}
      ListHeaderComponent={this.renderHeader}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item: repository }) => (
        <TouchableOpacity onPress={() => history.push(`/${repository.id}`)}>
          <View style={styles.mainContainer}>
            <RepositoryView repository={repository} />
          </View>
        </TouchableOpacity>
      )} 
    />
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
