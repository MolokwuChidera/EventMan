
import centers from '../db.json';

//const db = console.log(JSON.parse(JSON.stringify(centers)));
/**
 *
 */
export default class CenterController {
  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns created center
   */
  static create(req, res) {

    if (!req.body.name) return res.status(400).json({ message: 'center name is required' });
    if (!req.body.date) return res.status(400).json({ message: 'date is required' });
    if (!req.body.address) return res.status(400).json({ message: 'address is required' });
   

    const newId = centers.length + 1;
    const newCenter = new Center(
      newId,
      req.body.name,
      req.body.address,
      req.body.capacity,
    );
    store.centers.push(newCenter);
    res.status(201).json(newCenter);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns a list of all centers
   */
  static getAll(req, res) {
    return res.status(200).json(store.centers);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns a single center by id
   */
  static get(req, res) {
    const singleCenter = store.centers.find(centers => centers.id === Number(req.params.centerId));
    return res.status(200).json(singleCenter);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns the updated center object
   */
  static update(req, res) {
    const singleCenter = store.centers.find(centers => centers.id === Number(req.params.centerId));
    if (singleCenter === null || singleCenter === undefined) {
      return res.status(404).json({ message: 'Center doesnot exist' });
    }
    singleCenter.name = req.body.name;
    singleCenter.address = req.body.address;
   

    const pos = store.centers.map(event => event.id).indexOf(singleCenter.id);
    store.centers[pos] = singleCenter;
    return res.status(200).json(store.centers[pos]);
  }

  /**
   *
   * @param {*} req
   * @param {*} res
   * @returns {json} returns message object
   */
  static delete(req, res) {
    const singleCenter = store.centers.find(center => center.id === Number(req.params.centerId));
    if (singleCenter === null || singleCenter === undefined) {
      return res.status(404).json({ message: 'Center doesnot exist' });
    }
    const centerPos = store.centers.map(center => center.id).indexOf(req.params.centerId);
    store.centers.splice(centerPos, 1);
    res.status(200).json({ message: 'Center was successfully deleted' });
  }
}