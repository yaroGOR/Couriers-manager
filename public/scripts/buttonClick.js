

async function Delete(url, id) {
  const res = await fetch(url + "/" + id, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  });
  return
}


function handleDeleteClick(taskID) { 
  console.log(`task with id ${taskID} deleted`)
  Delete("/tasks", taskID);
  alert(`Deleted with id ${taskID}`);

}


