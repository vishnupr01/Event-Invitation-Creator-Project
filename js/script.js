document.getElementById("event-form").addEventListener("submit", function (e) {
  e.preventDefault()
  const formData = new FormData(this)
  const eventName = formData.get("event-name");
  const eventDate = formData.get("event-date");
  const startTime = formData.get("start-time");
  const endTime = formData.get("end-time");
  const eventDescription = formData.get("event-description");
  const eventLocation = formData.get("event-location");
  if(eventName&&eventDate&&startTime&&endTime&&eventDescription&&eventLocation){
    const eventData = {
      eventName,
      eventDate,
      startTime,
      endTime,
      eventDescription,
      eventLocation
    };
  
    console.log(eventData);
    this.reset()

  }else{
    alert("fill all fields")
  }
 ;



})