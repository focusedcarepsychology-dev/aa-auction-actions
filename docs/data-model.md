# AA Auction Actions data model

## opportunities
- id
- source
- source_url
- title
- category
- listing_type
- current_price
- currency
- closes_at
- live_verified_at
- seller_knowledge_score
- identification_confidence_score
- exit_certainty_score
- risk_score
- hidden_value_clue
- status

## valuations
- opportunity_id
- floor_exit_value
- base_exit_value
- expected_repair
- buyer_premium
- platform_fee
- shipping_to_exit
- vat_duty_handling
- resale_fees
- target_price
- hard_max_price
- expected_net_profit
- expected_roi

## purchases
- opportunity_id
- approved_by_user
- hammer_or_purchase_price
- invoice_total
- won_at
- auction_house
- invoice_email_id
- collection_deadline

## inventory
- purchase_id
- exact_identification
- serial_or_reference
- condition
- location
- direct_ship_possible

## exits
- inventory_id
- channel
- buyer_or_platform
- expected_net
- expected_days_to_cash
- listing_url
- status

## sales
- exit_id
- sale_price
- selling_fees
- shipping_cost
- realised_net_profit
- days_held
- completed_at

The legal/account entity is configuration, not embedded in transaction logic, so Paradoxicapplay can be replaced later without redesigning the application.
