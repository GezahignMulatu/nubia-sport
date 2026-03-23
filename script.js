const workouts = [];

function addWorkout() {
  const activity = document.getElementById("activity").value;
  const duration = document.getElementById("duration").value;

  if (!activity || !duration) {
    alert("Please enter all fields");
    return;
  }

  const workout = {
    activity,
    duration
  };

  workouts.push(workout);
  displayWorkouts();

  document.getElementById("activity").value = "";
  document.getElementById("duration").value = "";
}

function displayWorkouts() {
  const list = document.getElementById("workoutList");
  list.innerHTML = "";

  workouts.forEach((w, index) => {
    const li = document.createElement("li");
    li.textContent = `${w.activity} - ${w.duration} min`;

    li.onclick = () => {
      workouts.splice(index, 1);
      displayWorkouts();
    };

    list.appendChild(li);
  });
}
