(function(exports){
function NewsListViewControl(newslist = new NewsList(), newslistview = new NewsListView(newslist)){
  this.newslist = newslist;
  this.newslistview = newslistview;
}


NewsListViewControl.prototype.addHeadlinesToIndex = function(id){
  var self = this;
  this.newslist.fetchArticles(function(){
    document.getElementById(id).innerHTML = self.newslistview.listHTML();
  });

};

exports.NewsListViewControl = NewsListViewControl;
})(this);
