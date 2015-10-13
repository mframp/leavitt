jQuery(function() {

	var team = {
		"people": [
			{
				"id": "test1",
				"name": "Matthew O. Leavitt, MD",
				"title": "Chief Medical Officer?",
				"description": "Matt loves to make the money rain.",
				"pic": "#EA6045",
				"img": "Matt"
			},
			{
				"id": "test2",
				"name": "Bruce Crankshaw",
				"title": "CEO?",
				"description": "My second peice.",
				"pic": "#2F3440",
				"img": "Bruce"
			},
			{
				"id": "test3",
				"name": "Mark Evans, PhD",
				"title": "VP of Research and Technology",
				"description": "My third peice.",
				"pic": "#F8CA4D",
				"img": "Mark"
			},
			{
				"id": "test4",
				"name": "Todd Furness",
				"title": "VP of Sales and Marketing",
				"description": "Todd hates the utes. Gay team.",
				"pic": "#3F5666",
				"img": "Todd"
			},
			{
				"id": "test5",
				"name": "Mark Evans, PhD",
				"title": "VP of Research and Technology",
				"description": "My third peice.",
				"pic": "#F8CA4D",
				"img": "Mark"
			},
			{
				"id": "test6",
				"name": "Andy Ivie",
				"title": "VP of Software",
				"description": "My last peice.",
				"pic": "#3F5666",
				"img": "Andy"
			},
			{
				"id": "test7",
				"name": "Mark Evans, PhD",
				"title": "VP of Research and Technology",
				"description": "My third peice.",
				"pic": "#F8CA4D",
				"img": ""
			},
			{
				"id": "test8",
				"name": "Todd Furness",
				"title": "VP of Sales and Marketing",
				"description": "My last peice.",
				"pic": "#3F5666",
				"img": ""
			}
		]
	}

	var boxContainer = $('.team-container');

	if(boxContainer) {
		$.each(team.people, function(key, val) {
			var img = '<div class="art-piece-img-container"> <img class="art-piece-img" src="images/' + val.img + '"> </img> </div>'
			var name = '<div class="art-piece-name">' + val.name + '</div>'
			var title = '<div class="art-piece-title">' + val.title + '</div>'
			var template = '<div class="art-piece" id="' + val.id + '">' + img + name + title + '</div>'
			boxContainer.append(template);
		});
	}
});