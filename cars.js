/* cars.js */
    const carInv = [
                ["Make","Model","Year","Color","Price","Total Price"], //table header
                ["Jaguar","F-Type","2018","White", 59000, ""],
                ["Cadillac","XT5","2018","Burgundy", 39395, ""],
                ["BMW","2 Series","2018","Red", 34800, ""],
                ["Mercedes Benz","AMG GLA 45 SUV","2018","Black", 50000, ""],
                ["Tesla","Model S","2018","Red", 88350,""],
                ["Bentley","Bentley-Continental","2018","Blue", 201225, ""]],
        table = document.getElementById("gallery");             

  // rows
  for(let i = 0; i < table.rows.length; i++){
    //cells
    for(let j = 0; j < table.rows[i].cells.length; j++){
        table.rows[i].cells[j].innerHTML = carInv[i][j];
    }
  }

  //function carsBtns(
    //document.getElementById(["#jaguar, #mercedes, #cadillac, #tesla, #bentley, #bmw"],
  //);
  let carMake = document.getElementById("make");
  let carPrice = document.getElementById("price").value;

  let tax = .0108;

  function calculateTax() {
    document.getElementById("tPrice") = price * tax;
    return price * tax;
  }
  console.log(calculateTax);

  /*  $('#intro').videoUI({
    'autoHide':false,
    'volumeMedia': 1
  });*/
