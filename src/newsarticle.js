(function(exports){

  function Article (headline,url,body){
    this.headline = headline;
    this.url = url;
    this.body = body;
  };

Article.prototype.displayHeadline = function (){
  return this.headline;
};

Article.prototype.displayURL = function (){
  return this.url;
};


exports.Article = Article


})(this);
