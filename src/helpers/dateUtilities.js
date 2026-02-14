function getDayOfWeek(timeStamp, format = "long") {
  return new Date(timeStamp).toLocaleDateString("en-US", { weekday: format });
}

function getLongDate(timeStamp) {
  return new Date(timeStamp).toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatHoursAmPm(timeStamp) {
  const date = new Date(timeStamp);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    hour12: true,
  }).format(date);
}

export { getDayOfWeek, getLongDate, formatHoursAmPm };
