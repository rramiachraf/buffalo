/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as ContextModule from "../../types"





declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  Device: "pc" | "playstation" | "xbox"
  Platform: "blizzard" | "origin" | "steam" | "uplay"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenRootTypes {
  Cart: ContextModule.Cart;
  Game: { // root type
    description: string; // String!
    device: NexusGenEnums['Device']; // Device!
    id: string; // ID!
    name: string; // String!
    platform?: NexusGenEnums['Platform'] | null; // Platform
    poster?: string | null; // String
    price: number; // Float!
  }
  Mutation: {};
  Order: { // root type
    amount: number; // Float!
    game: string; // String!
    id: number; // Int!
    key: string; // String!
  }
  Query: {};
  User: { // root type
    email?: string | null; // String
    firstName?: string | null; // String
    id?: number | null; // Int
    lastName?: string | null; // String
  }
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  Device: NexusGenEnums['Device'];
  Platform: NexusGenEnums['Platform'];
  String: NexusGenScalars['String'];
  Int: NexusGenScalars['Int'];
  Float: NexusGenScalars['Float'];
  Boolean: NexusGenScalars['Boolean'];
  ID: NexusGenScalars['ID'];
}

export interface NexusGenFieldTypes {
  Cart: { // field return type
    id: string | null; // ID
    name: string | null; // String
    poster: string | null; // String
    price: number | null; // Float
  }
  Game: { // field return type
    description: string; // String!
    device: NexusGenEnums['Device']; // Device!
    id: string; // ID!
    name: string; // String!
    platform: NexusGenEnums['Platform'] | null; // Platform
    poster: string | null; // String
    price: number; // Float!
  }
  Mutation: { // field return type
    addGame: boolean | null; // Boolean
    addToCart: boolean | null; // Boolean
    checkout: string | null; // String
    createUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['User'] | null; // User
    logout: boolean | null; // Boolean
    removeFromCart: boolean | null; // Boolean
  }
  Order: { // field return type
    amount: number; // Float!
    game: string; // String!
    id: number; // Int!
    key: string; // String!
  }
  Query: { // field return type
    cart: Array<NexusGenRootTypes['Cart'] | null>; // [Cart]!
    game: NexusGenRootTypes['Game'] | null; // Game
    games: Array<NexusGenRootTypes['Game'] | null> | null; // [Game]
    getOrders: Array<NexusGenRootTypes['Order'] | null> | null; // [Order]
    me: NexusGenRootTypes['User'] | null; // User
    searchGame: Array<NexusGenRootTypes['Game'] | null> | null; // [Game]
    total: number | null; // Float
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    email: string | null; // String
    firstName: string | null; // String
    id: number | null; // Int
    lastName: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Cart: { // field return type name
    id: 'ID'
    name: 'String'
    poster: 'String'
    price: 'Float'
  }
  Game: { // field return type name
    description: 'String'
    device: 'Device'
    id: 'ID'
    name: 'String'
    platform: 'Platform'
    poster: 'String'
    price: 'Float'
  }
  Mutation: { // field return type name
    addGame: 'Boolean'
    addToCart: 'Boolean'
    checkout: 'String'
    createUser: 'User'
    login: 'User'
    logout: 'Boolean'
    removeFromCart: 'Boolean'
  }
  Order: { // field return type name
    amount: 'Float'
    game: 'String'
    id: 'Int'
    key: 'String'
  }
  Query: { // field return type name
    cart: 'Cart'
    game: 'Game'
    games: 'Game'
    getOrders: 'Order'
    me: 'User'
    searchGame: 'Game'
    total: 'Float'
    user: 'User'
  }
  User: { // field return type name
    email: 'String'
    firstName: 'String'
    id: 'Int'
    lastName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addGame: { // args
      description: string; // String!
      device: NexusGenEnums['Device']; // Device!
      name: string; // String!
      platform?: NexusGenEnums['Platform'] | null; // Platform
      price: number; // Float!
    }
    addToCart: { // args
      gameId: string; // ID!
    }
    createUser: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    removeFromCart: { // args
      gameId: string; // ID!
    }
  }
  Query: {
    game: { // args
      id: string; // ID!
    }
    searchGame: { // args
      query: string; // String!
    }
    user: { // args
      id: number; // Int!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Cart" | "Game" | "Mutation" | "Order" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "Device" | "Platform";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ContextModule.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
}