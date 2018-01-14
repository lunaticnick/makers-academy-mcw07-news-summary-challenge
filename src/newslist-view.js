(function(exports){
  function NewsListView(newslist){
    this.newslist = newslist;
  };

  NewsListView.prototype.listHTML = function (){
    newsstring ="";
    for(var i =0; i< this.newslist.articleslist.length; i++){
      newsstring += "<li>" + this.newslist.showArticleHeadline(i) + "</li>"
    }
    return "<ul>" + newsstring + "</ul>"
  }

  exports.NewsListView = NewsListView;
})(this)
