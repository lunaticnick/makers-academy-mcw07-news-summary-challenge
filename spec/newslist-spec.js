function testNewsListCreation(){
  var newslist = new NewsList();
  assert.isTrue(newslist instanceof NewsList, "NewsList can be initiated with an empty array")
};

function testNewsListAddArticle(){
  var newslist = new NewsList();
  var article = new Article("headline","url","body");
  newslist.addArticle(article);
  assert.isTrue(newslist.showAllArticles().length === 1, "NewsList can have an article added")
};

function testNewsListshowArticleHeadLine(){
  var newslist = new NewsList();
  var article = new Article("headline","url","body");
  newslist.addArticle(article);
  assert.isTrue(newslist.showArticleHeadline(0) === "headline", "NewsList can display the headline of an article")
};






//-----------------------
// RUN Tests Control Panel
//------------------------
testNewsListCreation();
testNewsListAddArticle();
testNewsListshowArticleHeadLine();
