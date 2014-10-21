var Feed = {id : 0,type : ''};
var urlFeed = Object.create(Feed);
var textFeed = Object.create(Feed);
Feed.prototype ={
	function createFeed(Feed) {
		var postValue = document.getElementById("postValue");
		var msg = document.getElementById("msg");
		if(msg.value != ''){
			postValue.innerHTML = msg.value;
			var btn = document.createElement("div");
			var t = document.createTextNode(msg.value);
			btn.appendChild(t);
			document.body.appendChild(btn);
		} else {
		postValue.innerHTML = "Value not assign";
		}
	}
	function deleteFeed(feedId) {
		var remove;
		var typeName;
		for(key in Feed) {
			if(Feed[key].id == feedId) {
				typeName = Feed[id].type;
				remove = function() {
						Feed.splice(feedID, 1);
						return typeName+" have been removed from the list";
				};
			}
		}
		alert(remove);
	}
}
