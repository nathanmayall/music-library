---
title: API v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="api"> v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

- <a href="/">/</a>

License: <a href="https://opensource.org/licenses/MIT">MIT</a>

<h1 id="api-albums">Albums</h1>

Endpoints for interacting with the albums in the library

## get\_\_albums

`GET /albums`

_Get all albums in the database, returns array._

> Example responses

<h3 id="get__albums-responses">Responses</h3>

| Status | Meaning                                                 | Description                  | Schema |
| ------ | ------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Here's a list of every album | None   |

<h3 id="get__albums-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get\__artist_{artistId}\_album

`GET /artist/{artistId}/album`

_Get all albums by artist_

<h3 id="get__artist_{artistid}_album-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |

> Example responses

<h3 id="get__artist_{artistid}_album-responses">Responses</h3>

| Status | Meaning                                                        | Description              | Schema |
| ------ | -------------------------------------------------------------- | ------------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Here's all artist albums | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found      | None   |

<h3 id="get__artist_{artistid}_album-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post\__artist_{artistId}\_album

`POST /artist/{artistId}/album`

_Add new album to artist_

<h3 id="post__artist_{artistid}_album-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |

> Example responses

<h3 id="post__artist_{artistid}_album-responses">Responses</h3>

| Status | Meaning                                                        | Description                 | Schema |
| ------ | -------------------------------------------------------------- | --------------------------- | ------ |
| 201    | [Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)   | Here's the new album object | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found         | None   |

<h3 id="post__artist_{artistid}_album-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get\__artist_{artistId}_album_{albumId}

`GET /artist/{artistId}/album/{albumId}`

_Get a single album by artist_

<h3 id="get__artist_{artistid}_album_{albumid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |
| albumId  | path | integer | true     | none        |

> Example responses

<h3 id="get__artist_{artistid}_album_{albumid}-responses">Responses</h3>

| Status | Meaning                                                        | Description           | Schema |
| ------ | -------------------------------------------------------------- | --------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Here's a single album | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Album ID not found    | None   |

<h3 id="get__artist_{artistid}_album_{albumid}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## patch\__artist_{artistId}_album_{albumId}

`PATCH /artist/{artistId}/album/{albumId}`

_Edit a single album by artist_

<h3 id="patch__artist_{artistid}_album_{albumid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |
| albumId  | path | integer | true     | none        |

<h3 id="patch__artist_{artistid}_album_{albumid}-responses">Responses</h3>

| Status | Meaning                                                        | Description        | Schema |
| ------ | -------------------------------------------------------------- | ------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Album edited OK    | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Album ID not found | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__artist_{artistId}_album_{albumId}

`DELETE /artist/{artistId}/album/{albumId}`

_Delete a single album by artist_

<h3 id="delete__artist_{artistid}_album_{albumid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |
| albumId  | path | integer | true     | none        |

<h3 id="delete__artist_{artistid}_album_{albumid}-responses">Responses</h3>

| Status | Meaning                                                        | Description        | Schema |
| ------ | -------------------------------------------------------------- | ------------------ | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Album deleted OK   | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Album ID not found | None   |

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="api-artists">Artists</h1>

Endpoints for interacting with the artists in the library

## get\_\_artist

`GET /artist`

_Get all artists in the database_

> Example responses

<h3 id="get__artist-responses">Responses</h3>

| Status | Meaning                                                 | Description                                     | Schema |
| ------ | ------------------------------------------------------- | ----------------------------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1) | Here's a list of every artist, returns as array | None   |

<h3 id="get__artist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## post\_\_artist

`POST /artist`

_Add a new artist_

> Body parameter

```json
false
```

> Example responses

<h3 id="post__artist-responses">Responses</h3>

| Status | Meaning                                                        | Description         | Schema |
| ------ | -------------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Request edited OK.  | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found | None   |

<h3 id="post__artist-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## get\__artist_{artistId}

`GET /artist/{artistId}`

_Get a single artist_

<h3 id="get__artist_{artistid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |

> Example responses

<h3 id="get__artist_{artistid}-responses">Responses</h3>

| Status | Meaning                                                        | Description            | Schema |
| ------ | -------------------------------------------------------------- | ---------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Here's a single artist | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found    | None   |

<h3 id="get__artist_{artistid}-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## patch\__artist_{artistId}

`PATCH /artist/{artistId}`

_edit a single artist_

> Body parameter

```json
false
```

<h3 id="patch__artist_{artistid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |

<h3 id="patch__artist_{artistid}-responses">Responses</h3>

| Status | Meaning                                                        | Description         | Schema |
| ------ | -------------------------------------------------------------- | ------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Request edited OK.  | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found | None   |

<aside class="success">
This operation does not require authentication
</aside>

## delete\__artist_{artistId}

`DELETE /artist/{artistId}`

_delete a single artist_

<h3 id="delete__artist_{artistid}-parameters">Parameters</h3>

| Name     | In   | Type    | Required | Description |
| -------- | ---- | ------- | -------- | ----------- |
| artistId | path | integer | true     | none        |

<h3 id="delete__artist_{artistid}-responses">Responses</h3>

| Status | Meaning                                                        | Description                  | Schema |
| ------ | -------------------------------------------------------------- | ---------------------------- | ------ |
| 200    | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)        | Requested artist deleted OK. | None   |
| 404    | [Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4) | Artist ID not found          | None   |

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AlbumResponseObject">AlbumResponseObject</h2>
<!-- backwards compatibility -->
<a id="schemaalbumresponseobject"></a>
<a id="schema_AlbumResponseObject"></a>
<a id="tocSalbumresponseobject"></a>
<a id="tocsalbumresponseobject"></a>

```json
{
  "id": "1",
  "name": "Yellow Submarine",
  "year": "1969",
  "artistId": "1"
}
```

### Properties

| Name     | Type    | Required | Restrictions | Description |
| -------- | ------- | -------- | ------------ | ----------- |
| id       | integer | false    | none         | none        |
| name     | string  | false    | none         | none        |
| year     | string  | false    | none         | none        |
| artistId | integer | false    | none         | none        |

<h2 id="tocS_AlbumObject">AlbumObject</h2>
<!-- backwards compatibility -->
<a id="schemaalbumobject"></a>
<a id="schema_AlbumObject"></a>
<a id="tocSalbumobject"></a>
<a id="tocsalbumobject"></a>

```json
{
  "name": "Yellow Submarine",
  "year": "1969"
}
```

### Properties

| Name | Type    | Required | Restrictions | Description |
| ---- | ------- | -------- | ------------ | ----------- |
| name | string  | true     | none         | none        |
| year | integer | true     | none         | none        |

<h2 id="tocS_ArtistResponseObject">ArtistResponseObject</h2>
<!-- backwards compatibility -->
<a id="schemaartistresponseobject"></a>
<a id="schema_ArtistResponseObject"></a>
<a id="tocSartistresponseobject"></a>
<a id="tocsartistresponseobject"></a>

```json
{
  "id": "1",
  "name": "The Beatles",
  "genre": "Rock"
}
```

### Properties

| Name  | Type    | Required | Restrictions | Description |
| ----- | ------- | -------- | ------------ | ----------- |
| id    | integer | false    | none         | none        |
| name  | string  | false    | none         | none        |
| genre | string  | false    | none         | none        |

<h2 id="tocS_ArtistObject">ArtistObject</h2>
<!-- backwards compatibility -->
<a id="schemaartistobject"></a>
<a id="schema_ArtistObject"></a>
<a id="tocSartistobject"></a>
<a id="tocsartistobject"></a>

```json
{
  "name": "The Beatles",
  "genre": "Rock"
}
```

### Properties

| Name  | Type   | Required | Restrictions | Description |
| ----- | ------ | -------- | ------------ | ----------- |
| name  | string | true     | none         | none        |
| genre | string | true     | none         | none        |
