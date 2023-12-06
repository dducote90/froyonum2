function countFlavors(flavorsArr) {
    const flavorCounts = {};
  
    for (let i = 0; i < flavorsArr.length; i++) {
      const flavor = flavorsArr[i];
  
      if (flavorCounts[flavor] === undefined) {
        flavorCounts[flavor] = 1;
      } else {
        flavorCounts[flavor]++;
      }
    }
  
    return flavorCounts;
}
  
  
  const flavors = window.prompt("Enter the flavors you want to order.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
  const flavorsArr = flavors.split(',');
  const result = countFlavors(flavorsArr);
   console.log("Flavor counts:", result);
  
