# Buffalo
Online marketplace where you can buy your favorite games keys.

## Stack
The whole project was built using TypeScript.
| Frontend | Backend |
| --- | ----------- |
| React | PostgreSQL |
| Linaria | Apollo Server |
| Apollo Client | GraphQL Nexus |
|| AWS S3 |
|| Prisma |
|| Sharp |
|| Stripe SDK |

## Requirements
- Valid Stripe account
- Valid AWS account
- PostgreSQL database
- NodeJS & Yarn

## Running
```sh
> git clone https://github.com/rramiachraf/buffalo
> cd buffalo
> docker-compose up
```

## Environment Variables
### Frontend
```env
REACT_APP_API_URL
REACT_APP_STRIPE_PUB_KEY
```
### Backend
```env
PORT
SESSION_SECRET
CORS

STRIPE_SECRET
STRIPE_WEBHOOK_SECRET

AWS_ACCESS
AWS_SECRET
POSTERS_BUCKET

PGHOST
PGUSER
PGDATABASE
PGPASSWORD
```