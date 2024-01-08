const { Firestore } = require('@google-cloud/firestore');

// Replace 'your-project-id' with your actual Google Cloud project ID
const projectId = 'todo-18f70';

// Initialize Firestore with the project ID
const firestore = new Firestore({
  projectId: projectId,
  keyFilename: '../firebaseAccountKeys.json', // Specify the path to your service account key file
});

// Now you can use the 'firestore' object to interact with Firestore
// For example, you can reference a collection and perform operations
const collectionRef = firestore.collection('users');


async function foo () {

    const snapshot = await collectionRef.get();
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
}

foo();