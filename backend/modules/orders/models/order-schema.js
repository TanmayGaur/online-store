import mongoose, {SchemaTypes} from 'mongoose';

const OrderSchema = mongoose.Schema({
    name:{type:SchemaTypes.String, required:true},
    email:{type:SchemaTypes.String, required:true, unique:true},
    address:{type:SchemaTypes.String},
    paymentId:{type:SchemaTypes.String, required:true, unique:true},
    status:{type:SchemaTypes.String},
    total:{type:SchemaTypes.Number}
});
export const OrderModel = mongoose.model('orders', OrderSchema);
