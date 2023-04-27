# Microservicios

## Preparando entorno

#### Construir contenedores en docker

```bash
docker-compose up --build
```

## Hacer peticione

El servidor que está gestionando las peticiones es nginx y se apunta al host

```
http://localhost:8080
```

- Microservicio de perros

```
/api/v1/perros
```

- Microservicio de premios

```
/api/v1/premios
```

- Microservicio de razas

```
/api/v1/razas
```
