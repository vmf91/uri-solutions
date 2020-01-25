SELECT movies.id, movies.name
FROM movies
LEFT JOIN genres ON genres.id = movies.id_genres
WHERE genres.description = 'Action'