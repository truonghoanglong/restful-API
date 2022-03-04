import Products from "../models/productModel"
import { APIfeatures } from "../lib/features";



const productCtr = {
    getProducts: async (req,res)=>{
        try{
            const features = new APIfeatures(Products.find(),req.query).sorting().searching().filtering()
            //const products = await features.query

            const result = await Promise.allSettled([
                features.query,
                Products.countDocuments()
            ])
                const products = result[0].status === 'fulfilled' ? result[0].value : [];
                const count = result[1].status === 'fulfilled' ? result[1].value : 0;
            // console.log(result);
            return res.status(200).json({products,count})
        }catch(err){
            return res.status(500).json({msg: err.message});
        }
        // res.json({msg: ' Get all product'})
    },
    getproduct: async (req,res)=>{
        try{
            const product = await Products.findById(req.params.id)
            if(!product) 
                return res.status(404).json({msg: 'This product does not exist.'})
            return res.status(200).json(product)
        }catch(err){
            return res.status(500).json({msg: err.message});
        }
    },
    addproduct: async (req,res)=>{
        try {
            const { title, price, description, category, image } = req.body;
      
            const newProduct = new Products({
              title, price, description, category, image
            })
            await newProduct.save()
      
            return res.status(200).json(newProduct)
          } catch (err) {
            return res.status(500).json({msg: err.message})
          }
    },
    updateProduct: async (req,res)=>{
        try {
            const { title, price, description, category, image } = req.body;
            
            const product = await Products.findByIdAndUpdate(req.params.id, {
              title, price, description, category, image
            }, { new: true })
      
            if(!product) 
              return res.status(404).json({msg: 'This product does not exist.'})
      
            return res.status(200).json(product)
          } catch (err: any) {
            return res.status(500).json({msg: err.message})
          }
    },
    deleteProduct: async (req,res)=>{
        try {
      
            const product = await Products.findByIdAndDelete(req.params.id)
      
            if(!product) 
              return res.status(404).json({msg: 'This product does not exist.'})
      
            return res.status(200).json({msg: 'Delete Success!'})
          } catch (err) {
            return res.status(500).json({msg: err.message})
          }
    }
}

export default productCtr