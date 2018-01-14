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

    exports.NewsList = NewsList;

})(this);
