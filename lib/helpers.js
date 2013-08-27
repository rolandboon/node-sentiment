var _ = require('underscore');

var helpers = {
  stopWords: function() {
      return 'de,en,van,ik,te,dat,die,in,een,hij,het,niet,zijn,is,was,op,aan,met,als,voor,had,er,maar,om,hem,dan,zou,of,wat,mijn,men,dit,zo,door,over,ze,zich,bij,ook,tot,je,mij,uit,der,daar,haar,naar,heb,hoe,heeft,hebben,deze,u,want,nog,zal,me,zij,nu,ge,geen,omdat,iets,worden,toch,al,waren,veel,meer,doen,toen,moet,ben,zonder,kan,hun,dus,alles,onder,ja,eens,hier,wie,werd,altijd,doch,wordt,wezen,kunnen,ons,zelf,tegen,na,reeds,wil,kon,niets,uw,iemand,geweest,andere'.split(',');
  },
  getWords: function(input) {
    var filtered = input.toString().replace(/[^0-9a-zA-Z ]/g, '');
  
    var words = _.map(filtered.split(' '), function(word) {
      return word.trim().toLowerCase();
    });

    return _.filter(words, function(word) {
      return word.length > 0;
    });
  }
};

module.exports = helpers;