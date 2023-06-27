const data = [
    { Name: "John", Age: 20 },
    { Name: "Mary", Age: 22 },
    { Name: "Syed", Age: 18 },
    { Name: "Emily", Age: 25 }
  ];

const newData = data.filter((withAge) => {
    return withAge.Name === "Mary";
});
console.log(newData);