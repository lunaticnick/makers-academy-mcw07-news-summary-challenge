function testNewsListViewControl() {

  var article1 = new Article("headline1","url1","body1");
  var article2 = new Article("headline2","url2","body2");
  var newslist = new NewsList();
  newslist.addArticle(article1);
  newslist.addArticle(article2);
  var newslistview = new NewsListView(newslist);
  var newslistviewcontrol = new NewsListViewControl(newslist,newslistview);
  var html = newslistviewcontrol.newslistview.listHTML()
  console.log(html)


  function DoubleListControl() {};

      DoubleListControl.prototype.addHeadlinesToIndex = function (id){
        return document.getElementById(id).innerHTML = "<ul><li>headline1</li><li>headline2</li></ul>";
      }
  var controller = new DoubleListControl()
  controller.addHeadlinesToIndex('headlines');
  assert.isTrue(document.getElementById('headlines').innerHTML === html, "NewsListViewController can inject article headlines in index")

};



//-----------------------
// RUN Tests Control Panel
//------------------------

window.onload = function() {
testNewsListViewControl()
};
