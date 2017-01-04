 window.onload = function generarChartPie(){
  var datos = {
    type: "pie",
    data: {
      datasets: [{
        data: [
        getRandom(),
        getRandom(),
        getRandom(),
        getRandom(),
        getRandom(),
        ],
        backgroundColor: [
        "#65CBFF",
        "#FF5349",
        "#EB8BFF",
        "#77FF8A",
        "#FFDA5A"
        ]
      }],
      labels: [
      "DATOS 1",
      "DATOS 2",
      "DATOS 3",
      "DATOS 4",
      "DATOS 5"
      ]
    },
    options: {
      responsive:true,
    }
  };

  var ctx = document.querySelector('.chart').getContext('2d');
  window.pie = new Chart(ctx, datos);

  setInterval(function(){
    datos.data.datasets.splice(0);
    var newData = {
      data :[getRandom(), getRandom(), getRandom(), getRandom(), getRandom()],
      backgroundColor :["#65CBFF","#FF5349","#EB8BFF","#77FF8A","#FFDA5A"],
    };

    datos.data.datasets.push(newData);

    window.pie.update();

  },5000);

  function getRandom(){
    return Math.round(Math.random()*100);
  }

};

$(document).ready(function generarChartBar(){

  var datos ={
    type :"bar",
    data :{
      labels :["ENERO", "FEBRERO", "MARZO", "MAYO", "ABRIL"],
      datasets :[{
        label : "datos 1",
        backgroundColor :"rgba(220,220,220,0.5)",
        data : [4,3,8,5,6]
      },
      {
        label : "datos 2",
        backgroundColor :"rgba(151,187,205,0.5)",
        data : [10,7,6,7,12]
      }]
    },
    options: {
      elements :{
        rectangle : {
          borderWidth :1,
          borderColor : "rgb(0,255,0)",
          borderSkipped : "bottom"
        }
      },
      responsive : true,
      title :{
        display : true,
        text : "PRUEBA DE GRAFICO DE BARRAS"
      }
    }
  };

  var ctx = document.querySelector('.chart2').getContext('2d');
  window.bar = new Chart(ctx, datos);

  setInterval(function(){
   var newData = [
   [getRandom(), getRandom(),getRandom(),getRandom(),getRandom()],
   [getRandom(), getRandom(),getRandom(),getRandom(),getRandom()],
   ];

   $.each(datos.data.datasets, function(i, dataset){
    dataset.data = newData [i];
  });

   window.bar.update();

 },5000);

  function getRandom(){
    return Math.round(Math.random()*100);
  }
});




