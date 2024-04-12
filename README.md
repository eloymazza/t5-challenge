# T5 > React Challenge <

### Iniciar proyecto
```console
npm i
npm start
```

### Comenzar por buscar una solución a estos problemas.
- Warning del linter.
- Recuperar el funcionamiento del selector de resultados.

### Hacer un poco más de código.
1. Mostrar mensaje de "loading". Utilizar custom hook.
2. Crear página que liste personajes de la API Marvel [Character list](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0) Respetando arquitectura y diseño propuesto por el proyecto base.
3. Mostrar detalle de personaje seleccionado al hacer click en el listado (tomar información del listado obtenido previamente)
4. Implementar manejo de errores de llamadas a la API Marvel utilizando la clase existente BaseResponse. Ver debajo los errores a tratar.

Ejemplo
```typescript
    async get(limit: number): Promise<BaseResponse<Comic[]>> 
```

#### Datos útiles para la implementación

##### API Config
-   Marvel API
    -   Crear cuenta / ingresar https://developer.marvel.com/
    -   Endpoints params:
        -   hash: md5(ts+privateKey+publicKey)
        -   apikey: publicKey
        -   ts: (mismo que se uso en el hash)
    - Posibles errores de llamada a la API
        - MissingParameter: falta parametro "hash"
        - InvalidCredentials: enviar un hash incorrecto
