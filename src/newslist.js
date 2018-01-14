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

  exports.NewsList = NewsList;
})(this);
