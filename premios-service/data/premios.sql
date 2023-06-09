CREATE TABLE IF NOT EXISTS campeonatos
(
    id               INTEGER PRIMARY KEY,
    id_campeon       INTEGER,
    anio_campeonato  INTEGER,
    lugar            TEXT,
    categoria_ganada TEXT,
    pais_competencia TEXT,
    premio           INTEGER,
    puntaje          TEXT
);

INSERT INTO campeonatos
VALUES (1, 48, 2017, 'Primero', 'Competencia de carrera', 'Estados Unidos', 10000, '*****'),
       (2, 27, 2013, 'Segundo', 'Competencia de salto de altura', 'Francia', 2500, '****'),
       (3, 12, 2012, 'Tercero', 'Competencia de agilidad', 'Reino Unido', 1500, '***'),
       (4, 19, 2014, 'Primero', 'Competencia de belleza canina', 'España', 5000, '****'),
       (5, 5, 2010, 'Tercero', 'Competencia de obediencia', 'Australia', 2000, '**'),
       (6, 33, 2015, 'Segundo', 'Competencia de carrera', 'Italia', 5000, '*****'),
       (7, 16, 2012, 'Primero', 'Competencia de salto de altura', 'Reino Unido', 7500, '*****'),
       (8, 11, 2011, 'Segundo', 'Competencia de agilidad', 'Francia', 2500, '**'),
       (9, 63, 2021, 'Tercero', 'Competencia de belleza canina', 'Estados Unidos', 1000, '*'),
       (10, 44, 2016, 'Tercero', 'Competencia de carrera', 'España', 1500, '***'),
       (11, 1, 2009, 'Segundo', 'Competencia de obediencia', 'Australia', 2500, '***'),
       (12, 42, 2016, 'Primero', 'Competencia de agilidad', 'Italia', 10000, '****'),
       (13, 34, 2015, 'Tercero', 'Competencia de belleza canina', 'España', 2000, '***'),
       (14, 25, 2013, 'Segundo', 'Competencia de carrera', 'Francia', 5000, '****'),
       (15, 22, 2013, 'Tercero', 'Competencia de salto de altura', 'Reino Unido', 10000, '****'),
       (16,35, 2010, 'Primero', 'Competencia de agilidad', 'Australia', 5000, '*****'),
       (17, 60, 2020, 'Segundo', 'Competencia de belleza canina', 'Estados Unidos', 1500, '*****'),
       (18, 57, 2020, 'Tercero', 'Competencia de carrera', 'España', 2500, '*'),
       (19, 55, 2019, 'Primero', 'Competencia de obediencia', 'Italia', 7500, '*****'),
       (20, 46, 2016, 'Tercero', 'Competencia de agilidad', 'Francia', 2000, '*****'),
       (21, 23, 2013, 'Primero', 'Competencia de belleza canina', 'Reino Unido', 5000, '*****'),
       (22, 28, 2011, 'Segundo', 'Competencia de carrera', 'Australia', 7500, '*****'),
       (23, 39, 2015, 'Tercero', 'Competencia de carrera', 'Reino Unido', 2500, '*****'),
       (24, 8, 2011, 'Segundo', 'Competencia de salto de altura', 'Japón', 10000, '*'),
       (25, 31, 2014, 'Tercero', 'Competencia de belleza canina', 'Australia', 2000, '*****'),
       (26, 12, 2012, 'Primero', 'Competencia de obediencia', 'México', 5000, '**'),
       (27, 66, 2020, 'Segundo', 'Competencia de salto de altura', 'Alemania', 1000, '***'),
       (28, 22, 2013, 'Tercero', 'Competencia de carrera', 'Brasil', 5000, '*****'),
       (29, 47, 2016, 'Primero', 'Competencia de belleza canina', 'Sudáfrica', 1500, '*'),
       (30, 15, 2012, 'Segundo', 'Competencia de agilidad', 'Rusia', 7500, '*****'),
       (31, 8, 2011, 'Tercero', 'Competencia de carrera', 'España', 2500, '*****'),
       (32, 29, 2013, 'Segundo', 'Competencia de salto de altura', 'Francia', 1500, '**'),
       (33, 44, 2016, 'Primero', 'Competencia de belleza canina', 'Italia', 5000, '*'),
       (34, 51, 2018, 'Primero', 'Competencia de carrera', 'México', 7500, '*****'),
       (35, 12, 2010, 'Segundo', 'Competencia de obediencia', 'Alemania', 1000, '****'),
       (36, 28, 2013, 'Tercero', 'Competencia de agilidad', 'Australia', 2500, '**'),
       (37, 20, 2012, 'Tercero', 'Competencia de salto de altura', 'Japón', 1500, '****'),
       (38, 12, 2012, 'Primero', 'Competencia de agilidad', 'Reino Unido', 7500, '*****'),
       (39, 65, 2021, 'Segundo', 'Competencia de belleza canina', 'Estados Unidos', 5000, '*****'),
       (40, 47, 2016, 'Tercero', 'Competencia de carrera', 'Brasil', 1000, '*****'),
       (41, 2, 2009, 'Primero', 'Competencia de obediencia', 'España', 2500, '*****'),
       (42, 35, 2015, 'Segundo', 'Competencia de agilidad', 'Francia', 1500, '****'),
       (43, 18, 2012, 'Segundo', 'Competencia de salto de altura', 'Australia', 2500, '*****'),
       (44, 35, 2011, 'Tercero', 'Competencia de agilidad', 'Japón', 1000, '*'),
       (45, 62, 2021, 'Primero', 'Competencia de belleza canina', 'México', 7500, '*****'),
       (46, 45, 2016, 'Segundo', 'Competencia de carrera', 'Alemania', 5000, '***'),
       (47, 35, 2009, 'Tercero', 'Competencia de obediencia', 'Italia', 10000, '*****'),
       (48, 35, 2016, 'Primero', 'Competencia de agilidad', 'Reino Unido', 7500, '*'),
       (49, 36, 2015, 'Tercero', 'Competencia de belleza canina', 'Estados Unidos', 1000, '****'),
       (50, 26, 2013, 'Primero', 'Competencia de carrera', 'Brasil', 5000, '*****');
