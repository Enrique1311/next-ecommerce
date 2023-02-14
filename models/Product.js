import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema(definition, {
	name: String,
	description: String,
	price: Number,
	category: String,
	image: String,
});

const Product = models?.Product || model('Product', ProductSchema);

export default Product;
