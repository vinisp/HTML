const searchBoxProgram = document.querySelector("#searchBoxProgram");
const searchBoxCounty = document.querySelector("#searchBoxCounty");
const searchInput = [...document.querySelectorAll(".searchInput")];
const rows = [...document.querySelectorAll(".municipio")];

function searchTool() {
  const searchValues = searchInput.map((e) =>
    e.value.length > 0 ? e.value.toUpperCase().trim() : false
  );

  if (searchValues.filter((e) => e === false).length > 0) {
    const inputSelect = searchInput.filter((e) => e.value.length > 0);

    let position;

    inputSelect[0]?.name === "program" ? (position = 1) : false;
    inputSelect[0]?.name === "county" ? (position = 3) : false;

    if (!position) {
      rows.map((e) => (e.style.display = ""));
    }
    if (position) {
      rows.map((e) =>
        e.childNodes[position].innerText
          .toUpperCase()
          .trim()
          .indexOf(inputSelect[0].value.toUpperCase().trim())
          ? (e.style.display = "none")
          : (e.style.display = "")
      );
    }
  }

  if (searchValues.filter((e) => e === false).length === 0) {
    rows.map((e) =>
      e.childNodes[1].innerText.toUpperCase().trim().indexOf(searchValues[0])
        ? (e.style.display = "none")
        : "x" &&
          e.childNodes[3].innerText
            .toUpperCase()
            .trim()
            .indexOf(searchValues[1])
        ? (e.style.display = "none")
        : "x"
    );
  }
}

searchInput.map((e) => e.addEventListener("keyup", searchTool));
