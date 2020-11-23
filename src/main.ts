function yearToWareki(year: number): string {
  const eras = [
    { year: 2018, name: "令和" },
    { year: 1988, name: "平成" },
    { year: 1925, name: "昭和" },
    { year: 1911, name: "大正" },
    { year: 1867, name: "明治" },
  ];

  for (let index in eras) {
    let era = eras[index];
    let baseYear = era.year;
    let eraName = era.name;

    if (year > baseYear) {
      let eraYear = year - baseYear;
      return eraYear === 1 ? eraName + "元年" : eraName + eraYear + "年";
    }
  }
  return null;
}

function warekiToYear(warekiYear: string): string {
  const matches = warekiYear.match(
    "^(明治|大正|昭和|平成|令和)([元0-9０-９]+)年$",
  );

  if (matches) {
    let eraName = matches[1];
    let year = parseInt(
      matches[2].replace(/[元０-９]/g, function (match) {
        if (match === "元") {
          return 1;
        }
        return String.fromCharCode(match.charCodeAt(0) - 65248);
      }),
    );

    if (eraName === "明治") {
      year += 1867;
    } else if (eraName === "大正") {
      year += 1911;
    } else if (eraName === "昭和") {
      year += 1925;
    } else if (eraName === "平成") {
      year += 1988;
    } else if (eraName === "令和") {
      year += 2018;
    }
    return year + "年";
  }
  return null;
}
