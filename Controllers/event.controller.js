const EventModel = require("../Models/event.model");

async function createEvents(req, res) {
  try {
    let eventDetail = req.body;
    let response = await EventModel.insertMany([eventDetail]);

    res.status(201).json({
      status: "Sucessful",
      event: response,
    });
  } catch (error) {
    res.status(500).json({
      status: "Server Error",
      error: error,
    });
  }
}
module.exports = {
  createEvents,
};
