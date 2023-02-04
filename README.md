
## Task APP

This is the NodeJS Task manupulation App where the authentication environment has setup.

https://task-app-cavs.onrender.com/


## API Reference

#### Login User

```http
  POST /users/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Your email |
| `password` | `string` | **Required**. Your password |

#### Create User

```http
  POST /users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Your name |
| `email`      | `string` | **Required**. Your email |
| `password`      | `string` | **Required**. Your password |

#### Logout User

```http
  POST /users/logout
```


