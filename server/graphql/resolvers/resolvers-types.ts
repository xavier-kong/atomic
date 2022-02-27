import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type Habits = {
  __typename?: 'Habits';
  amount: Scalars['Int'];
  habit_name: Scalars['String'];
  habit_uid: Scalars['ID'];
  progress?: Maybe<Array<Maybe<Progress>>>;
  unit: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeDone: Progress;
};


export type MutationChangeDoneArgs = {
  done: Scalars['Boolean'];
  progress_uid: Scalars['ID'];
};

export type Progress = {
  __typename?: 'Progress';
  done: Scalars['Boolean'];
  habit_date: Scalars['Date'];
  habit_uid: Scalars['ID'];
  progress_uid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allHabits: Array<Maybe<Habits>>;
  allProgress: Array<Maybe<Progress>>;
};


export type QueryAllProgressArgs = {
  habit_uid: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Habits: ResolverTypeWrapper<Habits>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Progress: ResolverTypeWrapper<Progress>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  Habits: Habits;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Progress: Progress;
  Query: {};
  String: Scalars['String'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type HabitsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Habits'] = ResolversParentTypes['Habits']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  habit_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  habit_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  progress?: Resolver<Maybe<Array<Maybe<ResolversTypes['Progress']>>>, ParentType, ContextType>;
  unit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  changeDone?: Resolver<ResolversTypes['Progress'], ParentType, ContextType, RequireFields<MutationChangeDoneArgs, 'done' | 'progress_uid'>>;
}>;

export type ProgressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Progress'] = ResolversParentTypes['Progress']> = ResolversObject<{
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  habit_date?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  habit_uid?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  progress_uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  allHabits?: Resolver<Array<Maybe<ResolversTypes['Habits']>>, ParentType, ContextType>;
  allProgress?: Resolver<Array<Maybe<ResolversTypes['Progress']>>, ParentType, ContextType, RequireFields<QueryAllProgressArgs, 'habit_uid'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Date?: GraphQLScalarType;
  Habits?: HabitsResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Progress?: ProgressResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

