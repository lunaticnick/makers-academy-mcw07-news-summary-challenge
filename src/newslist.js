(function(exports) {
  function NewsList() {
    this.articleslist = [];
  }

  NewsList.prototype.showAllArticles = function (article){
    return this.articleslist;
  };

  NewsList.prototype.addArticle = function (article){
    this.articleslist.push(article);
  };

  NewsList.prototype.showArticleHeadline = function(index) {
    return this.articleslist[index].displayHeadline();
  }

  NewsList.prototype.fetchArticles = function(callback) {
    var newsRequest = new XMLHttpRequest();
    var self = this;

    newsRequest.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search");
    newsRequest.onload = function() {
      if (newsRequest.status >= 200 && newsRequest.status < 400) {
        var data = JSON.parse(newsRequest.responseText)
        data.response.results.forEach(function(resultarticle) {
          self.addArticle(new Article(resultarticle.webTitle, resultarticle.webUrl));
        });
        if(callback) {
          callback();
        }
      } else {
        //TODO handle error here
      }
    };
    newsRequest.send();
  };


  exports.NewsList = NewsList;
})(this);
