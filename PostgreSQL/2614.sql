SELECT customers.name, rentals.rentals_date
FROM customers
LEFT JOIN rentals ON rentals.id_customers = customers.id
WHERE extract(month FROM rentals.rentals_date) = 9