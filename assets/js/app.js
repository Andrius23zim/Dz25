
const table = document.getElementById("nambers");

for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");

  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    const num = (i - 1) * 10 + j;

    const text = document.createTextNode(num);
    cell.appendChild(text);
    row.appendChild(cell);
  }

  table.appendChild(row);
}
