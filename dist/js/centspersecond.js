"use strict";var dashboard=document.querySelector(".dashboard"),dashboardAdd=document.querySelector(".dashboard__add"),dashboardEntries=document.querySelector(".dashboard__entries"),form=document.querySelector(".form"),dashboardAddForm=document.querySelector(".dashboard__add-entry"),dashboardAddClose=document.querySelector(".dashboard__add-entry-close"),storageKey="chr1s.d3v:centsPerSecond",readEntries=function(){return window.localStorage?JSON.parse(window.localStorage.getItem(storageKey)||"[]"):(console.error("localStorage not found."),[])},deleteEntry=function(e){if(window.localStorage){var d=e.currentTarget.dataset.expense,r=readEntries().filter(function(e){return e.expense!==d});window.localStorage.setItem(storageKey,JSON.stringify(r)),renderEntries()}else console.error("localStorage not found.")},createEntry=function(e){if(window.localStorage){var d=e.currentTarget,r=new FormData(d),a=parseInt(r.get("amountPerMonth"),10),n=calcAnimationDuration(a),t=100*calcEuroPerSecond(a),o={expense:r.get("expense"),amountPerMonth:a,centsPerSecond:t.toFixed(4),animationDuration:n},s=readEntries();s.push(o),window.localStorage.setItem(storageKey,JSON.stringify(s)),renderEntries()}else console.error("localStorage not found.")},calcEuroPerSecond=function(e){return e/30/24/60/60},calcAnimationDuration=function(e){var d=calcEuroPerSecond(e);return"".concat(Math.round(1/d),"ms")},renderEntries=function(){var e=readEntries();dashboardEntries.innerHTML="",e.forEach(function(e){var d=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),t=document.createElement("button");d.classList.add("dashboard__entry"),r.classList.add("dashboard__entry-inner"),r.style.animationDuration=e.animationDuration,n.classList.add("dashboard__entry-amount"),n.innerHTML="".concat(e.centsPerSecond,"¢ / s"),a.classList.add("dashboard__entry-text"),a.innerHTML=e.expense,t.classList.add("dashboard__entry-del"),t.dataset.expense=e.expense,t.classList.add("material-icons"),t.innerHTML="close",t.addEventListener("click",deleteEntry),d.appendChild(r),d.appendChild(a),d.appendChild(t),d.appendChild(n),dashboardEntries.appendChild(d)})},init=function(){renderEntries()};form.addEventListener("submit",createEntry),dashboardAdd.addEventListener("click",function(){dashboardAddForm.classList.remove("dashboard__add-entry--hidden"),dashboardAdd.classList.add("dashboard__add--hidden")}),dashboardAddClose.addEventListener("click",function(){dashboardAddForm.classList.add("dashboard__add-entry--hidden"),dashboardAdd.classList.remove("dashboard__add--hidden")}),init();