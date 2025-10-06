
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
 * Model clinica
 * 
 */
export type clinica = $Result.DefaultSelection<Prisma.$clinicaPayload>
/**
 * Model enfermedad
 * 
 */
export type enfermedad = $Result.DefaultSelection<Prisma.$enfermedadPayload>
/**
 * Model historial_clinico
 * 
 */
export type historial_clinico = $Result.DefaultSelection<Prisma.$historial_clinicoPayload>
/**
 * Model mascota
 * 
 */
export type mascota = $Result.DefaultSelection<Prisma.$mascotaPayload>
/**
 * Model operacion
 * 
 */
export type operacion = $Result.DefaultSelection<Prisma.$operacionPayload>
/**
 * Model tratamiento
 * 
 */
export type tratamiento = $Result.DefaultSelection<Prisma.$tratamientoPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>
/**
 * Model vacuna
 * 
 */
export type vacuna = $Result.DefaultSelection<Prisma.$vacunaPayload>
/**
 * Model veterinario
 * 
 */
export type veterinario = $Result.DefaultSelection<Prisma.$veterinarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clinicas
 * const clinicas = await prisma.clinica.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Clinicas
   * const clinicas = await prisma.clinica.findMany()
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
   * `prisma.clinica`: Exposes CRUD operations for the **clinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clinicas
    * const clinicas = await prisma.clinica.findMany()
    * ```
    */
  get clinica(): Prisma.clinicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enfermedad`: Exposes CRUD operations for the **enfermedad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enfermedads
    * const enfermedads = await prisma.enfermedad.findMany()
    * ```
    */
  get enfermedad(): Prisma.enfermedadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historial_clinico`: Exposes CRUD operations for the **historial_clinico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historial_clinicos
    * const historial_clinicos = await prisma.historial_clinico.findMany()
    * ```
    */
  get historial_clinico(): Prisma.historial_clinicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mascota`: Exposes CRUD operations for the **mascota** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mascotas
    * const mascotas = await prisma.mascota.findMany()
    * ```
    */
  get mascota(): Prisma.mascotaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operacion`: Exposes CRUD operations for the **operacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operacions
    * const operacions = await prisma.operacion.findMany()
    * ```
    */
  get operacion(): Prisma.operacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tratamiento`: Exposes CRUD operations for the **tratamiento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tratamientos
    * const tratamientos = await prisma.tratamiento.findMany()
    * ```
    */
  get tratamiento(): Prisma.tratamientoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vacuna`: Exposes CRUD operations for the **vacuna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vacunas
    * const vacunas = await prisma.vacuna.findMany()
    * ```
    */
  get vacuna(): Prisma.vacunaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veterinario`: Exposes CRUD operations for the **veterinario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veterinarios
    * const veterinarios = await prisma.veterinario.findMany()
    * ```
    */
  get veterinario(): Prisma.veterinarioDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
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
    clinica: 'clinica',
    enfermedad: 'enfermedad',
    historial_clinico: 'historial_clinico',
    mascota: 'mascota',
    operacion: 'operacion',
    tratamiento: 'tratamiento',
    usuario: 'usuario',
    vacuna: 'vacuna',
    veterinario: 'veterinario'
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
      modelProps: "clinica" | "enfermedad" | "historial_clinico" | "mascota" | "operacion" | "tratamiento" | "usuario" | "vacuna" | "veterinario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      clinica: {
        payload: Prisma.$clinicaPayload<ExtArgs>
        fields: Prisma.clinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          findFirst: {
            args: Prisma.clinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          findMany: {
            args: Prisma.clinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>[]
          }
          create: {
            args: Prisma.clinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          createMany: {
            args: Prisma.clinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.clinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          update: {
            args: Prisma.clinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          deleteMany: {
            args: Prisma.clinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clinicaPayload>
          }
          aggregate: {
            args: Prisma.ClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClinica>
          }
          groupBy: {
            args: Prisma.clinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.clinicaCountArgs<ExtArgs>
            result: $Utils.Optional<ClinicaCountAggregateOutputType> | number
          }
        }
      }
      enfermedad: {
        payload: Prisma.$enfermedadPayload<ExtArgs>
        fields: Prisma.enfermedadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enfermedadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enfermedadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          findFirst: {
            args: Prisma.enfermedadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enfermedadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          findMany: {
            args: Prisma.enfermedadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>[]
          }
          create: {
            args: Prisma.enfermedadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          createMany: {
            args: Prisma.enfermedadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.enfermedadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          update: {
            args: Prisma.enfermedadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          deleteMany: {
            args: Prisma.enfermedadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enfermedadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.enfermedadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enfermedadPayload>
          }
          aggregate: {
            args: Prisma.EnfermedadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnfermedad>
          }
          groupBy: {
            args: Prisma.enfermedadGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnfermedadGroupByOutputType>[]
          }
          count: {
            args: Prisma.enfermedadCountArgs<ExtArgs>
            result: $Utils.Optional<EnfermedadCountAggregateOutputType> | number
          }
        }
      }
      historial_clinico: {
        payload: Prisma.$historial_clinicoPayload<ExtArgs>
        fields: Prisma.historial_clinicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.historial_clinicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.historial_clinicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          findFirst: {
            args: Prisma.historial_clinicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.historial_clinicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          findMany: {
            args: Prisma.historial_clinicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>[]
          }
          create: {
            args: Prisma.historial_clinicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          createMany: {
            args: Prisma.historial_clinicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.historial_clinicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          update: {
            args: Prisma.historial_clinicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          deleteMany: {
            args: Prisma.historial_clinicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.historial_clinicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.historial_clinicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$historial_clinicoPayload>
          }
          aggregate: {
            args: Prisma.Historial_clinicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorial_clinico>
          }
          groupBy: {
            args: Prisma.historial_clinicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historial_clinicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.historial_clinicoCountArgs<ExtArgs>
            result: $Utils.Optional<Historial_clinicoCountAggregateOutputType> | number
          }
        }
      }
      mascota: {
        payload: Prisma.$mascotaPayload<ExtArgs>
        fields: Prisma.mascotaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mascotaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mascotaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          findFirst: {
            args: Prisma.mascotaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mascotaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          findMany: {
            args: Prisma.mascotaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>[]
          }
          create: {
            args: Prisma.mascotaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          createMany: {
            args: Prisma.mascotaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mascotaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          update: {
            args: Prisma.mascotaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          deleteMany: {
            args: Prisma.mascotaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mascotaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mascotaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mascotaPayload>
          }
          aggregate: {
            args: Prisma.MascotaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMascota>
          }
          groupBy: {
            args: Prisma.mascotaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MascotaGroupByOutputType>[]
          }
          count: {
            args: Prisma.mascotaCountArgs<ExtArgs>
            result: $Utils.Optional<MascotaCountAggregateOutputType> | number
          }
        }
      }
      operacion: {
        payload: Prisma.$operacionPayload<ExtArgs>
        fields: Prisma.operacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          findFirst: {
            args: Prisma.operacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          findMany: {
            args: Prisma.operacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>[]
          }
          create: {
            args: Prisma.operacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          createMany: {
            args: Prisma.operacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.operacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          update: {
            args: Prisma.operacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          deleteMany: {
            args: Prisma.operacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.operacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operacionPayload>
          }
          aggregate: {
            args: Prisma.OperacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperacion>
          }
          groupBy: {
            args: Prisma.operacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.operacionCountArgs<ExtArgs>
            result: $Utils.Optional<OperacionCountAggregateOutputType> | number
          }
        }
      }
      tratamiento: {
        payload: Prisma.$tratamientoPayload<ExtArgs>
        fields: Prisma.tratamientoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tratamientoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tratamientoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          findFirst: {
            args: Prisma.tratamientoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tratamientoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          findMany: {
            args: Prisma.tratamientoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>[]
          }
          create: {
            args: Prisma.tratamientoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          createMany: {
            args: Prisma.tratamientoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tratamientoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          update: {
            args: Prisma.tratamientoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          deleteMany: {
            args: Prisma.tratamientoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tratamientoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tratamientoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tratamientoPayload>
          }
          aggregate: {
            args: Prisma.TratamientoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTratamiento>
          }
          groupBy: {
            args: Prisma.tratamientoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TratamientoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tratamientoCountArgs<ExtArgs>
            result: $Utils.Optional<TratamientoCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      vacuna: {
        payload: Prisma.$vacunaPayload<ExtArgs>
        fields: Prisma.vacunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vacunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vacunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          findFirst: {
            args: Prisma.vacunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vacunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          findMany: {
            args: Prisma.vacunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>[]
          }
          create: {
            args: Prisma.vacunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          createMany: {
            args: Prisma.vacunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vacunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          update: {
            args: Prisma.vacunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          deleteMany: {
            args: Prisma.vacunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vacunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vacunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vacunaPayload>
          }
          aggregate: {
            args: Prisma.VacunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVacuna>
          }
          groupBy: {
            args: Prisma.vacunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VacunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.vacunaCountArgs<ExtArgs>
            result: $Utils.Optional<VacunaCountAggregateOutputType> | number
          }
        }
      }
      veterinario: {
        payload: Prisma.$veterinarioPayload<ExtArgs>
        fields: Prisma.veterinarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.veterinarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.veterinarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          findFirst: {
            args: Prisma.veterinarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.veterinarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          findMany: {
            args: Prisma.veterinarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>[]
          }
          create: {
            args: Prisma.veterinarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          createMany: {
            args: Prisma.veterinarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.veterinarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          update: {
            args: Prisma.veterinarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          deleteMany: {
            args: Prisma.veterinarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.veterinarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.veterinarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$veterinarioPayload>
          }
          aggregate: {
            args: Prisma.VeterinarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeterinario>
          }
          groupBy: {
            args: Prisma.veterinarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeterinarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.veterinarioCountArgs<ExtArgs>
            result: $Utils.Optional<VeterinarioCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    clinica?: clinicaOmit
    enfermedad?: enfermedadOmit
    historial_clinico?: historial_clinicoOmit
    mascota?: mascotaOmit
    operacion?: operacionOmit
    tratamiento?: tratamientoOmit
    usuario?: usuarioOmit
    vacuna?: vacunaOmit
    veterinario?: veterinarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model clinica
   */

  export type AggregateClinica = {
    _count: ClinicaCountAggregateOutputType | null
    _avg: ClinicaAvgAggregateOutputType | null
    _sum: ClinicaSumAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  export type ClinicaAvgAggregateOutputType = {
    id: number | null
    Latitud: number | null
    Longitud: number | null
  }

  export type ClinicaSumAggregateOutputType = {
    id: number | null
    Latitud: number | null
    Longitud: number | null
  }

  export type ClinicaMinAggregateOutputType = {
    id: number | null
    Tienda: string | null
    Direcci_n: string | null
    Telefono: string | null
    Latitud: number | null
    Longitud: number | null
  }

  export type ClinicaMaxAggregateOutputType = {
    id: number | null
    Tienda: string | null
    Direcci_n: string | null
    Telefono: string | null
    Latitud: number | null
    Longitud: number | null
  }

  export type ClinicaCountAggregateOutputType = {
    id: number
    Tienda: number
    Direcci_n: number
    Telefono: number
    Latitud: number
    Longitud: number
    _all: number
  }


  export type ClinicaAvgAggregateInputType = {
    id?: true
    Latitud?: true
    Longitud?: true
  }

  export type ClinicaSumAggregateInputType = {
    id?: true
    Latitud?: true
    Longitud?: true
  }

  export type ClinicaMinAggregateInputType = {
    id?: true
    Tienda?: true
    Direcci_n?: true
    Telefono?: true
    Latitud?: true
    Longitud?: true
  }

  export type ClinicaMaxAggregateInputType = {
    id?: true
    Tienda?: true
    Direcci_n?: true
    Telefono?: true
    Latitud?: true
    Longitud?: true
  }

  export type ClinicaCountAggregateInputType = {
    id?: true
    Tienda?: true
    Direcci_n?: true
    Telefono?: true
    Latitud?: true
    Longitud?: true
    _all?: true
  }

  export type ClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinica to aggregate.
     */
    where?: clinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinicas to fetch.
     */
    orderBy?: clinicaOrderByWithRelationInput | clinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clinicas
    **/
    _count?: true | ClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClinicaMaxAggregateInputType
  }

  export type GetClinicaAggregateType<T extends ClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinica[P]>
      : GetScalarType<T[P], AggregateClinica[P]>
  }




  export type clinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicaWhereInput
    orderBy?: clinicaOrderByWithAggregationInput | clinicaOrderByWithAggregationInput[]
    by: ClinicaScalarFieldEnum[] | ClinicaScalarFieldEnum
    having?: clinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClinicaCountAggregateInputType | true
    _avg?: ClinicaAvgAggregateInputType
    _sum?: ClinicaSumAggregateInputType
    _min?: ClinicaMinAggregateInputType
    _max?: ClinicaMaxAggregateInputType
  }

  export type ClinicaGroupByOutputType = {
    id: number
    Tienda: string
    Direcci_n: string
    Telefono: string
    Latitud: number
    Longitud: number
    _count: ClinicaCountAggregateOutputType | null
    _avg: ClinicaAvgAggregateOutputType | null
    _sum: ClinicaSumAggregateOutputType | null
    _min: ClinicaMinAggregateOutputType | null
    _max: ClinicaMaxAggregateOutputType | null
  }

  type GetClinicaGroupByPayload<T extends clinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], ClinicaGroupByOutputType[P]>
        }
      >
    >


  export type clinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Tienda?: boolean
    Direcci_n?: boolean
    Telefono?: boolean
    Latitud?: boolean
    Longitud?: boolean
  }, ExtArgs["result"]["clinica"]>



  export type clinicaSelectScalar = {
    id?: boolean
    Tienda?: boolean
    Direcci_n?: boolean
    Telefono?: boolean
    Latitud?: boolean
    Longitud?: boolean
  }

  export type clinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Tienda" | "Direcci_n" | "Telefono" | "Latitud" | "Longitud", ExtArgs["result"]["clinica"]>

  export type $clinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clinica"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Tienda: string
      Direcci_n: string
      Telefono: string
      Latitud: number
      Longitud: number
    }, ExtArgs["result"]["clinica"]>
    composites: {}
  }

  type clinicaGetPayload<S extends boolean | null | undefined | clinicaDefaultArgs> = $Result.GetResult<Prisma.$clinicaPayload, S>

  type clinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<clinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClinicaCountAggregateInputType | true
    }

  export interface clinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinica'], meta: { name: 'clinica' } }
    /**
     * Find zero or one Clinica that matches the filter.
     * @param {clinicaFindUniqueArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clinicaFindUniqueArgs>(args: SelectSubset<T, clinicaFindUniqueArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clinicaFindUniqueOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, clinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaFindFirstArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clinicaFindFirstArgs>(args?: SelectSubset<T, clinicaFindFirstArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaFindFirstOrThrowArgs} args - Arguments to find a Clinica
     * @example
     * // Get one Clinica
     * const clinica = await prisma.clinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, clinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinicas
     * const clinicas = await prisma.clinica.findMany()
     * 
     * // Get first 10 Clinicas
     * const clinicas = await prisma.clinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clinicaWithIdOnly = await prisma.clinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends clinicaFindManyArgs>(args?: SelectSubset<T, clinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clinica.
     * @param {clinicaCreateArgs} args - Arguments to create a Clinica.
     * @example
     * // Create one Clinica
     * const Clinica = await prisma.clinica.create({
     *   data: {
     *     // ... data to create a Clinica
     *   }
     * })
     * 
     */
    create<T extends clinicaCreateArgs>(args: SelectSubset<T, clinicaCreateArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clinicas.
     * @param {clinicaCreateManyArgs} args - Arguments to create many Clinicas.
     * @example
     * // Create many Clinicas
     * const clinica = await prisma.clinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clinicaCreateManyArgs>(args?: SelectSubset<T, clinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clinica.
     * @param {clinicaDeleteArgs} args - Arguments to delete one Clinica.
     * @example
     * // Delete one Clinica
     * const Clinica = await prisma.clinica.delete({
     *   where: {
     *     // ... filter to delete one Clinica
     *   }
     * })
     * 
     */
    delete<T extends clinicaDeleteArgs>(args: SelectSubset<T, clinicaDeleteArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clinica.
     * @param {clinicaUpdateArgs} args - Arguments to update one Clinica.
     * @example
     * // Update one Clinica
     * const clinica = await prisma.clinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clinicaUpdateArgs>(args: SelectSubset<T, clinicaUpdateArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clinicas.
     * @param {clinicaDeleteManyArgs} args - Arguments to filter Clinicas to delete.
     * @example
     * // Delete a few Clinicas
     * const { count } = await prisma.clinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clinicaDeleteManyArgs>(args?: SelectSubset<T, clinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinicas
     * const clinica = await prisma.clinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clinicaUpdateManyArgs>(args: SelectSubset<T, clinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clinica.
     * @param {clinicaUpsertArgs} args - Arguments to update or create a Clinica.
     * @example
     * // Update or create a Clinica
     * const clinica = await prisma.clinica.upsert({
     *   create: {
     *     // ... data to create a Clinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinica we want to update
     *   }
     * })
     */
    upsert<T extends clinicaUpsertArgs>(args: SelectSubset<T, clinicaUpsertArgs<ExtArgs>>): Prisma__clinicaClient<$Result.GetResult<Prisma.$clinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaCountArgs} args - Arguments to filter Clinicas to count.
     * @example
     * // Count the number of Clinicas
     * const count = await prisma.clinica.count({
     *   where: {
     *     // ... the filter for the Clinicas we want to count
     *   }
     * })
    **/
    count<T extends clinicaCountArgs>(
      args?: Subset<T, clinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClinicaAggregateArgs>(args: Subset<T, ClinicaAggregateArgs>): Prisma.PrismaPromise<GetClinicaAggregateType<T>>

    /**
     * Group by Clinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicaGroupByArgs} args - Group by arguments.
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
      T extends clinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicaGroupByArgs['orderBy'] }
        : { orderBy?: clinicaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clinica model
   */
  readonly fields: clinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the clinica model
   */
  interface clinicaFieldRefs {
    readonly id: FieldRef<"clinica", 'Int'>
    readonly Tienda: FieldRef<"clinica", 'String'>
    readonly Direcci_n: FieldRef<"clinica", 'String'>
    readonly Telefono: FieldRef<"clinica", 'String'>
    readonly Latitud: FieldRef<"clinica", 'Float'>
    readonly Longitud: FieldRef<"clinica", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * clinica findUnique
   */
  export type clinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter, which clinica to fetch.
     */
    where: clinicaWhereUniqueInput
  }

  /**
   * clinica findUniqueOrThrow
   */
  export type clinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter, which clinica to fetch.
     */
    where: clinicaWhereUniqueInput
  }

  /**
   * clinica findFirst
   */
  export type clinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter, which clinica to fetch.
     */
    where?: clinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinicas to fetch.
     */
    orderBy?: clinicaOrderByWithRelationInput | clinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinicas.
     */
    cursor?: clinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * clinica findFirstOrThrow
   */
  export type clinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter, which clinica to fetch.
     */
    where?: clinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinicas to fetch.
     */
    orderBy?: clinicaOrderByWithRelationInput | clinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clinicas.
     */
    cursor?: clinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clinicas.
     */
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * clinica findMany
   */
  export type clinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter, which clinicas to fetch.
     */
    where?: clinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clinicas to fetch.
     */
    orderBy?: clinicaOrderByWithRelationInput | clinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clinicas.
     */
    cursor?: clinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clinicas.
     */
    skip?: number
    distinct?: ClinicaScalarFieldEnum | ClinicaScalarFieldEnum[]
  }

  /**
   * clinica create
   */
  export type clinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * The data needed to create a clinica.
     */
    data: XOR<clinicaCreateInput, clinicaUncheckedCreateInput>
  }

  /**
   * clinica createMany
   */
  export type clinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinicas.
     */
    data: clinicaCreateManyInput | clinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clinica update
   */
  export type clinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * The data needed to update a clinica.
     */
    data: XOR<clinicaUpdateInput, clinicaUncheckedUpdateInput>
    /**
     * Choose, which clinica to update.
     */
    where: clinicaWhereUniqueInput
  }

  /**
   * clinica updateMany
   */
  export type clinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinicas.
     */
    data: XOR<clinicaUpdateManyMutationInput, clinicaUncheckedUpdateManyInput>
    /**
     * Filter which clinicas to update
     */
    where?: clinicaWhereInput
    /**
     * Limit how many clinicas to update.
     */
    limit?: number
  }

  /**
   * clinica upsert
   */
  export type clinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * The filter to search for the clinica to update in case it exists.
     */
    where: clinicaWhereUniqueInput
    /**
     * In case the clinica found by the `where` argument doesn't exist, create a new clinica with this data.
     */
    create: XOR<clinicaCreateInput, clinicaUncheckedCreateInput>
    /**
     * In case the clinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicaUpdateInput, clinicaUncheckedUpdateInput>
  }

  /**
   * clinica delete
   */
  export type clinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
    /**
     * Filter which clinica to delete.
     */
    where: clinicaWhereUniqueInput
  }

  /**
   * clinica deleteMany
   */
  export type clinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinicas to delete
     */
    where?: clinicaWhereInput
    /**
     * Limit how many clinicas to delete.
     */
    limit?: number
  }

  /**
   * clinica without action
   */
  export type clinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinica
     */
    select?: clinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the clinica
     */
    omit?: clinicaOmit<ExtArgs> | null
  }


  /**
   * Model enfermedad
   */

  export type AggregateEnfermedad = {
    _count: EnfermedadCountAggregateOutputType | null
    _avg: EnfermedadAvgAggregateOutputType | null
    _sum: EnfermedadSumAggregateOutputType | null
    _min: EnfermedadMinAggregateOutputType | null
    _max: EnfermedadMaxAggregateOutputType | null
  }

  export type EnfermedadAvgAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type EnfermedadSumAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type EnfermedadMinAggregateOutputType = {
    id: number | null
    Tipo: string | null
    Fecha_inicio: Date | null
    Fecha_fin: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type EnfermedadMaxAggregateOutputType = {
    id: number | null
    Tipo: string | null
    Fecha_inicio: Date | null
    Fecha_fin: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type EnfermedadCountAggregateOutputType = {
    id: number
    Tipo: number
    Fecha_inicio: number
    Fecha_fin: number
    Descripci_n: number
    historial_clinico_id_fk: number
    _all: number
  }


  export type EnfermedadAvgAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type EnfermedadSumAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type EnfermedadMinAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha_inicio?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type EnfermedadMaxAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha_inicio?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type EnfermedadCountAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha_inicio?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
    _all?: true
  }

  export type EnfermedadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enfermedad to aggregate.
     */
    where?: enfermedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedads to fetch.
     */
    orderBy?: enfermedadOrderByWithRelationInput | enfermedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enfermedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enfermedads
    **/
    _count?: true | EnfermedadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnfermedadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnfermedadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnfermedadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnfermedadMaxAggregateInputType
  }

  export type GetEnfermedadAggregateType<T extends EnfermedadAggregateArgs> = {
        [P in keyof T & keyof AggregateEnfermedad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnfermedad[P]>
      : GetScalarType<T[P], AggregateEnfermedad[P]>
  }




  export type enfermedadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enfermedadWhereInput
    orderBy?: enfermedadOrderByWithAggregationInput | enfermedadOrderByWithAggregationInput[]
    by: EnfermedadScalarFieldEnum[] | EnfermedadScalarFieldEnum
    having?: enfermedadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnfermedadCountAggregateInputType | true
    _avg?: EnfermedadAvgAggregateInputType
    _sum?: EnfermedadSumAggregateInputType
    _min?: EnfermedadMinAggregateInputType
    _max?: EnfermedadMaxAggregateInputType
  }

  export type EnfermedadGroupByOutputType = {
    id: number
    Tipo: string
    Fecha_inicio: Date
    Fecha_fin: Date
    Descripci_n: string
    historial_clinico_id_fk: number
    _count: EnfermedadCountAggregateOutputType | null
    _avg: EnfermedadAvgAggregateOutputType | null
    _sum: EnfermedadSumAggregateOutputType | null
    _min: EnfermedadMinAggregateOutputType | null
    _max: EnfermedadMaxAggregateOutputType | null
  }

  type GetEnfermedadGroupByPayload<T extends enfermedadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnfermedadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnfermedadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnfermedadGroupByOutputType[P]>
            : GetScalarType<T[P], EnfermedadGroupByOutputType[P]>
        }
      >
    >


  export type enfermedadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Tipo?: boolean
    Fecha_inicio?: boolean
    Fecha_fin?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enfermedad"]>



  export type enfermedadSelectScalar = {
    id?: boolean
    Tipo?: boolean
    Fecha_inicio?: boolean
    Fecha_fin?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
  }

  export type enfermedadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Tipo" | "Fecha_inicio" | "Fecha_fin" | "Descripci_n" | "historial_clinico_id_fk", ExtArgs["result"]["enfermedad"]>
  export type enfermedadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }

  export type $enfermedadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enfermedad"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Tipo: string
      Fecha_inicio: Date
      Fecha_fin: Date
      Descripci_n: string
      historial_clinico_id_fk: number
    }, ExtArgs["result"]["enfermedad"]>
    composites: {}
  }

  type enfermedadGetPayload<S extends boolean | null | undefined | enfermedadDefaultArgs> = $Result.GetResult<Prisma.$enfermedadPayload, S>

  type enfermedadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enfermedadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnfermedadCountAggregateInputType | true
    }

  export interface enfermedadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enfermedad'], meta: { name: 'enfermedad' } }
    /**
     * Find zero or one Enfermedad that matches the filter.
     * @param {enfermedadFindUniqueArgs} args - Arguments to find a Enfermedad
     * @example
     * // Get one Enfermedad
     * const enfermedad = await prisma.enfermedad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enfermedadFindUniqueArgs>(args: SelectSubset<T, enfermedadFindUniqueArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enfermedad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enfermedadFindUniqueOrThrowArgs} args - Arguments to find a Enfermedad
     * @example
     * // Get one Enfermedad
     * const enfermedad = await prisma.enfermedad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enfermedadFindUniqueOrThrowArgs>(args: SelectSubset<T, enfermedadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfermedad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadFindFirstArgs} args - Arguments to find a Enfermedad
     * @example
     * // Get one Enfermedad
     * const enfermedad = await prisma.enfermedad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enfermedadFindFirstArgs>(args?: SelectSubset<T, enfermedadFindFirstArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enfermedad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadFindFirstOrThrowArgs} args - Arguments to find a Enfermedad
     * @example
     * // Get one Enfermedad
     * const enfermedad = await prisma.enfermedad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enfermedadFindFirstOrThrowArgs>(args?: SelectSubset<T, enfermedadFindFirstOrThrowArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enfermedads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enfermedads
     * const enfermedads = await prisma.enfermedad.findMany()
     * 
     * // Get first 10 Enfermedads
     * const enfermedads = await prisma.enfermedad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enfermedadWithIdOnly = await prisma.enfermedad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends enfermedadFindManyArgs>(args?: SelectSubset<T, enfermedadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enfermedad.
     * @param {enfermedadCreateArgs} args - Arguments to create a Enfermedad.
     * @example
     * // Create one Enfermedad
     * const Enfermedad = await prisma.enfermedad.create({
     *   data: {
     *     // ... data to create a Enfermedad
     *   }
     * })
     * 
     */
    create<T extends enfermedadCreateArgs>(args: SelectSubset<T, enfermedadCreateArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enfermedads.
     * @param {enfermedadCreateManyArgs} args - Arguments to create many Enfermedads.
     * @example
     * // Create many Enfermedads
     * const enfermedad = await prisma.enfermedad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enfermedadCreateManyArgs>(args?: SelectSubset<T, enfermedadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Enfermedad.
     * @param {enfermedadDeleteArgs} args - Arguments to delete one Enfermedad.
     * @example
     * // Delete one Enfermedad
     * const Enfermedad = await prisma.enfermedad.delete({
     *   where: {
     *     // ... filter to delete one Enfermedad
     *   }
     * })
     * 
     */
    delete<T extends enfermedadDeleteArgs>(args: SelectSubset<T, enfermedadDeleteArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enfermedad.
     * @param {enfermedadUpdateArgs} args - Arguments to update one Enfermedad.
     * @example
     * // Update one Enfermedad
     * const enfermedad = await prisma.enfermedad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enfermedadUpdateArgs>(args: SelectSubset<T, enfermedadUpdateArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enfermedads.
     * @param {enfermedadDeleteManyArgs} args - Arguments to filter Enfermedads to delete.
     * @example
     * // Delete a few Enfermedads
     * const { count } = await prisma.enfermedad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enfermedadDeleteManyArgs>(args?: SelectSubset<T, enfermedadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enfermedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enfermedads
     * const enfermedad = await prisma.enfermedad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enfermedadUpdateManyArgs>(args: SelectSubset<T, enfermedadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enfermedad.
     * @param {enfermedadUpsertArgs} args - Arguments to update or create a Enfermedad.
     * @example
     * // Update or create a Enfermedad
     * const enfermedad = await prisma.enfermedad.upsert({
     *   create: {
     *     // ... data to create a Enfermedad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enfermedad we want to update
     *   }
     * })
     */
    upsert<T extends enfermedadUpsertArgs>(args: SelectSubset<T, enfermedadUpsertArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enfermedads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadCountArgs} args - Arguments to filter Enfermedads to count.
     * @example
     * // Count the number of Enfermedads
     * const count = await prisma.enfermedad.count({
     *   where: {
     *     // ... the filter for the Enfermedads we want to count
     *   }
     * })
    **/
    count<T extends enfermedadCountArgs>(
      args?: Subset<T, enfermedadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnfermedadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enfermedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnfermedadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnfermedadAggregateArgs>(args: Subset<T, EnfermedadAggregateArgs>): Prisma.PrismaPromise<GetEnfermedadAggregateType<T>>

    /**
     * Group by Enfermedad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enfermedadGroupByArgs} args - Group by arguments.
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
      T extends enfermedadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enfermedadGroupByArgs['orderBy'] }
        : { orderBy?: enfermedadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enfermedadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnfermedadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enfermedad model
   */
  readonly fields: enfermedadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enfermedad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enfermedadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends historial_clinicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinicoDefaultArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the enfermedad model
   */
  interface enfermedadFieldRefs {
    readonly id: FieldRef<"enfermedad", 'Int'>
    readonly Tipo: FieldRef<"enfermedad", 'String'>
    readonly Fecha_inicio: FieldRef<"enfermedad", 'DateTime'>
    readonly Fecha_fin: FieldRef<"enfermedad", 'DateTime'>
    readonly Descripci_n: FieldRef<"enfermedad", 'String'>
    readonly historial_clinico_id_fk: FieldRef<"enfermedad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enfermedad findUnique
   */
  export type enfermedadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter, which enfermedad to fetch.
     */
    where: enfermedadWhereUniqueInput
  }

  /**
   * enfermedad findUniqueOrThrow
   */
  export type enfermedadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter, which enfermedad to fetch.
     */
    where: enfermedadWhereUniqueInput
  }

  /**
   * enfermedad findFirst
   */
  export type enfermedadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter, which enfermedad to fetch.
     */
    where?: enfermedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedads to fetch.
     */
    orderBy?: enfermedadOrderByWithRelationInput | enfermedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enfermedads.
     */
    cursor?: enfermedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enfermedads.
     */
    distinct?: EnfermedadScalarFieldEnum | EnfermedadScalarFieldEnum[]
  }

  /**
   * enfermedad findFirstOrThrow
   */
  export type enfermedadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter, which enfermedad to fetch.
     */
    where?: enfermedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedads to fetch.
     */
    orderBy?: enfermedadOrderByWithRelationInput | enfermedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enfermedads.
     */
    cursor?: enfermedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enfermedads.
     */
    distinct?: EnfermedadScalarFieldEnum | EnfermedadScalarFieldEnum[]
  }

  /**
   * enfermedad findMany
   */
  export type enfermedadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter, which enfermedads to fetch.
     */
    where?: enfermedadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enfermedads to fetch.
     */
    orderBy?: enfermedadOrderByWithRelationInput | enfermedadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enfermedads.
     */
    cursor?: enfermedadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enfermedads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enfermedads.
     */
    skip?: number
    distinct?: EnfermedadScalarFieldEnum | EnfermedadScalarFieldEnum[]
  }

  /**
   * enfermedad create
   */
  export type enfermedadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * The data needed to create a enfermedad.
     */
    data: XOR<enfermedadCreateInput, enfermedadUncheckedCreateInput>
  }

  /**
   * enfermedad createMany
   */
  export type enfermedadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enfermedads.
     */
    data: enfermedadCreateManyInput | enfermedadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enfermedad update
   */
  export type enfermedadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * The data needed to update a enfermedad.
     */
    data: XOR<enfermedadUpdateInput, enfermedadUncheckedUpdateInput>
    /**
     * Choose, which enfermedad to update.
     */
    where: enfermedadWhereUniqueInput
  }

  /**
   * enfermedad updateMany
   */
  export type enfermedadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enfermedads.
     */
    data: XOR<enfermedadUpdateManyMutationInput, enfermedadUncheckedUpdateManyInput>
    /**
     * Filter which enfermedads to update
     */
    where?: enfermedadWhereInput
    /**
     * Limit how many enfermedads to update.
     */
    limit?: number
  }

  /**
   * enfermedad upsert
   */
  export type enfermedadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * The filter to search for the enfermedad to update in case it exists.
     */
    where: enfermedadWhereUniqueInput
    /**
     * In case the enfermedad found by the `where` argument doesn't exist, create a new enfermedad with this data.
     */
    create: XOR<enfermedadCreateInput, enfermedadUncheckedCreateInput>
    /**
     * In case the enfermedad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enfermedadUpdateInput, enfermedadUncheckedUpdateInput>
  }

  /**
   * enfermedad delete
   */
  export type enfermedadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    /**
     * Filter which enfermedad to delete.
     */
    where: enfermedadWhereUniqueInput
  }

  /**
   * enfermedad deleteMany
   */
  export type enfermedadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enfermedads to delete
     */
    where?: enfermedadWhereInput
    /**
     * Limit how many enfermedads to delete.
     */
    limit?: number
  }

  /**
   * enfermedad without action
   */
  export type enfermedadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
  }


  /**
   * Model historial_clinico
   */

  export type AggregateHistorial_clinico = {
    _count: Historial_clinicoCountAggregateOutputType | null
    _avg: Historial_clinicoAvgAggregateOutputType | null
    _sum: Historial_clinicoSumAggregateOutputType | null
    _min: Historial_clinicoMinAggregateOutputType | null
    _max: Historial_clinicoMaxAggregateOutputType | null
  }

  export type Historial_clinicoAvgAggregateOutputType = {
    id: number | null
    veterinario_id_fk: number | null
    mascota_id_fk: number | null
  }

  export type Historial_clinicoSumAggregateOutputType = {
    id: number | null
    veterinario_id_fk: number | null
    mascota_id_fk: number | null
  }

  export type Historial_clinicoMinAggregateOutputType = {
    id: number | null
    Fecha: Date | null
    Descripcion: string | null
    Tipo: string | null
    veterinario_id_fk: number | null
    mascota_id_fk: number | null
  }

  export type Historial_clinicoMaxAggregateOutputType = {
    id: number | null
    Fecha: Date | null
    Descripcion: string | null
    Tipo: string | null
    veterinario_id_fk: number | null
    mascota_id_fk: number | null
  }

  export type Historial_clinicoCountAggregateOutputType = {
    id: number
    Fecha: number
    Descripcion: number
    Tipo: number
    veterinario_id_fk: number
    mascota_id_fk: number
    _all: number
  }


  export type Historial_clinicoAvgAggregateInputType = {
    id?: true
    veterinario_id_fk?: true
    mascota_id_fk?: true
  }

  export type Historial_clinicoSumAggregateInputType = {
    id?: true
    veterinario_id_fk?: true
    mascota_id_fk?: true
  }

  export type Historial_clinicoMinAggregateInputType = {
    id?: true
    Fecha?: true
    Descripcion?: true
    Tipo?: true
    veterinario_id_fk?: true
    mascota_id_fk?: true
  }

  export type Historial_clinicoMaxAggregateInputType = {
    id?: true
    Fecha?: true
    Descripcion?: true
    Tipo?: true
    veterinario_id_fk?: true
    mascota_id_fk?: true
  }

  export type Historial_clinicoCountAggregateInputType = {
    id?: true
    Fecha?: true
    Descripcion?: true
    Tipo?: true
    veterinario_id_fk?: true
    mascota_id_fk?: true
    _all?: true
  }

  export type Historial_clinicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_clinico to aggregate.
     */
    where?: historial_clinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_clinicos to fetch.
     */
    orderBy?: historial_clinicoOrderByWithRelationInput | historial_clinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: historial_clinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_clinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_clinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned historial_clinicos
    **/
    _count?: true | Historial_clinicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Historial_clinicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Historial_clinicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historial_clinicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historial_clinicoMaxAggregateInputType
  }

  export type GetHistorial_clinicoAggregateType<T extends Historial_clinicoAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorial_clinico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorial_clinico[P]>
      : GetScalarType<T[P], AggregateHistorial_clinico[P]>
  }




  export type historial_clinicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: historial_clinicoWhereInput
    orderBy?: historial_clinicoOrderByWithAggregationInput | historial_clinicoOrderByWithAggregationInput[]
    by: Historial_clinicoScalarFieldEnum[] | Historial_clinicoScalarFieldEnum
    having?: historial_clinicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historial_clinicoCountAggregateInputType | true
    _avg?: Historial_clinicoAvgAggregateInputType
    _sum?: Historial_clinicoSumAggregateInputType
    _min?: Historial_clinicoMinAggregateInputType
    _max?: Historial_clinicoMaxAggregateInputType
  }

  export type Historial_clinicoGroupByOutputType = {
    id: number
    Fecha: Date
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    _count: Historial_clinicoCountAggregateOutputType | null
    _avg: Historial_clinicoAvgAggregateOutputType | null
    _sum: Historial_clinicoSumAggregateOutputType | null
    _min: Historial_clinicoMinAggregateOutputType | null
    _max: Historial_clinicoMaxAggregateOutputType | null
  }

  type GetHistorial_clinicoGroupByPayload<T extends historial_clinicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historial_clinicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historial_clinicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historial_clinicoGroupByOutputType[P]>
            : GetScalarType<T[P], Historial_clinicoGroupByOutputType[P]>
        }
      >
    >


  export type historial_clinicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Fecha?: boolean
    Descripcion?: boolean
    Tipo?: boolean
    veterinario_id_fk?: boolean
    mascota_id_fk?: boolean
    enfermedad?: boolean | historial_clinico$enfermedadArgs<ExtArgs>
    veterinario?: boolean | veterinarioDefaultArgs<ExtArgs>
    mascota?: boolean | mascotaDefaultArgs<ExtArgs>
    operacion?: boolean | historial_clinico$operacionArgs<ExtArgs>
    tratamiento?: boolean | historial_clinico$tratamientoArgs<ExtArgs>
    vacuna?: boolean | historial_clinico$vacunaArgs<ExtArgs>
  }, ExtArgs["result"]["historial_clinico"]>



  export type historial_clinicoSelectScalar = {
    id?: boolean
    Fecha?: boolean
    Descripcion?: boolean
    Tipo?: boolean
    veterinario_id_fk?: boolean
    mascota_id_fk?: boolean
  }

  export type historial_clinicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Fecha" | "Descripcion" | "Tipo" | "veterinario_id_fk" | "mascota_id_fk", ExtArgs["result"]["historial_clinico"]>
  export type historial_clinicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enfermedad?: boolean | historial_clinico$enfermedadArgs<ExtArgs>
    veterinario?: boolean | veterinarioDefaultArgs<ExtArgs>
    mascota?: boolean | mascotaDefaultArgs<ExtArgs>
    operacion?: boolean | historial_clinico$operacionArgs<ExtArgs>
    tratamiento?: boolean | historial_clinico$tratamientoArgs<ExtArgs>
    vacuna?: boolean | historial_clinico$vacunaArgs<ExtArgs>
  }

  export type $historial_clinicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "historial_clinico"
    objects: {
      enfermedad: Prisma.$enfermedadPayload<ExtArgs> | null
      veterinario: Prisma.$veterinarioPayload<ExtArgs>
      mascota: Prisma.$mascotaPayload<ExtArgs>
      operacion: Prisma.$operacionPayload<ExtArgs> | null
      tratamiento: Prisma.$tratamientoPayload<ExtArgs> | null
      vacuna: Prisma.$vacunaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Fecha: Date
      Descripcion: string
      Tipo: string
      veterinario_id_fk: number
      mascota_id_fk: number
    }, ExtArgs["result"]["historial_clinico"]>
    composites: {}
  }

  type historial_clinicoGetPayload<S extends boolean | null | undefined | historial_clinicoDefaultArgs> = $Result.GetResult<Prisma.$historial_clinicoPayload, S>

  type historial_clinicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<historial_clinicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historial_clinicoCountAggregateInputType | true
    }

  export interface historial_clinicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['historial_clinico'], meta: { name: 'historial_clinico' } }
    /**
     * Find zero or one Historial_clinico that matches the filter.
     * @param {historial_clinicoFindUniqueArgs} args - Arguments to find a Historial_clinico
     * @example
     * // Get one Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends historial_clinicoFindUniqueArgs>(args: SelectSubset<T, historial_clinicoFindUniqueArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historial_clinico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {historial_clinicoFindUniqueOrThrowArgs} args - Arguments to find a Historial_clinico
     * @example
     * // Get one Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends historial_clinicoFindUniqueOrThrowArgs>(args: SelectSubset<T, historial_clinicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_clinico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoFindFirstArgs} args - Arguments to find a Historial_clinico
     * @example
     * // Get one Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends historial_clinicoFindFirstArgs>(args?: SelectSubset<T, historial_clinicoFindFirstArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historial_clinico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoFindFirstOrThrowArgs} args - Arguments to find a Historial_clinico
     * @example
     * // Get one Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends historial_clinicoFindFirstOrThrowArgs>(args?: SelectSubset<T, historial_clinicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historial_clinicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historial_clinicos
     * const historial_clinicos = await prisma.historial_clinico.findMany()
     * 
     * // Get first 10 Historial_clinicos
     * const historial_clinicos = await prisma.historial_clinico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historial_clinicoWithIdOnly = await prisma.historial_clinico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends historial_clinicoFindManyArgs>(args?: SelectSubset<T, historial_clinicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historial_clinico.
     * @param {historial_clinicoCreateArgs} args - Arguments to create a Historial_clinico.
     * @example
     * // Create one Historial_clinico
     * const Historial_clinico = await prisma.historial_clinico.create({
     *   data: {
     *     // ... data to create a Historial_clinico
     *   }
     * })
     * 
     */
    create<T extends historial_clinicoCreateArgs>(args: SelectSubset<T, historial_clinicoCreateArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historial_clinicos.
     * @param {historial_clinicoCreateManyArgs} args - Arguments to create many Historial_clinicos.
     * @example
     * // Create many Historial_clinicos
     * const historial_clinico = await prisma.historial_clinico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends historial_clinicoCreateManyArgs>(args?: SelectSubset<T, historial_clinicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Historial_clinico.
     * @param {historial_clinicoDeleteArgs} args - Arguments to delete one Historial_clinico.
     * @example
     * // Delete one Historial_clinico
     * const Historial_clinico = await prisma.historial_clinico.delete({
     *   where: {
     *     // ... filter to delete one Historial_clinico
     *   }
     * })
     * 
     */
    delete<T extends historial_clinicoDeleteArgs>(args: SelectSubset<T, historial_clinicoDeleteArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historial_clinico.
     * @param {historial_clinicoUpdateArgs} args - Arguments to update one Historial_clinico.
     * @example
     * // Update one Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends historial_clinicoUpdateArgs>(args: SelectSubset<T, historial_clinicoUpdateArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historial_clinicos.
     * @param {historial_clinicoDeleteManyArgs} args - Arguments to filter Historial_clinicos to delete.
     * @example
     * // Delete a few Historial_clinicos
     * const { count } = await prisma.historial_clinico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends historial_clinicoDeleteManyArgs>(args?: SelectSubset<T, historial_clinicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historial_clinicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historial_clinicos
     * const historial_clinico = await prisma.historial_clinico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends historial_clinicoUpdateManyArgs>(args: SelectSubset<T, historial_clinicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Historial_clinico.
     * @param {historial_clinicoUpsertArgs} args - Arguments to update or create a Historial_clinico.
     * @example
     * // Update or create a Historial_clinico
     * const historial_clinico = await prisma.historial_clinico.upsert({
     *   create: {
     *     // ... data to create a Historial_clinico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historial_clinico we want to update
     *   }
     * })
     */
    upsert<T extends historial_clinicoUpsertArgs>(args: SelectSubset<T, historial_clinicoUpsertArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historial_clinicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoCountArgs} args - Arguments to filter Historial_clinicos to count.
     * @example
     * // Count the number of Historial_clinicos
     * const count = await prisma.historial_clinico.count({
     *   where: {
     *     // ... the filter for the Historial_clinicos we want to count
     *   }
     * })
    **/
    count<T extends historial_clinicoCountArgs>(
      args?: Subset<T, historial_clinicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historial_clinicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historial_clinico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historial_clinicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Historial_clinicoAggregateArgs>(args: Subset<T, Historial_clinicoAggregateArgs>): Prisma.PrismaPromise<GetHistorial_clinicoAggregateType<T>>

    /**
     * Group by Historial_clinico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {historial_clinicoGroupByArgs} args - Group by arguments.
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
      T extends historial_clinicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: historial_clinicoGroupByArgs['orderBy'] }
        : { orderBy?: historial_clinicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, historial_clinicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_clinicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the historial_clinico model
   */
  readonly fields: historial_clinicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for historial_clinico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__historial_clinicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enfermedad<T extends historial_clinico$enfermedadArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinico$enfermedadArgs<ExtArgs>>): Prisma__enfermedadClient<$Result.GetResult<Prisma.$enfermedadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    veterinario<T extends veterinarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, veterinarioDefaultArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mascota<T extends mascotaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mascotaDefaultArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    operacion<T extends historial_clinico$operacionArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinico$operacionArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tratamiento<T extends historial_clinico$tratamientoArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinico$tratamientoArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vacuna<T extends historial_clinico$vacunaArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinico$vacunaArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the historial_clinico model
   */
  interface historial_clinicoFieldRefs {
    readonly id: FieldRef<"historial_clinico", 'Int'>
    readonly Fecha: FieldRef<"historial_clinico", 'DateTime'>
    readonly Descripcion: FieldRef<"historial_clinico", 'String'>
    readonly Tipo: FieldRef<"historial_clinico", 'String'>
    readonly veterinario_id_fk: FieldRef<"historial_clinico", 'Int'>
    readonly mascota_id_fk: FieldRef<"historial_clinico", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * historial_clinico findUnique
   */
  export type historial_clinicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter, which historial_clinico to fetch.
     */
    where: historial_clinicoWhereUniqueInput
  }

  /**
   * historial_clinico findUniqueOrThrow
   */
  export type historial_clinicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter, which historial_clinico to fetch.
     */
    where: historial_clinicoWhereUniqueInput
  }

  /**
   * historial_clinico findFirst
   */
  export type historial_clinicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter, which historial_clinico to fetch.
     */
    where?: historial_clinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_clinicos to fetch.
     */
    orderBy?: historial_clinicoOrderByWithRelationInput | historial_clinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_clinicos.
     */
    cursor?: historial_clinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_clinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_clinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_clinicos.
     */
    distinct?: Historial_clinicoScalarFieldEnum | Historial_clinicoScalarFieldEnum[]
  }

  /**
   * historial_clinico findFirstOrThrow
   */
  export type historial_clinicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter, which historial_clinico to fetch.
     */
    where?: historial_clinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_clinicos to fetch.
     */
    orderBy?: historial_clinicoOrderByWithRelationInput | historial_clinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for historial_clinicos.
     */
    cursor?: historial_clinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_clinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_clinicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of historial_clinicos.
     */
    distinct?: Historial_clinicoScalarFieldEnum | Historial_clinicoScalarFieldEnum[]
  }

  /**
   * historial_clinico findMany
   */
  export type historial_clinicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter, which historial_clinicos to fetch.
     */
    where?: historial_clinicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of historial_clinicos to fetch.
     */
    orderBy?: historial_clinicoOrderByWithRelationInput | historial_clinicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing historial_clinicos.
     */
    cursor?: historial_clinicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` historial_clinicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` historial_clinicos.
     */
    skip?: number
    distinct?: Historial_clinicoScalarFieldEnum | Historial_clinicoScalarFieldEnum[]
  }

  /**
   * historial_clinico create
   */
  export type historial_clinicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * The data needed to create a historial_clinico.
     */
    data: XOR<historial_clinicoCreateInput, historial_clinicoUncheckedCreateInput>
  }

  /**
   * historial_clinico createMany
   */
  export type historial_clinicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many historial_clinicos.
     */
    data: historial_clinicoCreateManyInput | historial_clinicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * historial_clinico update
   */
  export type historial_clinicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * The data needed to update a historial_clinico.
     */
    data: XOR<historial_clinicoUpdateInput, historial_clinicoUncheckedUpdateInput>
    /**
     * Choose, which historial_clinico to update.
     */
    where: historial_clinicoWhereUniqueInput
  }

  /**
   * historial_clinico updateMany
   */
  export type historial_clinicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update historial_clinicos.
     */
    data: XOR<historial_clinicoUpdateManyMutationInput, historial_clinicoUncheckedUpdateManyInput>
    /**
     * Filter which historial_clinicos to update
     */
    where?: historial_clinicoWhereInput
    /**
     * Limit how many historial_clinicos to update.
     */
    limit?: number
  }

  /**
   * historial_clinico upsert
   */
  export type historial_clinicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * The filter to search for the historial_clinico to update in case it exists.
     */
    where: historial_clinicoWhereUniqueInput
    /**
     * In case the historial_clinico found by the `where` argument doesn't exist, create a new historial_clinico with this data.
     */
    create: XOR<historial_clinicoCreateInput, historial_clinicoUncheckedCreateInput>
    /**
     * In case the historial_clinico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<historial_clinicoUpdateInput, historial_clinicoUncheckedUpdateInput>
  }

  /**
   * historial_clinico delete
   */
  export type historial_clinicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    /**
     * Filter which historial_clinico to delete.
     */
    where: historial_clinicoWhereUniqueInput
  }

  /**
   * historial_clinico deleteMany
   */
  export type historial_clinicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which historial_clinicos to delete
     */
    where?: historial_clinicoWhereInput
    /**
     * Limit how many historial_clinicos to delete.
     */
    limit?: number
  }

  /**
   * historial_clinico.enfermedad
   */
  export type historial_clinico$enfermedadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enfermedad
     */
    select?: enfermedadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the enfermedad
     */
    omit?: enfermedadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: enfermedadInclude<ExtArgs> | null
    where?: enfermedadWhereInput
  }

  /**
   * historial_clinico.operacion
   */
  export type historial_clinico$operacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    where?: operacionWhereInput
  }

  /**
   * historial_clinico.tratamiento
   */
  export type historial_clinico$tratamientoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    where?: tratamientoWhereInput
  }

  /**
   * historial_clinico.vacuna
   */
  export type historial_clinico$vacunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    where?: vacunaWhereInput
  }

  /**
   * historial_clinico without action
   */
  export type historial_clinicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
  }


  /**
   * Model mascota
   */

  export type AggregateMascota = {
    _count: MascotaCountAggregateOutputType | null
    _avg: MascotaAvgAggregateOutputType | null
    _sum: MascotaSumAggregateOutputType | null
    _min: MascotaMinAggregateOutputType | null
    _max: MascotaMaxAggregateOutputType | null
  }

  export type MascotaAvgAggregateOutputType = {
    id: number | null
    Edad: number | null
    usuario_id_fk: number | null
  }

  export type MascotaSumAggregateOutputType = {
    id: number | null
    Edad: number | null
    usuario_id_fk: number | null
  }

  export type MascotaMinAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Especie: string | null
    Raza: string | null
    Edad: number | null
    Sexo: string | null
    usuario_id_fk: number | null
  }

  export type MascotaMaxAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Especie: string | null
    Raza: string | null
    Edad: number | null
    Sexo: string | null
    usuario_id_fk: number | null
  }

  export type MascotaCountAggregateOutputType = {
    id: number
    Nombre: number
    Especie: number
    Raza: number
    Edad: number
    Sexo: number
    usuario_id_fk: number
    _all: number
  }


  export type MascotaAvgAggregateInputType = {
    id?: true
    Edad?: true
    usuario_id_fk?: true
  }

  export type MascotaSumAggregateInputType = {
    id?: true
    Edad?: true
    usuario_id_fk?: true
  }

  export type MascotaMinAggregateInputType = {
    id?: true
    Nombre?: true
    Especie?: true
    Raza?: true
    Edad?: true
    Sexo?: true
    usuario_id_fk?: true
  }

  export type MascotaMaxAggregateInputType = {
    id?: true
    Nombre?: true
    Especie?: true
    Raza?: true
    Edad?: true
    Sexo?: true
    usuario_id_fk?: true
  }

  export type MascotaCountAggregateInputType = {
    id?: true
    Nombre?: true
    Especie?: true
    Raza?: true
    Edad?: true
    Sexo?: true
    usuario_id_fk?: true
    _all?: true
  }

  export type MascotaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mascota to aggregate.
     */
    where?: mascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotaOrderByWithRelationInput | mascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mascotas
    **/
    _count?: true | MascotaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MascotaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MascotaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MascotaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MascotaMaxAggregateInputType
  }

  export type GetMascotaAggregateType<T extends MascotaAggregateArgs> = {
        [P in keyof T & keyof AggregateMascota]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMascota[P]>
      : GetScalarType<T[P], AggregateMascota[P]>
  }




  export type mascotaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mascotaWhereInput
    orderBy?: mascotaOrderByWithAggregationInput | mascotaOrderByWithAggregationInput[]
    by: MascotaScalarFieldEnum[] | MascotaScalarFieldEnum
    having?: mascotaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MascotaCountAggregateInputType | true
    _avg?: MascotaAvgAggregateInputType
    _sum?: MascotaSumAggregateInputType
    _min?: MascotaMinAggregateInputType
    _max?: MascotaMaxAggregateInputType
  }

  export type MascotaGroupByOutputType = {
    id: number
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    usuario_id_fk: number
    _count: MascotaCountAggregateOutputType | null
    _avg: MascotaAvgAggregateOutputType | null
    _sum: MascotaSumAggregateOutputType | null
    _min: MascotaMinAggregateOutputType | null
    _max: MascotaMaxAggregateOutputType | null
  }

  type GetMascotaGroupByPayload<T extends mascotaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MascotaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MascotaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MascotaGroupByOutputType[P]>
            : GetScalarType<T[P], MascotaGroupByOutputType[P]>
        }
      >
    >


  export type mascotaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nombre?: boolean
    Especie?: boolean
    Raza?: boolean
    Edad?: boolean
    Sexo?: boolean
    usuario_id_fk?: boolean
    historial_clinico?: boolean | mascota$historial_clinicoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mascota"]>



  export type mascotaSelectScalar = {
    id?: boolean
    Nombre?: boolean
    Especie?: boolean
    Raza?: boolean
    Edad?: boolean
    Sexo?: boolean
    usuario_id_fk?: boolean
  }

  export type mascotaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nombre" | "Especie" | "Raza" | "Edad" | "Sexo" | "usuario_id_fk", ExtArgs["result"]["mascota"]>
  export type mascotaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | mascota$historial_clinicoArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $mascotaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mascota"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs> | null
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nombre: string
      Especie: string
      Raza: string
      Edad: number
      Sexo: string
      usuario_id_fk: number
    }, ExtArgs["result"]["mascota"]>
    composites: {}
  }

  type mascotaGetPayload<S extends boolean | null | undefined | mascotaDefaultArgs> = $Result.GetResult<Prisma.$mascotaPayload, S>

  type mascotaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mascotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MascotaCountAggregateInputType | true
    }

  export interface mascotaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mascota'], meta: { name: 'mascota' } }
    /**
     * Find zero or one Mascota that matches the filter.
     * @param {mascotaFindUniqueArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mascotaFindUniqueArgs>(args: SelectSubset<T, mascotaFindUniqueArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mascota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mascotaFindUniqueOrThrowArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mascotaFindUniqueOrThrowArgs>(args: SelectSubset<T, mascotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaFindFirstArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mascotaFindFirstArgs>(args?: SelectSubset<T, mascotaFindFirstArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mascota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaFindFirstOrThrowArgs} args - Arguments to find a Mascota
     * @example
     * // Get one Mascota
     * const mascota = await prisma.mascota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mascotaFindFirstOrThrowArgs>(args?: SelectSubset<T, mascotaFindFirstOrThrowArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mascotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mascotas
     * const mascotas = await prisma.mascota.findMany()
     * 
     * // Get first 10 Mascotas
     * const mascotas = await prisma.mascota.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mascotaWithIdOnly = await prisma.mascota.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mascotaFindManyArgs>(args?: SelectSubset<T, mascotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mascota.
     * @param {mascotaCreateArgs} args - Arguments to create a Mascota.
     * @example
     * // Create one Mascota
     * const Mascota = await prisma.mascota.create({
     *   data: {
     *     // ... data to create a Mascota
     *   }
     * })
     * 
     */
    create<T extends mascotaCreateArgs>(args: SelectSubset<T, mascotaCreateArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mascotas.
     * @param {mascotaCreateManyArgs} args - Arguments to create many Mascotas.
     * @example
     * // Create many Mascotas
     * const mascota = await prisma.mascota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mascotaCreateManyArgs>(args?: SelectSubset<T, mascotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mascota.
     * @param {mascotaDeleteArgs} args - Arguments to delete one Mascota.
     * @example
     * // Delete one Mascota
     * const Mascota = await prisma.mascota.delete({
     *   where: {
     *     // ... filter to delete one Mascota
     *   }
     * })
     * 
     */
    delete<T extends mascotaDeleteArgs>(args: SelectSubset<T, mascotaDeleteArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mascota.
     * @param {mascotaUpdateArgs} args - Arguments to update one Mascota.
     * @example
     * // Update one Mascota
     * const mascota = await prisma.mascota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mascotaUpdateArgs>(args: SelectSubset<T, mascotaUpdateArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mascotas.
     * @param {mascotaDeleteManyArgs} args - Arguments to filter Mascotas to delete.
     * @example
     * // Delete a few Mascotas
     * const { count } = await prisma.mascota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mascotaDeleteManyArgs>(args?: SelectSubset<T, mascotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mascotas
     * const mascota = await prisma.mascota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mascotaUpdateManyArgs>(args: SelectSubset<T, mascotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mascota.
     * @param {mascotaUpsertArgs} args - Arguments to update or create a Mascota.
     * @example
     * // Update or create a Mascota
     * const mascota = await prisma.mascota.upsert({
     *   create: {
     *     // ... data to create a Mascota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mascota we want to update
     *   }
     * })
     */
    upsert<T extends mascotaUpsertArgs>(args: SelectSubset<T, mascotaUpsertArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mascotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaCountArgs} args - Arguments to filter Mascotas to count.
     * @example
     * // Count the number of Mascotas
     * const count = await prisma.mascota.count({
     *   where: {
     *     // ... the filter for the Mascotas we want to count
     *   }
     * })
    **/
    count<T extends mascotaCountArgs>(
      args?: Subset<T, mascotaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MascotaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mascota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MascotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MascotaAggregateArgs>(args: Subset<T, MascotaAggregateArgs>): Prisma.PrismaPromise<GetMascotaAggregateType<T>>

    /**
     * Group by Mascota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mascotaGroupByArgs} args - Group by arguments.
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
      T extends mascotaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mascotaGroupByArgs['orderBy'] }
        : { orderBy?: mascotaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mascotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMascotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mascota model
   */
  readonly fields: mascotaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mascota.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mascotaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends mascota$historial_clinicoArgs<ExtArgs> = {}>(args?: Subset<T, mascota$historial_clinicoArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the mascota model
   */
  interface mascotaFieldRefs {
    readonly id: FieldRef<"mascota", 'Int'>
    readonly Nombre: FieldRef<"mascota", 'String'>
    readonly Especie: FieldRef<"mascota", 'String'>
    readonly Raza: FieldRef<"mascota", 'String'>
    readonly Edad: FieldRef<"mascota", 'Int'>
    readonly Sexo: FieldRef<"mascota", 'String'>
    readonly usuario_id_fk: FieldRef<"mascota", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * mascota findUnique
   */
  export type mascotaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter, which mascota to fetch.
     */
    where: mascotaWhereUniqueInput
  }

  /**
   * mascota findUniqueOrThrow
   */
  export type mascotaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter, which mascota to fetch.
     */
    where: mascotaWhereUniqueInput
  }

  /**
   * mascota findFirst
   */
  export type mascotaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter, which mascota to fetch.
     */
    where?: mascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotaOrderByWithRelationInput | mascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mascotas.
     */
    cursor?: mascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mascotas.
     */
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * mascota findFirstOrThrow
   */
  export type mascotaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter, which mascota to fetch.
     */
    where?: mascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotaOrderByWithRelationInput | mascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mascotas.
     */
    cursor?: mascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mascotas.
     */
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * mascota findMany
   */
  export type mascotaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter, which mascotas to fetch.
     */
    where?: mascotaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mascotas to fetch.
     */
    orderBy?: mascotaOrderByWithRelationInput | mascotaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mascotas.
     */
    cursor?: mascotaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mascotas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mascotas.
     */
    skip?: number
    distinct?: MascotaScalarFieldEnum | MascotaScalarFieldEnum[]
  }

  /**
   * mascota create
   */
  export type mascotaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * The data needed to create a mascota.
     */
    data: XOR<mascotaCreateInput, mascotaUncheckedCreateInput>
  }

  /**
   * mascota createMany
   */
  export type mascotaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mascotas.
     */
    data: mascotaCreateManyInput | mascotaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mascota update
   */
  export type mascotaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * The data needed to update a mascota.
     */
    data: XOR<mascotaUpdateInput, mascotaUncheckedUpdateInput>
    /**
     * Choose, which mascota to update.
     */
    where: mascotaWhereUniqueInput
  }

  /**
   * mascota updateMany
   */
  export type mascotaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mascotas.
     */
    data: XOR<mascotaUpdateManyMutationInput, mascotaUncheckedUpdateManyInput>
    /**
     * Filter which mascotas to update
     */
    where?: mascotaWhereInput
    /**
     * Limit how many mascotas to update.
     */
    limit?: number
  }

  /**
   * mascota upsert
   */
  export type mascotaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * The filter to search for the mascota to update in case it exists.
     */
    where: mascotaWhereUniqueInput
    /**
     * In case the mascota found by the `where` argument doesn't exist, create a new mascota with this data.
     */
    create: XOR<mascotaCreateInput, mascotaUncheckedCreateInput>
    /**
     * In case the mascota was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mascotaUpdateInput, mascotaUncheckedUpdateInput>
  }

  /**
   * mascota delete
   */
  export type mascotaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    /**
     * Filter which mascota to delete.
     */
    where: mascotaWhereUniqueInput
  }

  /**
   * mascota deleteMany
   */
  export type mascotaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mascotas to delete
     */
    where?: mascotaWhereInput
    /**
     * Limit how many mascotas to delete.
     */
    limit?: number
  }

  /**
   * mascota.historial_clinico
   */
  export type mascota$historial_clinicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    where?: historial_clinicoWhereInput
  }

  /**
   * mascota without action
   */
  export type mascotaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
  }


  /**
   * Model operacion
   */

  export type AggregateOperacion = {
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  export type OperacionAvgAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type OperacionSumAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type OperacionMinAggregateOutputType = {
    id: number | null
    Tipo: string | null
    Fecha: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type OperacionMaxAggregateOutputType = {
    id: number | null
    Tipo: string | null
    Fecha: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type OperacionCountAggregateOutputType = {
    id: number
    Tipo: number
    Fecha: number
    Descripci_n: number
    historial_clinico_id_fk: number
    _all: number
  }


  export type OperacionAvgAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type OperacionSumAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type OperacionMinAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type OperacionMaxAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type OperacionCountAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
    _all?: true
  }

  export type OperacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacion to aggregate.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operacions
    **/
    _count?: true | OperacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperacionMaxAggregateInputType
  }

  export type GetOperacionAggregateType<T extends OperacionAggregateArgs> = {
        [P in keyof T & keyof AggregateOperacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperacion[P]>
      : GetScalarType<T[P], AggregateOperacion[P]>
  }




  export type operacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operacionWhereInput
    orderBy?: operacionOrderByWithAggregationInput | operacionOrderByWithAggregationInput[]
    by: OperacionScalarFieldEnum[] | OperacionScalarFieldEnum
    having?: operacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperacionCountAggregateInputType | true
    _avg?: OperacionAvgAggregateInputType
    _sum?: OperacionSumAggregateInputType
    _min?: OperacionMinAggregateInputType
    _max?: OperacionMaxAggregateInputType
  }

  export type OperacionGroupByOutputType = {
    id: number
    Tipo: string
    Fecha: Date
    Descripci_n: string
    historial_clinico_id_fk: number
    _count: OperacionCountAggregateOutputType | null
    _avg: OperacionAvgAggregateOutputType | null
    _sum: OperacionSumAggregateOutputType | null
    _min: OperacionMinAggregateOutputType | null
    _max: OperacionMaxAggregateOutputType | null
  }

  type GetOperacionGroupByPayload<T extends operacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperacionGroupByOutputType[P]>
            : GetScalarType<T[P], OperacionGroupByOutputType[P]>
        }
      >
    >


  export type operacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Tipo?: boolean
    Fecha?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operacion"]>



  export type operacionSelectScalar = {
    id?: boolean
    Tipo?: boolean
    Fecha?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
  }

  export type operacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Tipo" | "Fecha" | "Descripci_n" | "historial_clinico_id_fk", ExtArgs["result"]["operacion"]>
  export type operacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }

  export type $operacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operacion"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Tipo: string
      Fecha: Date
      Descripci_n: string
      historial_clinico_id_fk: number
    }, ExtArgs["result"]["operacion"]>
    composites: {}
  }

  type operacionGetPayload<S extends boolean | null | undefined | operacionDefaultArgs> = $Result.GetResult<Prisma.$operacionPayload, S>

  type operacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperacionCountAggregateInputType | true
    }

  export interface operacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operacion'], meta: { name: 'operacion' } }
    /**
     * Find zero or one Operacion that matches the filter.
     * @param {operacionFindUniqueArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operacionFindUniqueArgs>(args: SelectSubset<T, operacionFindUniqueArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operacionFindUniqueOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operacionFindUniqueOrThrowArgs>(args: SelectSubset<T, operacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindFirstArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operacionFindFirstArgs>(args?: SelectSubset<T, operacionFindFirstArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindFirstOrThrowArgs} args - Arguments to find a Operacion
     * @example
     * // Get one Operacion
     * const operacion = await prisma.operacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operacionFindFirstOrThrowArgs>(args?: SelectSubset<T, operacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operacions
     * const operacions = await prisma.operacion.findMany()
     * 
     * // Get first 10 Operacions
     * const operacions = await prisma.operacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operacionWithIdOnly = await prisma.operacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends operacionFindManyArgs>(args?: SelectSubset<T, operacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operacion.
     * @param {operacionCreateArgs} args - Arguments to create a Operacion.
     * @example
     * // Create one Operacion
     * const Operacion = await prisma.operacion.create({
     *   data: {
     *     // ... data to create a Operacion
     *   }
     * })
     * 
     */
    create<T extends operacionCreateArgs>(args: SelectSubset<T, operacionCreateArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operacions.
     * @param {operacionCreateManyArgs} args - Arguments to create many Operacions.
     * @example
     * // Create many Operacions
     * const operacion = await prisma.operacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operacionCreateManyArgs>(args?: SelectSubset<T, operacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operacion.
     * @param {operacionDeleteArgs} args - Arguments to delete one Operacion.
     * @example
     * // Delete one Operacion
     * const Operacion = await prisma.operacion.delete({
     *   where: {
     *     // ... filter to delete one Operacion
     *   }
     * })
     * 
     */
    delete<T extends operacionDeleteArgs>(args: SelectSubset<T, operacionDeleteArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operacion.
     * @param {operacionUpdateArgs} args - Arguments to update one Operacion.
     * @example
     * // Update one Operacion
     * const operacion = await prisma.operacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operacionUpdateArgs>(args: SelectSubset<T, operacionUpdateArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operacions.
     * @param {operacionDeleteManyArgs} args - Arguments to filter Operacions to delete.
     * @example
     * // Delete a few Operacions
     * const { count } = await prisma.operacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operacionDeleteManyArgs>(args?: SelectSubset<T, operacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operacions
     * const operacion = await prisma.operacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operacionUpdateManyArgs>(args: SelectSubset<T, operacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operacion.
     * @param {operacionUpsertArgs} args - Arguments to update or create a Operacion.
     * @example
     * // Update or create a Operacion
     * const operacion = await prisma.operacion.upsert({
     *   create: {
     *     // ... data to create a Operacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operacion we want to update
     *   }
     * })
     */
    upsert<T extends operacionUpsertArgs>(args: SelectSubset<T, operacionUpsertArgs<ExtArgs>>): Prisma__operacionClient<$Result.GetResult<Prisma.$operacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionCountArgs} args - Arguments to filter Operacions to count.
     * @example
     * // Count the number of Operacions
     * const count = await prisma.operacion.count({
     *   where: {
     *     // ... the filter for the Operacions we want to count
     *   }
     * })
    **/
    count<T extends operacionCountArgs>(
      args?: Subset<T, operacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperacionAggregateArgs>(args: Subset<T, OperacionAggregateArgs>): Prisma.PrismaPromise<GetOperacionAggregateType<T>>

    /**
     * Group by Operacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operacionGroupByArgs} args - Group by arguments.
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
      T extends operacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operacionGroupByArgs['orderBy'] }
        : { orderBy?: operacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, operacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operacion model
   */
  readonly fields: operacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends historial_clinicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinicoDefaultArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the operacion model
   */
  interface operacionFieldRefs {
    readonly id: FieldRef<"operacion", 'Int'>
    readonly Tipo: FieldRef<"operacion", 'String'>
    readonly Fecha: FieldRef<"operacion", 'DateTime'>
    readonly Descripci_n: FieldRef<"operacion", 'String'>
    readonly historial_clinico_id_fk: FieldRef<"operacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * operacion findUnique
   */
  export type operacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion findUniqueOrThrow
   */
  export type operacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion findFirst
   */
  export type operacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion findFirstOrThrow
   */
  export type operacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacion to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operacions.
     */
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion findMany
   */
  export type operacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter, which operacions to fetch.
     */
    where?: operacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operacions to fetch.
     */
    orderBy?: operacionOrderByWithRelationInput | operacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operacions.
     */
    cursor?: operacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operacions.
     */
    skip?: number
    distinct?: OperacionScalarFieldEnum | OperacionScalarFieldEnum[]
  }

  /**
   * operacion create
   */
  export type operacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The data needed to create a operacion.
     */
    data: XOR<operacionCreateInput, operacionUncheckedCreateInput>
  }

  /**
   * operacion createMany
   */
  export type operacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operacions.
     */
    data: operacionCreateManyInput | operacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operacion update
   */
  export type operacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The data needed to update a operacion.
     */
    data: XOR<operacionUpdateInput, operacionUncheckedUpdateInput>
    /**
     * Choose, which operacion to update.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion updateMany
   */
  export type operacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operacions.
     */
    data: XOR<operacionUpdateManyMutationInput, operacionUncheckedUpdateManyInput>
    /**
     * Filter which operacions to update
     */
    where?: operacionWhereInput
    /**
     * Limit how many operacions to update.
     */
    limit?: number
  }

  /**
   * operacion upsert
   */
  export type operacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * The filter to search for the operacion to update in case it exists.
     */
    where: operacionWhereUniqueInput
    /**
     * In case the operacion found by the `where` argument doesn't exist, create a new operacion with this data.
     */
    create: XOR<operacionCreateInput, operacionUncheckedCreateInput>
    /**
     * In case the operacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operacionUpdateInput, operacionUncheckedUpdateInput>
  }

  /**
   * operacion delete
   */
  export type operacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
    /**
     * Filter which operacion to delete.
     */
    where: operacionWhereUniqueInput
  }

  /**
   * operacion deleteMany
   */
  export type operacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operacions to delete
     */
    where?: operacionWhereInput
    /**
     * Limit how many operacions to delete.
     */
    limit?: number
  }

  /**
   * operacion without action
   */
  export type operacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operacion
     */
    select?: operacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operacion
     */
    omit?: operacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operacionInclude<ExtArgs> | null
  }


  /**
   * Model tratamiento
   */

  export type AggregateTratamiento = {
    _count: TratamientoCountAggregateOutputType | null
    _avg: TratamientoAvgAggregateOutputType | null
    _sum: TratamientoSumAggregateOutputType | null
    _min: TratamientoMinAggregateOutputType | null
    _max: TratamientoMaxAggregateOutputType | null
  }

  export type TratamientoAvgAggregateOutputType = {
    id: number | null
    Tipo: number | null
    Fecha_fin: number | null
    historial_clinico_id_fk: number | null
  }

  export type TratamientoSumAggregateOutputType = {
    id: number | null
    Tipo: number | null
    Fecha_fin: number | null
    historial_clinico_id_fk: number | null
  }

  export type TratamientoMinAggregateOutputType = {
    id: number | null
    Tipo: number | null
    Fecha: Date | null
    Fecha_fin: number | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type TratamientoMaxAggregateOutputType = {
    id: number | null
    Tipo: number | null
    Fecha: Date | null
    Fecha_fin: number | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type TratamientoCountAggregateOutputType = {
    id: number
    Tipo: number
    Fecha: number
    Fecha_fin: number
    Descripci_n: number
    historial_clinico_id_fk: number
    _all: number
  }


  export type TratamientoAvgAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha_fin?: true
    historial_clinico_id_fk?: true
  }

  export type TratamientoSumAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha_fin?: true
    historial_clinico_id_fk?: true
  }

  export type TratamientoMinAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type TratamientoMaxAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type TratamientoCountAggregateInputType = {
    id?: true
    Tipo?: true
    Fecha?: true
    Fecha_fin?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
    _all?: true
  }

  export type TratamientoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tratamiento to aggregate.
     */
    where?: tratamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tratamientos to fetch.
     */
    orderBy?: tratamientoOrderByWithRelationInput | tratamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tratamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tratamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tratamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tratamientos
    **/
    _count?: true | TratamientoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TratamientoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TratamientoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TratamientoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TratamientoMaxAggregateInputType
  }

  export type GetTratamientoAggregateType<T extends TratamientoAggregateArgs> = {
        [P in keyof T & keyof AggregateTratamiento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTratamiento[P]>
      : GetScalarType<T[P], AggregateTratamiento[P]>
  }




  export type tratamientoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tratamientoWhereInput
    orderBy?: tratamientoOrderByWithAggregationInput | tratamientoOrderByWithAggregationInput[]
    by: TratamientoScalarFieldEnum[] | TratamientoScalarFieldEnum
    having?: tratamientoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TratamientoCountAggregateInputType | true
    _avg?: TratamientoAvgAggregateInputType
    _sum?: TratamientoSumAggregateInputType
    _min?: TratamientoMinAggregateInputType
    _max?: TratamientoMaxAggregateInputType
  }

  export type TratamientoGroupByOutputType = {
    id: number
    Tipo: number
    Fecha: Date
    Fecha_fin: number
    Descripci_n: string
    historial_clinico_id_fk: number
    _count: TratamientoCountAggregateOutputType | null
    _avg: TratamientoAvgAggregateOutputType | null
    _sum: TratamientoSumAggregateOutputType | null
    _min: TratamientoMinAggregateOutputType | null
    _max: TratamientoMaxAggregateOutputType | null
  }

  type GetTratamientoGroupByPayload<T extends tratamientoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TratamientoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TratamientoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TratamientoGroupByOutputType[P]>
            : GetScalarType<T[P], TratamientoGroupByOutputType[P]>
        }
      >
    >


  export type tratamientoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Tipo?: boolean
    Fecha?: boolean
    Fecha_fin?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tratamiento"]>



  export type tratamientoSelectScalar = {
    id?: boolean
    Tipo?: boolean
    Fecha?: boolean
    Fecha_fin?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
  }

  export type tratamientoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Tipo" | "Fecha" | "Fecha_fin" | "Descripci_n" | "historial_clinico_id_fk", ExtArgs["result"]["tratamiento"]>
  export type tratamientoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }

  export type $tratamientoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tratamiento"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Tipo: number
      Fecha: Date
      Fecha_fin: number
      Descripci_n: string
      historial_clinico_id_fk: number
    }, ExtArgs["result"]["tratamiento"]>
    composites: {}
  }

  type tratamientoGetPayload<S extends boolean | null | undefined | tratamientoDefaultArgs> = $Result.GetResult<Prisma.$tratamientoPayload, S>

  type tratamientoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tratamientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TratamientoCountAggregateInputType | true
    }

  export interface tratamientoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tratamiento'], meta: { name: 'tratamiento' } }
    /**
     * Find zero or one Tratamiento that matches the filter.
     * @param {tratamientoFindUniqueArgs} args - Arguments to find a Tratamiento
     * @example
     * // Get one Tratamiento
     * const tratamiento = await prisma.tratamiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tratamientoFindUniqueArgs>(args: SelectSubset<T, tratamientoFindUniqueArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tratamiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tratamientoFindUniqueOrThrowArgs} args - Arguments to find a Tratamiento
     * @example
     * // Get one Tratamiento
     * const tratamiento = await prisma.tratamiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tratamientoFindUniqueOrThrowArgs>(args: SelectSubset<T, tratamientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tratamiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoFindFirstArgs} args - Arguments to find a Tratamiento
     * @example
     * // Get one Tratamiento
     * const tratamiento = await prisma.tratamiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tratamientoFindFirstArgs>(args?: SelectSubset<T, tratamientoFindFirstArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tratamiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoFindFirstOrThrowArgs} args - Arguments to find a Tratamiento
     * @example
     * // Get one Tratamiento
     * const tratamiento = await prisma.tratamiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tratamientoFindFirstOrThrowArgs>(args?: SelectSubset<T, tratamientoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tratamientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tratamientos
     * const tratamientos = await prisma.tratamiento.findMany()
     * 
     * // Get first 10 Tratamientos
     * const tratamientos = await prisma.tratamiento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tratamientoWithIdOnly = await prisma.tratamiento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tratamientoFindManyArgs>(args?: SelectSubset<T, tratamientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tratamiento.
     * @param {tratamientoCreateArgs} args - Arguments to create a Tratamiento.
     * @example
     * // Create one Tratamiento
     * const Tratamiento = await prisma.tratamiento.create({
     *   data: {
     *     // ... data to create a Tratamiento
     *   }
     * })
     * 
     */
    create<T extends tratamientoCreateArgs>(args: SelectSubset<T, tratamientoCreateArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tratamientos.
     * @param {tratamientoCreateManyArgs} args - Arguments to create many Tratamientos.
     * @example
     * // Create many Tratamientos
     * const tratamiento = await prisma.tratamiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tratamientoCreateManyArgs>(args?: SelectSubset<T, tratamientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tratamiento.
     * @param {tratamientoDeleteArgs} args - Arguments to delete one Tratamiento.
     * @example
     * // Delete one Tratamiento
     * const Tratamiento = await prisma.tratamiento.delete({
     *   where: {
     *     // ... filter to delete one Tratamiento
     *   }
     * })
     * 
     */
    delete<T extends tratamientoDeleteArgs>(args: SelectSubset<T, tratamientoDeleteArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tratamiento.
     * @param {tratamientoUpdateArgs} args - Arguments to update one Tratamiento.
     * @example
     * // Update one Tratamiento
     * const tratamiento = await prisma.tratamiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tratamientoUpdateArgs>(args: SelectSubset<T, tratamientoUpdateArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tratamientos.
     * @param {tratamientoDeleteManyArgs} args - Arguments to filter Tratamientos to delete.
     * @example
     * // Delete a few Tratamientos
     * const { count } = await prisma.tratamiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tratamientoDeleteManyArgs>(args?: SelectSubset<T, tratamientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tratamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tratamientos
     * const tratamiento = await prisma.tratamiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tratamientoUpdateManyArgs>(args: SelectSubset<T, tratamientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tratamiento.
     * @param {tratamientoUpsertArgs} args - Arguments to update or create a Tratamiento.
     * @example
     * // Update or create a Tratamiento
     * const tratamiento = await prisma.tratamiento.upsert({
     *   create: {
     *     // ... data to create a Tratamiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tratamiento we want to update
     *   }
     * })
     */
    upsert<T extends tratamientoUpsertArgs>(args: SelectSubset<T, tratamientoUpsertArgs<ExtArgs>>): Prisma__tratamientoClient<$Result.GetResult<Prisma.$tratamientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tratamientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoCountArgs} args - Arguments to filter Tratamientos to count.
     * @example
     * // Count the number of Tratamientos
     * const count = await prisma.tratamiento.count({
     *   where: {
     *     // ... the filter for the Tratamientos we want to count
     *   }
     * })
    **/
    count<T extends tratamientoCountArgs>(
      args?: Subset<T, tratamientoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TratamientoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tratamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TratamientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TratamientoAggregateArgs>(args: Subset<T, TratamientoAggregateArgs>): Prisma.PrismaPromise<GetTratamientoAggregateType<T>>

    /**
     * Group by Tratamiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tratamientoGroupByArgs} args - Group by arguments.
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
      T extends tratamientoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tratamientoGroupByArgs['orderBy'] }
        : { orderBy?: tratamientoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tratamientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTratamientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tratamiento model
   */
  readonly fields: tratamientoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tratamiento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tratamientoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends historial_clinicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinicoDefaultArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tratamiento model
   */
  interface tratamientoFieldRefs {
    readonly id: FieldRef<"tratamiento", 'Int'>
    readonly Tipo: FieldRef<"tratamiento", 'Int'>
    readonly Fecha: FieldRef<"tratamiento", 'DateTime'>
    readonly Fecha_fin: FieldRef<"tratamiento", 'Int'>
    readonly Descripci_n: FieldRef<"tratamiento", 'String'>
    readonly historial_clinico_id_fk: FieldRef<"tratamiento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tratamiento findUnique
   */
  export type tratamientoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter, which tratamiento to fetch.
     */
    where: tratamientoWhereUniqueInput
  }

  /**
   * tratamiento findUniqueOrThrow
   */
  export type tratamientoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter, which tratamiento to fetch.
     */
    where: tratamientoWhereUniqueInput
  }

  /**
   * tratamiento findFirst
   */
  export type tratamientoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter, which tratamiento to fetch.
     */
    where?: tratamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tratamientos to fetch.
     */
    orderBy?: tratamientoOrderByWithRelationInput | tratamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tratamientos.
     */
    cursor?: tratamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tratamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tratamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tratamientos.
     */
    distinct?: TratamientoScalarFieldEnum | TratamientoScalarFieldEnum[]
  }

  /**
   * tratamiento findFirstOrThrow
   */
  export type tratamientoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter, which tratamiento to fetch.
     */
    where?: tratamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tratamientos to fetch.
     */
    orderBy?: tratamientoOrderByWithRelationInput | tratamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tratamientos.
     */
    cursor?: tratamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tratamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tratamientos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tratamientos.
     */
    distinct?: TratamientoScalarFieldEnum | TratamientoScalarFieldEnum[]
  }

  /**
   * tratamiento findMany
   */
  export type tratamientoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter, which tratamientos to fetch.
     */
    where?: tratamientoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tratamientos to fetch.
     */
    orderBy?: tratamientoOrderByWithRelationInput | tratamientoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tratamientos.
     */
    cursor?: tratamientoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tratamientos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tratamientos.
     */
    skip?: number
    distinct?: TratamientoScalarFieldEnum | TratamientoScalarFieldEnum[]
  }

  /**
   * tratamiento create
   */
  export type tratamientoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * The data needed to create a tratamiento.
     */
    data: XOR<tratamientoCreateInput, tratamientoUncheckedCreateInput>
  }

  /**
   * tratamiento createMany
   */
  export type tratamientoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tratamientos.
     */
    data: tratamientoCreateManyInput | tratamientoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tratamiento update
   */
  export type tratamientoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * The data needed to update a tratamiento.
     */
    data: XOR<tratamientoUpdateInput, tratamientoUncheckedUpdateInput>
    /**
     * Choose, which tratamiento to update.
     */
    where: tratamientoWhereUniqueInput
  }

  /**
   * tratamiento updateMany
   */
  export type tratamientoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tratamientos.
     */
    data: XOR<tratamientoUpdateManyMutationInput, tratamientoUncheckedUpdateManyInput>
    /**
     * Filter which tratamientos to update
     */
    where?: tratamientoWhereInput
    /**
     * Limit how many tratamientos to update.
     */
    limit?: number
  }

  /**
   * tratamiento upsert
   */
  export type tratamientoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * The filter to search for the tratamiento to update in case it exists.
     */
    where: tratamientoWhereUniqueInput
    /**
     * In case the tratamiento found by the `where` argument doesn't exist, create a new tratamiento with this data.
     */
    create: XOR<tratamientoCreateInput, tratamientoUncheckedCreateInput>
    /**
     * In case the tratamiento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tratamientoUpdateInput, tratamientoUncheckedUpdateInput>
  }

  /**
   * tratamiento delete
   */
  export type tratamientoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
    /**
     * Filter which tratamiento to delete.
     */
    where: tratamientoWhereUniqueInput
  }

  /**
   * tratamiento deleteMany
   */
  export type tratamientoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tratamientos to delete
     */
    where?: tratamientoWhereInput
    /**
     * Limit how many tratamientos to delete.
     */
    limit?: number
  }

  /**
   * tratamiento without action
   */
  export type tratamientoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tratamiento
     */
    select?: tratamientoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tratamiento
     */
    omit?: tratamientoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tratamientoInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Email: string | null
    Telefono: string | null
    Contrase_a: string | null
    Rol: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Email: string | null
    Telefono: string | null
    Contrase_a: string | null
    Rol: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    Nombre: number
    Email: number
    Telefono: number
    Contrase_a: number
    Rol: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Telefono?: true
    Contrase_a?: true
    Rol?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Telefono?: true
    Contrase_a?: true
    Rol?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Telefono?: true
    Contrase_a?: true
    Rol?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nombre?: boolean
    Email?: boolean
    Telefono?: boolean
    Contrase_a?: boolean
    Rol?: boolean
    mascota?: boolean | usuario$mascotaArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    Nombre?: boolean
    Email?: boolean
    Telefono?: boolean
    Contrase_a?: boolean
    Rol?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nombre" | "Email" | "Telefono" | "Contrase_a" | "Rol", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mascota?: boolean | usuario$mascotaArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      mascota: Prisma.$mascotaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nombre: string
      Email: string
      Telefono: string
      Contrase_a: string
      Rol: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mascota<T extends usuario$mascotaArgs<ExtArgs> = {}>(args?: Subset<T, usuario$mascotaArgs<ExtArgs>>): Prisma__mascotaClient<$Result.GetResult<Prisma.$mascotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly Nombre: FieldRef<"usuario", 'String'>
    readonly Email: FieldRef<"usuario", 'String'>
    readonly Telefono: FieldRef<"usuario", 'String'>
    readonly Contrase_a: FieldRef<"usuario", 'String'>
    readonly Rol: FieldRef<"usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.mascota
   */
  export type usuario$mascotaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mascota
     */
    select?: mascotaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mascota
     */
    omit?: mascotaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mascotaInclude<ExtArgs> | null
    where?: mascotaWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Model vacuna
   */

  export type AggregateVacuna = {
    _count: VacunaCountAggregateOutputType | null
    _avg: VacunaAvgAggregateOutputType | null
    _sum: VacunaSumAggregateOutputType | null
    _min: VacunaMinAggregateOutputType | null
    _max: VacunaMaxAggregateOutputType | null
  }

  export type VacunaAvgAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type VacunaSumAggregateOutputType = {
    id: number | null
    historial_clinico_id_fk: number | null
  }

  export type VacunaMinAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Fecha: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type VacunaMaxAggregateOutputType = {
    id: number | null
    Nombre: string | null
    Fecha: Date | null
    Descripci_n: string | null
    historial_clinico_id_fk: number | null
  }

  export type VacunaCountAggregateOutputType = {
    id: number
    Nombre: number
    Fecha: number
    Descripci_n: number
    historial_clinico_id_fk: number
    _all: number
  }


  export type VacunaAvgAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type VacunaSumAggregateInputType = {
    id?: true
    historial_clinico_id_fk?: true
  }

  export type VacunaMinAggregateInputType = {
    id?: true
    Nombre?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type VacunaMaxAggregateInputType = {
    id?: true
    Nombre?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
  }

  export type VacunaCountAggregateInputType = {
    id?: true
    Nombre?: true
    Fecha?: true
    Descripci_n?: true
    historial_clinico_id_fk?: true
    _all?: true
  }

  export type VacunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacuna to aggregate.
     */
    where?: vacunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacunas to fetch.
     */
    orderBy?: vacunaOrderByWithRelationInput | vacunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vacunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vacunas
    **/
    _count?: true | VacunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VacunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VacunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VacunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VacunaMaxAggregateInputType
  }

  export type GetVacunaAggregateType<T extends VacunaAggregateArgs> = {
        [P in keyof T & keyof AggregateVacuna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVacuna[P]>
      : GetScalarType<T[P], AggregateVacuna[P]>
  }




  export type vacunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vacunaWhereInput
    orderBy?: vacunaOrderByWithAggregationInput | vacunaOrderByWithAggregationInput[]
    by: VacunaScalarFieldEnum[] | VacunaScalarFieldEnum
    having?: vacunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VacunaCountAggregateInputType | true
    _avg?: VacunaAvgAggregateInputType
    _sum?: VacunaSumAggregateInputType
    _min?: VacunaMinAggregateInputType
    _max?: VacunaMaxAggregateInputType
  }

  export type VacunaGroupByOutputType = {
    id: number
    Nombre: string
    Fecha: Date
    Descripci_n: string
    historial_clinico_id_fk: number
    _count: VacunaCountAggregateOutputType | null
    _avg: VacunaAvgAggregateOutputType | null
    _sum: VacunaSumAggregateOutputType | null
    _min: VacunaMinAggregateOutputType | null
    _max: VacunaMaxAggregateOutputType | null
  }

  type GetVacunaGroupByPayload<T extends vacunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VacunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VacunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VacunaGroupByOutputType[P]>
            : GetScalarType<T[P], VacunaGroupByOutputType[P]>
        }
      >
    >


  export type vacunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nombre?: boolean
    Fecha?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vacuna"]>



  export type vacunaSelectScalar = {
    id?: boolean
    Nombre?: boolean
    Fecha?: boolean
    Descripci_n?: boolean
    historial_clinico_id_fk?: boolean
  }

  export type vacunaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nombre" | "Fecha" | "Descripci_n" | "historial_clinico_id_fk", ExtArgs["result"]["vacuna"]>
  export type vacunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | historial_clinicoDefaultArgs<ExtArgs>
  }

  export type $vacunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vacuna"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nombre: string
      Fecha: Date
      Descripci_n: string
      historial_clinico_id_fk: number
    }, ExtArgs["result"]["vacuna"]>
    composites: {}
  }

  type vacunaGetPayload<S extends boolean | null | undefined | vacunaDefaultArgs> = $Result.GetResult<Prisma.$vacunaPayload, S>

  type vacunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vacunaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VacunaCountAggregateInputType | true
    }

  export interface vacunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vacuna'], meta: { name: 'vacuna' } }
    /**
     * Find zero or one Vacuna that matches the filter.
     * @param {vacunaFindUniqueArgs} args - Arguments to find a Vacuna
     * @example
     * // Get one Vacuna
     * const vacuna = await prisma.vacuna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vacunaFindUniqueArgs>(args: SelectSubset<T, vacunaFindUniqueArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vacuna that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vacunaFindUniqueOrThrowArgs} args - Arguments to find a Vacuna
     * @example
     * // Get one Vacuna
     * const vacuna = await prisma.vacuna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vacunaFindUniqueOrThrowArgs>(args: SelectSubset<T, vacunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacuna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaFindFirstArgs} args - Arguments to find a Vacuna
     * @example
     * // Get one Vacuna
     * const vacuna = await prisma.vacuna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vacunaFindFirstArgs>(args?: SelectSubset<T, vacunaFindFirstArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vacuna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaFindFirstOrThrowArgs} args - Arguments to find a Vacuna
     * @example
     * // Get one Vacuna
     * const vacuna = await prisma.vacuna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vacunaFindFirstOrThrowArgs>(args?: SelectSubset<T, vacunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vacunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vacunas
     * const vacunas = await prisma.vacuna.findMany()
     * 
     * // Get first 10 Vacunas
     * const vacunas = await prisma.vacuna.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vacunaWithIdOnly = await prisma.vacuna.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vacunaFindManyArgs>(args?: SelectSubset<T, vacunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vacuna.
     * @param {vacunaCreateArgs} args - Arguments to create a Vacuna.
     * @example
     * // Create one Vacuna
     * const Vacuna = await prisma.vacuna.create({
     *   data: {
     *     // ... data to create a Vacuna
     *   }
     * })
     * 
     */
    create<T extends vacunaCreateArgs>(args: SelectSubset<T, vacunaCreateArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vacunas.
     * @param {vacunaCreateManyArgs} args - Arguments to create many Vacunas.
     * @example
     * // Create many Vacunas
     * const vacuna = await prisma.vacuna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vacunaCreateManyArgs>(args?: SelectSubset<T, vacunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vacuna.
     * @param {vacunaDeleteArgs} args - Arguments to delete one Vacuna.
     * @example
     * // Delete one Vacuna
     * const Vacuna = await prisma.vacuna.delete({
     *   where: {
     *     // ... filter to delete one Vacuna
     *   }
     * })
     * 
     */
    delete<T extends vacunaDeleteArgs>(args: SelectSubset<T, vacunaDeleteArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vacuna.
     * @param {vacunaUpdateArgs} args - Arguments to update one Vacuna.
     * @example
     * // Update one Vacuna
     * const vacuna = await prisma.vacuna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vacunaUpdateArgs>(args: SelectSubset<T, vacunaUpdateArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vacunas.
     * @param {vacunaDeleteManyArgs} args - Arguments to filter Vacunas to delete.
     * @example
     * // Delete a few Vacunas
     * const { count } = await prisma.vacuna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vacunaDeleteManyArgs>(args?: SelectSubset<T, vacunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vacunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vacunas
     * const vacuna = await prisma.vacuna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vacunaUpdateManyArgs>(args: SelectSubset<T, vacunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vacuna.
     * @param {vacunaUpsertArgs} args - Arguments to update or create a Vacuna.
     * @example
     * // Update or create a Vacuna
     * const vacuna = await prisma.vacuna.upsert({
     *   create: {
     *     // ... data to create a Vacuna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vacuna we want to update
     *   }
     * })
     */
    upsert<T extends vacunaUpsertArgs>(args: SelectSubset<T, vacunaUpsertArgs<ExtArgs>>): Prisma__vacunaClient<$Result.GetResult<Prisma.$vacunaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vacunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaCountArgs} args - Arguments to filter Vacunas to count.
     * @example
     * // Count the number of Vacunas
     * const count = await prisma.vacuna.count({
     *   where: {
     *     // ... the filter for the Vacunas we want to count
     *   }
     * })
    **/
    count<T extends vacunaCountArgs>(
      args?: Subset<T, vacunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VacunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vacuna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VacunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VacunaAggregateArgs>(args: Subset<T, VacunaAggregateArgs>): Prisma.PrismaPromise<GetVacunaAggregateType<T>>

    /**
     * Group by Vacuna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vacunaGroupByArgs} args - Group by arguments.
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
      T extends vacunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vacunaGroupByArgs['orderBy'] }
        : { orderBy?: vacunaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, vacunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVacunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vacuna model
   */
  readonly fields: vacunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vacuna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vacunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends historial_clinicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, historial_clinicoDefaultArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the vacuna model
   */
  interface vacunaFieldRefs {
    readonly id: FieldRef<"vacuna", 'Int'>
    readonly Nombre: FieldRef<"vacuna", 'String'>
    readonly Fecha: FieldRef<"vacuna", 'DateTime'>
    readonly Descripci_n: FieldRef<"vacuna", 'String'>
    readonly historial_clinico_id_fk: FieldRef<"vacuna", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * vacuna findUnique
   */
  export type vacunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter, which vacuna to fetch.
     */
    where: vacunaWhereUniqueInput
  }

  /**
   * vacuna findUniqueOrThrow
   */
  export type vacunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter, which vacuna to fetch.
     */
    where: vacunaWhereUniqueInput
  }

  /**
   * vacuna findFirst
   */
  export type vacunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter, which vacuna to fetch.
     */
    where?: vacunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacunas to fetch.
     */
    orderBy?: vacunaOrderByWithRelationInput | vacunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vacunas.
     */
    cursor?: vacunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vacunas.
     */
    distinct?: VacunaScalarFieldEnum | VacunaScalarFieldEnum[]
  }

  /**
   * vacuna findFirstOrThrow
   */
  export type vacunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter, which vacuna to fetch.
     */
    where?: vacunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacunas to fetch.
     */
    orderBy?: vacunaOrderByWithRelationInput | vacunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vacunas.
     */
    cursor?: vacunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vacunas.
     */
    distinct?: VacunaScalarFieldEnum | VacunaScalarFieldEnum[]
  }

  /**
   * vacuna findMany
   */
  export type vacunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter, which vacunas to fetch.
     */
    where?: vacunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vacunas to fetch.
     */
    orderBy?: vacunaOrderByWithRelationInput | vacunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vacunas.
     */
    cursor?: vacunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vacunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vacunas.
     */
    skip?: number
    distinct?: VacunaScalarFieldEnum | VacunaScalarFieldEnum[]
  }

  /**
   * vacuna create
   */
  export type vacunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * The data needed to create a vacuna.
     */
    data: XOR<vacunaCreateInput, vacunaUncheckedCreateInput>
  }

  /**
   * vacuna createMany
   */
  export type vacunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vacunas.
     */
    data: vacunaCreateManyInput | vacunaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vacuna update
   */
  export type vacunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * The data needed to update a vacuna.
     */
    data: XOR<vacunaUpdateInput, vacunaUncheckedUpdateInput>
    /**
     * Choose, which vacuna to update.
     */
    where: vacunaWhereUniqueInput
  }

  /**
   * vacuna updateMany
   */
  export type vacunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vacunas.
     */
    data: XOR<vacunaUpdateManyMutationInput, vacunaUncheckedUpdateManyInput>
    /**
     * Filter which vacunas to update
     */
    where?: vacunaWhereInput
    /**
     * Limit how many vacunas to update.
     */
    limit?: number
  }

  /**
   * vacuna upsert
   */
  export type vacunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * The filter to search for the vacuna to update in case it exists.
     */
    where: vacunaWhereUniqueInput
    /**
     * In case the vacuna found by the `where` argument doesn't exist, create a new vacuna with this data.
     */
    create: XOR<vacunaCreateInput, vacunaUncheckedCreateInput>
    /**
     * In case the vacuna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vacunaUpdateInput, vacunaUncheckedUpdateInput>
  }

  /**
   * vacuna delete
   */
  export type vacunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
    /**
     * Filter which vacuna to delete.
     */
    where: vacunaWhereUniqueInput
  }

  /**
   * vacuna deleteMany
   */
  export type vacunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vacunas to delete
     */
    where?: vacunaWhereInput
    /**
     * Limit how many vacunas to delete.
     */
    limit?: number
  }

  /**
   * vacuna without action
   */
  export type vacunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vacuna
     */
    select?: vacunaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vacuna
     */
    omit?: vacunaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vacunaInclude<ExtArgs> | null
  }


  /**
   * Model veterinario
   */

  export type AggregateVeterinario = {
    _count: VeterinarioCountAggregateOutputType | null
    _avg: VeterinarioAvgAggregateOutputType | null
    _sum: VeterinarioSumAggregateOutputType | null
    _min: VeterinarioMinAggregateOutputType | null
    _max: VeterinarioMaxAggregateOutputType | null
  }

  export type VeterinarioAvgAggregateOutputType = {
    id: number | null
  }

  export type VeterinarioSumAggregateOutputType = {
    id: number | null
  }

  export type VeterinarioMinAggregateOutputType = {
    id: number | null
    Nombre: Date | null
    Email: string | null
    Matricula: string | null
  }

  export type VeterinarioMaxAggregateOutputType = {
    id: number | null
    Nombre: Date | null
    Email: string | null
    Matricula: string | null
  }

  export type VeterinarioCountAggregateOutputType = {
    id: number
    Nombre: number
    Email: number
    Matricula: number
    _all: number
  }


  export type VeterinarioAvgAggregateInputType = {
    id?: true
  }

  export type VeterinarioSumAggregateInputType = {
    id?: true
  }

  export type VeterinarioMinAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Matricula?: true
  }

  export type VeterinarioMaxAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Matricula?: true
  }

  export type VeterinarioCountAggregateInputType = {
    id?: true
    Nombre?: true
    Email?: true
    Matricula?: true
    _all?: true
  }

  export type VeterinarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veterinario to aggregate.
     */
    where?: veterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veterinarios to fetch.
     */
    orderBy?: veterinarioOrderByWithRelationInput | veterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: veterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned veterinarios
    **/
    _count?: true | VeterinarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeterinarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeterinarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeterinarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeterinarioMaxAggregateInputType
  }

  export type GetVeterinarioAggregateType<T extends VeterinarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVeterinario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeterinario[P]>
      : GetScalarType<T[P], AggregateVeterinario[P]>
  }




  export type veterinarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: veterinarioWhereInput
    orderBy?: veterinarioOrderByWithAggregationInput | veterinarioOrderByWithAggregationInput[]
    by: VeterinarioScalarFieldEnum[] | VeterinarioScalarFieldEnum
    having?: veterinarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeterinarioCountAggregateInputType | true
    _avg?: VeterinarioAvgAggregateInputType
    _sum?: VeterinarioSumAggregateInputType
    _min?: VeterinarioMinAggregateInputType
    _max?: VeterinarioMaxAggregateInputType
  }

  export type VeterinarioGroupByOutputType = {
    id: number
    Nombre: Date
    Email: string
    Matricula: string
    _count: VeterinarioCountAggregateOutputType | null
    _avg: VeterinarioAvgAggregateOutputType | null
    _sum: VeterinarioSumAggregateOutputType | null
    _min: VeterinarioMinAggregateOutputType | null
    _max: VeterinarioMaxAggregateOutputType | null
  }

  type GetVeterinarioGroupByPayload<T extends veterinarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeterinarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeterinarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeterinarioGroupByOutputType[P]>
            : GetScalarType<T[P], VeterinarioGroupByOutputType[P]>
        }
      >
    >


  export type veterinarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Nombre?: boolean
    Email?: boolean
    Matricula?: boolean
    historial_clinico?: boolean | veterinario$historial_clinicoArgs<ExtArgs>
  }, ExtArgs["result"]["veterinario"]>



  export type veterinarioSelectScalar = {
    id?: boolean
    Nombre?: boolean
    Email?: boolean
    Matricula?: boolean
  }

  export type veterinarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Nombre" | "Email" | "Matricula", ExtArgs["result"]["veterinario"]>
  export type veterinarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historial_clinico?: boolean | veterinario$historial_clinicoArgs<ExtArgs>
  }

  export type $veterinarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "veterinario"
    objects: {
      historial_clinico: Prisma.$historial_clinicoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Nombre: Date
      Email: string
      Matricula: string
    }, ExtArgs["result"]["veterinario"]>
    composites: {}
  }

  type veterinarioGetPayload<S extends boolean | null | undefined | veterinarioDefaultArgs> = $Result.GetResult<Prisma.$veterinarioPayload, S>

  type veterinarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<veterinarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeterinarioCountAggregateInputType | true
    }

  export interface veterinarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['veterinario'], meta: { name: 'veterinario' } }
    /**
     * Find zero or one Veterinario that matches the filter.
     * @param {veterinarioFindUniqueArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends veterinarioFindUniqueArgs>(args: SelectSubset<T, veterinarioFindUniqueArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veterinario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {veterinarioFindUniqueOrThrowArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends veterinarioFindUniqueOrThrowArgs>(args: SelectSubset<T, veterinarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioFindFirstArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends veterinarioFindFirstArgs>(args?: SelectSubset<T, veterinarioFindFirstArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioFindFirstOrThrowArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends veterinarioFindFirstOrThrowArgs>(args?: SelectSubset<T, veterinarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veterinarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veterinarios
     * const veterinarios = await prisma.veterinario.findMany()
     * 
     * // Get first 10 Veterinarios
     * const veterinarios = await prisma.veterinario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veterinarioWithIdOnly = await prisma.veterinario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends veterinarioFindManyArgs>(args?: SelectSubset<T, veterinarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veterinario.
     * @param {veterinarioCreateArgs} args - Arguments to create a Veterinario.
     * @example
     * // Create one Veterinario
     * const Veterinario = await prisma.veterinario.create({
     *   data: {
     *     // ... data to create a Veterinario
     *   }
     * })
     * 
     */
    create<T extends veterinarioCreateArgs>(args: SelectSubset<T, veterinarioCreateArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veterinarios.
     * @param {veterinarioCreateManyArgs} args - Arguments to create many Veterinarios.
     * @example
     * // Create many Veterinarios
     * const veterinario = await prisma.veterinario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends veterinarioCreateManyArgs>(args?: SelectSubset<T, veterinarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Veterinario.
     * @param {veterinarioDeleteArgs} args - Arguments to delete one Veterinario.
     * @example
     * // Delete one Veterinario
     * const Veterinario = await prisma.veterinario.delete({
     *   where: {
     *     // ... filter to delete one Veterinario
     *   }
     * })
     * 
     */
    delete<T extends veterinarioDeleteArgs>(args: SelectSubset<T, veterinarioDeleteArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veterinario.
     * @param {veterinarioUpdateArgs} args - Arguments to update one Veterinario.
     * @example
     * // Update one Veterinario
     * const veterinario = await prisma.veterinario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends veterinarioUpdateArgs>(args: SelectSubset<T, veterinarioUpdateArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veterinarios.
     * @param {veterinarioDeleteManyArgs} args - Arguments to filter Veterinarios to delete.
     * @example
     * // Delete a few Veterinarios
     * const { count } = await prisma.veterinario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends veterinarioDeleteManyArgs>(args?: SelectSubset<T, veterinarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veterinarios
     * const veterinario = await prisma.veterinario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends veterinarioUpdateManyArgs>(args: SelectSubset<T, veterinarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veterinario.
     * @param {veterinarioUpsertArgs} args - Arguments to update or create a Veterinario.
     * @example
     * // Update or create a Veterinario
     * const veterinario = await prisma.veterinario.upsert({
     *   create: {
     *     // ... data to create a Veterinario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veterinario we want to update
     *   }
     * })
     */
    upsert<T extends veterinarioUpsertArgs>(args: SelectSubset<T, veterinarioUpsertArgs<ExtArgs>>): Prisma__veterinarioClient<$Result.GetResult<Prisma.$veterinarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veterinarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioCountArgs} args - Arguments to filter Veterinarios to count.
     * @example
     * // Count the number of Veterinarios
     * const count = await prisma.veterinario.count({
     *   where: {
     *     // ... the filter for the Veterinarios we want to count
     *   }
     * })
    **/
    count<T extends veterinarioCountArgs>(
      args?: Subset<T, veterinarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeterinarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veterinario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeterinarioAggregateArgs>(args: Subset<T, VeterinarioAggregateArgs>): Prisma.PrismaPromise<GetVeterinarioAggregateType<T>>

    /**
     * Group by Veterinario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {veterinarioGroupByArgs} args - Group by arguments.
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
      T extends veterinarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: veterinarioGroupByArgs['orderBy'] }
        : { orderBy?: veterinarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, veterinarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeterinarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the veterinario model
   */
  readonly fields: veterinarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for veterinario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__veterinarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historial_clinico<T extends veterinario$historial_clinicoArgs<ExtArgs> = {}>(args?: Subset<T, veterinario$historial_clinicoArgs<ExtArgs>>): Prisma__historial_clinicoClient<$Result.GetResult<Prisma.$historial_clinicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the veterinario model
   */
  interface veterinarioFieldRefs {
    readonly id: FieldRef<"veterinario", 'Int'>
    readonly Nombre: FieldRef<"veterinario", 'DateTime'>
    readonly Email: FieldRef<"veterinario", 'String'>
    readonly Matricula: FieldRef<"veterinario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * veterinario findUnique
   */
  export type veterinarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter, which veterinario to fetch.
     */
    where: veterinarioWhereUniqueInput
  }

  /**
   * veterinario findUniqueOrThrow
   */
  export type veterinarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter, which veterinario to fetch.
     */
    where: veterinarioWhereUniqueInput
  }

  /**
   * veterinario findFirst
   */
  export type veterinarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter, which veterinario to fetch.
     */
    where?: veterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veterinarios to fetch.
     */
    orderBy?: veterinarioOrderByWithRelationInput | veterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veterinarios.
     */
    cursor?: veterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veterinarios.
     */
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * veterinario findFirstOrThrow
   */
  export type veterinarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter, which veterinario to fetch.
     */
    where?: veterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veterinarios to fetch.
     */
    orderBy?: veterinarioOrderByWithRelationInput | veterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for veterinarios.
     */
    cursor?: veterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of veterinarios.
     */
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * veterinario findMany
   */
  export type veterinarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter, which veterinarios to fetch.
     */
    where?: veterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of veterinarios to fetch.
     */
    orderBy?: veterinarioOrderByWithRelationInput | veterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing veterinarios.
     */
    cursor?: veterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` veterinarios.
     */
    skip?: number
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * veterinario create
   */
  export type veterinarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * The data needed to create a veterinario.
     */
    data: XOR<veterinarioCreateInput, veterinarioUncheckedCreateInput>
  }

  /**
   * veterinario createMany
   */
  export type veterinarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many veterinarios.
     */
    data: veterinarioCreateManyInput | veterinarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * veterinario update
   */
  export type veterinarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * The data needed to update a veterinario.
     */
    data: XOR<veterinarioUpdateInput, veterinarioUncheckedUpdateInput>
    /**
     * Choose, which veterinario to update.
     */
    where: veterinarioWhereUniqueInput
  }

  /**
   * veterinario updateMany
   */
  export type veterinarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update veterinarios.
     */
    data: XOR<veterinarioUpdateManyMutationInput, veterinarioUncheckedUpdateManyInput>
    /**
     * Filter which veterinarios to update
     */
    where?: veterinarioWhereInput
    /**
     * Limit how many veterinarios to update.
     */
    limit?: number
  }

  /**
   * veterinario upsert
   */
  export type veterinarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * The filter to search for the veterinario to update in case it exists.
     */
    where: veterinarioWhereUniqueInput
    /**
     * In case the veterinario found by the `where` argument doesn't exist, create a new veterinario with this data.
     */
    create: XOR<veterinarioCreateInput, veterinarioUncheckedCreateInput>
    /**
     * In case the veterinario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<veterinarioUpdateInput, veterinarioUncheckedUpdateInput>
  }

  /**
   * veterinario delete
   */
  export type veterinarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
    /**
     * Filter which veterinario to delete.
     */
    where: veterinarioWhereUniqueInput
  }

  /**
   * veterinario deleteMany
   */
  export type veterinarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which veterinarios to delete
     */
    where?: veterinarioWhereInput
    /**
     * Limit how many veterinarios to delete.
     */
    limit?: number
  }

  /**
   * veterinario.historial_clinico
   */
  export type veterinario$historial_clinicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the historial_clinico
     */
    select?: historial_clinicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the historial_clinico
     */
    omit?: historial_clinicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: historial_clinicoInclude<ExtArgs> | null
    where?: historial_clinicoWhereInput
  }

  /**
   * veterinario without action
   */
  export type veterinarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the veterinario
     */
    select?: veterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the veterinario
     */
    omit?: veterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: veterinarioInclude<ExtArgs> | null
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


  export const ClinicaScalarFieldEnum: {
    id: 'id',
    Tienda: 'Tienda',
    Direcci_n: 'Direcci_n',
    Telefono: 'Telefono',
    Latitud: 'Latitud',
    Longitud: 'Longitud'
  };

  export type ClinicaScalarFieldEnum = (typeof ClinicaScalarFieldEnum)[keyof typeof ClinicaScalarFieldEnum]


  export const EnfermedadScalarFieldEnum: {
    id: 'id',
    Tipo: 'Tipo',
    Fecha_inicio: 'Fecha_inicio',
    Fecha_fin: 'Fecha_fin',
    Descripci_n: 'Descripci_n',
    historial_clinico_id_fk: 'historial_clinico_id_fk'
  };

  export type EnfermedadScalarFieldEnum = (typeof EnfermedadScalarFieldEnum)[keyof typeof EnfermedadScalarFieldEnum]


  export const Historial_clinicoScalarFieldEnum: {
    id: 'id',
    Fecha: 'Fecha',
    Descripcion: 'Descripcion',
    Tipo: 'Tipo',
    veterinario_id_fk: 'veterinario_id_fk',
    mascota_id_fk: 'mascota_id_fk'
  };

  export type Historial_clinicoScalarFieldEnum = (typeof Historial_clinicoScalarFieldEnum)[keyof typeof Historial_clinicoScalarFieldEnum]


  export const MascotaScalarFieldEnum: {
    id: 'id',
    Nombre: 'Nombre',
    Especie: 'Especie',
    Raza: 'Raza',
    Edad: 'Edad',
    Sexo: 'Sexo',
    usuario_id_fk: 'usuario_id_fk'
  };

  export type MascotaScalarFieldEnum = (typeof MascotaScalarFieldEnum)[keyof typeof MascotaScalarFieldEnum]


  export const OperacionScalarFieldEnum: {
    id: 'id',
    Tipo: 'Tipo',
    Fecha: 'Fecha',
    Descripci_n: 'Descripci_n',
    historial_clinico_id_fk: 'historial_clinico_id_fk'
  };

  export type OperacionScalarFieldEnum = (typeof OperacionScalarFieldEnum)[keyof typeof OperacionScalarFieldEnum]


  export const TratamientoScalarFieldEnum: {
    id: 'id',
    Tipo: 'Tipo',
    Fecha: 'Fecha',
    Fecha_fin: 'Fecha_fin',
    Descripci_n: 'Descripci_n',
    historial_clinico_id_fk: 'historial_clinico_id_fk'
  };

  export type TratamientoScalarFieldEnum = (typeof TratamientoScalarFieldEnum)[keyof typeof TratamientoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    Nombre: 'Nombre',
    Email: 'Email',
    Telefono: 'Telefono',
    Contrase_a: 'Contrase_a',
    Rol: 'Rol'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VacunaScalarFieldEnum: {
    id: 'id',
    Nombre: 'Nombre',
    Fecha: 'Fecha',
    Descripci_n: 'Descripci_n',
    historial_clinico_id_fk: 'historial_clinico_id_fk'
  };

  export type VacunaScalarFieldEnum = (typeof VacunaScalarFieldEnum)[keyof typeof VacunaScalarFieldEnum]


  export const VeterinarioScalarFieldEnum: {
    id: 'id',
    Nombre: 'Nombre',
    Email: 'Email',
    Matricula: 'Matricula'
  };

  export type VeterinarioScalarFieldEnum = (typeof VeterinarioScalarFieldEnum)[keyof typeof VeterinarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const clinicaOrderByRelevanceFieldEnum: {
    Tienda: 'Tienda',
    Direcci_n: 'Direcci_n',
    Telefono: 'Telefono'
  };

  export type clinicaOrderByRelevanceFieldEnum = (typeof clinicaOrderByRelevanceFieldEnum)[keyof typeof clinicaOrderByRelevanceFieldEnum]


  export const enfermedadOrderByRelevanceFieldEnum: {
    Tipo: 'Tipo',
    Descripci_n: 'Descripci_n'
  };

  export type enfermedadOrderByRelevanceFieldEnum = (typeof enfermedadOrderByRelevanceFieldEnum)[keyof typeof enfermedadOrderByRelevanceFieldEnum]


  export const historial_clinicoOrderByRelevanceFieldEnum: {
    Descripcion: 'Descripcion',
    Tipo: 'Tipo'
  };

  export type historial_clinicoOrderByRelevanceFieldEnum = (typeof historial_clinicoOrderByRelevanceFieldEnum)[keyof typeof historial_clinicoOrderByRelevanceFieldEnum]


  export const mascotaOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre',
    Especie: 'Especie',
    Raza: 'Raza',
    Sexo: 'Sexo'
  };

  export type mascotaOrderByRelevanceFieldEnum = (typeof mascotaOrderByRelevanceFieldEnum)[keyof typeof mascotaOrderByRelevanceFieldEnum]


  export const operacionOrderByRelevanceFieldEnum: {
    Tipo: 'Tipo',
    Descripci_n: 'Descripci_n'
  };

  export type operacionOrderByRelevanceFieldEnum = (typeof operacionOrderByRelevanceFieldEnum)[keyof typeof operacionOrderByRelevanceFieldEnum]


  export const tratamientoOrderByRelevanceFieldEnum: {
    Descripci_n: 'Descripci_n'
  };

  export type tratamientoOrderByRelevanceFieldEnum = (typeof tratamientoOrderByRelevanceFieldEnum)[keyof typeof tratamientoOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre',
    Email: 'Email',
    Telefono: 'Telefono',
    Contrase_a: 'Contrase_a',
    Rol: 'Rol'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  export const vacunaOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre',
    Descripci_n: 'Descripci_n'
  };

  export type vacunaOrderByRelevanceFieldEnum = (typeof vacunaOrderByRelevanceFieldEnum)[keyof typeof vacunaOrderByRelevanceFieldEnum]


  export const veterinarioOrderByRelevanceFieldEnum: {
    Email: 'Email',
    Matricula: 'Matricula'
  };

  export type veterinarioOrderByRelevanceFieldEnum = (typeof veterinarioOrderByRelevanceFieldEnum)[keyof typeof veterinarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type clinicaWhereInput = {
    AND?: clinicaWhereInput | clinicaWhereInput[]
    OR?: clinicaWhereInput[]
    NOT?: clinicaWhereInput | clinicaWhereInput[]
    id?: IntFilter<"clinica"> | number
    Tienda?: StringFilter<"clinica"> | string
    Direcci_n?: StringFilter<"clinica"> | string
    Telefono?: StringFilter<"clinica"> | string
    Latitud?: FloatFilter<"clinica"> | number
    Longitud?: FloatFilter<"clinica"> | number
  }

  export type clinicaOrderByWithRelationInput = {
    id?: SortOrder
    Tienda?: SortOrder
    Direcci_n?: SortOrder
    Telefono?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
    _relevance?: clinicaOrderByRelevanceInput
  }

  export type clinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: clinicaWhereInput | clinicaWhereInput[]
    OR?: clinicaWhereInput[]
    NOT?: clinicaWhereInput | clinicaWhereInput[]
    Tienda?: StringFilter<"clinica"> | string
    Direcci_n?: StringFilter<"clinica"> | string
    Telefono?: StringFilter<"clinica"> | string
    Latitud?: FloatFilter<"clinica"> | number
    Longitud?: FloatFilter<"clinica"> | number
  }, "id">

  export type clinicaOrderByWithAggregationInput = {
    id?: SortOrder
    Tienda?: SortOrder
    Direcci_n?: SortOrder
    Telefono?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
    _count?: clinicaCountOrderByAggregateInput
    _avg?: clinicaAvgOrderByAggregateInput
    _max?: clinicaMaxOrderByAggregateInput
    _min?: clinicaMinOrderByAggregateInput
    _sum?: clinicaSumOrderByAggregateInput
  }

  export type clinicaScalarWhereWithAggregatesInput = {
    AND?: clinicaScalarWhereWithAggregatesInput | clinicaScalarWhereWithAggregatesInput[]
    OR?: clinicaScalarWhereWithAggregatesInput[]
    NOT?: clinicaScalarWhereWithAggregatesInput | clinicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"clinica"> | number
    Tienda?: StringWithAggregatesFilter<"clinica"> | string
    Direcci_n?: StringWithAggregatesFilter<"clinica"> | string
    Telefono?: StringWithAggregatesFilter<"clinica"> | string
    Latitud?: FloatWithAggregatesFilter<"clinica"> | number
    Longitud?: FloatWithAggregatesFilter<"clinica"> | number
  }

  export type enfermedadWhereInput = {
    AND?: enfermedadWhereInput | enfermedadWhereInput[]
    OR?: enfermedadWhereInput[]
    NOT?: enfermedadWhereInput | enfermedadWhereInput[]
    id?: IntFilter<"enfermedad"> | number
    Tipo?: StringFilter<"enfermedad"> | string
    Fecha_inicio?: DateTimeFilter<"enfermedad"> | Date | string
    Fecha_fin?: DateTimeFilter<"enfermedad"> | Date | string
    Descripci_n?: StringFilter<"enfermedad"> | string
    historial_clinico_id_fk?: IntFilter<"enfermedad"> | number
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }

  export type enfermedadOrderByWithRelationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_inicio?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    _relevance?: enfermedadOrderByRelevanceInput
  }

  export type enfermedadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    historial_clinico_id_fk?: number
    AND?: enfermedadWhereInput | enfermedadWhereInput[]
    OR?: enfermedadWhereInput[]
    NOT?: enfermedadWhereInput | enfermedadWhereInput[]
    Tipo?: StringFilter<"enfermedad"> | string
    Fecha_inicio?: DateTimeFilter<"enfermedad"> | Date | string
    Fecha_fin?: DateTimeFilter<"enfermedad"> | Date | string
    Descripci_n?: StringFilter<"enfermedad"> | string
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }, "id" | "historial_clinico_id_fk">

  export type enfermedadOrderByWithAggregationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_inicio?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    _count?: enfermedadCountOrderByAggregateInput
    _avg?: enfermedadAvgOrderByAggregateInput
    _max?: enfermedadMaxOrderByAggregateInput
    _min?: enfermedadMinOrderByAggregateInput
    _sum?: enfermedadSumOrderByAggregateInput
  }

  export type enfermedadScalarWhereWithAggregatesInput = {
    AND?: enfermedadScalarWhereWithAggregatesInput | enfermedadScalarWhereWithAggregatesInput[]
    OR?: enfermedadScalarWhereWithAggregatesInput[]
    NOT?: enfermedadScalarWhereWithAggregatesInput | enfermedadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"enfermedad"> | number
    Tipo?: StringWithAggregatesFilter<"enfermedad"> | string
    Fecha_inicio?: DateTimeWithAggregatesFilter<"enfermedad"> | Date | string
    Fecha_fin?: DateTimeWithAggregatesFilter<"enfermedad"> | Date | string
    Descripci_n?: StringWithAggregatesFilter<"enfermedad"> | string
    historial_clinico_id_fk?: IntWithAggregatesFilter<"enfermedad"> | number
  }

  export type historial_clinicoWhereInput = {
    AND?: historial_clinicoWhereInput | historial_clinicoWhereInput[]
    OR?: historial_clinicoWhereInput[]
    NOT?: historial_clinicoWhereInput | historial_clinicoWhereInput[]
    id?: IntFilter<"historial_clinico"> | number
    Fecha?: DateTimeFilter<"historial_clinico"> | Date | string
    Descripcion?: StringFilter<"historial_clinico"> | string
    Tipo?: StringFilter<"historial_clinico"> | string
    veterinario_id_fk?: IntFilter<"historial_clinico"> | number
    mascota_id_fk?: IntFilter<"historial_clinico"> | number
    enfermedad?: XOR<EnfermedadNullableScalarRelationFilter, enfermedadWhereInput> | null
    veterinario?: XOR<VeterinarioScalarRelationFilter, veterinarioWhereInput>
    mascota?: XOR<MascotaScalarRelationFilter, mascotaWhereInput>
    operacion?: XOR<OperacionNullableScalarRelationFilter, operacionWhereInput> | null
    tratamiento?: XOR<TratamientoNullableScalarRelationFilter, tratamientoWhereInput> | null
    vacuna?: XOR<VacunaNullableScalarRelationFilter, vacunaWhereInput> | null
  }

  export type historial_clinicoOrderByWithRelationInput = {
    id?: SortOrder
    Fecha?: SortOrder
    Descripcion?: SortOrder
    Tipo?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
    enfermedad?: enfermedadOrderByWithRelationInput
    veterinario?: veterinarioOrderByWithRelationInput
    mascota?: mascotaOrderByWithRelationInput
    operacion?: operacionOrderByWithRelationInput
    tratamiento?: tratamientoOrderByWithRelationInput
    vacuna?: vacunaOrderByWithRelationInput
    _relevance?: historial_clinicoOrderByRelevanceInput
  }

  export type historial_clinicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    veterinario_id_fk?: number
    mascota_id_fk?: number
    AND?: historial_clinicoWhereInput | historial_clinicoWhereInput[]
    OR?: historial_clinicoWhereInput[]
    NOT?: historial_clinicoWhereInput | historial_clinicoWhereInput[]
    Fecha?: DateTimeFilter<"historial_clinico"> | Date | string
    Descripcion?: StringFilter<"historial_clinico"> | string
    Tipo?: StringFilter<"historial_clinico"> | string
    enfermedad?: XOR<EnfermedadNullableScalarRelationFilter, enfermedadWhereInput> | null
    veterinario?: XOR<VeterinarioScalarRelationFilter, veterinarioWhereInput>
    mascota?: XOR<MascotaScalarRelationFilter, mascotaWhereInput>
    operacion?: XOR<OperacionNullableScalarRelationFilter, operacionWhereInput> | null
    tratamiento?: XOR<TratamientoNullableScalarRelationFilter, tratamientoWhereInput> | null
    vacuna?: XOR<VacunaNullableScalarRelationFilter, vacunaWhereInput> | null
  }, "id" | "veterinario_id_fk" | "mascota_id_fk">

  export type historial_clinicoOrderByWithAggregationInput = {
    id?: SortOrder
    Fecha?: SortOrder
    Descripcion?: SortOrder
    Tipo?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
    _count?: historial_clinicoCountOrderByAggregateInput
    _avg?: historial_clinicoAvgOrderByAggregateInput
    _max?: historial_clinicoMaxOrderByAggregateInput
    _min?: historial_clinicoMinOrderByAggregateInput
    _sum?: historial_clinicoSumOrderByAggregateInput
  }

  export type historial_clinicoScalarWhereWithAggregatesInput = {
    AND?: historial_clinicoScalarWhereWithAggregatesInput | historial_clinicoScalarWhereWithAggregatesInput[]
    OR?: historial_clinicoScalarWhereWithAggregatesInput[]
    NOT?: historial_clinicoScalarWhereWithAggregatesInput | historial_clinicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"historial_clinico"> | number
    Fecha?: DateTimeWithAggregatesFilter<"historial_clinico"> | Date | string
    Descripcion?: StringWithAggregatesFilter<"historial_clinico"> | string
    Tipo?: StringWithAggregatesFilter<"historial_clinico"> | string
    veterinario_id_fk?: IntWithAggregatesFilter<"historial_clinico"> | number
    mascota_id_fk?: IntWithAggregatesFilter<"historial_clinico"> | number
  }

  export type mascotaWhereInput = {
    AND?: mascotaWhereInput | mascotaWhereInput[]
    OR?: mascotaWhereInput[]
    NOT?: mascotaWhereInput | mascotaWhereInput[]
    id?: IntFilter<"mascota"> | number
    Nombre?: StringFilter<"mascota"> | string
    Especie?: StringFilter<"mascota"> | string
    Raza?: StringFilter<"mascota"> | string
    Edad?: IntFilter<"mascota"> | number
    Sexo?: StringFilter<"mascota"> | string
    usuario_id_fk?: IntFilter<"mascota"> | number
    historial_clinico?: XOR<Historial_clinicoNullableScalarRelationFilter, historial_clinicoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type mascotaOrderByWithRelationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Especie?: SortOrder
    Raza?: SortOrder
    Edad?: SortOrder
    Sexo?: SortOrder
    usuario_id_fk?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: mascotaOrderByRelevanceInput
  }

  export type mascotaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario_id_fk?: number
    AND?: mascotaWhereInput | mascotaWhereInput[]
    OR?: mascotaWhereInput[]
    NOT?: mascotaWhereInput | mascotaWhereInput[]
    Nombre?: StringFilter<"mascota"> | string
    Especie?: StringFilter<"mascota"> | string
    Raza?: StringFilter<"mascota"> | string
    Edad?: IntFilter<"mascota"> | number
    Sexo?: StringFilter<"mascota"> | string
    historial_clinico?: XOR<Historial_clinicoNullableScalarRelationFilter, historial_clinicoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id" | "usuario_id_fk">

  export type mascotaOrderByWithAggregationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Especie?: SortOrder
    Raza?: SortOrder
    Edad?: SortOrder
    Sexo?: SortOrder
    usuario_id_fk?: SortOrder
    _count?: mascotaCountOrderByAggregateInput
    _avg?: mascotaAvgOrderByAggregateInput
    _max?: mascotaMaxOrderByAggregateInput
    _min?: mascotaMinOrderByAggregateInput
    _sum?: mascotaSumOrderByAggregateInput
  }

  export type mascotaScalarWhereWithAggregatesInput = {
    AND?: mascotaScalarWhereWithAggregatesInput | mascotaScalarWhereWithAggregatesInput[]
    OR?: mascotaScalarWhereWithAggregatesInput[]
    NOT?: mascotaScalarWhereWithAggregatesInput | mascotaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mascota"> | number
    Nombre?: StringWithAggregatesFilter<"mascota"> | string
    Especie?: StringWithAggregatesFilter<"mascota"> | string
    Raza?: StringWithAggregatesFilter<"mascota"> | string
    Edad?: IntWithAggregatesFilter<"mascota"> | number
    Sexo?: StringWithAggregatesFilter<"mascota"> | string
    usuario_id_fk?: IntWithAggregatesFilter<"mascota"> | number
  }

  export type operacionWhereInput = {
    AND?: operacionWhereInput | operacionWhereInput[]
    OR?: operacionWhereInput[]
    NOT?: operacionWhereInput | operacionWhereInput[]
    id?: IntFilter<"operacion"> | number
    Tipo?: StringFilter<"operacion"> | string
    Fecha?: DateTimeFilter<"operacion"> | Date | string
    Descripci_n?: StringFilter<"operacion"> | string
    historial_clinico_id_fk?: IntFilter<"operacion"> | number
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }

  export type operacionOrderByWithRelationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    _relevance?: operacionOrderByRelevanceInput
  }

  export type operacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    historial_clinico_id_fk?: number
    AND?: operacionWhereInput | operacionWhereInput[]
    OR?: operacionWhereInput[]
    NOT?: operacionWhereInput | operacionWhereInput[]
    Tipo?: StringFilter<"operacion"> | string
    Fecha?: DateTimeFilter<"operacion"> | Date | string
    Descripci_n?: StringFilter<"operacion"> | string
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }, "id" | "historial_clinico_id_fk">

  export type operacionOrderByWithAggregationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    _count?: operacionCountOrderByAggregateInput
    _avg?: operacionAvgOrderByAggregateInput
    _max?: operacionMaxOrderByAggregateInput
    _min?: operacionMinOrderByAggregateInput
    _sum?: operacionSumOrderByAggregateInput
  }

  export type operacionScalarWhereWithAggregatesInput = {
    AND?: operacionScalarWhereWithAggregatesInput | operacionScalarWhereWithAggregatesInput[]
    OR?: operacionScalarWhereWithAggregatesInput[]
    NOT?: operacionScalarWhereWithAggregatesInput | operacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"operacion"> | number
    Tipo?: StringWithAggregatesFilter<"operacion"> | string
    Fecha?: DateTimeWithAggregatesFilter<"operacion"> | Date | string
    Descripci_n?: StringWithAggregatesFilter<"operacion"> | string
    historial_clinico_id_fk?: IntWithAggregatesFilter<"operacion"> | number
  }

  export type tratamientoWhereInput = {
    AND?: tratamientoWhereInput | tratamientoWhereInput[]
    OR?: tratamientoWhereInput[]
    NOT?: tratamientoWhereInput | tratamientoWhereInput[]
    id?: IntFilter<"tratamiento"> | number
    Tipo?: IntFilter<"tratamiento"> | number
    Fecha?: DateTimeFilter<"tratamiento"> | Date | string
    Fecha_fin?: IntFilter<"tratamiento"> | number
    Descripci_n?: StringFilter<"tratamiento"> | string
    historial_clinico_id_fk?: IntFilter<"tratamiento"> | number
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }

  export type tratamientoOrderByWithRelationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    _relevance?: tratamientoOrderByRelevanceInput
  }

  export type tratamientoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    historial_clinico_id_fk?: number
    AND?: tratamientoWhereInput | tratamientoWhereInput[]
    OR?: tratamientoWhereInput[]
    NOT?: tratamientoWhereInput | tratamientoWhereInput[]
    Tipo?: IntFilter<"tratamiento"> | number
    Fecha?: DateTimeFilter<"tratamiento"> | Date | string
    Fecha_fin?: IntFilter<"tratamiento"> | number
    Descripci_n?: StringFilter<"tratamiento"> | string
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }, "id" | "historial_clinico_id_fk">

  export type tratamientoOrderByWithAggregationInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    _count?: tratamientoCountOrderByAggregateInput
    _avg?: tratamientoAvgOrderByAggregateInput
    _max?: tratamientoMaxOrderByAggregateInput
    _min?: tratamientoMinOrderByAggregateInput
    _sum?: tratamientoSumOrderByAggregateInput
  }

  export type tratamientoScalarWhereWithAggregatesInput = {
    AND?: tratamientoScalarWhereWithAggregatesInput | tratamientoScalarWhereWithAggregatesInput[]
    OR?: tratamientoScalarWhereWithAggregatesInput[]
    NOT?: tratamientoScalarWhereWithAggregatesInput | tratamientoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tratamiento"> | number
    Tipo?: IntWithAggregatesFilter<"tratamiento"> | number
    Fecha?: DateTimeWithAggregatesFilter<"tratamiento"> | Date | string
    Fecha_fin?: IntWithAggregatesFilter<"tratamiento"> | number
    Descripci_n?: StringWithAggregatesFilter<"tratamiento"> | string
    historial_clinico_id_fk?: IntWithAggregatesFilter<"tratamiento"> | number
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    Nombre?: StringFilter<"usuario"> | string
    Email?: StringFilter<"usuario"> | string
    Telefono?: StringFilter<"usuario"> | string
    Contrase_a?: StringFilter<"usuario"> | string
    Rol?: StringFilter<"usuario"> | string
    mascota?: XOR<MascotaNullableScalarRelationFilter, mascotaWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Telefono?: SortOrder
    Contrase_a?: SortOrder
    Rol?: SortOrder
    mascota?: mascotaOrderByWithRelationInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    Nombre?: StringFilter<"usuario"> | string
    Email?: StringFilter<"usuario"> | string
    Telefono?: StringFilter<"usuario"> | string
    Contrase_a?: StringFilter<"usuario"> | string
    Rol?: StringFilter<"usuario"> | string
    mascota?: XOR<MascotaNullableScalarRelationFilter, mascotaWhereInput> | null
  }, "id">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Telefono?: SortOrder
    Contrase_a?: SortOrder
    Rol?: SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    Nombre?: StringWithAggregatesFilter<"usuario"> | string
    Email?: StringWithAggregatesFilter<"usuario"> | string
    Telefono?: StringWithAggregatesFilter<"usuario"> | string
    Contrase_a?: StringWithAggregatesFilter<"usuario"> | string
    Rol?: StringWithAggregatesFilter<"usuario"> | string
  }

  export type vacunaWhereInput = {
    AND?: vacunaWhereInput | vacunaWhereInput[]
    OR?: vacunaWhereInput[]
    NOT?: vacunaWhereInput | vacunaWhereInput[]
    id?: IntFilter<"vacuna"> | number
    Nombre?: StringFilter<"vacuna"> | string
    Fecha?: DateTimeFilter<"vacuna"> | Date | string
    Descripci_n?: StringFilter<"vacuna"> | string
    historial_clinico_id_fk?: IntFilter<"vacuna"> | number
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }

  export type vacunaOrderByWithRelationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    _relevance?: vacunaOrderByRelevanceInput
  }

  export type vacunaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    historial_clinico_id_fk?: number
    AND?: vacunaWhereInput | vacunaWhereInput[]
    OR?: vacunaWhereInput[]
    NOT?: vacunaWhereInput | vacunaWhereInput[]
    Nombre?: StringFilter<"vacuna"> | string
    Fecha?: DateTimeFilter<"vacuna"> | Date | string
    Descripci_n?: StringFilter<"vacuna"> | string
    historial_clinico?: XOR<Historial_clinicoScalarRelationFilter, historial_clinicoWhereInput>
  }, "id" | "historial_clinico_id_fk">

  export type vacunaOrderByWithAggregationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
    _count?: vacunaCountOrderByAggregateInput
    _avg?: vacunaAvgOrderByAggregateInput
    _max?: vacunaMaxOrderByAggregateInput
    _min?: vacunaMinOrderByAggregateInput
    _sum?: vacunaSumOrderByAggregateInput
  }

  export type vacunaScalarWhereWithAggregatesInput = {
    AND?: vacunaScalarWhereWithAggregatesInput | vacunaScalarWhereWithAggregatesInput[]
    OR?: vacunaScalarWhereWithAggregatesInput[]
    NOT?: vacunaScalarWhereWithAggregatesInput | vacunaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"vacuna"> | number
    Nombre?: StringWithAggregatesFilter<"vacuna"> | string
    Fecha?: DateTimeWithAggregatesFilter<"vacuna"> | Date | string
    Descripci_n?: StringWithAggregatesFilter<"vacuna"> | string
    historial_clinico_id_fk?: IntWithAggregatesFilter<"vacuna"> | number
  }

  export type veterinarioWhereInput = {
    AND?: veterinarioWhereInput | veterinarioWhereInput[]
    OR?: veterinarioWhereInput[]
    NOT?: veterinarioWhereInput | veterinarioWhereInput[]
    id?: IntFilter<"veterinario"> | number
    Nombre?: DateTimeFilter<"veterinario"> | Date | string
    Email?: StringFilter<"veterinario"> | string
    Matricula?: StringFilter<"veterinario"> | string
    historial_clinico?: XOR<Historial_clinicoNullableScalarRelationFilter, historial_clinicoWhereInput> | null
  }

  export type veterinarioOrderByWithRelationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Matricula?: SortOrder
    historial_clinico?: historial_clinicoOrderByWithRelationInput
    _relevance?: veterinarioOrderByRelevanceInput
  }

  export type veterinarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: veterinarioWhereInput | veterinarioWhereInput[]
    OR?: veterinarioWhereInput[]
    NOT?: veterinarioWhereInput | veterinarioWhereInput[]
    Nombre?: DateTimeFilter<"veterinario"> | Date | string
    Email?: StringFilter<"veterinario"> | string
    Matricula?: StringFilter<"veterinario"> | string
    historial_clinico?: XOR<Historial_clinicoNullableScalarRelationFilter, historial_clinicoWhereInput> | null
  }, "id">

  export type veterinarioOrderByWithAggregationInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Matricula?: SortOrder
    _count?: veterinarioCountOrderByAggregateInput
    _avg?: veterinarioAvgOrderByAggregateInput
    _max?: veterinarioMaxOrderByAggregateInput
    _min?: veterinarioMinOrderByAggregateInput
    _sum?: veterinarioSumOrderByAggregateInput
  }

  export type veterinarioScalarWhereWithAggregatesInput = {
    AND?: veterinarioScalarWhereWithAggregatesInput | veterinarioScalarWhereWithAggregatesInput[]
    OR?: veterinarioScalarWhereWithAggregatesInput[]
    NOT?: veterinarioScalarWhereWithAggregatesInput | veterinarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"veterinario"> | number
    Nombre?: DateTimeWithAggregatesFilter<"veterinario"> | Date | string
    Email?: StringWithAggregatesFilter<"veterinario"> | string
    Matricula?: StringWithAggregatesFilter<"veterinario"> | string
  }

  export type clinicaCreateInput = {
    Tienda: string
    Direcci_n: string
    Telefono: string
    Latitud: number
    Longitud: number
  }

  export type clinicaUncheckedCreateInput = {
    id?: number
    Tienda: string
    Direcci_n: string
    Telefono: string
    Latitud: number
    Longitud: number
  }

  export type clinicaUpdateInput = {
    Tienda?: StringFieldUpdateOperationsInput | string
    Direcci_n?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Latitud?: FloatFieldUpdateOperationsInput | number
    Longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type clinicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tienda?: StringFieldUpdateOperationsInput | string
    Direcci_n?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Latitud?: FloatFieldUpdateOperationsInput | number
    Longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type clinicaCreateManyInput = {
    id?: number
    Tienda: string
    Direcci_n: string
    Telefono: string
    Latitud: number
    Longitud: number
  }

  export type clinicaUpdateManyMutationInput = {
    Tienda?: StringFieldUpdateOperationsInput | string
    Direcci_n?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Latitud?: FloatFieldUpdateOperationsInput | number
    Longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type clinicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tienda?: StringFieldUpdateOperationsInput | string
    Direcci_n?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Latitud?: FloatFieldUpdateOperationsInput | number
    Longitud?: FloatFieldUpdateOperationsInput | number
  }

  export type enfermedadCreateInput = {
    Tipo: string
    Fecha_inicio: Date | string
    Fecha_fin: Date | string
    Descripci_n: string
    historial_clinico: historial_clinicoCreateNestedOneWithoutEnfermedadInput
  }

  export type enfermedadUncheckedCreateInput = {
    id?: number
    Tipo: string
    Fecha_inicio: Date | string
    Fecha_fin: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type enfermedadUpdateInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneRequiredWithoutEnfermedadNestedInput
  }

  export type enfermedadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type enfermedadCreateManyInput = {
    id?: number
    Tipo: string
    Fecha_inicio: Date | string
    Fecha_fin: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type enfermedadUpdateManyMutationInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type historial_clinicoCreateInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUpdateInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoCreateManyInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
  }

  export type historial_clinicoUpdateManyMutationInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
  }

  export type historial_clinicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type mascotaCreateInput = {
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    historial_clinico?: historial_clinicoCreateNestedOneWithoutMascotaInput
    usuario: usuarioCreateNestedOneWithoutMascotaInput
  }

  export type mascotaUncheckedCreateInput = {
    id?: number
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    usuario_id_fk: number
    historial_clinico?: historial_clinicoUncheckedCreateNestedOneWithoutMascotaInput
  }

  export type mascotaUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneWithoutMascotaNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type mascotaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    usuario_id_fk?: IntFieldUpdateOperationsInput | number
    historial_clinico?: historial_clinicoUncheckedUpdateOneWithoutMascotaNestedInput
  }

  export type mascotaCreateManyInput = {
    id?: number
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    usuario_id_fk: number
  }

  export type mascotaUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
  }

  export type mascotaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    usuario_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type operacionCreateInput = {
    Tipo: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico: historial_clinicoCreateNestedOneWithoutOperacionInput
  }

  export type operacionUncheckedCreateInput = {
    id?: number
    Tipo: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type operacionUpdateInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneRequiredWithoutOperacionNestedInput
  }

  export type operacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type operacionCreateManyInput = {
    id?: number
    Tipo: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type operacionUpdateManyMutationInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type operacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type tratamientoCreateInput = {
    Tipo: number
    Fecha: Date | string
    Fecha_fin: number
    Descripci_n: string
    historial_clinico: historial_clinicoCreateNestedOneWithoutTratamientoInput
  }

  export type tratamientoUncheckedCreateInput = {
    id?: number
    Tipo: number
    Fecha: Date | string
    Fecha_fin: number
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type tratamientoUpdateInput = {
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneRequiredWithoutTratamientoNestedInput
  }

  export type tratamientoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type tratamientoCreateManyInput = {
    id?: number
    Tipo: number
    Fecha: Date | string
    Fecha_fin: number
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type tratamientoUpdateManyMutationInput = {
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type tratamientoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type usuarioCreateInput = {
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
    mascota?: mascotaCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
    mascota?: mascotaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    mascota?: mascotaUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
    mascota?: mascotaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
  }

  export type usuarioUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
  }

  export type vacunaCreateInput = {
    Nombre: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico: historial_clinicoCreateNestedOneWithoutVacunaInput
  }

  export type vacunaUncheckedCreateInput = {
    id?: number
    Nombre: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type vacunaUpdateInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneRequiredWithoutVacunaNestedInput
  }

  export type vacunaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type vacunaCreateManyInput = {
    id?: number
    Nombre: string
    Fecha: Date | string
    Descripci_n: string
    historial_clinico_id_fk: number
  }

  export type vacunaUpdateManyMutationInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type vacunaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
    historial_clinico_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type veterinarioCreateInput = {
    Nombre: Date | string
    Email: string
    Matricula: string
    historial_clinico?: historial_clinicoCreateNestedOneWithoutVeterinarioInput
  }

  export type veterinarioUncheckedCreateInput = {
    id?: number
    Nombre: Date | string
    Email: string
    Matricula: string
    historial_clinico?: historial_clinicoUncheckedCreateNestedOneWithoutVeterinarioInput
  }

  export type veterinarioUpdateInput = {
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneWithoutVeterinarioNestedInput
  }

  export type veterinarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUncheckedUpdateOneWithoutVeterinarioNestedInput
  }

  export type veterinarioCreateManyInput = {
    id?: number
    Nombre: Date | string
    Email: string
    Matricula: string
  }

  export type veterinarioUpdateManyMutationInput = {
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
  }

  export type veterinarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type clinicaOrderByRelevanceInput = {
    fields: clinicaOrderByRelevanceFieldEnum | clinicaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type clinicaCountOrderByAggregateInput = {
    id?: SortOrder
    Tienda?: SortOrder
    Direcci_n?: SortOrder
    Telefono?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
  }

  export type clinicaAvgOrderByAggregateInput = {
    id?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
  }

  export type clinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    Tienda?: SortOrder
    Direcci_n?: SortOrder
    Telefono?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
  }

  export type clinicaMinOrderByAggregateInput = {
    id?: SortOrder
    Tienda?: SortOrder
    Direcci_n?: SortOrder
    Telefono?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
  }

  export type clinicaSumOrderByAggregateInput = {
    id?: SortOrder
    Latitud?: SortOrder
    Longitud?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Historial_clinicoScalarRelationFilter = {
    is?: historial_clinicoWhereInput
    isNot?: historial_clinicoWhereInput
  }

  export type enfermedadOrderByRelevanceInput = {
    fields: enfermedadOrderByRelevanceFieldEnum | enfermedadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type enfermedadCountOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_inicio?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type enfermedadAvgOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type enfermedadMaxOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_inicio?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type enfermedadMinOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_inicio?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type enfermedadSumOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnfermedadNullableScalarRelationFilter = {
    is?: enfermedadWhereInput | null
    isNot?: enfermedadWhereInput | null
  }

  export type VeterinarioScalarRelationFilter = {
    is?: veterinarioWhereInput
    isNot?: veterinarioWhereInput
  }

  export type MascotaScalarRelationFilter = {
    is?: mascotaWhereInput
    isNot?: mascotaWhereInput
  }

  export type OperacionNullableScalarRelationFilter = {
    is?: operacionWhereInput | null
    isNot?: operacionWhereInput | null
  }

  export type TratamientoNullableScalarRelationFilter = {
    is?: tratamientoWhereInput | null
    isNot?: tratamientoWhereInput | null
  }

  export type VacunaNullableScalarRelationFilter = {
    is?: vacunaWhereInput | null
    isNot?: vacunaWhereInput | null
  }

  export type historial_clinicoOrderByRelevanceInput = {
    fields: historial_clinicoOrderByRelevanceFieldEnum | historial_clinicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type historial_clinicoCountOrderByAggregateInput = {
    id?: SortOrder
    Fecha?: SortOrder
    Descripcion?: SortOrder
    Tipo?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
  }

  export type historial_clinicoAvgOrderByAggregateInput = {
    id?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
  }

  export type historial_clinicoMaxOrderByAggregateInput = {
    id?: SortOrder
    Fecha?: SortOrder
    Descripcion?: SortOrder
    Tipo?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
  }

  export type historial_clinicoMinOrderByAggregateInput = {
    id?: SortOrder
    Fecha?: SortOrder
    Descripcion?: SortOrder
    Tipo?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
  }

  export type historial_clinicoSumOrderByAggregateInput = {
    id?: SortOrder
    veterinario_id_fk?: SortOrder
    mascota_id_fk?: SortOrder
  }

  export type Historial_clinicoNullableScalarRelationFilter = {
    is?: historial_clinicoWhereInput | null
    isNot?: historial_clinicoWhereInput | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type mascotaOrderByRelevanceInput = {
    fields: mascotaOrderByRelevanceFieldEnum | mascotaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type mascotaCountOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Especie?: SortOrder
    Raza?: SortOrder
    Edad?: SortOrder
    Sexo?: SortOrder
    usuario_id_fk?: SortOrder
  }

  export type mascotaAvgOrderByAggregateInput = {
    id?: SortOrder
    Edad?: SortOrder
    usuario_id_fk?: SortOrder
  }

  export type mascotaMaxOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Especie?: SortOrder
    Raza?: SortOrder
    Edad?: SortOrder
    Sexo?: SortOrder
    usuario_id_fk?: SortOrder
  }

  export type mascotaMinOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Especie?: SortOrder
    Raza?: SortOrder
    Edad?: SortOrder
    Sexo?: SortOrder
    usuario_id_fk?: SortOrder
  }

  export type mascotaSumOrderByAggregateInput = {
    id?: SortOrder
    Edad?: SortOrder
    usuario_id_fk?: SortOrder
  }

  export type operacionOrderByRelevanceInput = {
    fields: operacionOrderByRelevanceFieldEnum | operacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type operacionCountOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type operacionAvgOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type operacionMaxOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type operacionMinOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type operacionSumOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type tratamientoOrderByRelevanceInput = {
    fields: tratamientoOrderByRelevanceFieldEnum | tratamientoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tratamientoCountOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type tratamientoAvgOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_fin?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type tratamientoMaxOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type tratamientoMinOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha?: SortOrder
    Fecha_fin?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type tratamientoSumOrderByAggregateInput = {
    id?: SortOrder
    Tipo?: SortOrder
    Fecha_fin?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type MascotaNullableScalarRelationFilter = {
    is?: mascotaWhereInput | null
    isNot?: mascotaWhereInput | null
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Telefono?: SortOrder
    Contrase_a?: SortOrder
    Rol?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Telefono?: SortOrder
    Contrase_a?: SortOrder
    Rol?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Telefono?: SortOrder
    Contrase_a?: SortOrder
    Rol?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type vacunaOrderByRelevanceInput = {
    fields: vacunaOrderByRelevanceFieldEnum | vacunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vacunaCountOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type vacunaAvgOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type vacunaMaxOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type vacunaMinOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Fecha?: SortOrder
    Descripci_n?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type vacunaSumOrderByAggregateInput = {
    id?: SortOrder
    historial_clinico_id_fk?: SortOrder
  }

  export type veterinarioOrderByRelevanceInput = {
    fields: veterinarioOrderByRelevanceFieldEnum | veterinarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type veterinarioCountOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Matricula?: SortOrder
  }

  export type veterinarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type veterinarioMaxOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Matricula?: SortOrder
  }

  export type veterinarioMinOrderByAggregateInput = {
    id?: SortOrder
    Nombre?: SortOrder
    Email?: SortOrder
    Matricula?: SortOrder
  }

  export type veterinarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type historial_clinicoCreateNestedOneWithoutEnfermedadInput = {
    create?: XOR<historial_clinicoCreateWithoutEnfermedadInput, historial_clinicoUncheckedCreateWithoutEnfermedadInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutEnfermedadInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type historial_clinicoUpdateOneRequiredWithoutEnfermedadNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutEnfermedadInput, historial_clinicoUncheckedCreateWithoutEnfermedadInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutEnfermedadInput
    upsert?: historial_clinicoUpsertWithoutEnfermedadInput
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutEnfermedadInput, historial_clinicoUpdateWithoutEnfermedadInput>, historial_clinicoUncheckedUpdateWithoutEnfermedadInput>
  }

  export type enfermedadCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: enfermedadCreateOrConnectWithoutHistorial_clinicoInput
    connect?: enfermedadWhereUniqueInput
  }

  export type veterinarioCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<veterinarioCreateWithoutHistorial_clinicoInput, veterinarioUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: veterinarioCreateOrConnectWithoutHistorial_clinicoInput
    connect?: veterinarioWhereUniqueInput
  }

  export type mascotaCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<mascotaCreateWithoutHistorial_clinicoInput, mascotaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutHistorial_clinicoInput
    connect?: mascotaWhereUniqueInput
  }

  export type operacionCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutHistorial_clinicoInput
    connect?: operacionWhereUniqueInput
  }

  export type tratamientoCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: tratamientoCreateOrConnectWithoutHistorial_clinicoInput
    connect?: tratamientoWhereUniqueInput
  }

  export type vacunaCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: vacunaCreateOrConnectWithoutHistorial_clinicoInput
    connect?: vacunaWhereUniqueInput
  }

  export type enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: enfermedadCreateOrConnectWithoutHistorial_clinicoInput
    connect?: enfermedadWhereUniqueInput
  }

  export type operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutHistorial_clinicoInput
    connect?: operacionWhereUniqueInput
  }

  export type tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: tratamientoCreateOrConnectWithoutHistorial_clinicoInput
    connect?: tratamientoWhereUniqueInput
  }

  export type vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput = {
    create?: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: vacunaCreateOrConnectWithoutHistorial_clinicoInput
    connect?: vacunaWhereUniqueInput
  }

  export type enfermedadUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: enfermedadCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: enfermedadUpsertWithoutHistorial_clinicoInput
    disconnect?: enfermedadWhereInput | boolean
    delete?: enfermedadWhereInput | boolean
    connect?: enfermedadWhereUniqueInput
    update?: XOR<XOR<enfermedadUpdateToOneWithWhereWithoutHistorial_clinicoInput, enfermedadUpdateWithoutHistorial_clinicoInput>, enfermedadUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput = {
    create?: XOR<veterinarioCreateWithoutHistorial_clinicoInput, veterinarioUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: veterinarioCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: veterinarioUpsertWithoutHistorial_clinicoInput
    connect?: veterinarioWhereUniqueInput
    update?: XOR<XOR<veterinarioUpdateToOneWithWhereWithoutHistorial_clinicoInput, veterinarioUpdateWithoutHistorial_clinicoInput>, veterinarioUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput = {
    create?: XOR<mascotaCreateWithoutHistorial_clinicoInput, mascotaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: mascotaUpsertWithoutHistorial_clinicoInput
    connect?: mascotaWhereUniqueInput
    update?: XOR<XOR<mascotaUpdateToOneWithWhereWithoutHistorial_clinicoInput, mascotaUpdateWithoutHistorial_clinicoInput>, mascotaUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type operacionUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: operacionUpsertWithoutHistorial_clinicoInput
    disconnect?: operacionWhereInput | boolean
    delete?: operacionWhereInput | boolean
    connect?: operacionWhereUniqueInput
    update?: XOR<XOR<operacionUpdateToOneWithWhereWithoutHistorial_clinicoInput, operacionUpdateWithoutHistorial_clinicoInput>, operacionUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type tratamientoUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: tratamientoCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: tratamientoUpsertWithoutHistorial_clinicoInput
    disconnect?: tratamientoWhereInput | boolean
    delete?: tratamientoWhereInput | boolean
    connect?: tratamientoWhereUniqueInput
    update?: XOR<XOR<tratamientoUpdateToOneWithWhereWithoutHistorial_clinicoInput, tratamientoUpdateWithoutHistorial_clinicoInput>, tratamientoUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type vacunaUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: vacunaCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: vacunaUpsertWithoutHistorial_clinicoInput
    disconnect?: vacunaWhereInput | boolean
    delete?: vacunaWhereInput | boolean
    connect?: vacunaWhereUniqueInput
    update?: XOR<XOR<vacunaUpdateToOneWithWhereWithoutHistorial_clinicoInput, vacunaUpdateWithoutHistorial_clinicoInput>, vacunaUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: enfermedadCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: enfermedadUpsertWithoutHistorial_clinicoInput
    disconnect?: enfermedadWhereInput | boolean
    delete?: enfermedadWhereInput | boolean
    connect?: enfermedadWhereUniqueInput
    update?: XOR<XOR<enfermedadUpdateToOneWithWhereWithoutHistorial_clinicoInput, enfermedadUpdateWithoutHistorial_clinicoInput>, enfermedadUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: operacionCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: operacionUpsertWithoutHistorial_clinicoInput
    disconnect?: operacionWhereInput | boolean
    delete?: operacionWhereInput | boolean
    connect?: operacionWhereUniqueInput
    update?: XOR<XOR<operacionUpdateToOneWithWhereWithoutHistorial_clinicoInput, operacionUpdateWithoutHistorial_clinicoInput>, operacionUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: tratamientoCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: tratamientoUpsertWithoutHistorial_clinicoInput
    disconnect?: tratamientoWhereInput | boolean
    delete?: tratamientoWhereInput | boolean
    connect?: tratamientoWhereUniqueInput
    update?: XOR<XOR<tratamientoUpdateToOneWithWhereWithoutHistorial_clinicoInput, tratamientoUpdateWithoutHistorial_clinicoInput>, tratamientoUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput = {
    create?: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
    connectOrCreate?: vacunaCreateOrConnectWithoutHistorial_clinicoInput
    upsert?: vacunaUpsertWithoutHistorial_clinicoInput
    disconnect?: vacunaWhereInput | boolean
    delete?: vacunaWhereInput | boolean
    connect?: vacunaWhereUniqueInput
    update?: XOR<XOR<vacunaUpdateToOneWithWhereWithoutHistorial_clinicoInput, vacunaUpdateWithoutHistorial_clinicoInput>, vacunaUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type historial_clinicoCreateNestedOneWithoutMascotaInput = {
    create?: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutMascotaInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutMascotaInput = {
    create?: XOR<usuarioCreateWithoutMascotaInput, usuarioUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutMascotaInput
    connect?: usuarioWhereUniqueInput
  }

  export type historial_clinicoUncheckedCreateNestedOneWithoutMascotaInput = {
    create?: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutMascotaInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUpdateOneWithoutMascotaNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutMascotaInput
    upsert?: historial_clinicoUpsertWithoutMascotaInput
    disconnect?: historial_clinicoWhereInput | boolean
    delete?: historial_clinicoWhereInput | boolean
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutMascotaInput, historial_clinicoUpdateWithoutMascotaInput>, historial_clinicoUncheckedUpdateWithoutMascotaInput>
  }

  export type usuarioUpdateOneRequiredWithoutMascotaNestedInput = {
    create?: XOR<usuarioCreateWithoutMascotaInput, usuarioUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutMascotaInput
    upsert?: usuarioUpsertWithoutMascotaInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutMascotaInput, usuarioUpdateWithoutMascotaInput>, usuarioUncheckedUpdateWithoutMascotaInput>
  }

  export type historial_clinicoUncheckedUpdateOneWithoutMascotaNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutMascotaInput
    upsert?: historial_clinicoUpsertWithoutMascotaInput
    disconnect?: historial_clinicoWhereInput | boolean
    delete?: historial_clinicoWhereInput | boolean
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutMascotaInput, historial_clinicoUpdateWithoutMascotaInput>, historial_clinicoUncheckedUpdateWithoutMascotaInput>
  }

  export type historial_clinicoCreateNestedOneWithoutOperacionInput = {
    create?: XOR<historial_clinicoCreateWithoutOperacionInput, historial_clinicoUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutOperacionInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUpdateOneRequiredWithoutOperacionNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutOperacionInput, historial_clinicoUncheckedCreateWithoutOperacionInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutOperacionInput
    upsert?: historial_clinicoUpsertWithoutOperacionInput
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutOperacionInput, historial_clinicoUpdateWithoutOperacionInput>, historial_clinicoUncheckedUpdateWithoutOperacionInput>
  }

  export type historial_clinicoCreateNestedOneWithoutTratamientoInput = {
    create?: XOR<historial_clinicoCreateWithoutTratamientoInput, historial_clinicoUncheckedCreateWithoutTratamientoInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutTratamientoInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUpdateOneRequiredWithoutTratamientoNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutTratamientoInput, historial_clinicoUncheckedCreateWithoutTratamientoInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutTratamientoInput
    upsert?: historial_clinicoUpsertWithoutTratamientoInput
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutTratamientoInput, historial_clinicoUpdateWithoutTratamientoInput>, historial_clinicoUncheckedUpdateWithoutTratamientoInput>
  }

  export type mascotaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutUsuarioInput
    connect?: mascotaWhereUniqueInput
  }

  export type mascotaUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutUsuarioInput
    connect?: mascotaWhereUniqueInput
  }

  export type mascotaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutUsuarioInput
    upsert?: mascotaUpsertWithoutUsuarioInput
    disconnect?: mascotaWhereInput | boolean
    delete?: mascotaWhereInput | boolean
    connect?: mascotaWhereUniqueInput
    update?: XOR<XOR<mascotaUpdateToOneWithWhereWithoutUsuarioInput, mascotaUpdateWithoutUsuarioInput>, mascotaUncheckedUpdateWithoutUsuarioInput>
  }

  export type mascotaUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: mascotaCreateOrConnectWithoutUsuarioInput
    upsert?: mascotaUpsertWithoutUsuarioInput
    disconnect?: mascotaWhereInput | boolean
    delete?: mascotaWhereInput | boolean
    connect?: mascotaWhereUniqueInput
    update?: XOR<XOR<mascotaUpdateToOneWithWhereWithoutUsuarioInput, mascotaUpdateWithoutUsuarioInput>, mascotaUncheckedUpdateWithoutUsuarioInput>
  }

  export type historial_clinicoCreateNestedOneWithoutVacunaInput = {
    create?: XOR<historial_clinicoCreateWithoutVacunaInput, historial_clinicoUncheckedCreateWithoutVacunaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVacunaInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUpdateOneRequiredWithoutVacunaNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutVacunaInput, historial_clinicoUncheckedCreateWithoutVacunaInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVacunaInput
    upsert?: historial_clinicoUpsertWithoutVacunaInput
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutVacunaInput, historial_clinicoUpdateWithoutVacunaInput>, historial_clinicoUncheckedUpdateWithoutVacunaInput>
  }

  export type historial_clinicoCreateNestedOneWithoutVeterinarioInput = {
    create?: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVeterinarioInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUncheckedCreateNestedOneWithoutVeterinarioInput = {
    create?: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVeterinarioInput
    connect?: historial_clinicoWhereUniqueInput
  }

  export type historial_clinicoUpdateOneWithoutVeterinarioNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVeterinarioInput
    upsert?: historial_clinicoUpsertWithoutVeterinarioInput
    disconnect?: historial_clinicoWhereInput | boolean
    delete?: historial_clinicoWhereInput | boolean
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutVeterinarioInput, historial_clinicoUpdateWithoutVeterinarioInput>, historial_clinicoUncheckedUpdateWithoutVeterinarioInput>
  }

  export type historial_clinicoUncheckedUpdateOneWithoutVeterinarioNestedInput = {
    create?: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
    connectOrCreate?: historial_clinicoCreateOrConnectWithoutVeterinarioInput
    upsert?: historial_clinicoUpsertWithoutVeterinarioInput
    disconnect?: historial_clinicoWhereInput | boolean
    delete?: historial_clinicoWhereInput | boolean
    connect?: historial_clinicoWhereUniqueInput
    update?: XOR<XOR<historial_clinicoUpdateToOneWithWhereWithoutVeterinarioInput, historial_clinicoUpdateWithoutVeterinarioInput>, historial_clinicoUncheckedUpdateWithoutVeterinarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type historial_clinicoCreateWithoutEnfermedadInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutEnfermedadInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutEnfermedadInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutEnfermedadInput, historial_clinicoUncheckedCreateWithoutEnfermedadInput>
  }

  export type historial_clinicoUpsertWithoutEnfermedadInput = {
    update: XOR<historial_clinicoUpdateWithoutEnfermedadInput, historial_clinicoUncheckedUpdateWithoutEnfermedadInput>
    create: XOR<historial_clinicoCreateWithoutEnfermedadInput, historial_clinicoUncheckedCreateWithoutEnfermedadInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutEnfermedadInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutEnfermedadInput, historial_clinicoUncheckedUpdateWithoutEnfermedadInput>
  }

  export type historial_clinicoUpdateWithoutEnfermedadInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutEnfermedadInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type enfermedadCreateWithoutHistorial_clinicoInput = {
    Tipo: string
    Fecha_inicio: Date | string
    Fecha_fin: Date | string
    Descripci_n: string
  }

  export type enfermedadUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Tipo: string
    Fecha_inicio: Date | string
    Fecha_fin: Date | string
    Descripci_n: string
  }

  export type enfermedadCreateOrConnectWithoutHistorial_clinicoInput = {
    where: enfermedadWhereUniqueInput
    create: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type veterinarioCreateWithoutHistorial_clinicoInput = {
    Nombre: Date | string
    Email: string
    Matricula: string
  }

  export type veterinarioUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Nombre: Date | string
    Email: string
    Matricula: string
  }

  export type veterinarioCreateOrConnectWithoutHistorial_clinicoInput = {
    where: veterinarioWhereUniqueInput
    create: XOR<veterinarioCreateWithoutHistorial_clinicoInput, veterinarioUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type mascotaCreateWithoutHistorial_clinicoInput = {
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    usuario: usuarioCreateNestedOneWithoutMascotaInput
  }

  export type mascotaUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    usuario_id_fk: number
  }

  export type mascotaCreateOrConnectWithoutHistorial_clinicoInput = {
    where: mascotaWhereUniqueInput
    create: XOR<mascotaCreateWithoutHistorial_clinicoInput, mascotaUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type operacionCreateWithoutHistorial_clinicoInput = {
    Tipo: string
    Fecha: Date | string
    Descripci_n: string
  }

  export type operacionUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Tipo: string
    Fecha: Date | string
    Descripci_n: string
  }

  export type operacionCreateOrConnectWithoutHistorial_clinicoInput = {
    where: operacionWhereUniqueInput
    create: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type tratamientoCreateWithoutHistorial_clinicoInput = {
    Tipo: number
    Fecha: Date | string
    Fecha_fin: number
    Descripci_n: string
  }

  export type tratamientoUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Tipo: number
    Fecha: Date | string
    Fecha_fin: number
    Descripci_n: string
  }

  export type tratamientoCreateOrConnectWithoutHistorial_clinicoInput = {
    where: tratamientoWhereUniqueInput
    create: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type vacunaCreateWithoutHistorial_clinicoInput = {
    Nombre: string
    Fecha: Date | string
    Descripci_n: string
  }

  export type vacunaUncheckedCreateWithoutHistorial_clinicoInput = {
    id?: number
    Nombre: string
    Fecha: Date | string
    Descripci_n: string
  }

  export type vacunaCreateOrConnectWithoutHistorial_clinicoInput = {
    where: vacunaWhereUniqueInput
    create: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
  }

  export type enfermedadUpsertWithoutHistorial_clinicoInput = {
    update: XOR<enfermedadUpdateWithoutHistorial_clinicoInput, enfermedadUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<enfermedadCreateWithoutHistorial_clinicoInput, enfermedadUncheckedCreateWithoutHistorial_clinicoInput>
    where?: enfermedadWhereInput
  }

  export type enfermedadUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: enfermedadWhereInput
    data: XOR<enfermedadUpdateWithoutHistorial_clinicoInput, enfermedadUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type enfermedadUpdateWithoutHistorial_clinicoInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type enfermedadUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type veterinarioUpsertWithoutHistorial_clinicoInput = {
    update: XOR<veterinarioUpdateWithoutHistorial_clinicoInput, veterinarioUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<veterinarioCreateWithoutHistorial_clinicoInput, veterinarioUncheckedCreateWithoutHistorial_clinicoInput>
    where?: veterinarioWhereInput
  }

  export type veterinarioUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: veterinarioWhereInput
    data: XOR<veterinarioUpdateWithoutHistorial_clinicoInput, veterinarioUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type veterinarioUpdateWithoutHistorial_clinicoInput = {
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
  }

  export type veterinarioUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: DateTimeFieldUpdateOperationsInput | Date | string
    Email?: StringFieldUpdateOperationsInput | string
    Matricula?: StringFieldUpdateOperationsInput | string
  }

  export type mascotaUpsertWithoutHistorial_clinicoInput = {
    update: XOR<mascotaUpdateWithoutHistorial_clinicoInput, mascotaUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<mascotaCreateWithoutHistorial_clinicoInput, mascotaUncheckedCreateWithoutHistorial_clinicoInput>
    where?: mascotaWhereInput
  }

  export type mascotaUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: mascotaWhereInput
    data: XOR<mascotaUpdateWithoutHistorial_clinicoInput, mascotaUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type mascotaUpdateWithoutHistorial_clinicoInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    usuario?: usuarioUpdateOneRequiredWithoutMascotaNestedInput
  }

  export type mascotaUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    usuario_id_fk?: IntFieldUpdateOperationsInput | number
  }

  export type operacionUpsertWithoutHistorial_clinicoInput = {
    update: XOR<operacionUpdateWithoutHistorial_clinicoInput, operacionUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<operacionCreateWithoutHistorial_clinicoInput, operacionUncheckedCreateWithoutHistorial_clinicoInput>
    where?: operacionWhereInput
  }

  export type operacionUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: operacionWhereInput
    data: XOR<operacionUpdateWithoutHistorial_clinicoInput, operacionUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type operacionUpdateWithoutHistorial_clinicoInput = {
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type operacionUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type tratamientoUpsertWithoutHistorial_clinicoInput = {
    update: XOR<tratamientoUpdateWithoutHistorial_clinicoInput, tratamientoUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<tratamientoCreateWithoutHistorial_clinicoInput, tratamientoUncheckedCreateWithoutHistorial_clinicoInput>
    where?: tratamientoWhereInput
  }

  export type tratamientoUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: tratamientoWhereInput
    data: XOR<tratamientoUpdateWithoutHistorial_clinicoInput, tratamientoUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type tratamientoUpdateWithoutHistorial_clinicoInput = {
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type tratamientoUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Tipo?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Fecha_fin?: IntFieldUpdateOperationsInput | number
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type vacunaUpsertWithoutHistorial_clinicoInput = {
    update: XOR<vacunaUpdateWithoutHistorial_clinicoInput, vacunaUncheckedUpdateWithoutHistorial_clinicoInput>
    create: XOR<vacunaCreateWithoutHistorial_clinicoInput, vacunaUncheckedCreateWithoutHistorial_clinicoInput>
    where?: vacunaWhereInput
  }

  export type vacunaUpdateToOneWithWhereWithoutHistorial_clinicoInput = {
    where?: vacunaWhereInput
    data: XOR<vacunaUpdateWithoutHistorial_clinicoInput, vacunaUncheckedUpdateWithoutHistorial_clinicoInput>
  }

  export type vacunaUpdateWithoutHistorial_clinicoInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type vacunaUncheckedUpdateWithoutHistorial_clinicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripci_n?: StringFieldUpdateOperationsInput | string
  }

  export type historial_clinicoCreateWithoutMascotaInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutMascotaInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutMascotaInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
  }

  export type usuarioCreateWithoutMascotaInput = {
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
  }

  export type usuarioUncheckedCreateWithoutMascotaInput = {
    id?: number
    Nombre: string
    Email: string
    Telefono: string
    Contrase_a: string
    Rol: string
  }

  export type usuarioCreateOrConnectWithoutMascotaInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutMascotaInput, usuarioUncheckedCreateWithoutMascotaInput>
  }

  export type historial_clinicoUpsertWithoutMascotaInput = {
    update: XOR<historial_clinicoUpdateWithoutMascotaInput, historial_clinicoUncheckedUpdateWithoutMascotaInput>
    create: XOR<historial_clinicoCreateWithoutMascotaInput, historial_clinicoUncheckedCreateWithoutMascotaInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutMascotaInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutMascotaInput, historial_clinicoUncheckedUpdateWithoutMascotaInput>
  }

  export type historial_clinicoUpdateWithoutMascotaInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type usuarioUpsertWithoutMascotaInput = {
    update: XOR<usuarioUpdateWithoutMascotaInput, usuarioUncheckedUpdateWithoutMascotaInput>
    create: XOR<usuarioCreateWithoutMascotaInput, usuarioUncheckedCreateWithoutMascotaInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutMascotaInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutMascotaInput, usuarioUncheckedUpdateWithoutMascotaInput>
  }

  export type usuarioUpdateWithoutMascotaInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
  }

  export type usuarioUncheckedUpdateWithoutMascotaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telefono?: StringFieldUpdateOperationsInput | string
    Contrase_a?: StringFieldUpdateOperationsInput | string
    Rol?: StringFieldUpdateOperationsInput | string
  }

  export type historial_clinicoCreateWithoutOperacionInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutOperacionInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutOperacionInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutOperacionInput, historial_clinicoUncheckedCreateWithoutOperacionInput>
  }

  export type historial_clinicoUpsertWithoutOperacionInput = {
    update: XOR<historial_clinicoUpdateWithoutOperacionInput, historial_clinicoUncheckedUpdateWithoutOperacionInput>
    create: XOR<historial_clinicoCreateWithoutOperacionInput, historial_clinicoUncheckedCreateWithoutOperacionInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutOperacionInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutOperacionInput, historial_clinicoUncheckedUpdateWithoutOperacionInput>
  }

  export type historial_clinicoUpdateWithoutOperacionInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutOperacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoCreateWithoutTratamientoInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutTratamientoInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutTratamientoInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutTratamientoInput, historial_clinicoUncheckedCreateWithoutTratamientoInput>
  }

  export type historial_clinicoUpsertWithoutTratamientoInput = {
    update: XOR<historial_clinicoUpdateWithoutTratamientoInput, historial_clinicoUncheckedUpdateWithoutTratamientoInput>
    create: XOR<historial_clinicoCreateWithoutTratamientoInput, historial_clinicoUncheckedCreateWithoutTratamientoInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutTratamientoInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutTratamientoInput, historial_clinicoUncheckedUpdateWithoutTratamientoInput>
  }

  export type historial_clinicoUpdateWithoutTratamientoInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutTratamientoInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type mascotaCreateWithoutUsuarioInput = {
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    historial_clinico?: historial_clinicoCreateNestedOneWithoutMascotaInput
  }

  export type mascotaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    Nombre: string
    Especie: string
    Raza: string
    Edad: number
    Sexo: string
    historial_clinico?: historial_clinicoUncheckedCreateNestedOneWithoutMascotaInput
  }

  export type mascotaCreateOrConnectWithoutUsuarioInput = {
    where: mascotaWhereUniqueInput
    create: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
  }

  export type mascotaUpsertWithoutUsuarioInput = {
    update: XOR<mascotaUpdateWithoutUsuarioInput, mascotaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<mascotaCreateWithoutUsuarioInput, mascotaUncheckedCreateWithoutUsuarioInput>
    where?: mascotaWhereInput
  }

  export type mascotaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: mascotaWhereInput
    data: XOR<mascotaUpdateWithoutUsuarioInput, mascotaUncheckedUpdateWithoutUsuarioInput>
  }

  export type mascotaUpdateWithoutUsuarioInput = {
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUpdateOneWithoutMascotaNestedInput
  }

  export type mascotaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    Nombre?: StringFieldUpdateOperationsInput | string
    Especie?: StringFieldUpdateOperationsInput | string
    Raza?: StringFieldUpdateOperationsInput | string
    Edad?: IntFieldUpdateOperationsInput | number
    Sexo?: StringFieldUpdateOperationsInput | string
    historial_clinico?: historial_clinicoUncheckedUpdateOneWithoutMascotaNestedInput
  }

  export type historial_clinicoCreateWithoutVacunaInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    veterinario: veterinarioCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutVacunaInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    veterinario_id_fk: number
    mascota_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutVacunaInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutVacunaInput, historial_clinicoUncheckedCreateWithoutVacunaInput>
  }

  export type historial_clinicoUpsertWithoutVacunaInput = {
    update: XOR<historial_clinicoUpdateWithoutVacunaInput, historial_clinicoUncheckedUpdateWithoutVacunaInput>
    create: XOR<historial_clinicoCreateWithoutVacunaInput, historial_clinicoUncheckedCreateWithoutVacunaInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutVacunaInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutVacunaInput, historial_clinicoUncheckedUpdateWithoutVacunaInput>
  }

  export type historial_clinicoUpdateWithoutVacunaInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    veterinario?: veterinarioUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutVacunaInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    veterinario_id_fk?: IntFieldUpdateOperationsInput | number
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoCreateWithoutVeterinarioInput = {
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    enfermedad?: enfermedadCreateNestedOneWithoutHistorial_clinicoInput
    mascota: mascotaCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoUncheckedCreateWithoutVeterinarioInput = {
    id?: number
    Fecha: Date | string
    Descripcion: string
    Tipo: string
    mascota_id_fk: number
    enfermedad?: enfermedadUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    operacion?: operacionUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    tratamiento?: tratamientoUncheckedCreateNestedOneWithoutHistorial_clinicoInput
    vacuna?: vacunaUncheckedCreateNestedOneWithoutHistorial_clinicoInput
  }

  export type historial_clinicoCreateOrConnectWithoutVeterinarioInput = {
    where: historial_clinicoWhereUniqueInput
    create: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
  }

  export type historial_clinicoUpsertWithoutVeterinarioInput = {
    update: XOR<historial_clinicoUpdateWithoutVeterinarioInput, historial_clinicoUncheckedUpdateWithoutVeterinarioInput>
    create: XOR<historial_clinicoCreateWithoutVeterinarioInput, historial_clinicoUncheckedCreateWithoutVeterinarioInput>
    where?: historial_clinicoWhereInput
  }

  export type historial_clinicoUpdateToOneWithWhereWithoutVeterinarioInput = {
    where?: historial_clinicoWhereInput
    data: XOR<historial_clinicoUpdateWithoutVeterinarioInput, historial_clinicoUncheckedUpdateWithoutVeterinarioInput>
  }

  export type historial_clinicoUpdateWithoutVeterinarioInput = {
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    enfermedad?: enfermedadUpdateOneWithoutHistorial_clinicoNestedInput
    mascota?: mascotaUpdateOneRequiredWithoutHistorial_clinicoNestedInput
    operacion?: operacionUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUpdateOneWithoutHistorial_clinicoNestedInput
  }

  export type historial_clinicoUncheckedUpdateWithoutVeterinarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    Fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    Descripcion?: StringFieldUpdateOperationsInput | string
    Tipo?: StringFieldUpdateOperationsInput | string
    mascota_id_fk?: IntFieldUpdateOperationsInput | number
    enfermedad?: enfermedadUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    operacion?: operacionUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    tratamiento?: tratamientoUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
    vacuna?: vacunaUncheckedUpdateOneWithoutHistorial_clinicoNestedInput
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
