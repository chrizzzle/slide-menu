"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var t=0;t<i.length;t++){var s=i[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}var Snake=function(){function s(e,i,t){_classCallCheck(this,s),this._size=e,this._map=i,this._mapFields=i.getFields(),this._originalHeadField=t,this._headField=t,this._directions={UP:"UP",DOWN:"DOWN",LEFT:"LEFT",RIGHT:"RIGHT"},this._direction=this._directions.RIGHT,this.calcInitialSnakeFields()}return _createClass(s,[{key:"reset",value:function(){this._interval&&window.clearInterval(this._interval),this.destroySnake(),this._direction=this._directions.RIGHT,this._headField=this._originalHeadField,this.calcInitialSnakeFields()}},{key:"startMove",value:function(){this._interval=window.setInterval(this.step.bind(this),120)}},{key:"handleClick",value:function(e){var i=document.querySelector(".snake--first");if(i){var t=i.getBoundingClientRect();switch(this._direction){case this._directions.UP:case this._directions.DOWN:return void(t.x>e[0]?this.changeDirection({key:"A"}):this.changeDirection({key:"D"}));case this._directions.RIGHT:case this._directions.LEFT:return void(t.y>e[1]?this.changeDirection({key:"W"}):this.changeDirection({key:"S"}))}}}},{key:"getFields",value:function(){return this._snakeFields}},{key:"changeDirection",value:function(e){if(!this._directionChanged)switch(e.key.toUpperCase()){case"W":this._direction!==this._directions.DOWN&&this._direction!==this._directions.UP&&(this._direction=this._directions.UP,this._directionChanged=!0);break;case"S":this._direction!==this._directions.UP&&this._direction!==this._directions.DOWN&&(this._direction=this._directions.DOWN,this._directionChanged=!0);break;case"A":this._direction!==this._directions.RIGHT&&this._direction!==this._directions.LEFT&&(this._direction=this._directions.LEFT,this._directionChanged=!0);break;case"D":this._direction!==this._directions.LEFT&&this._direction!==this._directions.RIGHT&&(this._direction=this._directions.RIGHT,this._directionChanged=!0)}}},{key:"translateField",value:function(e){return e[0]>this._mapFields.length-1&&(e[0]=0),e[1]>this._mapFields.length-1&&(e[1]=0),e[0]<0&&(e[0]=this._mapFields.length-1),e[1]<0&&(e[1]=this._mapFields.length-1),e}},{key:"step",value:function(){this.calcNextHeadField(),this.checkIfCollision(),this.checkIfApple(),this.calcSnakeFields()}},{key:"calcNextHeadField",value:function(){switch(this._direction){case this._directions.RIGHT:this._headField=this.translateField([this._headField[0],this._headField[1]+1]);break;case this._directions.LEFT:this._headField=this.translateField([this._headField[0],this._headField[1]-1]);break;case this._directions.UP:this._headField=this.translateField([this._headField[0]-1,this._headField[1]]);break;case this._directions.DOWN:this._headField=this.translateField([this._headField[0]+1,this._headField[1]])}}},{key:"calcNextTailField",value:function(){var e=this._snakeFields[this._snakeFields.length-1];switch(this._direction){case this._directions.RIGHT:return this.translateField([e[0],e[1]-1]);case this._directions.LEFT:return this.translateField([e[0],e[1]+1]);case this._directions.UP:return this.translateField([e[0]+1,e[1]]);case this._directions.DOWN:return this.translateField([e[0]-1,e[1]])}}},{key:"checkIfCollision",value:function(){var i=this;if(this._snakeFields.find(function(e){return e[0]===i._headField[0]&&e[1]===i._headField[1]})){var e=document.createEvent("HTMLEvents");e.initEvent("snake:dead",!0,!0),document.dispatchEvent(e)}}},{key:"stop",value:function(){window.clearInterval(this._interval)}},{key:"checkIfApple",value:function(){if(this._map.isAppleField(this._headField)){this.addSnakeField();var e=document.createEvent("HTMLEvents");e.initEvent("snake:apple",!0,!0),document.dispatchEvent(e)}}},{key:"addSnakeField",value:function(){var e=this.calcNextTailField();this._snakeFields.push(e)}},{key:"calcSnakeFields",value:function(){this._lastField=this._snakeFields.pop(),this._snakeFields.unshift(this._headField),this.renderSnake()}},{key:"calcInitialSnakeFields",value:function(){this._snakeFields=[this._headField,this.translateField([this._headField[0],this._headField[1]-1]),this.translateField([this._headField[0],this._headField[1]-2])],this.renderSnake()}},{key:"destroySnake",value:function(){for(var e=document.querySelectorAll(".snake"),i=0;i<e.length;i++)e[i].classList.remove("snake"),e[i].classList.remove("snake--first"),e[i].classList.remove("snake--last"),e[i].classList.remove("snake--up"),e[i].classList.remove("snake--down"),e[i].classList.remove("snake--left"),e[i].classList.remove("snake--right")}},{key:"renderSnake",value:function(){var e,i;this._lastField&&((i=document.querySelector(".field-".concat(this._lastField[0],"-").concat(this._lastField[1]))).classList.remove("snake"),i.classList.remove("snake--first"),i.classList.remove("snake--last"),i.classList.remove("snake--up"),i.classList.remove("snake--down"),i.classList.remove("snake--left"),i.classList.remove("snake--right"));for(var t=0;t<this._snakeFields.length;t++)(e=document.querySelector(".field-".concat(this._snakeFields[t][0],"-").concat(this._snakeFields[t][1]))).classList.add("snake"),e.classList.remove("snake--first"),e.classList.remove("snake--last"),e.classList.remove("snake--up"),e.classList.remove("snake--down"),e.classList.remove("snake--left"),e.classList.remove("snake--right"),0===t&&(e.classList.add("snake--first"),e.classList.add("snake--".concat(this._direction.toLowerCase()))),t===this._snakeFields.length-1&&(e.classList.add("snake--last"),e.classList.add("snake--".concat(this._direction.toLowerCase())));this._directionChanged=!1}}]),s}();