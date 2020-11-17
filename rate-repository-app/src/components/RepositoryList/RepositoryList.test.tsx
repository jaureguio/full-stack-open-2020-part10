import React from 'react';
import { render } from '@testing-library/react-native';

import RepositoryListContainer from './RepositoryListContainer';

import { parseThousands } from '../../utils/helpers';
import { Repository } from '../../types';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const nodes: Repository[] = repositories.edges.map(({ node }) => node);

      const { getByText, getByTestId } = render(
        <RepositoryListContainer 
          repositories={nodes} 
        />
      );
      
      nodes.forEach(({
        id,
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        reviewCount,
        ratingAverage
      }) => {
        const [
          formatStars,
          formatForks,
          formatRevCount,
          formatRatingAvg
        ] = [stargazersCount, forksCount, reviewCount, ratingAverage ].map(parseThousands);

        // getByText throws when no instance with the specified text is found,
        // so explicitly asserting with 'expect()' is not necessary in these cases
        getByText(fullName);
        getByText(description);

        expect(getByTestId(`${id}/lang`)).toHaveTextContent(language);
        expect(getByTestId(`${id}/stars`)).toHaveTextContent(formatStars);
        expect(getByTestId(`${id}/forks`)).toHaveTextContent(formatForks);
        expect(getByTestId(`${id}/reviewCount`)).toHaveTextContent(formatRevCount);
        expect(getByTestId(`${id}/ratingAvg`)).toHaveTextContent(formatRatingAvg);
      });
    });
  });
});