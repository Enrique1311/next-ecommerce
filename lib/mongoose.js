import mongoose from 'mongoose';

export async function initMongoose() {
	if (mongoose.Connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}
	return await mongoose.connect(process.env.MONGODB_URL);
}
