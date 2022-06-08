const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = Schema({
  e_name: { type: String, required: true },
  e_info_url: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  e_registration_url: { type: String, required: true },
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
