# Contract Design

TODA Rail Pay follows the three-part Soroban guide:

1. Struct + impl: `contract/src/lib.rs`
2. Storage: `contract/src/storage.rs`
3. Errors + types: `contract/src/errors.rs` and `contract/src/types.rs`

## Domain API

- `open_route_pool`: open a route pool.
- `collect_driver_due`: transfer XLM SAC into contract escrow.
- `approve_member_case`: admin/verifier records score and status.
- `release_member_fund`: transfer approved funds out of contract escrow.

Storage TTL is extended for both instance and persistent keys.
