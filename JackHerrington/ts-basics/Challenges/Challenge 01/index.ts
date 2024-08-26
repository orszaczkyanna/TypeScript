import houses from "./houses.json";
// import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(
  input: House[] | string,
  filterFunc?: (house: House) => boolean
): HouseWithID[] {
  const houses = typeof input === "string" ? JSON.parse(input) : input;
  return (filterFunc ? houses.filter(filterFunc) : houses).map(
    (house: House) => ({
      id: houses.indexOf(house),
      ...house,
    })
  );
}

console.log(findHouses(houses));

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
