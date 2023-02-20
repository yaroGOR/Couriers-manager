const changeTime = (element) => {
  const start_time = new Date(element.start_time).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const end_time = new Date(element.end_time).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  element.start_time = start_time;
  element.end_time = end_time;

  return element;
};

module.exports = changeTime;
