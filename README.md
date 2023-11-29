
# React NodeAuth

A quick starter to implement full authenication with ReactJS as frontend and NodeJS backend.



## Features

- User registation and login
- Admin registration and login
- User verification through email.
- Reset password and change password.


## API Reference

#### Register User

```http
  POST /api/v1/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Login User

```http
  POST /api/v1/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Admin GET all Users
```http
  GET /api/v1/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Get User Profile
```http
  GET /api/v1/users/profile
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### User Update Profile
```http
  PUT /api/v1/users/updateProfile
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Admin Delete User
```http
  DELETE /api/users/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Id of item to fetch |

#### User Change Password
```http
  PUT /api/v1/users/chanagepassword
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |



## Run Locally

Clone the project

```bash
  git clone https://github.com/lokey5746/React-NodeJs-Auth
```

Go to the project directory

```bash
  cd React-NodeJs-Auth
```

Install  dependencies

```bash
  npm install
```

Start the project

```bash
  npm run dev
```


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lokendra-dangi-267bb6152//)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Lokey6475/)

