# Testnet Transaction Verification

Test date: 2026-06-05

## Summary

TODA Rail Pay was deployed and tested on Stellar testnet with the local Stellar CLI identity `alice`.

## Deployment

- Contract ID: `CDLI5WYTSCIZKQBFH3AAGDTSFRNLOSBSFEQEQRE473WVTVJFEAW6PG4Y`
- Deploy transaction: https://stellar.expert/explorer/testnet/tx/6fe7a355447a543264436da21990f3a97c2466da5ebfe6fdb57f450cb7dae4c0
- Lab contract page: https://lab.stellar.org/r/testnet/contract/CDLI5WYTSCIZKQBFH3AAGDTSFRNLOSBSFEQEQRE473WVTVJFEAW6PG4Y

## Transaction Flow Tested

Record ID: `tx-toda-001`

1. `open_route_pool` opened the record.
   Transaction: https://stellar.expert/explorer/testnet/tx/b9aec69992273cc62a096f9c2cf80608981018696f718949252fbfe567e5c7e5
2. `collect_driver_due` funded escrow with `500000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/d86b037bdea9b0cad11845daf8e8aafe65f047af89eaf04b18ba165cd93b3e3b
3. `approve_member_case` recorded score `100` and status `approved`.
   Transaction: https://stellar.expert/explorer/testnet/tx/1ad1666ea4531d28e33710c21c5191ecc78d5c1a44aa4b60060b837e25ae663e
4. `release_member_fund` released `250000` XLM SAC units.
   Transaction: https://stellar.expert/explorer/testnet/tx/7576a3849c3768224454ea79d4b2e0e8c99319fdbde4bc68c118e56cac9e197f
5. `total_locked` returned `250000`.
6. `get_record` returned `funded=500000`, `released=250000`, and `status=released`.

## Result

Passed. The contract accepted signed writes, moved testnet XLM SAC through the token interface, emitted events, and returned the expected final state.
