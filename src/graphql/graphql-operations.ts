import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Article = {
  __typename?: 'Article';
  body?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDraft: Article;
  publish?: Maybe<Article>;
};


export type MutationCreateDraftArgs = {
  body: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationPublishArgs = {
  draftId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  draftArticles: Array<Maybe<Article>>;
  publishedArticles?: Maybe<Array<Maybe<Article>>>;
};

export type CreateDraftMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
}>;


export type CreateDraftMutation = { __typename?: 'Mutation', createDraft: { __typename?: 'Article', id?: number | null, title?: string | null, body?: string | null, published?: boolean | null } };

export type PublishMutationVariables = Exact<{
  draftId: Scalars['Int']['input'];
}>;


export type PublishMutation = { __typename?: 'Mutation', publish?: { __typename?: 'Article', id?: number | null, title?: string | null, body?: string | null, published?: boolean | null } | null };

export type DraftArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type DraftArticlesQuery = { __typename?: 'Query', draftArticles: Array<{ __typename?: 'Article', id?: number | null, title?: string | null, body?: string | null, published?: boolean | null } | null> };

export type PublishedArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type PublishedArticlesQuery = { __typename?: 'Query', publishedArticles?: Array<{ __typename?: 'Article', id?: number | null, title?: string | null, body?: string | null, published?: boolean | null } | null> | null };


export const CreateDraftDocument = gql`
    mutation createDraft($title: String!, $body: String!) {
  createDraft(title: $title, body: $body) {
    id
    title
    body
    published
  }
}
    `;
export type CreateDraftMutationFn = Apollo.MutationFunction<CreateDraftMutation, CreateDraftMutationVariables>;

/**
 * __useCreateDraftMutation__
 *
 * To run a mutation, you first call `useCreateDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDraftMutation, { data, loading, error }] = useCreateDraftMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useCreateDraftMutation(baseOptions?: Apollo.MutationHookOptions<CreateDraftMutation, CreateDraftMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDraftMutation, CreateDraftMutationVariables>(CreateDraftDocument, options);
      }
export type CreateDraftMutationHookResult = ReturnType<typeof useCreateDraftMutation>;
export type CreateDraftMutationResult = Apollo.MutationResult<CreateDraftMutation>;
export type CreateDraftMutationOptions = Apollo.BaseMutationOptions<CreateDraftMutation, CreateDraftMutationVariables>;
export const PublishDocument = gql`
    mutation publish($draftId: Int!) {
  publish(draftId: $draftId) {
    id
    title
    body
    published
  }
}
    `;
export type PublishMutationFn = Apollo.MutationFunction<PublishMutation, PublishMutationVariables>;

/**
 * __usePublishMutation__
 *
 * To run a mutation, you first call `usePublishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishMutation, { data, loading, error }] = usePublishMutation({
 *   variables: {
 *      draftId: // value for 'draftId'
 *   },
 * });
 */
export function usePublishMutation(baseOptions?: Apollo.MutationHookOptions<PublishMutation, PublishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishMutation, PublishMutationVariables>(PublishDocument, options);
      }
export type PublishMutationHookResult = ReturnType<typeof usePublishMutation>;
export type PublishMutationResult = Apollo.MutationResult<PublishMutation>;
export type PublishMutationOptions = Apollo.BaseMutationOptions<PublishMutation, PublishMutationVariables>;
export const DraftArticlesDocument = gql`
    query draftArticles {
  draftArticles {
    id
    title
    body
    published
  }
}
    `;

/**
 * __useDraftArticlesQuery__
 *
 * To run a query within a React component, call `useDraftArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDraftArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDraftArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useDraftArticlesQuery(baseOptions?: Apollo.QueryHookOptions<DraftArticlesQuery, DraftArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DraftArticlesQuery, DraftArticlesQueryVariables>(DraftArticlesDocument, options);
      }
export function useDraftArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DraftArticlesQuery, DraftArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DraftArticlesQuery, DraftArticlesQueryVariables>(DraftArticlesDocument, options);
        }
export type DraftArticlesQueryHookResult = ReturnType<typeof useDraftArticlesQuery>;
export type DraftArticlesLazyQueryHookResult = ReturnType<typeof useDraftArticlesLazyQuery>;
export type DraftArticlesQueryResult = Apollo.QueryResult<DraftArticlesQuery, DraftArticlesQueryVariables>;
export const PublishedArticlesDocument = gql`
    query publishedArticles {
  publishedArticles {
    id
    title
    body
    published
  }
}
    `;

/**
 * __usePublishedArticlesQuery__
 *
 * To run a query within a React component, call `usePublishedArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublishedArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublishedArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublishedArticlesQuery(baseOptions?: Apollo.QueryHookOptions<PublishedArticlesQuery, PublishedArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublishedArticlesQuery, PublishedArticlesQueryVariables>(PublishedArticlesDocument, options);
      }
export function usePublishedArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublishedArticlesQuery, PublishedArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublishedArticlesQuery, PublishedArticlesQueryVariables>(PublishedArticlesDocument, options);
        }
export type PublishedArticlesQueryHookResult = ReturnType<typeof usePublishedArticlesQuery>;
export type PublishedArticlesLazyQueryHookResult = ReturnType<typeof usePublishedArticlesLazyQuery>;
export type PublishedArticlesQueryResult = Apollo.QueryResult<PublishedArticlesQuery, PublishedArticlesQueryVariables>;