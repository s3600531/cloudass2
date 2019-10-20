var baseURL = "https://stocknewsapi.com/api/v1?tickers=";
var ticker = "GOOG";
var endURL = "&items=10&token=tfo8ulplqmgg3z903hmvqikl0g0wvsgnbwwnktx4";
				
var concat = baseURL.concat(ticker, endURL);
console.log(concat);
					
					
					
$(document).ready(function() {
$.ajax({
	url: "https://stocknewsapi.com/api/v1/category?section=general&items=50&token=tfo8ulplqmgg3z903hmvqikl0g0wvsgnbwwnktx4"
}).then(function(data) {
		
	var concatNews = data.data[0].title;
			
	var n1 = data.data[1].title;
	var n2 = data.data[2].title;
	var n3 = data.data[3].title;
	var n4 = data.data[4].title;
	var n5 = data.data[5].title;
	var n6 = data.data[6].title;
	var n7 = data.data[7].title;
	var n8 = data.data[8].title;
	var n9 = data.data[9].title;
	var n10 = data.data[10].title;
					
	var newsConcat = concatNews.concat(" // ", n1, " // ", n2, " // ", n3, " // ", n4, " // ", n5, " // ", n6, " // ", n7, " // ", n8, " // ", n9, " // ", n10);
			
	console.log(concatNews);
			
	var newsReel = document.getElementById('marqeeText');
			
	newsReel.innerHTML = newsConcat;
});
});
			