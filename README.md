<div align="center">
  
![Carepet Logo](https://github.com/Carepet-ID/carepet-id-backend/assets/90903908/b7b993cf-3c98-4bef-b478-cb6a12313e74)

</div>
<h1 align="center" id="title">Carepet ID</h1>

<h2>🛠️ Installation Steps:</h2>
<h2>Development</h2>

- Clone this repository
  
```
git clone https://github.com/Carepet-ID/carepet-id-backend.git
```

- Change directory

```
cd carepet-id-backend
```

- Create `.env` file with the following contents

```
NODE_ENV="development"
BUCKET_NAME="<BUCKET_NAME>"
JWT_SECRET="<JWT_SECRET>"
JWT_EXPIRATION="<JWT_EXPIRATION>"
MODEL_URL="<MODEL_MACHINE_LEARNING_URL>"
```

- Install project depedencies

```
npm install
```

- Run database migration

```
npx sequelize-cli db:migrate
```

- Run all seed files

```
npx sequelize-cli db:seed:all
```

- Run the application use Ubuntu(WSL)

```
npm run start:dev
```

<h2>Deployment</h2>
<p>The unspecified aspects can be adjusted individually or using default values. Additionally, it also allows for enhancing various aspects such as Cloud SQL configuration.</p>
<h3>Cloud SQL</h3>

- Create a MySQL instance
  - Connections with Public IP, specify CIDR ranges e.g. 0.0.0.0/0
  - Create a new database
  - Create a new user account
- The required outcomes is `DATABASE_PUBLIC_IP` with content

<h3>Cloud Storage</h3>

- Create a bucket
  - Standard default class
  - Uncheck Enforce public access prevention
  - Uniform access control
- The required outcomes is `BUCKET_NAME`

<h3>Secret Manager</h3>

- Create several secret for environments
- An example can be seen in the image below
![Secret Manager](https://github.com/Carepet-ID/carepet-id-backend/assets/90903908/dd11abbd-e24b-424e-962b-d401acab441d)

<h3>Service Account</h3>

- Create new service accounts
  - Carepet Cloud Run Service
    - Secret Manager Secret Accessor role
    - Storage object admin
- An example can be seen in the image below
![Service Account](https://github.com/Carepet-ID/carepet-id-backend/assets/90903908/1bc8aed3-977f-41f0-bb18-00c718f05e83)

<h3>Cloud Run</h3>

- Submit a build using Google Cloud Build
- Create new service with the carepet api container image
  - Environment variables from secrets
  - Ingress control: `All`
  - Authentication: `Allow unauthenticated invocations`
  - Service account: `Carepet Cloud Run Service`
- The required outcomes is `CAREPET_API` (URL Carepet API service)

