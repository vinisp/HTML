/* const headers = [
  { text: "primeiro", class: "filter" },
  { text: "segundo", class: "filter" },
  { text: "terceiro", colSpan: 2, class: "twoElements" },
  { text: "quarto", colSpan: 2, class: "twoElements" },
  { text: "quinto", colSpan: 2, class: "twoElements" },
  { text: "sexto", colSpan: 2, class: "twoElements" },
  { text: "sétimo", class: "filter" },
  { text: "oitavo", class: "filter" },
];
const contentTable = [
  {
    primeiro: "Vinicius",
    segundo: "Barueri",
    terceiro: "Segundo A",
    quarto: "Segundo B",
    quinto: "Terceiro A",
    sexto: "Terceiro B",
    sétimo: "Quarto A",
    oitavo: "Quarto B",
    nono: "Quinto A",
    décimo: "Quinto B",
    onze: "Onze",
    doze: "Doze",
  },
  {
    primeiro: "José",
    segundo: "Barueri",
    terceiro: "Segundo A",
    quarto: "Segundo B",
    quinto: "Terceiro A",
    sexto: "Terceiro B",
    sétimo: "Quarto A",
    oitavo: "Quarto B",
    nono: "Quinto A",
    décimo: "Quinto B",
    onze: "Onze",
    doze: "Doze",
  },
  {
    primeiro: "Carlos",
    segundo: "Barueri",
    terceiro: "Segundo A",
    quarto: "Segundo B",
    quinto: "Terceiro A",
    sexto: "Terceiro B",
    sétimo: "Quarto A",
    oitavo: "Quarto B",
    nono: "Quinto A",
    décimo: "Quinto B",
    onze: "Onze",
    doze: "Doze",
  },
];

const divElement = d3.select("#tableTest");

const $table = divElement.append("table");

const $thead = $table.append("thead");

const $tbody = $table.append("tbody");

const dataInserMethod = Object.keys(contentTable[0]);

const $content = $tbody
  .selectAll("tr")
  .data(contentTable.map((e) => e))
  .enter()
  .append("tr");

dataInserMethod.map((e) =>
  $content.append("td").text((d) => {
    return d[e];
  })
);

$thead
  .selectAll("th")
  .data(headers.map((e) => e))
  .enter()
  .append("th")
  .attr("class", (d) => {
    return d.class;
  })
  .attr("colSpan", (d) => {
    return d.colSpan;
  })
  .text((d) => {
    return d.text;
  });

const $childs = d3.selectAll(".twoElements");

$childs.append("td").text("Sub1");
$childs.append("td").text("Sub2");

const filterHeaders = d3
  .selectAll(".filter")
  .append("input")
  .attr("type", "text")
  .style("width", "120px");

const selectAllFilterMaps = [...filterHeaders];

selectAllFilterMaps.map((e) => (e.name = e.parentNode.innerText));

d3.selectAll(".filter input").attr("onkeyup", "SearchRows()");

function SearchRows() {
  console.log();
}
*/

d3.select("th");

const changeColSpan = d3.selectAll("th").attr("innerText", "Programa");

console.log(changeColSpan);
