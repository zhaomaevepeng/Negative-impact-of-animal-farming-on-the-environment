$.noConflict();
jQuery(document).ready(function() {
	// Select all links with hashes
	jQuery('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery("[name=" + this.hash.slice(1) + "]");
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					jQuery("html, body").animate(
						{
							scrollTop: target.offset().top
						},
						500,
						function() {
							// Callback after animation
							// Must change focus!
							var $target = jQuery(target);
							$target.focus();
							if ($target.is(":focus")) {
								// Checking if the target was focused
								return false;
							} else {
								$target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
								$target.focus(); // Set focus again
							}
						}
					);
				}
			}
		});

	var need = new Waypoint({
		element: document.getElementById("need"),
		handler: function(direction) {
			jQuery("nav ul li:nth-child(1)").toggleClass("active");
			jQuery("nav ul li:nth-child(2)").toggleClass("active");
		}
	});

	var need = new Waypoint({
		element: document.getElementById("eat"),
		handler: function(direction) {
			jQuery("nav ul li:nth-child(2)").toggleClass("active");
			jQuery("nav ul li:nth-child(3)").toggleClass("active");
		}
	});
	
	var need = new Waypoint({
		element: document.getElementById("help"),
		handler: function(direction) {
			jQuery("nav ul li:nth-child(3)").toggleClass("active");
			jQuery("nav ul li:nth-child(4)").toggleClass("active");
		}
	});

	var need = new Waypoint({
		element: document.getElementById("references"),
		handler: function(direction) {
			jQuery("nav ul li:nth-child(4)").toggleClass("active");
			jQuery("nav ul li:nth-child(5)").toggleClass("active");
		}
	});

	var waypoint1 = new Waypoint({
		element: document.getElementById("chart1"),
		handler: function(direction) {
			console.log("meme");
			// Chart 1
			var chart1 = new Chart.Doughnut("chart1", {
				options: {
					maintainAspectRatio: false,
					legend: {
						position: "bottom"
					},
					title: {
						display: true,
						text: "List of Foods By Energy Required to Produce One Pound",
						fontSize: 18
					}
				},
				data: {
					labels: [
						"Corn",
						"Milk",
						"Apples",
						"Eggs",
						"Chicken",
						"Cheese",
						"Pork",
						"Beef"
					],
					datasets: [
						{
							label: "Production Energy (kWh) Per Lb",
							borderColor: "rgba(211, 164, 36,1)",
							borderWidth: 0,
							backgroundColor: [
								"hsla(280, 70%, 50%, 0.5)",
								"hsla(220, 70%, 50%, 0.5)",
								"hsla(160, 70%, 50%, 0.5)",
								"hsla(100, 70%, 50%, 0.5)",
								"hsla(80, 70%, 50%, 0.5)",
								"hsla(60, 70%, 50%, 0.5)",
								"hsla(40, 70%, 50%, 0.5)",
								"hsla(20, 70%, 50%, 0.5)",
								"hsla(0, 70%, 50%, 0.5)"
							],
							hoverBackgroundColor: "hsla(235, 12%, 27%, 0.5)",
							data: ["0.43", "0.75", "1.67", "4", "4.4", "6.75", "12.6", "31.5"]
						}
					]
				}
			});

			this.destroy();
		},
		offset: "50%"
	});

	var waypoint2 = new Waypoint({
		element: document.getElementById("chart2"),
		handler: function(direction) {
			// Chart 2
			var chart2 = new Chart.Bar("chart2", {
				options: {
					maintainAspectRatio: false,
					legend: {
						position: "bottom"
					},
					title: {
						display: true,
						text: " Energy Efficiency of Various Foods",
						fontSize: 18
					},
					scales: {
						yAxes: [
							{
								id: "A",
								ticks: {
									min: 0,
									max: 100,
									callback: function(value) {
										return value + "%";
									}
								},
								scaleLabel: {
									display: true,
									labelString: "Percentage"
								}
							},
							{
								id: "B",
								type: "linear",
								position: "left",
								scaleLabel: {
									display: true,
									labelString: "Pound"
								}
							}
						]
					}
				},
				data: {
					labels: [
						"Corn",
						"Milk",
						"Cheese",
						"Eggs",
						"Apples",
						"Chicken",
						"Pork",
						"Beef"
					],
					datasets: [
						{
							label: "Calories / Lb",
							yAxisID: "B",
							borderWidth: 0,
							backgroundColor: "hsla(235, 12%, 27%, 0.5)",
							data: ["390", "291", "1824", "650", "216", "573", "480", "1176"]
						},
						{
							label: "Energy Efficiency",
							yAxisID: "A",
							backgroundColor: "hsla(160, 70%, 50%, 0.5)",
							borderColor: "hsla(160, 70%, 50%, 0.5)",
							borderWidth: 0,
							hoverBackgroundColor: "hsla(235, 12%, 27%, 0.5)",
							data: ["102", "45", "31", "19", "15", "15", "8.5", "4.3"],
							type: "line"
						}
					]
				}
			});

			this.destroy();
		},
		offset: "50%"
	});

	var waypoint3 = new Waypoint({
		element: document.getElementById("chart3"),
		handler: function(direction) {
			// Chart 3
			var chart3 = new Chart.Bar("chart3", {
				options: {
					maintainAspectRatio: false,
					legend: {
						position: "bottom"
					},
					title: {
						display: true,
						text: "Fullness Factors for Common Foods",
						fontSize: 18
					},
					scales: {
						yAxes: [
							{
								stacked: true,
								gridLines: {
									display: true,
									color: "hsla(235, 12%, 27%, 0.5)"
								}
							}
						],
						xAxes: [
							{
								gridLines: {
									display: false
								}
							}
						]
					}
				},
				data: {
					labels: [
						"Bean sprouts",
						"Watermelon",
						"Grapefruit",
						"Carrots",
						"Oranges",
						"Fish broiled",
						"Chicken breast (Roasted)",
						"Apples",
						"Sirloin steak (Broiled)",
						"Oatmeal",
						"Popcorn",
						"Baked potato",
						"Lowfat yogurt",
						"Banana",
						"Macaroni and cheese",
						"Brown rice",
						"Spaghetti",
						"White rice",
						"Pizza",
						"Peanuts",
						"Ice cream",
						"White bread",
						"Raisins",
						"Snickers Bar",
						"Honey",
						"Sugar (Sucrose)",
						"Glucose",
						"Potato chips",
						"Butter"
					],
					datasets: [
						{
							label: "Energy (kWh) to Produce 1 Lb",
							backgroundColor: [
								"#E53F00",
								"#DC4106",
								"#D4440D",
								"#CC4714",
								"#C4491B",
								"#BC4C22",
								"#B34F28",
								"#AB512F",
								"#A35436",
								"#9B573D",
								"#935944",
								"#8B5C4B",
								"#825F51",
								"#7A6158",
								"#72645F",
								"#6A6766",
								"#62696D",
								"#596C73",
								"#516F7A",
								"#497181",
								"#417488",
								"#39778F",
								"#317996",
								"#287C9C",
								"#207FA3",
								"#1881AA",
								"#1084B1",
								"#0887B8",
								"#008ABF"
							],
							borderColor: "rgba(211, 164, 36,1)",
							borderWidth: 0,
							hoverBackgroundColor: "hsla(235, 12%, 27%, 0.5)",
							hoverBorderColor: "rgba(211, 164, 36,1)",
							data: [
								"4.6",
								"4.5",
								"4.0",
								"3.8",
								"3.5",
								"3.4",
								"3.3",
								"3.3",
								"3.2",
								"3.0",
								"2.9",
								"2.5",
								"2.5",
								"2.5",
								"2.5",
								"2.3",
								"2.2",
								"2.1",
								"2.1",
								"2.0",
								"1.8",
								"1.8",
								"1.6",
								"1.5",
								"1.4",
								"1.3",
								"1.3",
								"1.2",
								"0.5"
							]
						}
					]
				}
			});

			this.destroy();
		},
		offset: "50%"
	});

	var waypoint4 = new Waypoint({
		element: document.getElementById("chart4"),
		handler: function(direction) {
			// Chart 4
			var chart4 = new Chart.Doughnut("chart4", {
				options: {
					maintainAspectRatio: false,
					cutoutPercentage: 0,
					legend: {
						position: "bottom"
					},
					title: {
						display: true,
						text: "Global Emissions by Economic Sector",
						fontSize: 18
					}
				},
				data: {
					labels: [
						"Electricity & Heat Production",
						"Agriculture, Forestry, and Other Land Use",
						"Transportation",
						"Industrial",
						"Other Energy",
						"Buildings"
					],
					datasets: [
						{
							label: "",
							backgroundColor: [
								"hsla(220, 70%, 50%, 0.5)",
								"hsla(160, 70%, 50%, 0.5)",
								"hsla(100, 70%, 50%, 0.5)",
								"hsla(80, 70%, 50%, 0.5)",
								"hsla(60, 70%, 50%, 0.5)",
								"hsla(40, 70%, 50%, 0.5)"
							],
							borderWidth: 0,
							hoverBackgroundColor: "rgba(211, 164, 36,0.4)",
							hoverBorderColor: "rgba(211, 164, 36,1)",
							data: ["25", "24", "21", "14", "10", "6"]
						}
					]
				}
			});

			this.destroy();
		},
		offset: "50%"
	});
});