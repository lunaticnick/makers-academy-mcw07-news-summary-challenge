(function(exports){

  function Article (headline,url,body){
    this.headline = headline;
    this.url = url;
    this.body = body;
  };

Article.prototype.displayHeadline = function (){
  return this.headline;
};


exports.Article = Article


})(this);
