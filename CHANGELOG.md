# Change Log

## v1.2.27 → v1.3.0

- Added:
  - **Increment IDs.** Sequences synchronized with the database are incremented each time an ID is generated.

- Removed:
  - **Another way to use Symbolic IDs.** Instead use `new Snowflake({ format: 'symbolic' })` or `new Increment({ format: 'symbolic' })`.

## v1.1.5 → v1.2.0

- Features:
  - **TypeScript Support.** Modern and compatible library with TypeScript support.
