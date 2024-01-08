const { Firestore } = require('@google-cloud/firestore');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

// Replace 'your-project-id' with your actual Google Cloud project ID
const projectId = 'todo-18f70';

// Initialize Firestore with the project ID
const firestore = new Firestore({
  projectId: projectId,
  keyFilename: './firebaseAccountKeys.json', // Specify the path to your service account key file
});

// Now you can use the 'firestore' object to interact with Firestore
// For example, you can reference a collection and perform operations
const collectionRef = firestore.collection('users');


async function foo() {

  const snapshot = await collectionRef.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  return snapshot;
}

// foo();



app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.get('/foo', (req, res) => {
  foo().then(results => {
    console.log('results here =>', typeof results, results)
    // results = json.stringify(results);
    res.send(results);
  })
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});