[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[String]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[Date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Buffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[Void]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Undefined

<div align="center">
  <br/>
  <img src="https://i.ibb.co/GvJ1ZRF0/unknown.png" width="350px"/>
  <br/>
  <br/>
  <img src="https://img.shields.io/npm/v/uuniq?label=version&color=%23633BFF"/>
  <img src="https://img.shields.io/npm/l/uuniq?label=license&color=%23633BFF"/>
  <img src="https://img.shields.io/node/v/uuniq?label=node&color=%2300927F"/>
  <img src="https://img.shields.io/npm/dt/uuniq?label=downloads&color=%2300927F"/>
</div>

## Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
- [Links](#links)
  - [Change Log](CHANGELOG.md)

## About

Unique Snowflake IDs and Symbolic IDs that can be generated for thousands of years.

## Features

- The possibility of collision is impossible
- Suitable for distributed systems
- Suitable for sorting and database indexes
- Snowflake IDs developed by Twitter (X) can be generated
- Shorter IDs can be generated like YouTube's video IDs

## Installation

NPM

```sh-session
npm install uuniq
```

PNPM

```sh-session
pnpm install uuniq
```

Yarn

```sh-session
yarn add uuniq
```

Bun

```sh-session
bun add uuniq
```

Deno

```sh-session
deno install npm:uuniq
```

## Usage

Briefly as follows.

```javascript
import Uuniq from "uuniq";

const Snowflake = new Uuniq.Snowflake();
const Symbolic = new Uuniq.Symbolic();

Snowflake.generate(); // "102604921389056"
Snowflake.generate(); // "102604921389057"

Snowflake.resolve("102604921389056");
/*
  {
    created_at: "2025-03-14T11:35:07.409Z",
    place_id: 0,
    sequence: 0
  }
*/

Symbolic.generate(); // "T8Qu56ki"
Symbolic.generate(); // "T8Qu56kj"

Symbolic.resolve("T8Qu56ki");
/*
  {
    created_at: "2025-03-14T11:36:05.528Z",
    place_id: 0,
    sequence: 0
  }
*/
```

## Documentation

### Constructors

`new Snowflake(options?)`

Generate Snowflake IDs developed by Twitter (X) in 2010. This can generate IDs for approximately 4,463 years according to the specified epoch. Unique IDs can be generated in distributed systems by specifying Place IDs.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | options | | [Object] (optional)<br/>Constructor's options. |
> | options.epoch | `"2025-01-01T00:00:00.000Z"` | [String] \| [Number] \| [Date] (optional)<br/>Date of epoch. |
> | options.place_id | `0` | [Number] (optional)<br/>Place ID for distributed systems. |
>
> returns [Object]
>
>
> Example:
>
> ```javascript
> const Snowflake = new Uuniq.Snowflake({
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0
> });
> ```

<br/>

`new Symbolic(options?)`

Generate unique IDs like YouTube's video IDs. This can generate IDs for approximately 4,463 years according to the specified epoch. Unique IDs can be generated in distributed systems by specifying Place IDs.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | options | | [Object] (optional)<br/>Constructor's options. |
> | options.epoch | `"2025-01-01T00:00:00.000Z"` | [String] \| [Number] \| [Date] (optional)<br/>Date of epoch. |
> | options.place_id | `0` | [Number] (optional)<br/>Place ID for distributed systems. |
> | options.charset | `"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"` | [String] (optional)<br/>Character set of IDs. |
>
> returns [Object]
>
>
> Example:
>
> ```javascript
> const Symbolic = new Uuniq.Symbolic({
>   epoch: "2025-01-01T00:00:00.000Z",
>   place_id: 0,
>   charset: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
> });
> ```

### Methods

`Snowflake.generate()`

Generate Snowflake IDs developed by Twitter (X) in 2010. This can generate IDs for approximately 4,463 years according to the specified epoch.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | | | |
>
> returns [String]
>
>
> Example:
>
> ```javascript
> Snowflake.generate(); // "102604921389056"
> Snowflake.generate(); // "102604921389057"
> ```

<br/>

`Snowflake.resolve(id)`

Resolve the previously created ID. For this, the `epoch` and `place_id` values ​​in the Constructor must be correct.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | id | | [String]<br/> ID to be resolved. |
>
> returns [Object]
>
>
> Example:
>
> ```javascript
> Snowflake.resolve("102604921389056");
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

Generate unique IDs like YouTube's video IDs. This can generate IDs for approximately 4,463 years according to the specified epoch.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | | | |
>
> returns [String]
>
>
> Example:
>
> ```javascript
> Symbolic.generate(); // "T8Qu56ki"
> Symbolic.generate(); // "T8Qu56kj"
> ```

<br/>

`Symbolic.resolve(id)`

Resolve the previously created ID. For this, the `epoch` and `place_id` values ​​in the Constructor must be correct.

> | Parameter | Default | Description |
> | --- | --- | --- |
> | id | | [String]<br/> ID to be resolved. |
>
> returns [Object]
>
>
> Example:
>
> ```javascript
> Symbolic.resolve("T8Qu56ki");
> /*
>   {
>     created_at: "2025-03-14T11:36:05.528Z",
>     place_id: 0,
>     sequence: 0
>   }
> */
> ```

## Links

- [Change Log](CHANGELOG.md)

## License

[MIT](LICENSE.md)