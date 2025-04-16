const express = require('express');
const router = express.Router();
const MenuItem = require('./../modelss/MenuItem');

router.post('/', async (req, res) => {
    try {
      const data = req.body;
  
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log('Menu item saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // GET route for MenuItem
  router.get('/', async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log('Menu items fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  router.get('/:taste', async (req, res) => {
    try {
      const taste = req.params.taste;
      if (taste === 'spicy' || taste === 'sweet' || taste === 'sour') {
        const response = await MenuItem.find({ taste: taste });
        console.log('response fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Invalid taste  type' });
      }
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  router.put('/:id', async (req, res)=>{
    try{
      const menuId = req.params.id;
      const updatedmenuData = req.body;
      const response = await MenuItem.findByIdAndUpdate(menuId, updatedmenuData,  {
        new: true,
        runValidators: true,
      })
      if (!response) {
        return res.status(404).json({error: 'person not found'});
      }
      console.log('data updated');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })

  router.delete('/:id', async (req, res)=>{
    try{
      const menuId = req.params.id;
      const response = await MenuItem.findByIdAndDelete(menuId);
      if(!response){
        return res.status(404).json({error: 'menu not found'});
      }
      console.log('data delete');
      res.status(200).json({message: 'person Deleted Successfully'});

    }catch(err){
      console.log(err);
      res.status(500).json({error: "internal server error"});

    }
  })
  module.exports = router;

