SELECT categories.name as name, SUM(products.amount)
FROM categories
LEFT JOIN products ON products.id_categories = categories.id
GROUP BY categories.name