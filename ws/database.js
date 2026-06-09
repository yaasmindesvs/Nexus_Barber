const mongoose = require('mongoose');
const URI = 'mongodb+srv://NexusBarberUser:uLtADiHtyec69wxg@clusterdev.bupc1lt.mongodb.net/?appName=ClusterDev';


mongoose
 .connect(URI)
 .then(() => console.log('DB is Up!'))
 .catch((err) => console.error(err));