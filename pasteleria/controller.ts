import repository from "./repository"
import { Pasteleria } from './interfaces';


const list = async() => {
    return await repository.list();
}
 const getOne = async (id: string)=>{
    const model = await repository.getOne(id);
    if (!model) throw new Error("Book not found");
    return model;
 }

 const store = async (data: any)=> {
    if (!data.name) throw Error ("propiety name is missing")
    const pasteleria = await repository.store(data);
    return pasteleria;
 }

 const deleteItem =async (id : string) =>{
    const model = await repository.getOne(id);
    if(!model) throw new Error("Book no found");

    return await repository.delete(id);
 }
 const update = async (id : string, data: Pasteleria)=>{
    const model = await repository.getOne(id);
    if (!model) throw new Error('Book not found');
    
    const modelUpdated = await repository.update(id, data);
    return modelUpdated;
    

 }

export default {
    list,
    getOne,
    store,
    delete: deleteItem,
    update
}