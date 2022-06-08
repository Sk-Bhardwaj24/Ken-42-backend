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
async function getEvents(req, res) {
  let response = await EventModel.find({});
  let latestres = response.filter((each) => {
    return (
      each.start_date.getTime() > new Date().setMonth(new Date().getMonth() - 3)
    );
  });
  res.status(200).json({
    status: "Sucessful",
    events: latestres,
  });
}
module.exports = {
  createEvents,
  getEvents,
};
