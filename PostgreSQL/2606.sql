SELECT products.id, products.name
FROM categories
LEFT JOIN products ON categories.id = products.id_categories
WHERE categories.name LIKE 'super%'