SELECT movies.id, movies.name
FROM movies
LEFT JOIN movies_actors ON movies_actors.id_movies = movies.id
LEFT JOIN actors ON actors.id = movies_actors.id_actors
WHERE actors.name = 'Marcelo Silva' OR actors.name = 'Miguel Silva'