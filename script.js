document.getElementById("attendanceForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("studentName").value;
  const status = document.getElementById("status").value;
  const date = new Date().toLocaleString();
  
  const table = document.getElementById("attendanceTable");
  const row = table.insertRow();
  
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = status;
  row.insertCell(2).innerText = date;
  
  document.getElementById("attendanceForm").reset();
});
