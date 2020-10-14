
module.exports = (function () {

  var RdfStatement = function (requirement, propertyURI, rangeURI, cardinality) {
    this.sRequirement = requirement;
    this.sPropertyURI = propertyURI;
    this.sRangeURI = rangeURI;
    this.sCardinality = cardinality;
  }

  RdfStatement.prototype.getRequirement = function () {
    return this.sRequirement;
  }

  RdfStatement.prototype.getPropertyURI = function () {
    return this.sPropertyURI;
  }
  
  RdfStatement.prototype.getRangeURI = function () {
    return this.sRangeURI;
  }  

  RdfStatement.prototype.getCardinality = function () {
    return this.sCardinality;
  }

  RdfStatement.prototype.getCardinalityStr = function () {
    if (!this.sCardinality) return "";
    return "[" + this.sCardinality.min + ".." + this.sCardinality.max + "]";
  }

  RdfStatement.prototype.getFullStatement = function () {
    var statement = "";
    if (this.sRequirement) statement += "<<"  + this.sRequirement + ">>";
    statement += " "   + this.sPropertyURI;
    statement += " : " + this.sRangeURI;
    if (this.sCardinality) statement += "[" + this.sCardinality.min + ".." + this.sCardinality.max + "]";

    return statement;
  }

  return RdfStatement;

})()
