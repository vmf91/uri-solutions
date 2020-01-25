SELECT movies.id, movies.name
FROM movies
LEFT JOIN prices ON prices.ID = movies.id_prices
WHERE prices.value < 2.00