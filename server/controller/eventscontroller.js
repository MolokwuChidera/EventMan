
import data from '../db.json';

//const db = console.log(JSON.parse(JSON.stringify(data)));


/**
 *
 */
export default class EventController {

  static create(req, res) {
    if (!req.body.name) return res.status(400).json({ message: 'center name is required' });
    if (!req.body.date) return res.status(400).json({ message: 'date is required' });
    if (!req.body.address) return res.status(400).json({ message: 'address is required' });
   
    const newId = data.length + 1;
    const newdata = new Event(
      newId,
      req.body.name,
      req.body.date,
      req.body.address
    );
    data.push(newdata);
    res.status(201).json(newdata);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns a list of all centers
   */
  static getAll(req, res) {
    return res.status(200).json(data);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns a single center by id
   */
  // static get(req, res) {
  //   const singleCenter = records.centers.find(center => center.id === Number(req.params.centerId));
  //   return res.status(200).json(singleCenter);
  // }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns the updated center object
   */
  static update(req, res) {
    const oneEvent = data.find(data =>data.id === Number(req.params.dataId));
    if (oneEvent === null || oneEvent === undefined) {
      return res.status(404).json({ message: 'Event does not exist' });
    }
    oneEvent.name = req.body.name;
    oneEvent.date = req.body.date;
    oneEvent.center = req.body.center;

    const position = data.map(data => data.id).indexOf(oneEvent.id);
    data[position] = oneEvent;
    return res.status(200).json(data[position]);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns message object
   */
  static delete(req, res) {
    const oneEvent = data.find(data => data.id === Number(req.params.dataId));
    if (oneEvent === null || oneEvent === undefined) {
      return res.status(404).json({ message: 'Event does not exist' });
    }
    const position = ents.map(data => data.id).indexOf(req.params.dataId);
    data.splice(position, 1);
    res.status(200).json({ message: 'Event was successfully deleted' });
  }
}