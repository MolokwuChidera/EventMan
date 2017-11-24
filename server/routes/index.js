import eventscontroller from '../controller/eventscontroller';
import centerscontroller from '../controller/centerscontroller';

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Events API!',
  }));

  app.post('/api/events', eventscontroller.create);
  //app.get('/api/events/:eventsId', eventscontroller.retrieve);
  app.get('/api/events/', eventscontroller.getAll)
  app.put('/api/events/:eventsId', eventscontroller.update);
  app.delete('/api/events/:eventsId', eventscontroller.delete);



  app.post('/api/centers', centerscontroller.create);
 // app.get('/api/centers/:centersId', eventscontroller.retrieve);
 app.get('/api/events/', eventscontroller.getAll)
  app.put('/api/centers/:eventsId', eventscontroller.update);
  app.delete('/api/centers/:eventsId', eventscontroller.delete);
};