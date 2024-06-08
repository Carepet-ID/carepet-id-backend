<<<<<<< HEAD
=======
<h1 align="center" id="title">Carepet ID</h1>

<h2>🛠️ Installation Steps:</h2>
<p>1. Clone this repository</p>

```
git clone https://github.com/Carepet-ID/carepet-id-backend.git
```

<p>2. Change directory</p>

```
cd carepet-id-backend
```

<p>3. Install project depedencies</p>

```
npm install
```
<p>4. Run Database Migration</p>

```
npx sequelize-cli db:migrate
```

<p>5. Run All Seed Files</p>

```
npx sequelize-cli db:seed:all
```
<p>6. Change projectId in module/imgUpload.js</p>

```
projectId: "your-project-id"
```
TO

```
projectId:"carepet-project"
```

<p>7. Change bucketName in module/imgUpload.js</p>

```
bucketName = "your-bucket-name"
```
TO
```
bucketName = "carepet-storage"
```
<p>8. Create .env and fill in the text below</p>

```
MODEL_URL=https://storage.googleapis.com/carepet-storage/model-in-prod/model.json
JWT_SECRET=(free)
JWT_EXPIRATION=(free)
PORT=(free)
```
<p>9. Run the application use Ubuntu(WSL)</p>

```
npm run start:dev
```

<h2>Architecture:</h2>
<img width="422" src="https://github.com/Carepet-ID/carepet-id-backend/assets/160591485/da6e3bb5-0f32-4258-80b5-a92f1cbb3607">



<br>
<br>
<hr>
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
>>>>>>> 0017e00e629ce1a1830374b2999a6905506ceffe
