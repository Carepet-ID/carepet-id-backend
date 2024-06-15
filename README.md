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
DB_HOST="<CLOUD_SQL_PUBLIC_iP>"
DB_NAME="<CLOUD_SQL_DATABASE_NAME>"
DB_PASSWORD="<CLOUD_SQL_PASSWORD>"
DB_USERNAME="<CLOUD_SQL_USERNAME>"
IMG_UPLOAD="<IMG_UPLOAD_CREDENTIALS_KEY>"
JWT_SECRET="<JWT_SECRET>"
JWT_EXPIRATION="<JWT_EXPIRATION>"
MODEL_URL="MODEL_MACHINE_LEARNING_URL"
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
  - Enforce public access prevention
  - Fine-grained access control
- The required outcomes is `BUCKET_NAME`

<h3>Secret Manager</h3>

- Create several secret for environments
- An example can be seen in the image below

<h3>Service Account</h3>

- Create two new service accounts
  - Image Upload Creator
    - Storage Object Creator
  - Carepet Cloud Run Service
    - Secret Manager Secret Accessor role
    - Cloud Run Admin role
- An example can be seen in the image below

<h3>Cloud Run</h3>

- Submit a build using Google Cloud Build
- Create new service with the carepet api container image
  - Environment variables from secrets
  - Ingress control: `All`
  - Authentication: `Allow unauthenticated invocations`
  - Service account: `Carepet Cloud Run Service`
- The required outcomes is `CAREPET_API_SERVICE` (URL Carepet API service)

<br>
<h2>🗃️ Folder Structure:</h2>

```
carepet-api/
├── config/
│   └── config.json
├── controllers/
│   ├── userController.js
│   └── diseaseController.js
├── models/
│   ├── index.js
│   ├── user.js
│   └── disease.js
├── routes/
│   ├── index.js
│   ├── userRoutes.js
│   └── diseaseRoutes.js
├── services/
│   ├── userService.js
│   └── diseaseService.js
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md
```
