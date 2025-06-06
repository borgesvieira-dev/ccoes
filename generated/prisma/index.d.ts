
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Municipio
 * 
 */
export type Municipio = $Result.DefaultSelection<Prisma.$MunicipioPayload>
/**
 * Model Vereador
 * 
 */
export type Vereador = $Result.DefaultSelection<Prisma.$VereadorPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Municipios
 * const municipios = await prisma.municipio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Municipios
   * const municipios = await prisma.municipio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.municipio`: Exposes CRUD operations for the **Municipio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Municipios
    * const municipios = await prisma.municipio.findMany()
    * ```
    */
  get municipio(): Prisma.MunicipioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vereador`: Exposes CRUD operations for the **Vereador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vereadors
    * const vereadors = await prisma.vereador.findMany()
    * ```
    */
  get vereador(): Prisma.VereadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Municipio: 'Municipio',
    Vereador: 'Vereador',
    Lead: 'Lead',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "municipio" | "vereador" | "lead" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Municipio: {
        payload: Prisma.$MunicipioPayload<ExtArgs>
        fields: Prisma.MunicipioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MunicipioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MunicipioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findFirst: {
            args: Prisma.MunicipioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MunicipioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          findMany: {
            args: Prisma.MunicipioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          create: {
            args: Prisma.MunicipioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          createMany: {
            args: Prisma.MunicipioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MunicipioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          delete: {
            args: Prisma.MunicipioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          update: {
            args: Prisma.MunicipioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          deleteMany: {
            args: Prisma.MunicipioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MunicipioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MunicipioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>[]
          }
          upsert: {
            args: Prisma.MunicipioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MunicipioPayload>
          }
          aggregate: {
            args: Prisma.MunicipioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMunicipio>
          }
          groupBy: {
            args: Prisma.MunicipioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MunicipioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MunicipioCountArgs<ExtArgs>
            result: $Utils.Optional<MunicipioCountAggregateOutputType> | number
          }
        }
      }
      Vereador: {
        payload: Prisma.$VereadorPayload<ExtArgs>
        fields: Prisma.VereadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VereadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VereadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          findFirst: {
            args: Prisma.VereadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VereadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          findMany: {
            args: Prisma.VereadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>[]
          }
          create: {
            args: Prisma.VereadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          createMany: {
            args: Prisma.VereadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VereadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>[]
          }
          delete: {
            args: Prisma.VereadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          update: {
            args: Prisma.VereadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          deleteMany: {
            args: Prisma.VereadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VereadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VereadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>[]
          }
          upsert: {
            args: Prisma.VereadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VereadorPayload>
          }
          aggregate: {
            args: Prisma.VereadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVereador>
          }
          groupBy: {
            args: Prisma.VereadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VereadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VereadorCountArgs<ExtArgs>
            result: $Utils.Optional<VereadorCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    municipio?: MunicipioOmit
    vereador?: VereadorOmit
    lead?: LeadOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MunicipioCountOutputType
   */

  export type MunicipioCountOutputType = {
    vereadores: number
    leads: number
  }

  export type MunicipioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vereadores?: boolean | MunicipioCountOutputTypeCountVereadoresArgs
    leads?: boolean | MunicipioCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MunicipioCountOutputType
     */
    select?: MunicipioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeCountVereadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VereadorWhereInput
  }

  /**
   * MunicipioCountOutputType without action
   */
  export type MunicipioCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Municipio
   */

  export type AggregateMunicipio = {
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  export type MunicipioAvgAggregateOutputType = {
    id: number | null
    aprovados: number | null
    protocolados: number | null
  }

  export type MunicipioSumAggregateOutputType = {
    id: number | null
    aprovados: number | null
    protocolados: number | null
  }

  export type MunicipioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    img: string | null
    uf: string | null
    aprovados: number | null
    protocolados: number | null
    destaque: boolean | null
    sitePrefeitura: string | null
    siteCamara: string | null
  }

  export type MunicipioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    img: string | null
    uf: string | null
    aprovados: number | null
    protocolados: number | null
    destaque: boolean | null
    sitePrefeitura: string | null
    siteCamara: string | null
  }

  export type MunicipioCountAggregateOutputType = {
    id: number
    nome: number
    img: number
    uf: number
    aprovados: number
    protocolados: number
    destaque: number
    sitePrefeitura: number
    siteCamara: number
    _all: number
  }


  export type MunicipioAvgAggregateInputType = {
    id?: true
    aprovados?: true
    protocolados?: true
  }

  export type MunicipioSumAggregateInputType = {
    id?: true
    aprovados?: true
    protocolados?: true
  }

  export type MunicipioMinAggregateInputType = {
    id?: true
    nome?: true
    img?: true
    uf?: true
    aprovados?: true
    protocolados?: true
    destaque?: true
    sitePrefeitura?: true
    siteCamara?: true
  }

  export type MunicipioMaxAggregateInputType = {
    id?: true
    nome?: true
    img?: true
    uf?: true
    aprovados?: true
    protocolados?: true
    destaque?: true
    sitePrefeitura?: true
    siteCamara?: true
  }

  export type MunicipioCountAggregateInputType = {
    id?: true
    nome?: true
    img?: true
    uf?: true
    aprovados?: true
    protocolados?: true
    destaque?: true
    sitePrefeitura?: true
    siteCamara?: true
    _all?: true
  }

  export type MunicipioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipio to aggregate.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Municipios
    **/
    _count?: true | MunicipioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MunicipioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MunicipioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MunicipioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MunicipioMaxAggregateInputType
  }

  export type GetMunicipioAggregateType<T extends MunicipioAggregateArgs> = {
        [P in keyof T & keyof AggregateMunicipio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMunicipio[P]>
      : GetScalarType<T[P], AggregateMunicipio[P]>
  }




  export type MunicipioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MunicipioWhereInput
    orderBy?: MunicipioOrderByWithAggregationInput | MunicipioOrderByWithAggregationInput[]
    by: MunicipioScalarFieldEnum[] | MunicipioScalarFieldEnum
    having?: MunicipioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MunicipioCountAggregateInputType | true
    _avg?: MunicipioAvgAggregateInputType
    _sum?: MunicipioSumAggregateInputType
    _min?: MunicipioMinAggregateInputType
    _max?: MunicipioMaxAggregateInputType
  }

  export type MunicipioGroupByOutputType = {
    id: number
    nome: string
    img: string | null
    uf: string
    aprovados: number
    protocolados: number
    destaque: boolean
    sitePrefeitura: string | null
    siteCamara: string | null
    _count: MunicipioCountAggregateOutputType | null
    _avg: MunicipioAvgAggregateOutputType | null
    _sum: MunicipioSumAggregateOutputType | null
    _min: MunicipioMinAggregateOutputType | null
    _max: MunicipioMaxAggregateOutputType | null
  }

  type GetMunicipioGroupByPayload<T extends MunicipioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MunicipioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MunicipioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
            : GetScalarType<T[P], MunicipioGroupByOutputType[P]>
        }
      >
    >


  export type MunicipioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    img?: boolean
    uf?: boolean
    aprovados?: boolean
    protocolados?: boolean
    destaque?: boolean
    sitePrefeitura?: boolean
    siteCamara?: boolean
    vereadores?: boolean | Municipio$vereadoresArgs<ExtArgs>
    leads?: boolean | Municipio$leadsArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    img?: boolean
    uf?: boolean
    aprovados?: boolean
    protocolados?: boolean
    destaque?: boolean
    sitePrefeitura?: boolean
    siteCamara?: boolean
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    img?: boolean
    uf?: boolean
    aprovados?: boolean
    protocolados?: boolean
    destaque?: boolean
    sitePrefeitura?: boolean
    siteCamara?: boolean
  }, ExtArgs["result"]["municipio"]>

  export type MunicipioSelectScalar = {
    id?: boolean
    nome?: boolean
    img?: boolean
    uf?: boolean
    aprovados?: boolean
    protocolados?: boolean
    destaque?: boolean
    sitePrefeitura?: boolean
    siteCamara?: boolean
  }

  export type MunicipioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "img" | "uf" | "aprovados" | "protocolados" | "destaque" | "sitePrefeitura" | "siteCamara", ExtArgs["result"]["municipio"]>
  export type MunicipioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vereadores?: boolean | Municipio$vereadoresArgs<ExtArgs>
    leads?: boolean | Municipio$leadsArgs<ExtArgs>
    _count?: boolean | MunicipioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MunicipioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MunicipioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MunicipioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Municipio"
    objects: {
      vereadores: Prisma.$VereadorPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      img: string | null
      uf: string
      aprovados: number
      protocolados: number
      destaque: boolean
      sitePrefeitura: string | null
      siteCamara: string | null
    }, ExtArgs["result"]["municipio"]>
    composites: {}
  }

  type MunicipioGetPayload<S extends boolean | null | undefined | MunicipioDefaultArgs> = $Result.GetResult<Prisma.$MunicipioPayload, S>

  type MunicipioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MunicipioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MunicipioCountAggregateInputType | true
    }

  export interface MunicipioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Municipio'], meta: { name: 'Municipio' } }
    /**
     * Find zero or one Municipio that matches the filter.
     * @param {MunicipioFindUniqueArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MunicipioFindUniqueArgs>(args: SelectSubset<T, MunicipioFindUniqueArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Municipio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MunicipioFindUniqueOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MunicipioFindUniqueOrThrowArgs>(args: SelectSubset<T, MunicipioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MunicipioFindFirstArgs>(args?: SelectSubset<T, MunicipioFindFirstArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Municipio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindFirstOrThrowArgs} args - Arguments to find a Municipio
     * @example
     * // Get one Municipio
     * const municipio = await prisma.municipio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MunicipioFindFirstOrThrowArgs>(args?: SelectSubset<T, MunicipioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Municipios
     * const municipios = await prisma.municipio.findMany()
     * 
     * // Get first 10 Municipios
     * const municipios = await prisma.municipio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const municipioWithIdOnly = await prisma.municipio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MunicipioFindManyArgs>(args?: SelectSubset<T, MunicipioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Municipio.
     * @param {MunicipioCreateArgs} args - Arguments to create a Municipio.
     * @example
     * // Create one Municipio
     * const Municipio = await prisma.municipio.create({
     *   data: {
     *     // ... data to create a Municipio
     *   }
     * })
     * 
     */
    create<T extends MunicipioCreateArgs>(args: SelectSubset<T, MunicipioCreateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Municipios.
     * @param {MunicipioCreateManyArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MunicipioCreateManyArgs>(args?: SelectSubset<T, MunicipioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Municipios and returns the data saved in the database.
     * @param {MunicipioCreateManyAndReturnArgs} args - Arguments to create many Municipios.
     * @example
     * // Create many Municipios
     * const municipio = await prisma.municipio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Municipios and only return the `id`
     * const municipioWithIdOnly = await prisma.municipio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MunicipioCreateManyAndReturnArgs>(args?: SelectSubset<T, MunicipioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Municipio.
     * @param {MunicipioDeleteArgs} args - Arguments to delete one Municipio.
     * @example
     * // Delete one Municipio
     * const Municipio = await prisma.municipio.delete({
     *   where: {
     *     // ... filter to delete one Municipio
     *   }
     * })
     * 
     */
    delete<T extends MunicipioDeleteArgs>(args: SelectSubset<T, MunicipioDeleteArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Municipio.
     * @param {MunicipioUpdateArgs} args - Arguments to update one Municipio.
     * @example
     * // Update one Municipio
     * const municipio = await prisma.municipio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MunicipioUpdateArgs>(args: SelectSubset<T, MunicipioUpdateArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Municipios.
     * @param {MunicipioDeleteManyArgs} args - Arguments to filter Municipios to delete.
     * @example
     * // Delete a few Municipios
     * const { count } = await prisma.municipio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MunicipioDeleteManyArgs>(args?: SelectSubset<T, MunicipioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MunicipioUpdateManyArgs>(args: SelectSubset<T, MunicipioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Municipios and returns the data updated in the database.
     * @param {MunicipioUpdateManyAndReturnArgs} args - Arguments to update many Municipios.
     * @example
     * // Update many Municipios
     * const municipio = await prisma.municipio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Municipios and only return the `id`
     * const municipioWithIdOnly = await prisma.municipio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MunicipioUpdateManyAndReturnArgs>(args: SelectSubset<T, MunicipioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Municipio.
     * @param {MunicipioUpsertArgs} args - Arguments to update or create a Municipio.
     * @example
     * // Update or create a Municipio
     * const municipio = await prisma.municipio.upsert({
     *   create: {
     *     // ... data to create a Municipio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Municipio we want to update
     *   }
     * })
     */
    upsert<T extends MunicipioUpsertArgs>(args: SelectSubset<T, MunicipioUpsertArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioCountArgs} args - Arguments to filter Municipios to count.
     * @example
     * // Count the number of Municipios
     * const count = await prisma.municipio.count({
     *   where: {
     *     // ... the filter for the Municipios we want to count
     *   }
     * })
    **/
    count<T extends MunicipioCountArgs>(
      args?: Subset<T, MunicipioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MunicipioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MunicipioAggregateArgs>(args: Subset<T, MunicipioAggregateArgs>): Prisma.PrismaPromise<GetMunicipioAggregateType<T>>

    /**
     * Group by Municipio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MunicipioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MunicipioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MunicipioGroupByArgs['orderBy'] }
        : { orderBy?: MunicipioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MunicipioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMunicipioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Municipio model
   */
  readonly fields: MunicipioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Municipio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MunicipioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vereadores<T extends Municipio$vereadoresArgs<ExtArgs> = {}>(args?: Subset<T, Municipio$vereadoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leads<T extends Municipio$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Municipio$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Municipio model
   */
  interface MunicipioFieldRefs {
    readonly id: FieldRef<"Municipio", 'Int'>
    readonly nome: FieldRef<"Municipio", 'String'>
    readonly img: FieldRef<"Municipio", 'String'>
    readonly uf: FieldRef<"Municipio", 'String'>
    readonly aprovados: FieldRef<"Municipio", 'Int'>
    readonly protocolados: FieldRef<"Municipio", 'Int'>
    readonly destaque: FieldRef<"Municipio", 'Boolean'>
    readonly sitePrefeitura: FieldRef<"Municipio", 'String'>
    readonly siteCamara: FieldRef<"Municipio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Municipio findUnique
   */
  export type MunicipioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findUniqueOrThrow
   */
  export type MunicipioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio findFirst
   */
  export type MunicipioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findFirstOrThrow
   */
  export type MunicipioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipio to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Municipios.
     */
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio findMany
   */
  export type MunicipioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter, which Municipios to fetch.
     */
    where?: MunicipioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Municipios to fetch.
     */
    orderBy?: MunicipioOrderByWithRelationInput | MunicipioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Municipios.
     */
    cursor?: MunicipioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Municipios.
     */
    skip?: number
    distinct?: MunicipioScalarFieldEnum | MunicipioScalarFieldEnum[]
  }

  /**
   * Municipio create
   */
  export type MunicipioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to create a Municipio.
     */
    data: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
  }

  /**
   * Municipio createMany
   */
  export type MunicipioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio createManyAndReturn
   */
  export type MunicipioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to create many Municipios.
     */
    data: MunicipioCreateManyInput | MunicipioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Municipio update
   */
  export type MunicipioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The data needed to update a Municipio.
     */
    data: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
    /**
     * Choose, which Municipio to update.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio updateMany
   */
  export type MunicipioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio updateManyAndReturn
   */
  export type MunicipioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * The data used to update Municipios.
     */
    data: XOR<MunicipioUpdateManyMutationInput, MunicipioUncheckedUpdateManyInput>
    /**
     * Filter which Municipios to update
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to update.
     */
    limit?: number
  }

  /**
   * Municipio upsert
   */
  export type MunicipioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * The filter to search for the Municipio to update in case it exists.
     */
    where: MunicipioWhereUniqueInput
    /**
     * In case the Municipio found by the `where` argument doesn't exist, create a new Municipio with this data.
     */
    create: XOR<MunicipioCreateInput, MunicipioUncheckedCreateInput>
    /**
     * In case the Municipio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MunicipioUpdateInput, MunicipioUncheckedUpdateInput>
  }

  /**
   * Municipio delete
   */
  export type MunicipioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
    /**
     * Filter which Municipio to delete.
     */
    where: MunicipioWhereUniqueInput
  }

  /**
   * Municipio deleteMany
   */
  export type MunicipioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Municipios to delete
     */
    where?: MunicipioWhereInput
    /**
     * Limit how many Municipios to delete.
     */
    limit?: number
  }

  /**
   * Municipio.vereadores
   */
  export type Municipio$vereadoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    where?: VereadorWhereInput
    orderBy?: VereadorOrderByWithRelationInput | VereadorOrderByWithRelationInput[]
    cursor?: VereadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VereadorScalarFieldEnum | VereadorScalarFieldEnum[]
  }

  /**
   * Municipio.leads
   */
  export type Municipio$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Municipio without action
   */
  export type MunicipioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Municipio
     */
    select?: MunicipioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Municipio
     */
    omit?: MunicipioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MunicipioInclude<ExtArgs> | null
  }


  /**
   * Model Vereador
   */

  export type AggregateVereador = {
    _count: VereadorCountAggregateOutputType | null
    _avg: VereadorAvgAggregateOutputType | null
    _sum: VereadorSumAggregateOutputType | null
    _min: VereadorMinAggregateOutputType | null
    _max: VereadorMaxAggregateOutputType | null
  }

  export type VereadorAvgAggregateOutputType = {
    id: number | null
    aprovacoes: number | null
    protocolados: number | null
    municipioId: number | null
  }

  export type VereadorSumAggregateOutputType = {
    id: number | null
    aprovacoes: number | null
    protocolados: number | null
    municipioId: number | null
  }

  export type VereadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    whatsapp: string | null
    email: string | null
    partido: string | null
    fotoUrl: string | null
    destaque: boolean | null
    aprovacoes: number | null
    protocolados: number | null
    municipioId: number | null
  }

  export type VereadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    whatsapp: string | null
    email: string | null
    partido: string | null
    fotoUrl: string | null
    destaque: boolean | null
    aprovacoes: number | null
    protocolados: number | null
    municipioId: number | null
  }

  export type VereadorCountAggregateOutputType = {
    id: number
    nome: number
    whatsapp: number
    email: number
    partido: number
    fotoUrl: number
    destaque: number
    aprovacoes: number
    protocolados: number
    municipioId: number
    _all: number
  }


  export type VereadorAvgAggregateInputType = {
    id?: true
    aprovacoes?: true
    protocolados?: true
    municipioId?: true
  }

  export type VereadorSumAggregateInputType = {
    id?: true
    aprovacoes?: true
    protocolados?: true
    municipioId?: true
  }

  export type VereadorMinAggregateInputType = {
    id?: true
    nome?: true
    whatsapp?: true
    email?: true
    partido?: true
    fotoUrl?: true
    destaque?: true
    aprovacoes?: true
    protocolados?: true
    municipioId?: true
  }

  export type VereadorMaxAggregateInputType = {
    id?: true
    nome?: true
    whatsapp?: true
    email?: true
    partido?: true
    fotoUrl?: true
    destaque?: true
    aprovacoes?: true
    protocolados?: true
    municipioId?: true
  }

  export type VereadorCountAggregateInputType = {
    id?: true
    nome?: true
    whatsapp?: true
    email?: true
    partido?: true
    fotoUrl?: true
    destaque?: true
    aprovacoes?: true
    protocolados?: true
    municipioId?: true
    _all?: true
  }

  export type VereadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vereador to aggregate.
     */
    where?: VereadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vereadors to fetch.
     */
    orderBy?: VereadorOrderByWithRelationInput | VereadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VereadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vereadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vereadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vereadors
    **/
    _count?: true | VereadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VereadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VereadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VereadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VereadorMaxAggregateInputType
  }

  export type GetVereadorAggregateType<T extends VereadorAggregateArgs> = {
        [P in keyof T & keyof AggregateVereador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVereador[P]>
      : GetScalarType<T[P], AggregateVereador[P]>
  }




  export type VereadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VereadorWhereInput
    orderBy?: VereadorOrderByWithAggregationInput | VereadorOrderByWithAggregationInput[]
    by: VereadorScalarFieldEnum[] | VereadorScalarFieldEnum
    having?: VereadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VereadorCountAggregateInputType | true
    _avg?: VereadorAvgAggregateInputType
    _sum?: VereadorSumAggregateInputType
    _min?: VereadorMinAggregateInputType
    _max?: VereadorMaxAggregateInputType
  }

  export type VereadorGroupByOutputType = {
    id: number
    nome: string
    whatsapp: string | null
    email: string | null
    partido: string | null
    fotoUrl: string | null
    destaque: boolean
    aprovacoes: number
    protocolados: number
    municipioId: number
    _count: VereadorCountAggregateOutputType | null
    _avg: VereadorAvgAggregateOutputType | null
    _sum: VereadorSumAggregateOutputType | null
    _min: VereadorMinAggregateOutputType | null
    _max: VereadorMaxAggregateOutputType | null
  }

  type GetVereadorGroupByPayload<T extends VereadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VereadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VereadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VereadorGroupByOutputType[P]>
            : GetScalarType<T[P], VereadorGroupByOutputType[P]>
        }
      >
    >


  export type VereadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    whatsapp?: boolean
    email?: boolean
    partido?: boolean
    fotoUrl?: boolean
    destaque?: boolean
    aprovacoes?: boolean
    protocolados?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vereador"]>

  export type VereadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    whatsapp?: boolean
    email?: boolean
    partido?: boolean
    fotoUrl?: boolean
    destaque?: boolean
    aprovacoes?: boolean
    protocolados?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vereador"]>

  export type VereadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    whatsapp?: boolean
    email?: boolean
    partido?: boolean
    fotoUrl?: boolean
    destaque?: boolean
    aprovacoes?: boolean
    protocolados?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vereador"]>

  export type VereadorSelectScalar = {
    id?: boolean
    nome?: boolean
    whatsapp?: boolean
    email?: boolean
    partido?: boolean
    fotoUrl?: boolean
    destaque?: boolean
    aprovacoes?: boolean
    protocolados?: boolean
    municipioId?: boolean
  }

  export type VereadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "whatsapp" | "email" | "partido" | "fotoUrl" | "destaque" | "aprovacoes" | "protocolados" | "municipioId", ExtArgs["result"]["vereador"]>
  export type VereadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type VereadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type VereadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }

  export type $VereadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vereador"
    objects: {
      municipio: Prisma.$MunicipioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      whatsapp: string | null
      email: string | null
      partido: string | null
      fotoUrl: string | null
      destaque: boolean
      aprovacoes: number
      protocolados: number
      municipioId: number
    }, ExtArgs["result"]["vereador"]>
    composites: {}
  }

  type VereadorGetPayload<S extends boolean | null | undefined | VereadorDefaultArgs> = $Result.GetResult<Prisma.$VereadorPayload, S>

  type VereadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VereadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VereadorCountAggregateInputType | true
    }

  export interface VereadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vereador'], meta: { name: 'Vereador' } }
    /**
     * Find zero or one Vereador that matches the filter.
     * @param {VereadorFindUniqueArgs} args - Arguments to find a Vereador
     * @example
     * // Get one Vereador
     * const vereador = await prisma.vereador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VereadorFindUniqueArgs>(args: SelectSubset<T, VereadorFindUniqueArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vereador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VereadorFindUniqueOrThrowArgs} args - Arguments to find a Vereador
     * @example
     * // Get one Vereador
     * const vereador = await prisma.vereador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VereadorFindUniqueOrThrowArgs>(args: SelectSubset<T, VereadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vereador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorFindFirstArgs} args - Arguments to find a Vereador
     * @example
     * // Get one Vereador
     * const vereador = await prisma.vereador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VereadorFindFirstArgs>(args?: SelectSubset<T, VereadorFindFirstArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vereador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorFindFirstOrThrowArgs} args - Arguments to find a Vereador
     * @example
     * // Get one Vereador
     * const vereador = await prisma.vereador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VereadorFindFirstOrThrowArgs>(args?: SelectSubset<T, VereadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vereadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vereadors
     * const vereadors = await prisma.vereador.findMany()
     * 
     * // Get first 10 Vereadors
     * const vereadors = await prisma.vereador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vereadorWithIdOnly = await prisma.vereador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VereadorFindManyArgs>(args?: SelectSubset<T, VereadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vereador.
     * @param {VereadorCreateArgs} args - Arguments to create a Vereador.
     * @example
     * // Create one Vereador
     * const Vereador = await prisma.vereador.create({
     *   data: {
     *     // ... data to create a Vereador
     *   }
     * })
     * 
     */
    create<T extends VereadorCreateArgs>(args: SelectSubset<T, VereadorCreateArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vereadors.
     * @param {VereadorCreateManyArgs} args - Arguments to create many Vereadors.
     * @example
     * // Create many Vereadors
     * const vereador = await prisma.vereador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VereadorCreateManyArgs>(args?: SelectSubset<T, VereadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vereadors and returns the data saved in the database.
     * @param {VereadorCreateManyAndReturnArgs} args - Arguments to create many Vereadors.
     * @example
     * // Create many Vereadors
     * const vereador = await prisma.vereador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vereadors and only return the `id`
     * const vereadorWithIdOnly = await prisma.vereador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VereadorCreateManyAndReturnArgs>(args?: SelectSubset<T, VereadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vereador.
     * @param {VereadorDeleteArgs} args - Arguments to delete one Vereador.
     * @example
     * // Delete one Vereador
     * const Vereador = await prisma.vereador.delete({
     *   where: {
     *     // ... filter to delete one Vereador
     *   }
     * })
     * 
     */
    delete<T extends VereadorDeleteArgs>(args: SelectSubset<T, VereadorDeleteArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vereador.
     * @param {VereadorUpdateArgs} args - Arguments to update one Vereador.
     * @example
     * // Update one Vereador
     * const vereador = await prisma.vereador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VereadorUpdateArgs>(args: SelectSubset<T, VereadorUpdateArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vereadors.
     * @param {VereadorDeleteManyArgs} args - Arguments to filter Vereadors to delete.
     * @example
     * // Delete a few Vereadors
     * const { count } = await prisma.vereador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VereadorDeleteManyArgs>(args?: SelectSubset<T, VereadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vereadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vereadors
     * const vereador = await prisma.vereador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VereadorUpdateManyArgs>(args: SelectSubset<T, VereadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vereadors and returns the data updated in the database.
     * @param {VereadorUpdateManyAndReturnArgs} args - Arguments to update many Vereadors.
     * @example
     * // Update many Vereadors
     * const vereador = await prisma.vereador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vereadors and only return the `id`
     * const vereadorWithIdOnly = await prisma.vereador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VereadorUpdateManyAndReturnArgs>(args: SelectSubset<T, VereadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vereador.
     * @param {VereadorUpsertArgs} args - Arguments to update or create a Vereador.
     * @example
     * // Update or create a Vereador
     * const vereador = await prisma.vereador.upsert({
     *   create: {
     *     // ... data to create a Vereador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vereador we want to update
     *   }
     * })
     */
    upsert<T extends VereadorUpsertArgs>(args: SelectSubset<T, VereadorUpsertArgs<ExtArgs>>): Prisma__VereadorClient<$Result.GetResult<Prisma.$VereadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vereadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorCountArgs} args - Arguments to filter Vereadors to count.
     * @example
     * // Count the number of Vereadors
     * const count = await prisma.vereador.count({
     *   where: {
     *     // ... the filter for the Vereadors we want to count
     *   }
     * })
    **/
    count<T extends VereadorCountArgs>(
      args?: Subset<T, VereadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VereadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vereador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VereadorAggregateArgs>(args: Subset<T, VereadorAggregateArgs>): Prisma.PrismaPromise<GetVereadorAggregateType<T>>

    /**
     * Group by Vereador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VereadorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VereadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VereadorGroupByArgs['orderBy'] }
        : { orderBy?: VereadorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VereadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVereadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vereador model
   */
  readonly fields: VereadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vereador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VereadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends MunicipioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipioDefaultArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vereador model
   */
  interface VereadorFieldRefs {
    readonly id: FieldRef<"Vereador", 'Int'>
    readonly nome: FieldRef<"Vereador", 'String'>
    readonly whatsapp: FieldRef<"Vereador", 'String'>
    readonly email: FieldRef<"Vereador", 'String'>
    readonly partido: FieldRef<"Vereador", 'String'>
    readonly fotoUrl: FieldRef<"Vereador", 'String'>
    readonly destaque: FieldRef<"Vereador", 'Boolean'>
    readonly aprovacoes: FieldRef<"Vereador", 'Int'>
    readonly protocolados: FieldRef<"Vereador", 'Int'>
    readonly municipioId: FieldRef<"Vereador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vereador findUnique
   */
  export type VereadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter, which Vereador to fetch.
     */
    where: VereadorWhereUniqueInput
  }

  /**
   * Vereador findUniqueOrThrow
   */
  export type VereadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter, which Vereador to fetch.
     */
    where: VereadorWhereUniqueInput
  }

  /**
   * Vereador findFirst
   */
  export type VereadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter, which Vereador to fetch.
     */
    where?: VereadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vereadors to fetch.
     */
    orderBy?: VereadorOrderByWithRelationInput | VereadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vereadors.
     */
    cursor?: VereadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vereadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vereadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vereadors.
     */
    distinct?: VereadorScalarFieldEnum | VereadorScalarFieldEnum[]
  }

  /**
   * Vereador findFirstOrThrow
   */
  export type VereadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter, which Vereador to fetch.
     */
    where?: VereadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vereadors to fetch.
     */
    orderBy?: VereadorOrderByWithRelationInput | VereadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vereadors.
     */
    cursor?: VereadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vereadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vereadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vereadors.
     */
    distinct?: VereadorScalarFieldEnum | VereadorScalarFieldEnum[]
  }

  /**
   * Vereador findMany
   */
  export type VereadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter, which Vereadors to fetch.
     */
    where?: VereadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vereadors to fetch.
     */
    orderBy?: VereadorOrderByWithRelationInput | VereadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vereadors.
     */
    cursor?: VereadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vereadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vereadors.
     */
    skip?: number
    distinct?: VereadorScalarFieldEnum | VereadorScalarFieldEnum[]
  }

  /**
   * Vereador create
   */
  export type VereadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vereador.
     */
    data: XOR<VereadorCreateInput, VereadorUncheckedCreateInput>
  }

  /**
   * Vereador createMany
   */
  export type VereadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vereadors.
     */
    data: VereadorCreateManyInput | VereadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vereador createManyAndReturn
   */
  export type VereadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * The data used to create many Vereadors.
     */
    data: VereadorCreateManyInput | VereadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vereador update
   */
  export type VereadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vereador.
     */
    data: XOR<VereadorUpdateInput, VereadorUncheckedUpdateInput>
    /**
     * Choose, which Vereador to update.
     */
    where: VereadorWhereUniqueInput
  }

  /**
   * Vereador updateMany
   */
  export type VereadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vereadors.
     */
    data: XOR<VereadorUpdateManyMutationInput, VereadorUncheckedUpdateManyInput>
    /**
     * Filter which Vereadors to update
     */
    where?: VereadorWhereInput
    /**
     * Limit how many Vereadors to update.
     */
    limit?: number
  }

  /**
   * Vereador updateManyAndReturn
   */
  export type VereadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * The data used to update Vereadors.
     */
    data: XOR<VereadorUpdateManyMutationInput, VereadorUncheckedUpdateManyInput>
    /**
     * Filter which Vereadors to update
     */
    where?: VereadorWhereInput
    /**
     * Limit how many Vereadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vereador upsert
   */
  export type VereadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vereador to update in case it exists.
     */
    where: VereadorWhereUniqueInput
    /**
     * In case the Vereador found by the `where` argument doesn't exist, create a new Vereador with this data.
     */
    create: XOR<VereadorCreateInput, VereadorUncheckedCreateInput>
    /**
     * In case the Vereador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VereadorUpdateInput, VereadorUncheckedUpdateInput>
  }

  /**
   * Vereador delete
   */
  export type VereadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
    /**
     * Filter which Vereador to delete.
     */
    where: VereadorWhereUniqueInput
  }

  /**
   * Vereador deleteMany
   */
  export type VereadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vereadors to delete
     */
    where?: VereadorWhereInput
    /**
     * Limit how many Vereadors to delete.
     */
    limit?: number
  }

  /**
   * Vereador without action
   */
  export type VereadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vereador
     */
    select?: VereadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vereador
     */
    omit?: VereadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VereadorInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadAvgAggregateOutputType = {
    id: number | null
    municipioId: number | null
  }

  export type LeadSumAggregateOutputType = {
    id: number | null
    municipioId: number | null
  }

  export type LeadMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    bairro: string | null
    whatsapp: string | null
    type: string | null
    dataCadastro: Date | null
    ativo: boolean | null
    municipioId: number | null
  }

  export type LeadMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    bairro: string | null
    whatsapp: string | null
    type: string | null
    dataCadastro: Date | null
    ativo: boolean | null
    municipioId: number | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    bairro: number
    whatsapp: number
    type: number
    dataCadastro: number
    ativo: number
    municipioId: number
    _all: number
  }


  export type LeadAvgAggregateInputType = {
    id?: true
    municipioId?: true
  }

  export type LeadSumAggregateInputType = {
    id?: true
    municipioId?: true
  }

  export type LeadMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    bairro?: true
    whatsapp?: true
    type?: true
    dataCadastro?: true
    ativo?: true
    municipioId?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    bairro?: true
    whatsapp?: true
    type?: true
    dataCadastro?: true
    ativo?: true
    municipioId?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    bairro?: true
    whatsapp?: true
    type?: true
    dataCadastro?: true
    ativo?: true
    municipioId?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _avg?: LeadAvgAggregateInputType
    _sum?: LeadSumAggregateInputType
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: number
    nome: string
    email: string
    bairro: string | null
    whatsapp: string | null
    type: string
    dataCadastro: Date
    ativo: boolean
    municipioId: number
    _count: LeadCountAggregateOutputType | null
    _avg: LeadAvgAggregateOutputType | null
    _sum: LeadSumAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    whatsapp?: boolean
    type?: boolean
    dataCadastro?: boolean
    ativo?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    whatsapp?: boolean
    type?: boolean
    dataCadastro?: boolean
    ativo?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    whatsapp?: boolean
    type?: boolean
    dataCadastro?: boolean
    ativo?: boolean
    municipioId?: boolean
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    bairro?: boolean
    whatsapp?: boolean
    type?: boolean
    dataCadastro?: boolean
    ativo?: boolean
    municipioId?: boolean
  }

  export type LeadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "bairro" | "whatsapp" | "type" | "dataCadastro" | "ativo" | "municipioId", ExtArgs["result"]["lead"]>
  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }
  export type LeadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipio?: boolean | MunicipioDefaultArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      municipio: Prisma.$MunicipioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      bairro: string | null
      whatsapp: string | null
      type: string
      dataCadastro: Date
      ativo: boolean
      municipioId: number
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeadUpdateManyAndReturnArgs>(args: SelectSubset<T, LeadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipio<T extends MunicipioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MunicipioDefaultArgs<ExtArgs>>): Prisma__MunicipioClient<$Result.GetResult<Prisma.$MunicipioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'Int'>
    readonly nome: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly bairro: FieldRef<"Lead", 'String'>
    readonly whatsapp: FieldRef<"Lead", 'String'>
    readonly type: FieldRef<"Lead", 'String'>
    readonly dataCadastro: FieldRef<"Lead", 'DateTime'>
    readonly ativo: FieldRef<"Lead", 'Boolean'>
    readonly municipioId: FieldRef<"Lead", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
  }

  /**
   * Lead updateManyAndReturn
   */
  export type LeadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
    /**
     * Limit how many Leads to delete.
     */
    limit?: number
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lead
     */
    omit?: LeadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    dataCadastro: Date | null
    ativo: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    dataCadastro: Date | null
    ativo: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    dataCadastro: number
    ativo: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCadastro?: true
    ativo?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCadastro?: true
    ativo?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    dataCadastro?: true
    ativo?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    dataCadastro: Date
    ativo: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    dataCadastro?: boolean
    ativo?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "dataCadastro" | "ativo", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      dataCadastro: Date
      ativo: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nome: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly senha: FieldRef<"User", 'String'>
    readonly dataCadastro: FieldRef<"User", 'DateTime'>
    readonly ativo: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MunicipioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    img: 'img',
    uf: 'uf',
    aprovados: 'aprovados',
    protocolados: 'protocolados',
    destaque: 'destaque',
    sitePrefeitura: 'sitePrefeitura',
    siteCamara: 'siteCamara'
  };

  export type MunicipioScalarFieldEnum = (typeof MunicipioScalarFieldEnum)[keyof typeof MunicipioScalarFieldEnum]


  export const VereadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    whatsapp: 'whatsapp',
    email: 'email',
    partido: 'partido',
    fotoUrl: 'fotoUrl',
    destaque: 'destaque',
    aprovacoes: 'aprovacoes',
    protocolados: 'protocolados',
    municipioId: 'municipioId'
  };

  export type VereadorScalarFieldEnum = (typeof VereadorScalarFieldEnum)[keyof typeof VereadorScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    bairro: 'bairro',
    whatsapp: 'whatsapp',
    type: 'type',
    dataCadastro: 'dataCadastro',
    ativo: 'ativo',
    municipioId: 'municipioId'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    dataCadastro: 'dataCadastro',
    ativo: 'ativo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MunicipioWhereInput = {
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    id?: IntFilter<"Municipio"> | number
    nome?: StringFilter<"Municipio"> | string
    img?: StringNullableFilter<"Municipio"> | string | null
    uf?: StringFilter<"Municipio"> | string
    aprovados?: IntFilter<"Municipio"> | number
    protocolados?: IntFilter<"Municipio"> | number
    destaque?: BoolFilter<"Municipio"> | boolean
    sitePrefeitura?: StringNullableFilter<"Municipio"> | string | null
    siteCamara?: StringNullableFilter<"Municipio"> | string | null
    vereadores?: VereadorListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type MunicipioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    img?: SortOrderInput | SortOrder
    uf?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
    destaque?: SortOrder
    sitePrefeitura?: SortOrderInput | SortOrder
    siteCamara?: SortOrderInput | SortOrder
    vereadores?: VereadorOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type MunicipioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MunicipioWhereInput | MunicipioWhereInput[]
    OR?: MunicipioWhereInput[]
    NOT?: MunicipioWhereInput | MunicipioWhereInput[]
    nome?: StringFilter<"Municipio"> | string
    img?: StringNullableFilter<"Municipio"> | string | null
    uf?: StringFilter<"Municipio"> | string
    aprovados?: IntFilter<"Municipio"> | number
    protocolados?: IntFilter<"Municipio"> | number
    destaque?: BoolFilter<"Municipio"> | boolean
    sitePrefeitura?: StringNullableFilter<"Municipio"> | string | null
    siteCamara?: StringNullableFilter<"Municipio"> | string | null
    vereadores?: VereadorListRelationFilter
    leads?: LeadListRelationFilter
  }, "id">

  export type MunicipioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    img?: SortOrderInput | SortOrder
    uf?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
    destaque?: SortOrder
    sitePrefeitura?: SortOrderInput | SortOrder
    siteCamara?: SortOrderInput | SortOrder
    _count?: MunicipioCountOrderByAggregateInput
    _avg?: MunicipioAvgOrderByAggregateInput
    _max?: MunicipioMaxOrderByAggregateInput
    _min?: MunicipioMinOrderByAggregateInput
    _sum?: MunicipioSumOrderByAggregateInput
  }

  export type MunicipioScalarWhereWithAggregatesInput = {
    AND?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    OR?: MunicipioScalarWhereWithAggregatesInput[]
    NOT?: MunicipioScalarWhereWithAggregatesInput | MunicipioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Municipio"> | number
    nome?: StringWithAggregatesFilter<"Municipio"> | string
    img?: StringNullableWithAggregatesFilter<"Municipio"> | string | null
    uf?: StringWithAggregatesFilter<"Municipio"> | string
    aprovados?: IntWithAggregatesFilter<"Municipio"> | number
    protocolados?: IntWithAggregatesFilter<"Municipio"> | number
    destaque?: BoolWithAggregatesFilter<"Municipio"> | boolean
    sitePrefeitura?: StringNullableWithAggregatesFilter<"Municipio"> | string | null
    siteCamara?: StringNullableWithAggregatesFilter<"Municipio"> | string | null
  }

  export type VereadorWhereInput = {
    AND?: VereadorWhereInput | VereadorWhereInput[]
    OR?: VereadorWhereInput[]
    NOT?: VereadorWhereInput | VereadorWhereInput[]
    id?: IntFilter<"Vereador"> | number
    nome?: StringFilter<"Vereador"> | string
    whatsapp?: StringNullableFilter<"Vereador"> | string | null
    email?: StringNullableFilter<"Vereador"> | string | null
    partido?: StringNullableFilter<"Vereador"> | string | null
    fotoUrl?: StringNullableFilter<"Vereador"> | string | null
    destaque?: BoolFilter<"Vereador"> | boolean
    aprovacoes?: IntFilter<"Vereador"> | number
    protocolados?: IntFilter<"Vereador"> | number
    municipioId?: IntFilter<"Vereador"> | number
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }

  export type VereadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    partido?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    destaque?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
    municipio?: MunicipioOrderByWithRelationInput
  }

  export type VereadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VereadorWhereInput | VereadorWhereInput[]
    OR?: VereadorWhereInput[]
    NOT?: VereadorWhereInput | VereadorWhereInput[]
    nome?: StringFilter<"Vereador"> | string
    whatsapp?: StringNullableFilter<"Vereador"> | string | null
    email?: StringNullableFilter<"Vereador"> | string | null
    partido?: StringNullableFilter<"Vereador"> | string | null
    fotoUrl?: StringNullableFilter<"Vereador"> | string | null
    destaque?: BoolFilter<"Vereador"> | boolean
    aprovacoes?: IntFilter<"Vereador"> | number
    protocolados?: IntFilter<"Vereador"> | number
    municipioId?: IntFilter<"Vereador"> | number
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }, "id">

  export type VereadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    partido?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    destaque?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
    _count?: VereadorCountOrderByAggregateInput
    _avg?: VereadorAvgOrderByAggregateInput
    _max?: VereadorMaxOrderByAggregateInput
    _min?: VereadorMinOrderByAggregateInput
    _sum?: VereadorSumOrderByAggregateInput
  }

  export type VereadorScalarWhereWithAggregatesInput = {
    AND?: VereadorScalarWhereWithAggregatesInput | VereadorScalarWhereWithAggregatesInput[]
    OR?: VereadorScalarWhereWithAggregatesInput[]
    NOT?: VereadorScalarWhereWithAggregatesInput | VereadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vereador"> | number
    nome?: StringWithAggregatesFilter<"Vereador"> | string
    whatsapp?: StringNullableWithAggregatesFilter<"Vereador"> | string | null
    email?: StringNullableWithAggregatesFilter<"Vereador"> | string | null
    partido?: StringNullableWithAggregatesFilter<"Vereador"> | string | null
    fotoUrl?: StringNullableWithAggregatesFilter<"Vereador"> | string | null
    destaque?: BoolWithAggregatesFilter<"Vereador"> | boolean
    aprovacoes?: IntWithAggregatesFilter<"Vereador"> | number
    protocolados?: IntWithAggregatesFilter<"Vereador"> | number
    municipioId?: IntWithAggregatesFilter<"Vereador"> | number
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: IntFilter<"Lead"> | number
    nome?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    bairro?: StringNullableFilter<"Lead"> | string | null
    whatsapp?: StringNullableFilter<"Lead"> | string | null
    type?: StringFilter<"Lead"> | string
    dataCadastro?: DateTimeFilter<"Lead"> | Date | string
    ativo?: BoolFilter<"Lead"> | boolean
    municipioId?: IntFilter<"Lead"> | number
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    type?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    municipioId?: SortOrder
    municipio?: MunicipioOrderByWithRelationInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    nome?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    bairro?: StringNullableFilter<"Lead"> | string | null
    whatsapp?: StringNullableFilter<"Lead"> | string | null
    type?: StringFilter<"Lead"> | string
    dataCadastro?: DateTimeFilter<"Lead"> | Date | string
    ativo?: BoolFilter<"Lead"> | boolean
    municipioId?: IntFilter<"Lead"> | number
    municipio?: XOR<MunicipioScalarRelationFilter, MunicipioWhereInput>
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    type?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    municipioId?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _avg?: LeadAvgOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
    _sum?: LeadSumOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lead"> | number
    nome?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    bairro?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    type?: StringWithAggregatesFilter<"Lead"> | string
    dataCadastro?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    ativo?: BoolWithAggregatesFilter<"Lead"> | boolean
    municipioId?: IntWithAggregatesFilter<"Lead"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nome?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    dataCadastro?: DateTimeFilter<"User"> | Date | string
    ativo?: BoolFilter<"User"> | boolean
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nome?: StringFilter<"User"> | string
    senha?: StringFilter<"User"> | string
    dataCadastro?: DateTimeFilter<"User"> | Date | string
    ativo?: BoolFilter<"User"> | boolean
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nome?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    senha?: StringWithAggregatesFilter<"User"> | string
    dataCadastro?: DateTimeWithAggregatesFilter<"User"> | Date | string
    ativo?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type MunicipioCreateInput = {
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    vereadores?: VereadorCreateNestedManyWithoutMunicipioInput
    leads?: LeadCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateInput = {
    id?: number
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    vereadores?: VereadorUncheckedCreateNestedManyWithoutMunicipioInput
    leads?: LeadUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    vereadores?: VereadorUpdateManyWithoutMunicipioNestedInput
    leads?: LeadUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    vereadores?: VereadorUncheckedUpdateManyWithoutMunicipioNestedInput
    leads?: LeadUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioCreateManyInput = {
    id?: number
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
  }

  export type MunicipioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MunicipioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VereadorCreateInput = {
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
    municipio: MunicipioCreateNestedOneWithoutVereadoresInput
  }

  export type VereadorUncheckedCreateInput = {
    id?: number
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
    municipioId: number
  }

  export type VereadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    municipio?: MunicipioUpdateOneRequiredWithoutVereadoresNestedInput
  }

  export type VereadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    municipioId?: IntFieldUpdateOperationsInput | number
  }

  export type VereadorCreateManyInput = {
    id?: number
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
    municipioId: number
  }

  export type VereadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
  }

  export type VereadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    municipioId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadCreateInput = {
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
    municipio: MunicipioCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
    municipioId: number
  }

  export type LeadUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    municipio?: MunicipioUpdateOneRequiredWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    municipioId?: IntFieldUpdateOperationsInput | number
  }

  export type LeadCreateManyInput = {
    id?: number
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
    municipioId: number
  }

  export type LeadUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
    municipioId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    nome: string
    email: string
    senha: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type UserUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type UserUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VereadorListRelationFilter = {
    every?: VereadorWhereInput
    some?: VereadorWhereInput
    none?: VereadorWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VereadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MunicipioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    img?: SortOrder
    uf?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
    destaque?: SortOrder
    sitePrefeitura?: SortOrder
    siteCamara?: SortOrder
  }

  export type MunicipioAvgOrderByAggregateInput = {
    id?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
  }

  export type MunicipioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    img?: SortOrder
    uf?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
    destaque?: SortOrder
    sitePrefeitura?: SortOrder
    siteCamara?: SortOrder
  }

  export type MunicipioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    img?: SortOrder
    uf?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
    destaque?: SortOrder
    sitePrefeitura?: SortOrder
    siteCamara?: SortOrder
  }

  export type MunicipioSumOrderByAggregateInput = {
    id?: SortOrder
    aprovados?: SortOrder
    protocolados?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MunicipioScalarRelationFilter = {
    is?: MunicipioWhereInput
    isNot?: MunicipioWhereInput
  }

  export type VereadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    partido?: SortOrder
    fotoUrl?: SortOrder
    destaque?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
  }

  export type VereadorAvgOrderByAggregateInput = {
    id?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
  }

  export type VereadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    partido?: SortOrder
    fotoUrl?: SortOrder
    destaque?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
  }

  export type VereadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    whatsapp?: SortOrder
    email?: SortOrder
    partido?: SortOrder
    fotoUrl?: SortOrder
    destaque?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
  }

  export type VereadorSumOrderByAggregateInput = {
    id?: SortOrder
    aprovacoes?: SortOrder
    protocolados?: SortOrder
    municipioId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    whatsapp?: SortOrder
    type?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    municipioId?: SortOrder
  }

  export type LeadAvgOrderByAggregateInput = {
    id?: SortOrder
    municipioId?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    whatsapp?: SortOrder
    type?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    municipioId?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    bairro?: SortOrder
    whatsapp?: SortOrder
    type?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
    municipioId?: SortOrder
  }

  export type LeadSumOrderByAggregateInput = {
    id?: SortOrder
    municipioId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    dataCadastro?: SortOrder
    ativo?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VereadorCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput> | VereadorCreateWithoutMunicipioInput[] | VereadorUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: VereadorCreateOrConnectWithoutMunicipioInput | VereadorCreateOrConnectWithoutMunicipioInput[]
    createMany?: VereadorCreateManyMunicipioInputEnvelope
    connect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput> | LeadCreateWithoutMunicipioInput[] | LeadUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMunicipioInput | LeadCreateOrConnectWithoutMunicipioInput[]
    createMany?: LeadCreateManyMunicipioInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type VereadorUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput> | VereadorCreateWithoutMunicipioInput[] | VereadorUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: VereadorCreateOrConnectWithoutMunicipioInput | VereadorCreateOrConnectWithoutMunicipioInput[]
    createMany?: VereadorCreateManyMunicipioInputEnvelope
    connect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutMunicipioInput = {
    create?: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput> | LeadCreateWithoutMunicipioInput[] | LeadUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMunicipioInput | LeadCreateOrConnectWithoutMunicipioInput[]
    createMany?: LeadCreateManyMunicipioInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VereadorUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput> | VereadorCreateWithoutMunicipioInput[] | VereadorUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: VereadorCreateOrConnectWithoutMunicipioInput | VereadorCreateOrConnectWithoutMunicipioInput[]
    upsert?: VereadorUpsertWithWhereUniqueWithoutMunicipioInput | VereadorUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: VereadorCreateManyMunicipioInputEnvelope
    set?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    disconnect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    delete?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    connect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    update?: VereadorUpdateWithWhereUniqueWithoutMunicipioInput | VereadorUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: VereadorUpdateManyWithWhereWithoutMunicipioInput | VereadorUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: VereadorScalarWhereInput | VereadorScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput> | LeadCreateWithoutMunicipioInput[] | LeadUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMunicipioInput | LeadCreateOrConnectWithoutMunicipioInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMunicipioInput | LeadUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: LeadCreateManyMunicipioInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMunicipioInput | LeadUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMunicipioInput | LeadUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type VereadorUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput> | VereadorCreateWithoutMunicipioInput[] | VereadorUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: VereadorCreateOrConnectWithoutMunicipioInput | VereadorCreateOrConnectWithoutMunicipioInput[]
    upsert?: VereadorUpsertWithWhereUniqueWithoutMunicipioInput | VereadorUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: VereadorCreateManyMunicipioInputEnvelope
    set?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    disconnect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    delete?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    connect?: VereadorWhereUniqueInput | VereadorWhereUniqueInput[]
    update?: VereadorUpdateWithWhereUniqueWithoutMunicipioInput | VereadorUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: VereadorUpdateManyWithWhereWithoutMunicipioInput | VereadorUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: VereadorScalarWhereInput | VereadorScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutMunicipioNestedInput = {
    create?: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput> | LeadCreateWithoutMunicipioInput[] | LeadUncheckedCreateWithoutMunicipioInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutMunicipioInput | LeadCreateOrConnectWithoutMunicipioInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutMunicipioInput | LeadUpsertWithWhereUniqueWithoutMunicipioInput[]
    createMany?: LeadCreateManyMunicipioInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutMunicipioInput | LeadUpdateWithWhereUniqueWithoutMunicipioInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutMunicipioInput | LeadUpdateManyWithWhereWithoutMunicipioInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type MunicipioCreateNestedOneWithoutVereadoresInput = {
    create?: XOR<MunicipioCreateWithoutVereadoresInput, MunicipioUncheckedCreateWithoutVereadoresInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutVereadoresInput
    connect?: MunicipioWhereUniqueInput
  }

  export type MunicipioUpdateOneRequiredWithoutVereadoresNestedInput = {
    create?: XOR<MunicipioCreateWithoutVereadoresInput, MunicipioUncheckedCreateWithoutVereadoresInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutVereadoresInput
    upsert?: MunicipioUpsertWithoutVereadoresInput
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutVereadoresInput, MunicipioUpdateWithoutVereadoresInput>, MunicipioUncheckedUpdateWithoutVereadoresInput>
  }

  export type MunicipioCreateNestedOneWithoutLeadsInput = {
    create?: XOR<MunicipioCreateWithoutLeadsInput, MunicipioUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutLeadsInput
    connect?: MunicipioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MunicipioUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<MunicipioCreateWithoutLeadsInput, MunicipioUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: MunicipioCreateOrConnectWithoutLeadsInput
    upsert?: MunicipioUpsertWithoutLeadsInput
    connect?: MunicipioWhereUniqueInput
    update?: XOR<XOR<MunicipioUpdateToOneWithWhereWithoutLeadsInput, MunicipioUpdateWithoutLeadsInput>, MunicipioUncheckedUpdateWithoutLeadsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type VereadorCreateWithoutMunicipioInput = {
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
  }

  export type VereadorUncheckedCreateWithoutMunicipioInput = {
    id?: number
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
  }

  export type VereadorCreateOrConnectWithoutMunicipioInput = {
    where: VereadorWhereUniqueInput
    create: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput>
  }

  export type VereadorCreateManyMunicipioInputEnvelope = {
    data: VereadorCreateManyMunicipioInput | VereadorCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutMunicipioInput = {
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type LeadUncheckedCreateWithoutMunicipioInput = {
    id?: number
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type LeadCreateOrConnectWithoutMunicipioInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput>
  }

  export type LeadCreateManyMunicipioInputEnvelope = {
    data: LeadCreateManyMunicipioInput | LeadCreateManyMunicipioInput[]
    skipDuplicates?: boolean
  }

  export type VereadorUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: VereadorWhereUniqueInput
    update: XOR<VereadorUpdateWithoutMunicipioInput, VereadorUncheckedUpdateWithoutMunicipioInput>
    create: XOR<VereadorCreateWithoutMunicipioInput, VereadorUncheckedCreateWithoutMunicipioInput>
  }

  export type VereadorUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: VereadorWhereUniqueInput
    data: XOR<VereadorUpdateWithoutMunicipioInput, VereadorUncheckedUpdateWithoutMunicipioInput>
  }

  export type VereadorUpdateManyWithWhereWithoutMunicipioInput = {
    where: VereadorScalarWhereInput
    data: XOR<VereadorUpdateManyMutationInput, VereadorUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type VereadorScalarWhereInput = {
    AND?: VereadorScalarWhereInput | VereadorScalarWhereInput[]
    OR?: VereadorScalarWhereInput[]
    NOT?: VereadorScalarWhereInput | VereadorScalarWhereInput[]
    id?: IntFilter<"Vereador"> | number
    nome?: StringFilter<"Vereador"> | string
    whatsapp?: StringNullableFilter<"Vereador"> | string | null
    email?: StringNullableFilter<"Vereador"> | string | null
    partido?: StringNullableFilter<"Vereador"> | string | null
    fotoUrl?: StringNullableFilter<"Vereador"> | string | null
    destaque?: BoolFilter<"Vereador"> | boolean
    aprovacoes?: IntFilter<"Vereador"> | number
    protocolados?: IntFilter<"Vereador"> | number
    municipioId?: IntFilter<"Vereador"> | number
  }

  export type LeadUpsertWithWhereUniqueWithoutMunicipioInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutMunicipioInput, LeadUncheckedUpdateWithoutMunicipioInput>
    create: XOR<LeadCreateWithoutMunicipioInput, LeadUncheckedCreateWithoutMunicipioInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutMunicipioInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutMunicipioInput, LeadUncheckedUpdateWithoutMunicipioInput>
  }

  export type LeadUpdateManyWithWhereWithoutMunicipioInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutMunicipioInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: IntFilter<"Lead"> | number
    nome?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    bairro?: StringNullableFilter<"Lead"> | string | null
    whatsapp?: StringNullableFilter<"Lead"> | string | null
    type?: StringFilter<"Lead"> | string
    dataCadastro?: DateTimeFilter<"Lead"> | Date | string
    ativo?: BoolFilter<"Lead"> | boolean
    municipioId?: IntFilter<"Lead"> | number
  }

  export type MunicipioCreateWithoutVereadoresInput = {
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    leads?: LeadCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateWithoutVereadoresInput = {
    id?: number
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    leads?: LeadUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioCreateOrConnectWithoutVereadoresInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutVereadoresInput, MunicipioUncheckedCreateWithoutVereadoresInput>
  }

  export type MunicipioUpsertWithoutVereadoresInput = {
    update: XOR<MunicipioUpdateWithoutVereadoresInput, MunicipioUncheckedUpdateWithoutVereadoresInput>
    create: XOR<MunicipioCreateWithoutVereadoresInput, MunicipioUncheckedCreateWithoutVereadoresInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutVereadoresInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutVereadoresInput, MunicipioUncheckedUpdateWithoutVereadoresInput>
  }

  export type MunicipioUpdateWithoutVereadoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: LeadUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutVereadoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: LeadUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioCreateWithoutLeadsInput = {
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    vereadores?: VereadorCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioUncheckedCreateWithoutLeadsInput = {
    id?: number
    nome: string
    img?: string | null
    uf?: string
    aprovados?: number
    protocolados?: number
    destaque?: boolean
    sitePrefeitura?: string | null
    siteCamara?: string | null
    vereadores?: VereadorUncheckedCreateNestedManyWithoutMunicipioInput
  }

  export type MunicipioCreateOrConnectWithoutLeadsInput = {
    where: MunicipioWhereUniqueInput
    create: XOR<MunicipioCreateWithoutLeadsInput, MunicipioUncheckedCreateWithoutLeadsInput>
  }

  export type MunicipioUpsertWithoutLeadsInput = {
    update: XOR<MunicipioUpdateWithoutLeadsInput, MunicipioUncheckedUpdateWithoutLeadsInput>
    create: XOR<MunicipioCreateWithoutLeadsInput, MunicipioUncheckedCreateWithoutLeadsInput>
    where?: MunicipioWhereInput
  }

  export type MunicipioUpdateToOneWithWhereWithoutLeadsInput = {
    where?: MunicipioWhereInput
    data: XOR<MunicipioUpdateWithoutLeadsInput, MunicipioUncheckedUpdateWithoutLeadsInput>
  }

  export type MunicipioUpdateWithoutLeadsInput = {
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    vereadores?: VereadorUpdateManyWithoutMunicipioNestedInput
  }

  export type MunicipioUncheckedUpdateWithoutLeadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    uf?: StringFieldUpdateOperationsInput | string
    aprovados?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
    destaque?: BoolFieldUpdateOperationsInput | boolean
    sitePrefeitura?: NullableStringFieldUpdateOperationsInput | string | null
    siteCamara?: NullableStringFieldUpdateOperationsInput | string | null
    vereadores?: VereadorUncheckedUpdateManyWithoutMunicipioNestedInput
  }

  export type VereadorCreateManyMunicipioInput = {
    id?: number
    nome: string
    whatsapp?: string | null
    email?: string | null
    partido?: string | null
    fotoUrl?: string | null
    destaque?: boolean
    aprovacoes?: number
    protocolados?: number
  }

  export type LeadCreateManyMunicipioInput = {
    id?: number
    nome: string
    email: string
    bairro?: string | null
    whatsapp?: string | null
    type?: string
    dataCadastro?: Date | string
    ativo?: boolean
  }

  export type VereadorUpdateWithoutMunicipioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
  }

  export type VereadorUncheckedUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
  }

  export type VereadorUncheckedUpdateManyWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    partido?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    destaque?: BoolFieldUpdateOperationsInput | boolean
    aprovacoes?: IntFieldUpdateOperationsInput | number
    protocolados?: IntFieldUpdateOperationsInput | number
  }

  export type LeadUpdateWithoutMunicipioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUncheckedUpdateWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeadUncheckedUpdateManyWithoutMunicipioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    bairro?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    dataCadastro?: DateTimeFieldUpdateOperationsInput | Date | string
    ativo?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}