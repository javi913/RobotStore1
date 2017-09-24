$(document).ready(function() {

    var contacts = [{
            "firstName": "Butler.bot",
            "imgUrl": "https://github.com/codercamps/js-robotstore/blob/master/images/robot2.png?raw=true"
        },
        {
            "firstName": "R.E.T.",
            "imgUrl": "https://github.com/codercamps/js-robotstore/blob/master/images/roboDog.png?raw=true"
        },
        {
            "firstName": "MegaMan",
            "imgUrl": "https://github.com/codercamps/js-robotstore/blob/master/images/robot3.png?raw=true"
        }
    ];

    $("searchbox").autocomplete({
        source: contacts,
        minLength: 0,
        focus: function(event, ui) {
            return false;
        },
        select: function(event, ui) {
            return false;
        },

    }).autocomplete("instance")._renderItem = function(ul, item) {
        var $li = $("<li>");
        $li.addClass("searchItem");

        $outerDiv = $("<div>");
        $imageDiv.addClass("contactImageDiv");
        $imageDiv.appendTo($outerDiv);

        $img = $("<img>");
        $img.addClass("contactImage");
        $img.attr("src", item.imgUrl);
        $img.appendTo($imageDiv);

        $name = $("<div>");
        $name.addClass("nameDiv");
        $name.append(item.firstName + "<br/><span style='font-style:italic'>" + "</span>");
        $name.appendTo($outerDiv);

        $li.appendTo(ul);

        return $li;
    };

})
