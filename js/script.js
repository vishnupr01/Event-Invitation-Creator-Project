

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").classList.add("hidden");
});

document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault()
  const formData = new FormData(this)
  const eventName = formData.get("event-name");
  const eventDate = formData.get("event-date");
  const startTime = formData.get("start-time");
  const endTime = formData.get("end-time");
  const eventDescription = formData.get("event-description");
  const eventLocation = formData.get("event-location");
  if (eventName && eventDate && startTime && endTime && eventDescription && eventLocation) {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const dateObject = new Date(eventDate); // 'eventDate' is a string in 'YYYY-MM-DD' format
    if (isNaN(dateObject)) {
      console.error("Invalid date:", eventDate);
      return;
    }
    const formatedStartTime = formatTime(startTime)
    const formatedEndTime = formatTime(endTime)
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(dateObject);
    const eventData = {
      eventName,
      formattedDate,
      formatedStartTime,
      formatedEndTime,
      eventDescription,
      eventLocation
    };

    document.getElementById("main-div").classList.add("hidden")
    document.getElementById("event-invitation").classList.remove("hidden")
    document.getElementById("body_id").classList.remove("bg-gradient-to-r", "from-[#2c3e50]", "to-[#3498db]");
    document.getElementById("body_id").classList.add("bg-white");


    document.getElementById("event-name-display").textContent = eventName;
    document.getElementById("event-date-display").textContent = `${formattedDate}`;
    document.getElementById("event-time-display").textContent = `${formatedStartTime} - ${formatedEndTime}`;
    document.getElementById("event-location-display").textContent = `${eventLocation}`;
    document.getElementById("event-description-display").textContent = eventDescription;
    console.log(eventData);
    this.reset()

  } else {
    document.getElementById("modal").classList.remove("hidden");
    return;
  }
  ;



})


function formatTime(time) {
  const [hours, minutes] = time.split(":");  // Split the time into hours and minutes
  let hour = parseInt(hours, 10);
  let period = "AM";

  if (hour >= 12) {
    period = "PM";
    if (hour > 12) hour -= 12;  // Convert 24-hour time to 12-hour time
  } else if (hour === 0) {
    hour = 12;  // Midnight case (00:00) should be 12:00 AM
  }

  const hours12 = hour.toString().padStart(2, "0");  // Ensure two-digit format
  const formattedMinutes = minutes.padStart(2, "0");  // Ensure two-digit format for minutes

  return `${hours12}:${formattedMinutes} ${period}`;
}