"use strict";function _classCallCheck(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(i,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(i,s.key,s)}}function _createClass(i,e,t){return e&&_defineProperties(i.prototype,e),t&&_defineProperties(i,t),i}var Snake=function(){function s(i,e,t){_classCallCheck(this,s),this._size=i,this._map=e,this._mapFields=e.getFields(),this._headField=t,this._directions={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT"},this._direction=this._directions.UP,this.calcInitialSnakeFields(),this._interval=window.setInterval(this.step.bind(this),100),document.addEventListener("keydown",this.changeDirection.bind(this))}return _createClass(s,[{key:"changeDirection",value:function(i){if(!this._directionChanged)switch((i.key||i.keyCode).toUpperCase()){case"W":this._direction!==this._directions.DOWN&&this._direction!==this._directions.UP&&(this._direction=this._directions.UP,this._directionChanged=!0);break;case"S":this._direction!==this._directions.UP&&this._direction!==this._directions.DOWN&&(this._direction=this._directions.DOWN,this._directionChanged=!0);break;case"A":this._direction!==this._directions.RIGHT&&this._direction!==this._directions.LEFT&&(this._direction=this._directions.LEFT,this._directionChanged=!0);break;case"D":this._direction!==this._directions.LEFT&&this._direction!==this._directions.RIGHT&&(this._direction=this._directions.RIGHT,this._directionChanged=!0)}}},{key:"translateField",value:function(i){return i[0]>this._mapFields.length-1&&(i[0]=0),i[1]>this._mapFields.length-1&&(i[1]=0),i[0]<0&&(i[0]=this._mapFields.length-1),i[1]<0&&(i[1]=this._mapFields.length-1),i}},{key:"step",value:function(){this.calcNextHeadField(),this.checkIfCollision(),this.checkIfApple(),this.calcSnakeFields()}},{key:"calcNextHeadField",value:function(){switch(this._direction){case this._directions.RIGHT:this._headField=this.translateField([this._headField[0],this._headField[1]+1]);break;case this._directions.LEFT:this._headField=this.translateField([this._headField[0],this._headField[1]-1]);break;case this._directions.UP:this._headField=this.translateField([this._headField[0]-1,this._headField[1]]);break;case this._directions.DOWN:this._headField=this.translateField([this._headField[0]+1,this._headField[1]])}}},{key:"checkIfCollision",value:function(){var e=this;this._snakeFields.find(function(i){return i[0]===e._headField[0]&&i[1]===e._headField[1]})&&window.clearInterval(this._interval)}},{key:"checkIfApple",value:function(){"2"===this._map.getFields()[this._headField[0]][this._headField[1]]&&(this.addSnakeField(),this._map.placeApple())}},{key:"addSnakeField",value:function(){this._snakeFields.unshift(this._headField)}},{key:"calcSnakeFields",value:function(){this._lastField=this._snakeFields.pop(),this._snakeFields.unshift(this._headField),this.renderSnake()}},{key:"calcInitialSnakeFields",value:function(){this._snakeFields=[this._headField,this.translateField([this._headField[0],this._headField[1]-1]),this.translateField([this._headField[0],this._headField[1]-2])],this.renderSnake()}},{key:"renderSnake",value:function(){this._lastField&&document.querySelector(".field-".concat(this._lastField[0],"-").concat(this._lastField[1])).classList.remove("snake");for(var i=0;i<this._snakeFields.length;i++)document.querySelector(".field-".concat(this._snakeFields[i][0],"-").concat(this._snakeFields[i][1])).classList.add("snake");this._directionChanged=!1}}]),s}();