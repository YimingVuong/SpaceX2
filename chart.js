	function myFunction() {
	  var x = document.getElementById("myLinks");
	  if (x.style.display === "flex") {
	    x.style.display = "none";
	  } else {
	    x.style.display = "flex";
	  }
	}

	Chart.defaults.global.defaultFontSize = 16;
	Chart.defaults.global.defaultFontFamily = "brandon-grotesque, sans-serif";
	Chart.defaults.global.title.fontSize= 20;
	Chart.defaults.global.title.fontColor="white";

	new Chart(document.getElementById("fuel-chart"), {
	  type: 'doughnut',
	  data: {
	  	labels:["3932KG"],
	    datasets: [{ 

	        data: [75 ],
	        label: "Tesla Stonks",
	        borderColor: "#81B49B",
	        backgroundColor: "#81B49B",
	        borderWidth: 1,
	        
	        fill: false
	      },
	    ]
	  },
	  options: {
	    title: {
	      display: true,
	
	      position:'top',
	      cutoutPercentage: 50,
	    }
	  }
	});

	new Chart(document.getElementById("line-chart"), {
	  type: 'line',
	  data: {
	    labels: [4,5,6,7,8,9,10,11,12,14],
	    datasets: [{ 
	        data: [100,250,274,455,442,544,654,643,403,800],
	        label: "Gforce in G",
	        
	        backgroundColor:"rgba(174, 218, 210, 0.6)",
	        lineTension:0,
	        
	        fill: true,
	      },
	    ]
	  },
	  options: {
	    title: {
	      display: true,

	     
	    }
	  }
	});

	new Chart(document.getElementById("accel-chart"), {
	  type: 'line',
	  data: {
	    labels: [4,5,6,7,8,9,10],
	    datasets: [{ 
	        data: [100,200,250,240,300,200,205],
	        label: "Acceleration",
	        borderColor:"#6BCEED",
	        borderWidth:"5",
	        backgroundColor:"#6BCEED",
	        fill: false,
	      },
	    ]
	  },
	  options: {
	    title: {
	      display: true,

	     
	    }
	  }
	});

	new Chart(document.getElementById("food-chart"), {
	  type: 'bar',
	  data: {
	    labels: ['Water', 'Food'],
	    datasets: [{ 
	        data: [100,200,54],
	        label: "Food", 
	        borderColor:"#6BCEED",
	        borderWidth:"5",
	        backgroundColor:"#6BCEED",
	        fill: false,
	      },
	    ]
	  },
	  options: {
	    title: {
	      display: true,

	     
	    }
	  }
	});


