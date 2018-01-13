function testArticleCreation (){
  var article = new Article("headline","url","body");
  assert.isTrue(article instanceof Article, "Article can be instantiated")
};

function testArticleHeadlineDisplay (){
  var article = new Article("headline","url","body");
  assert.isTrue(article.displayHeadline() === "headline", "Article headline can be displayed")
};

function testArticleURLDisplay (){
  var article = new Article("headline","url","body");
  assert.isTrue(article.displayURL() === "url", "Article URL can be displayed")
};

function testArticleBodyDisplay (){
  var article = new Article("headline","url","body");
  assert.isTrue(article.displayBody() === "body", "Article body can be displayed")
};




//-----------------------
// RUN Tests Control Panel
//------------------------
testArticleCreation ();
testArticleHeadlineDisplay ();
testArticleURLDisplay ();
testArticleBodyDisplay();
