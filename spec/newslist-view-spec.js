function testNewsListViewCreateHTML(){
  var newslist = new NewsList();
  var article1 = new Article("headline1","url1","body1");
  var article2 = new Article("headline1","url2","body2");
  newslist.addArticle(article1);
  newslist.addArticle(article2);
  var newslistview = new NewsList(newslist)
  assert.isTrue(newslistview.listHTML() === "<ul><li>headline1</li><li>headline2</li></ul>", "NewsListView can display articles in HTML format")
};






//-----------------------
// RUN Tests Control Panel
//------------------------
testNewsListViewCreateHTML()
