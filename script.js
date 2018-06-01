var MESSAGE = ''

$(document).ready(function () {

    var btn = document.body.querySelector('div.T-I.J-J5-Ji.T-I-KE.L3')
    console.log(btn)
    btn.addEventListener("click", function () {
        console.log("hai cliccato \"scrivi un messaggio\"")

        /*observeDOM(document.querySelector('input[name=body]'),function(){
            console.log(document.body.innerHTML.match(/(\S+)@(\w+).(\w+)/)[0])
            var bodySize = document.querySelector('input[name=body]').value.replace(/<[^>]*>?/g, '').replace(/&\w+;/g, '').length
            console.log(bodySize)
        });*/

        setInterval(function () {
            var msg = document.querySelector('input[name=body]').value.replace(/<[^>]*>?/g, '').replace(/&\w+;/g, '')
            if(msg!=MESSAGE) {
                MESSAGE = msg
                console.log(document.body.innerHTML.match(/(\S+)@(\w+).(\w+)/)[0])
                var bodySize = msg.length
                console.log(bodySize)
            }
        },100)

    })
})

var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if( MutationObserver ){
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            obs.observe( obj, { childList:true, subtree:true });
        }
        else if( eventListenerSupported ){
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
        }
    };
})();
/*
(function(XHR) {
    "use strict";

    var open = XHR.prototype.open;
    var send = XHR.prototype.send;

    XHR.prototype.open = function(method, url, async, user, pass) {
        this._url = url;
        open.call(this, method, url, async, user, pass);
    };

    XHR.prototype.send = function(data) {
        var self = this;
        var oldOnReadyStateChange;
        var url = this._url;

        function onReadyStateChange() {
            if(self.readyState == 4
            }

            if(oldOnReadyStateChange) {
                oldOnReadyStateChange();
            }
        }

        if(!this.noIntercept) {
            if(this.addEventListener) {
                this.addEventListener("readystatechange", onReadyStateChange, false);
            } else {
                oldOnReadyStateChange = this.onreadystatechange;
                this.onreadystatechange = onReadyStateChange;
            }
        }

        send.call(this, data);
    }
})(XMLHttpRequest); */