import { Snowflake } from "../../src/main";

import type { Types } from "../../src/main";

const SnowflakeIDs: Snowflake = new Snowflake();

const id: string = SnowflakeIDs.generate();
const resolve: Types.SnowflakeResolve = SnowflakeIDs.resolve(id);

console.log(id, JSON.stringify(resolve));

if (new Date(resolve.created_at).getDate() !== new Date().getDate()) throw new Error("❌ [Default]");

console.log("✅ [Default] Checks successful!");