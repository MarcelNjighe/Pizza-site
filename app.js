
$('.carousel').carousel({
  interval: 5000
})

function getReceipt() {
  var text1 = "<h3><strong>Your Order:</strong></h3>";
  var text2 = "<h3><strong>Subtotal:</strong></h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1+selectedSize+"<br>";
    }
  }
  if (selectedSize === "Personal Pizza") {
      sizeTotal = 6;
  } else if (selectedSize === "Medium Pizza") {
      sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
      sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
      sizeTotal = 16;
  }
  text2 = text2+sizeTotal+"<br>";
  runningTotal = sizeTotal;
  console.log(selectedSize+" = $"+sizeTotal+".00");
  console.log("size text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getMeat(runningTotal,text1,text2);
};

function getMeat(runningTotal,text1,text2) {
  var meatTotal = 0;
  var selectedMeat = [];
  var meatArray = document.getElementsByClassName("meat");
  for (var j = 0; j < meatArray.length; j++) {
    if (meatArray[j].checked) {
      selectedMeat.push(meatArray[j].value);
      console.log("selected meat item: ("+meatArray[j].value+")");
      text1 = text1+meatArray[j].value+"<br>";
    }
  }
  var meatCount = selectedMeat.length;
    if (meatCount > 1) {
      meatTotal = (meatCount -1);
      meatPrice = (meatTotal/meatTotal);
  }	else {
      meatTotal = 0;
  }
  runningTotal = (runningTotal + meatTotal);
  for (var j = 0; j < selectedMeat.length; j++) {
    if (meatCount <=1) {
      text2 = text2 + 0 + "<br>";
      meatCount = meatCount - 1;
    }
    else {
      text2 = text2 + 1 + "<br>";
      meatCount = meatCount -1;
    }
  }
  console.log("total selected meat items: "+meatCount);
  console.log(meatCount+" meat -1 free meat = "+"$"+meatTotal+".00");
  console.log("meat text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getVeg(runningTotal,text1,text2);
};

function getVeg(runningTotal,text1,text2) {
  var vegTotal = 0;
  var selectedVeg = [];
  var vegArray = document.getElementsByClassName("veg");
  for (var k = 0; k < vegArray.length; k++) {
    if (vegArray[k].checked) {
      selectedVeg.push(vegArray[k].value);
      console.log("selected veg item: ("+vegArray[k].value+")");
      text1 = text1+vegArray[k].value+"<br>";
    }
  }
  var vegCount = selectedVeg.length;
    if (vegCount > 1) {
      vegTotal = (vegCount -1);
  }	else {
      vegTotal = 0;
  }
  runningTotal = (runningTotal + vegTotal);
  for (var k = 0; k < selectedVeg.length; k++) {
    if (vegCount <=1) {
      text2 = text2 + 0 + "<br>";
      vegCount = vegCount - 1;
    }
    else {
      text2 = text2 + 1 + "<br>";
      vegCount = vegCount -1;
    }
  }
  console.log("total selected veg items: "+vegCount);
  console.log(vegCount+" veg -1 free veg = "+"$"+vegTotal+".00");
  console.log("veg text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getChz(runningTotal,text1,text2);
};

function getChz(runningTotal,text1,text2) {
  var chzTotal = 0;
  var selectedchz = [];
  var chzArray = document.getElementsByClassName("chz");
  for (var l = 0; l < chzArray.length; l++) {
    if (chzArray[l].checked) {
      var selectedChz = chzArray[l].value;
      text1 = text1+selectedChz+"<br>";
    }
  }
  if (selectedChz === "Regular Cheese") {
      chzTotal = 0;
  } else if (selectedChz === "No Cheese") {
      chzTotal = 0;
  } else if (selectedChz === "Extra Cheese") {
      chzTotal = 3;
  }
  text2 = text2+chzTotal+"<br>";
  runningTotal = (runningTotal + chzTotal);
  console.log(selectedChz+" = $"+chzTotal+".00");
  console.log("chz text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getSauce(runningTotal,text1,text2);
};

function getSauce(runningTotal,text1,text2) {
  var sauceTotal = 0;
  var selectedSauce = [];
  var sauceArray = document.getElementsByClassName("sauce");
  for (var m = 0; m < sauceArray.length; m++) {
    if (sauceArray[m].checked) {
      var selectedSauce = sauceArray[m].value;
      text1 = text1+selectedSauce+"<br>";
    }
  }
  if (selectedSauce === "Marinara") {
      sauceTotal = 0;
  } else if (selectedSauce === "White Sauce") {
      sauceTotal = 0;
  } else if (selectedSauce === "Barbecue Sauce") {
      sauceTotal = 0;
  } else if (selectedSauce === "No Sauce") {
      sauceTotal = 0;
  }
  text2 = text2+sauceTotal+"<br>";
  runningTotal = (runningTotal + sauceTotal);
  console.log(selectedSauce+" = $"+sauceTotal+".00");
  console.log("sauce text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  getCrust(runningTotal,text1,text2);
};

function getCrust(runningTotal,text1,text2) {
  var crustTotal = 0;
  var selectedcrust = [];
  var crustArray = document.getElementsByClassName("crust");
  for (var n = 0; n < crustArray.length; n++) {
    if (crustArray[n].checked) {
      var selectedCrust = crustArray[n].value;
      text1 = text1+selectedCrust+"<br>";
    }
  }
  if (selectedCrust === "Plain Crust") {
      crustTotal = 0;
  } else if (selectedCrust === "Garlic Butter Crust") {
      crustTotal = 0;
  } else if (selectedCrust === "Cheese Stuffed Crust") {
      crustTotal = 3;
  } else if (selectedCrust === "Spicy Crust") {
      crustTotal = 0;
  } else if (selectedCrust === "House Special Crust") {
      crustTotal = 0;
  }
  runningTotal = (runningTotal + crustTotal);
  text2 = text2+crustTotal+"<br>";
  console.log(selectedCrust+" = $"+crustTotal+".00");
  console.log("crust text1: "+text1);
  console.log("subtotal: $"+runningTotal+".00");
  console.log("Purchase Total: "+"$"+runningTotal+".00");
  document.getElementById("showText1").innerHTML=text1;
  document.getElementById("showText2").innerHTML=text2;
  document.getElementById("totalPrice1").innerHTML = "<h3><strong>Total Price: $"+runningTotal+".00"+"</strong></h3>";
};

function clearAll() {
  var sizeArray = document.getElementsByName("size");
    for (var i = 0; i < sizeArray.length; i++) {
    sizeArray[i].checked = false;
  }
  var meatArray = document.getElementsByName("meat");
    for (var j = 0; j < meatArray.length; j++) {
    meatArray[j].checked = false;
  }
   var vegArray = document.getElementsByName("veg");
    for (var k = 0; k < vegArray.length; k++) {
    vegArray[k].checked = false;
  }
   var chzArray = document.getElementsByName("chz");
    for (var l = 0; l < chzArray.length; l++) {
    chzArray[l].checked = false;
  }
   var sauceArray = document.getElementsByName("sauce");
    for (var m = 0; m < sauceArray.length; m++) {
    sauceArray[m].checked = false;
  }
   var crustArray = document.getElementsByName("crust");
    for (var n = 0; n < crustArray.length; n++) {
    crustArray[n].checked = false;
  }
};

  var navList = document.getElementById("nav-lists");
  function Show() {
  navList.classList.add("_Menus-show");
  }
