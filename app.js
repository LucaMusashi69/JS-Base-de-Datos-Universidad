// Import the required modules
const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create the model
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Example usage: create a new user
const newUser = new User({
    name: 'MIGUEL ANGEL ',
    email: 'Mike@gmail.com',
    age: 20
});

// Save the user to the database
newUser.save()
.then(() => {
    console.log(' GUARDADO BASE DE DATOS UTMA');
})
.catch((error) => {
    console.error('Error saving user:', error);
});
