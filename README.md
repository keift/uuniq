[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined
[SnowflakeOptions]: ./src/types/SnowflakeOptions.type.ts
[SnowflakeResolve]: ./src/types/SnowflakeResolve.type.ts
[SymbolicOptions]: ./src/types/SymbolicOptions.type.ts
[SymbolicResolve]: ./src/types/SymbolicResolve.type.ts

<div align="center">
  <br/>
  <img src="https://i.ibb.co/GvJ1ZRF0/unknown.png" width="350px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/uuniq?label=version&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/l/uuniq?label=license&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/dt/uuniq?label=downloads&color=%2300927F"/>
  <img src="https://img.shields.io/npm/unpacked-size/uuniq?label=size&color=%2300927F"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
  - [Tree](#tree)
  - [Import](#import)
  - [Constructors](#constructors)
  - [Methods](#methods)
  - [Types](#types)
- [Links](#links)
  - [Change Log](CHANGELOG.md)

## About

Short but unique IDs.

## Features

- Short but unique IDs
- The possibility of collision is impossible
- Suitable for distributed systems
- Suitable for sorting and database indexes
- Snowflake IDs developed by Twitter (X) can be generated
- Symbolic IDs can be generated like YouTube's video IDs

## Installation

You can install it as follows.

```shell
// NPM
npm install uuniq

// PNPM
pnpm install uuniq

// Yarn
yarn add uuniq

// Bun
bun add uuniq

// Deno
deno install npm:uuniq
```

## Documentation


### Tree

Briefly as follows.

```
Uuniq
├── new Snowflake(options?)
│   ├── generate()
│   └── resolve(id)
│
├── new Symbolic(options?)
│   ├── generate()
│   └── resolve(id)
│
└── type Types
    ├── SnowflakeOptions
    ├── SnowflakeResolve
    ├── SymbolicOptions
    └── SymbolicResolve
```

### Import

Briefly as follows.

> TypeScript
>
> ```typescript
> import { Snowflake, Symbolic, type Types as UuniqTypes } from "uuniq";
> 
> // These can also be accessed under Uuniq
> import { Uuniq } from "uuniq";
> ```
>
> JavaScript
>
> ```javascript
> import { Snowflake, Symbolic } from "uuniq";
>
> // These can also be accessed under Uuniq
> import { Uuniq } from "uuniq";
> ```

### Constructors

`new Snowflake(options?)`

Snowflake IDs developed by Twitter (X) in 2010. Unique IDs can be generated in distributed systems by specifying Place IDs.

> | Parameter        | Default                      | Description                                                  |
> | ---------------- | ---------------------------- | ------------------------------------------------------------ |
> | options          |                              | [SnowflakeOptions] (optional)<br/>Constructor's options.     |
> | options.epoch    | `"2025-01-01T00:00:00.000Z"` | [String] \| [Number] \| [Date] (optional)<br/>Date of epoch. |
> | options.place_id | `0`                          | [Number] (optional)<br/>Place ID for distributed systems.    |
>
> Example:
>
> ```typescript
> const SnowflakeIDs: Snowflake = new Snowflake({
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0
> });
> ```

<br/>

`new Symbolic(options?)`

Unique IDs like YouTube's video IDs. Unique IDs can be generated in distributed systems by specifying Place IDs.

> | Parameter        | Default                                                            | Description                                                  |
> | ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------ |
> | options          |                                                                    | [SymbolicOptions] (optional)<br/>Constructor's options.      |
> | options.epoch    | `"2025-01-01T00:00:00.000Z"`                                       | [String] \| [Number] \| [Date] (optional)<br/>Date of epoch. |
> | options.place_id | `0`                                                                | [Number] (optional)<br/>Place ID for distributed systems.    |
> | options.charset  | `"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"` | [String] (optional)<br/>Character set of IDs.                |
>
> Example:
>
> ```typescript
> const SymbolicIDs: Symbolic = new Symbolic({
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0,
>   charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
> });
> ```

### Methods

`Snowflake.generate()`

Generate Snowflake IDs developed by Twitter (X) in 2010.

> | Parameter | Default | Description |
> | --------- | ------- | ----------- |
> |           |         |             |
>
> returns [String]
>
> Example:
>
> ```typescript
> const id_0: string = SnowflakeIDs.generate(); // "102604921389056"
> const id_1: string = SnowflakeIDs.generate(); // "102604921389057"
> ```

<br/>

`Snowflake.resolve(id)`

Resolve the previously created ID. For this, the `epoch` and `place_id` values ​​in the Constructor must be correct.

> | Parameter | Default | Description                      |
> | --------- | ------- | -------------------------------- |
> | id        |         | [String]<br/> ID to be resolved. |
>
> returns [SnowflakeResolve]
>
> Example:
>
> ```typescript
> const resolve: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve("102604921389056");
> /*
>   {
>     created_at: "2025-03-14T11:35:07.409Z",
>     place_id: 0,
>     sequence: 0
>   }
> */
> ```

<br/>

`Symbolic.generate()`

Generate unique IDs like YouTube's video IDs.

> | Parameter | Default | Description |
> | --------- | ------- | ----------- |
> |           |         |             |
>
> returns [String]
>
> Example:
>
> ```typescript
> const id_0: string = SymbolicIDs.generate(); // "T8Qu56ki"
> const id_1: string = SymbolicIDs.generate(); // "T8Qu56kj"
> ```

<br/>

`Symbolic.resolve(id)`

Resolve the previously created ID. For this, the `epoch` and `place_id` values ​​in the Constructor must be correct.

> | Parameter | Default | Description                      |
> | --------- | ------- | -------------------------------- |
> | id        |         | [String]<br/> ID to be resolved. |
>
> returns [SymbolicResolve]
>
> Example:
>
> ```typescript
> const resolve: UuniqTypes.SymbolicResolve = SymbolicIDs.resolve("T8Qu56ki");
> /*
>   {
>     created_at: "2025-03-14T11:36:05.528Z",
>     place_id: 0,
>     sequence: 0
>   }
> */
> ```

### Types

> | Type               | Place                                    |
> | ------------------ | ---------------------------------------- |
> | [SnowflakeOptions] | [new Snowflake(options?)](#constructors) |
> | [SnowflakeResolve] | [Snowflake.resolve(id)](#methods)        |
> | [SymbolicOptions]  | [new Symbolic(options?)](#constructors)  |
> | [SymbolicResolve]  | [Symbolic.resolve(id)](#methods)         |
>
> Example:
>
> ```typescript
> import { Snowflake, Symbolic, type Types as UuniqTypes } from "uuniq";
>
> const SnowflakeOptions: UuniqTypes.SnowflakeOptions = {
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0
> };
>
> const SymbolicOptions: UuniqTypes.SymbolicOptions = {
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0,
>   charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
> };
>
> const SnowflakeIDs: Snowflake = new Snowflake(SnowflakeOptions);
> const SymbolicIDs: Symbolic = new Symbolic(SymbolicOptions);
>
> const snowflake_id: string = SnowflakeIDs.generate();
> const symbolic_id: string = SymbolicIDs.generate();
>
> const snowflake_resolve: UuniqTypes.SnowflakeResolve = SnowflakeIDs.resolve(snowflake_id);
> const symbolic_resolve: UuniqTypes.SymbolicResolve = SymbolicIDs.resolve(symbolic_id);
> ```

## Links

- [Change Log](CHANGELOG.md)

## License

[MIT](LICENSE.md)
