import { CollectionService } from '../services/collection.service';

const collectionService = new CollectionService();

export const getCollections = async (req, res) =>{
  try {
    const response =  await collectionService.getCollections()
    console.log(response)
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error)
  }
}