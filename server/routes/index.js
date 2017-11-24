const eventsController = require('../controllers').events;
const centerController = require('../controllers').centerItems;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Events API!',
  }));

  app.post('/api/events', eventsController.create);
  app.get('/api/events', eventsController.list);
  app.get('/api/events/:eventsId', eventController.retrieve);
  app.put('/api/events/:eventsId', eventsController.update);
  app.delete('/api/events/:eventsId', eventsController.destroy);

  );

app.post('/api/centers', centersController.create);
  app.get('/api/centers', centersController.list);
  app.get('/api/centers/:centersId', eventController.retrieve);
  app.put('/api/centers/:eventsId', eventsController.update);
  app.delete('/api/centers/:eventsId', eventsController.destroy);

  );






  app.all('/api/events/:eventsId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
};