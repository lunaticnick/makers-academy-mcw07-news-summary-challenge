function testNewsListCreation(){
  var newslist = new NewsList();
  assert.isTrue(newslist instanceof NewsList, "Articles list can be initiated with an empty array")
};

function testNewsListAddArticle(){
  var newslist = new NewsList();
  var article = new Article("headline","url","body");
  newslist.addArticle(article);
  assert.isTrue(newslist.showAllArticles().length === 1, "Articles list can have an article added")
};






//-----------------------
// RUN Tests Control Panel
//------------------------
testNewsListCreation();
testNewsListAddArticle();
