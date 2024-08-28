import Excel from "exceljs";
import fs from "fs";

interface IResults {
  id: number;
  name: string;
}

async function getData() {
  const workbook = new Excel.Workbook();
  let filename = "./data_countries.xlsx";
  await workbook.xlsx.readFile(filename);
  const worksheet = workbook.getWorksheet("Sheet1");
  const nameColumn = worksheet.getColumn(2);
  const results: IResults[] = [];

  nameColumn.eachCell((cel, id) => {
    if (cel.value && id > 1) {
      results.push({ id: id - 1, name: cel.value.toString() });
    }
  });

  fs.writeFileSync("countries.json", JSON.stringify(results));
}

getData();

interface IButton {
  label: string;
  width: string | number;
}

let b1 = { label: "dafne", width: 100 } satisfies IButton;
let b2 = { label: "dafne2", width: "100px" } satisfies IButton;

b1.width
b2.width