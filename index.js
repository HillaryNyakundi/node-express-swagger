const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();

const swaggerAPIDesc = swaggerJsDoc({
  swaggerDefinition: {
    info: {
      title: 'Swagger test',
      version: '1.0.0'
    },
  },
  apis: ['index.js'], // Make sure 'index.js' points to your API routes file
});

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerAPIDesc));

/**
 * @swagger
 * /getData:
 *   get:
 *     description: This is a get api
 *     responses: 
 *       200:
 *         description: Success
 */

app.get('/getData', (req, res) => {
  res.send({
    name: 'test'
  });
});

/**
 * @swagger
 * /saveData:
 *    post:
 *     description: This is a post call to save data
 *     responses:
 *       201:
 *         description: Success or saved
 *       403:
 *         description: Unauthorized
 *     parameters:
 *       - name: Title
 *         in: formData
 *         required: true
 *         type: string
 *         description: name of person
 */

app.post('/saveData', (req, res)=>{
       res.status(201).send('saved successfully')
});

/**
 * @swagger
 * /updateData:
 *    put:
 *     description: This is a put call to update
 *     responses:
 *       200:
 *         description: success
 */

app.put('/updateData', (req,res)=>{
       res.send('updated successfully');
});
/**
 * @swagger
 * /deleteData:
 *    delete:
 *     description: This is a delete call to delete the data
 *     responses:
 *       200:
 *         description: deleted or success
 */

app.delete('/deleteData', (req, res)=>{
       res.send('Deleted successfully');
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
