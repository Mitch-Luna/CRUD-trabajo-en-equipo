import { Pasteleria } from './models';
import { Pasteleria as Npasteleria} from './interfaces';
import { ulid } from 'ulid';


const list = async () => {
    return await Pasteleria.find();
}

const getOne = async (id: string) => {
    return await Pasteleria.findOne({ id });
}
const store = async (data: Npasteleria) => {
    const id = ulid();

    const pasteleria = new Pasteleria({ name: data.name, description: data.description, encargo: data.encargo, precio: data.precio, fechadeentrega: data.fechadeentrega, id });

    await pasteleria.save();

    return pasteleria;
}
const deleteItem = async (id : String) => {
    return await Pasteleria.deleteOne({  id });

}

 const update = async (id: string, data:Npasteleria)=>{
    const model = await Pasteleria. findOneAndUpdate({id}, data, {new: true});
    return model;
 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}