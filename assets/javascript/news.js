$(document).ready(function () {
    //Bootstrap jQuery function for dropdown functionality:
    $('.dropdown-toggle').dropdown()

    //Define global varables:
    var searchOptions = ["budget", "spending", "project", "scandal", "policy", "crime", "community members"];

    //Dynamically create links for the dropdown menu:
    for (i = 0; i < searchOptions.length; i++) {
        var dropdownLink = $("<a>");
        dropdownLink.addClass("dropdown-item");
        dropdownLink.text(searchOptions[i]);
        console.log(dropdownLink.text());
        //Append the links to the dropdown button:
        $(".dropdown-menu").append(dropdownLink);
    };

    //Create an event that asks for a specific ajax respons:
    $(".dropdown-menu").on("click", "a", function () {
        //Check if the click event works:
        console.log($(this).text());
        //Use the animate.css library:
        $("#list").addClass("animated fadeInRight");
        $(".scrollspy").addClass("animated fadeInRight");


        $("#list").empty();
        $(".scrollspy").empty();

        var searchInstance = "'" + $(this).text() + " alderman chicago'";
        //Check if the search variable concatinates correctly:
        console.log(searchInstance);

        var url = "https://newsapi.org/v2/everything?q=" + searchInstance + "&sortBy=popularity&domains=&apiKey=2b8621eccbc941369a697cfc1220e020";

        $.ajax({
            url: url,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            //Console log the object path you want to display:
            console.log(response.articles[0].title);
            console.log(response.articles[0].author);
            console.log(response.articles[0].content);
            console.log(response.articles[0].url);
            console.log(response.articles[0].urlToImage);
            //Create item list for articles:
            for (i = 0; i < response.articles.length; i++) {

                var listButton = $("<a>");
                listButton.addClass("list-group-item list-group-item-action");
                listButton.attr("href", "#list-item-" + i);
                listButton.text(response.articles[i].title);
                //Check if the list item "i" adds correctly:
                console.log(listButton.attr("href"));
                //Append the button to the item list:
                $("#list").append(listButton);
                //Make a corresponding link:
                var articleDiv = $("<div>");
                articleDiv.addClass("article-div");
                articleDiv.attr("id", "list-item-" + i);
                var articleTitle = $("<h4>");
                var articleLink = $("<a>");
                articleLink.attr("href", response.articles[i].url);
                articleLink.attr("target", "_blank");
                var articleImage = $("<img>");
                var article = $("<p>");
                var articleAuthor = $("<p>");

                console.log(articleDiv.attr("id"));
                //Append the articles to the screen:
                articleTitle.text(response.articles[i].title);
                articleLink.append(articleTitle);
                articleImage.attr("src", response.articles[i].urlToImage);
                articleImage.attr("alt", response.articles[i].author);
                article.text(response.articles[i].content);
                articleAuthor.text("Author: " + response.articles[i].author);
                articleDiv.append(articleLink, articleImage, article, articleAuthor);

                $(".scrollspy").append(articleDiv);
            };
        });
    });
});