# UK News | Condé Nast Back-End

This project creates a Graphql server with Node.jS and express using using the newsapi.org Node integration.

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:5000/graphiql to view it in the browser and use the graphiql playground.

Since this app uses nodemon for development purposes, the page will reload if you make edits.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

You can use your own key, obtained via newsapi.org, or my personal one, which I will be adding it via email.

## Environment

This app depends on a local frontend service. You can clone, run and follow instruction on the following repo:

<div style="display:flex; align-items:center">
<img style="margin-right:12px" width="22px" src="https://image.flaticon.com/icons/png/512/25/25231.png">
<a href="https://github.com/Hlvr13/conde-nast-frontend" rel="noopener noreferrer">https://github.com/Hlvr13/conde-nast-frontend</a>
</div>

## Graphql Reference

Server implements express-graphql and ONLY contains queries. It is capable for mutations integrations but NOT for subscriptions.

While using the playground, there is already a documentation explorer. Yet, I will be adding it in case developer wants to use Postman/Insomnia or any other integration.

#### Top Headlines Sources

```http
  topHeadlinesSources(filters):[Sources]
```

| filters    | Type     | Required |
| :--------- | :------- | :------- |
| `category` | `string` | **❌**   |
| `language` | `string` | **❌**   |
| `country`  | `string` | **❌**   |

| Sources       | Type     | Required                      |
| :------------ | :------- | :---------------------------- |
| `id`          | `string` | **At least one is required**. |
| `name`        | `string` | **At least one is required**. |
| `description` | `string` | **At least one is required**. |
| `url`         | `string` | **At least one is required**. |
| `category`    | `string` | **At least one is required**. |
| `language`    | `string` | **At least one is required**. |
| `country`     | `string` | **At least one is required**. |

#### Top Headlines

```http
  topHeadlines(filters): [TopHeadlines]
```

| filters    | Type     | Required         |
| :--------- | :------- | :--------------- |
| `country`  | `string` | **At least one** |
| `category` | `string` | **At least one** |
| `q`        | `string` | **At least one** |
| `pageSize` | `string` | **At least one** |
| `page`     | `string` | **At least one** |

| TopHeadlines  | Type                        | Required          |
| :------------ | :-------------------------- | :---------------- |
| `source`      | `{id: string, name:string}` | **At least one**. |
| `author`      | `string`                    | **At least one**. |
| `title`       | `string`                    | **At least one**. |
| `description` | `string`                    | **At least one**. |
| `url`         | `string`                    | **At least one**. |
| `urlToImage`  | `string`                    | **At least one**. |
| `publishedAt` | `string`                    | **At least one**. |
| `content`     | `string`                    | **At least one**. |

#### All articles available

```http
  everything(filters):[Everything]
```

| filters    | Type     | Required         |
| :--------- | :------- | :--------------- |
| `qInTitle` | `string` | **At least one** |
| `q`        | `string` | **At least one** |
| `from`     | `string` | **At least one** |
| `to`       | `string` | **At least one** |
| `language` | `string` | **At least one** |
| `sortBy`   | `string` | **At least one** |
| `pageSize` | `string` | **At least one** |
| `page`     | `string` | **At least one** |

| Everything    | Type                        | Required          |
| :------------ | :-------------------------- | :---------------- |
| `source`      | `{id: string, name:string}` | **At least one**. |
| `author`      | `string`                    | **At least one**. |
| `title`       | `string`                    | **At least one**. |
| `description` | `string`                    | **At least one**. |
| `url`         | `string`                    | **At least one**. |
| `urlToImage`  | `string`                    | **At least one**. |
| `publishedAt` | `string`                    | **At least one**. |
| `content`     | `string`                    | **At least one**. |
