-- Adrián Navarro Gabino

-- 1. El código y el nombre de los usuarios que hayan comprado algún ejemplar.

SELECT DISTINCT USU.COD, USU.NOMBRE
FROM USUARIOS USU, COMPRAR COM
WHERE USU.COD = COM.COD_USU;

-- 2. Obtén los distintos precios que hay de libros sin que salgan repetidos y
-- ordenados de mayor a menos precio.

SELECT DISTINCT PRECIO
FROM LIBROS
ORDER BY 1 DESC;

-- 3. El título y el precio de todos los libros que hayan escrito los autores
-- que empiecen con id 3 o 4.

SELECT TITULO, PRECIO
FROM LIBROS
WHERE COD_AUTOR LIKE '3%'
   OR COD_AUTOR LIKE '4%';

-- 4. De todos los libros con un precio entre 20€ y 80€, busca los nombres de
-- los autores y los nombres de los títulos de los libros. 

SELECT NOMBRE, TITULO
FROM LIBROS, AUTORES AUT
WHERE PRECIO >= 20
  AND PRECIO <= 80
  AND COD_AUTOR = AUT.COD;

-- 5. El título, precio e ISBN de los libros que se desconozca el autor que
-- los ha escrito o que los haya escrito un autor que empiece por vocal. 

SELECT TITULO, PRECIO, ISBN
FROM LIBROS
WHERE COD_AUTOR IS NULL
UNION
SELECT TITULO, PRECIO, ISBN
FROM LIBROS, AUTORES
WHERE (COD_AUTOR = AUTORES.COD
       AND (UPPER(AUTORES.NOMBRE) LIKE 'A%'
         OR UPPER(AUTORES.NOMBRE) LIKE 'E%'
         OR UPPER(AUTORES.NOMBRE) LIKE 'I%'
         OR UPPER(AUTORES.NOMBRE) LIKE 'O%'
         OR UPPER(AUTORES.NOMBRE) LIKE 'U%'));

-- 6. El nombre y dirección de los usuarios que hayan comprado los
-- libros más caros.

SELECT  NOMBRE, DIRECCION
FROM USUARIOS
WHERE COD IN
(
    SELECT COD_USU
    FROM COMPRAR
    WHERE COD_EJEM IN
    (
        SELECT COD
        FROM EJEMPLAR
        WHERE COD_LIBRO IN
        (
            SELECT COD
            FROM LIBROS
            WHERE PRECIO IN (SELECT MAX(PRECIO)
                             FROM LIBROS)
        )
    )
);

-- 7. De cada autor queremos saber su nombre y el precio más alto de sus libros.

SELECT NOMBRE, PRECIO
FROM AUTORES, LIBROS
WHERE AUTORES.COD = LIBROS.COD_AUTOR
  AND PRECIO IN
(
    SELECT MAX(PRECIO)
    FROM LIBROS
	WHERE COD_AUTOR = AUTORES.COD
);

-- 8. Los códigos y los nombres de los usuarios que hayan comprado más
-- de un ejemplar.

SELECT COD, NOMBRE
FROM USUARIOS
WHERE COD IN
(
    SELECT COD_USU
    FROM COMPRAR
    GROUP BY COD_USU
    HAVING COUNT(*) > 1
);