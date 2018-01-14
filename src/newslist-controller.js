(function(exports){
function NewsListViewControl(newslist = new NewsList(), newslistview = new NewsListView(newslist)){
  this.newslist = newslist;
  this.newslistview = newslistview;
}


NewsListViewControl.prototype.addHeadlinesToIndex = function(id){
  document.getElementById(id).innerHTML = this.newslistview.listHTML();
};

exports.NewsListViewControl = NewsListViewControl;
})(this);
