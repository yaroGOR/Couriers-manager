const pool = require("../database/connectDB");
const { QSelectCourier } = require("../database/queryTexts");

const validateTime = async (value) => {
  const id = value.courier_id;
  let startTime = value.start_time;
  let endTime = value.end_time;
  console.log("Validate if  courier is busy? courier ID =", id);
  let data;
  try {
    await pool
      .query(QSelectCourier, [id])
      .then((result) => {
        data = result.rows;
      })
      .finally();
  } catch (err) {
    console.log(err);
  }
 
  if (data) {
    const isBusy = compareTime(startTime, endTime, data);
    if (isBusy) {
      return Promise.reject();
    }
  }
  return;
};

// compare time intervals to get if selected courier isBusy or not
// return true if busy, return false if free
const compareTime = (start, end, data) => {
  startInput = new Date(start).getTime();
  endInput = new Date(end).getTime();
  let busy = true;
  data.forEach((element) => {
    startTask = new Date(element.start_time).getTime();
    endTask = new Date(element.end_time).getTime();
    if (startInput >= endTask || endInput <= startTask) {
      busy = false;

    }

  });
  return busy;
};

module.exports = validateTime;
