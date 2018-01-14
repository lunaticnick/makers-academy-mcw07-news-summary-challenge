function testNewsListViewControl() {

  var article1 = new Article("headline1","url1","body1");
  var article2 = new Article("headline2","url2","body2");
  var newslist = new NewsList();
  newslist.addArticle(article1);
  newslist.addArticle(article2);
  var newslistview = new NewsListView(newslist);
  var newslistviewcontrol = new NewsListViewControl(newslist,newslistview);
  var html = newslistviewcontrol.newslistview.listHTML()
  newslistviewcontrol.addHeadlinesToIndex('headlines');
  assert.isTrue(document.getElementById('headlines').innerHTML === html, "NewsListViewController can inject article headlines in index")

};



//-----------------------
// RUN Tests Control Panel
//------------------------

window.onload = function() {
testNewsListViewControl()
};
