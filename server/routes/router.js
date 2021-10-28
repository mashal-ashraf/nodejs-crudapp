const express=require('express');
const route = express.Router()

const services =require('../services/render');
const controller =require('../controller/controller'); 
/**
 * @description Root Route
 * @method GET /
  */  
route.get('/' , services.homeRoutes);
 /**
 * @description for add_user
 * @method GET /add_user
  */
route.get('/add_user',services.add_user);
 /**
 * @description for update_user
 * @method GET /update_user
  */
route.get('/update_user',services.update_user);

//API's
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports =route;