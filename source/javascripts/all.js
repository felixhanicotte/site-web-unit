//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function(){

	if ($(this).ready = true ){
		$("#rechercher-photo").show();
		$("#reserver-photo").hide();
		$("#avis-photo").hide();
		$("#rechercher-header").css("color", "yellow");
		$("#rechercher-p").css("opacity", "1");
		$("#reserver-header").css("color", "white");
		$("#reserver-p").css("opacity", "0");
		$("#avis-header").css("color", "white");
		$("#avis-p").css("opacity", "0");
		$("#poster-photo").show();
		$("#accepter-photo").hide();
		$("#payer-photo").hide();
		$("#poster-header").css("color", "yellow");
		$("#poster-p").css("opacity", "1");
		$("#accepter-header").css("color", "white");
		$("#accepter-p").css("opacity", "0");
		$("#payer-header").css("color", "white");
		$("#payer-p").css("opacity", "0");
	}

	$(window).on("scroll", function(){
		if ($(this).scrollTop() > 100 ){
			$(".container-fluid").css("background-color", "rgba(20, 68, 83, 0.9)");
		} else {
			$(".container-fluid").css("background-color", "transparent");
		}
	});

	$("#rechercher-text").on("click", function(){
		if ($("#rechercher-text").click = true ){
			$("#rechercher-text").addClass("active");
			$("#reserver-text").removeClass("active");
			$("#avis-text").removeClass("active");
		} 
	});

	$("#rechercher-text").on("click", function(){
		if ($("#rechercher-text").is(".active")){
			$("#rechercher-photo").show();
			$("#reserver-photo").hide();
			$("#avis-photo").hide();
			$("#rechercher-header").css("color", "yellow");
			$("#rechercher-p").css("opacity", "1");
			$("#reserver-header").css("color", "white");
			$("#reserver-p").css("opacity", "0");
			$("#avis-header").css("color", "white");
			$("#avis-p").css("opacity", "0");
		};
	});

	$("#reserver-text").on("click", function(){
		if ($("#reserver-text").click = true ){
			$("#reserver-text").addClass("active");
			$("#rechercher-text").removeClass("active");
			$("#avis-text").removeClass("active");
		}
	});

	$("#reserver-text").on("click", function(){
		if ($("#reserver-text").is(".active")){
			$("#reserver-photo").show();
			$("#rechercher-photo").hide();
			$("#avis-photo").hide();
			$("#reserver-header").css("color", "yellow");
			$("#reserver-p").css("opacity", "1");
			$("#rechercher-header").css("color", "white");
			$("#rechercher-p").css("opacity", "0");
			$("#avis-header").css("color", "white");
			$("#avis-p").css("opacity", "0");
		};
	});

	$("#avis-text").on("click", function(){
		if ($("#avis-text").click = true ){
			$("#avis-text").addClass("active");
			$("#rechercher-text").removeClass("active");
			$("#reserver-text").removeClass("active");
		}
	});

	$("#avis-text").on("click", function(){
		if ($("#avis-text").is(".active")){
			$("#avis-photo").show();
			$("#rechercher-photo").hide();
			$("#reserver-photo").hide();
			$("#avis-header").css("color", "yellow");
			$("#avis-p").css("opacity", "1");
			$("#rechercher-header").css("color", "white");
			$("#rechercher-p").css("opacity", "0");
			$("#reserver-header").css("color", "white");
			$("#reserver-p").css("opacity", "0");
		};
	});


	$("#poster-text").on("click", function(){
		if ($("#poster-text").click = true ){
			$("#poster-text").addClass("active");
			$("#accepter-text").removeClass("active");
			$("#payer-text").removeClass("active");
		} 
	});

	$("#poster-text").on("click", function(){
		if ($("#poster-text").is(".active")){
			$("#poster-photo").show();
			$("#accepter-photo").hide();
			$("#payer-photo").hide();
			$("#poster-header").css("color", "yellow");
			$("#poster-p").css("opacity", "1");
			$("#accepter-header").css("color", "white");
			$("#accepter-p").css("opacity", "0");
			$("#payer-header").css("color", "white");
			$("#payer-p").css("opacity", "0");
		};
	});

	$("#accepter-text").on("click", function(){
		if ($("#accepter-text").click = true ){
			$("#accepter-text").addClass("active");
			$("#poster-text").removeClass("active");
			$("#payer-text").removeClass("active");
		}
	});

	$("#accepter-text").on("click", function(){
		if ($("#accepter-text").is(".active")){
			$("#accepter-photo").show();
			$("#poster-photo").hide();
			$("#payer-photo").hide();
			$("#accepter-header").css("color", "yellow");
			$("#accepter-p").css("opacity", "1");
			$("#poster-header").css("color", "white");
			$("#poster-p").css("opacity", "0");
			$("#payer-header").css("color", "white");
			$("#payer-p").css("opacity", "0");
		};
	});

	$("#payer-text").on("click", function(){
		if ($("#payer-text").click = true ){
			$("#payer-text").addClass("active");
			$("#poster-text").removeClass("active");
			$("#accepter-text").removeClass("active");
		}
	});

	$("#payer-text").on("click", function(){
		if ($("#payer-text").is(".active")){
			$("#payer-photo").show();
			$("#poster-photo").hide();
			$("#accepter-photo").hide();
			$("#payer-header").css("color", "yellow");
			$("#payer-p").css("opacity", "1");
			$("#poster-header").css("color", "white");
			$("#poster-p").css("opacity", "0");
			$("#accepter-header").css("color", "white");
			$("#accepter-p").css("opacity", "0");
		};
	});

});


















