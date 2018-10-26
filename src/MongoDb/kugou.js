//1.爬取歌手网页

//2.分析网页，并获取该歌手所有歌曲的id

//3.根据id来拼接url,获取歌曲的下载地址

//4.执行下载

var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
// var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'kugou'
// });
// connection.connect(); //进行连接
// request("http://www.kugou.com/singer/3060.html", (err, res, body) => {
// 	//console.log(body)
// 	var $ = cheerio.load(body);
// 	var arr = $(".song_hid");
// 	$(".song_hid").each(function(i, e) {
// 		console.log($(e).attr("value").split("|")[1]);
// 		var link = $(e).attr("value").split("|")[1];
// 		var name = $(e).attr("value").split("|")[0];
// 		request(`http://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=${link}`, function(err, res, body) {
// 			if(body) {
// 				var url = JSON.parse(body).data.play_url;
// 				console.log(url);
				
// 				connection.query('INSERT INTO song SET ?', {
// 					name: name,
// 					url: url
// 				}, function(error, results, fields) {
// 					if(error) throw error;
// 					console.log(results);
// 				});

// 				// connection.end();
// 			}
// 			// request(url).pipe(fs.createWriteStream(name + '.mp3'));

// 		})
// 	})
// })


function getHtml(){
	return new Promise(function(resolve,reject){
		request("http://www.kugou.com/singer/1579.html", (err, res, body) => {
			resolve(body);
			console.log(body);
		})
	})
}

function getMusic(body){
	return new Promise(function(resolve,reject){
		var $ = cheerio.load(body);
		var arr = $(".song_hid");
		var urlarr = [];
		var namearr = [];
		$(".song_hid").each(function(i, e) {
			var item = $(e).attr("value").split("|");
			var url = item[1];
			var name = item[0];
			urlarr.push(url);
			namearr.push(name);
			console.log(urlarr);
		})
		var obj = {
			urlarr:urlarr,
			namearr:namearr
		};
		resolve(obj);
	})

}

function Download(obj){
	return new Promise(function(resolve,reject){
		obj.urlarr.forEach(function(e,i){
				request(`http://wwwapi.kugou.com/yy/index.php?r=play/getdata&hash=${e}`, function(err, res, body) {
					if(err){
                    throw err;
                }
					if(body) {
						var url = JSON.parse(body).data.play_url;
						console.log(url);
						request(url).pipe(fs.createWriteStream(obj.namearr[i] + '.mp3'));
						// connection.query('INSERT INTO song SET ?', {
						// 	name: obj.namearr[i],
						// 	url: url
						// }, function(error, results, fields) {
						// 	if(error) throw error;
							
						// });

						// connection.end();
				}
			})		
		})
			
	})
}
getHtml().then(getMusic).then(Download);
