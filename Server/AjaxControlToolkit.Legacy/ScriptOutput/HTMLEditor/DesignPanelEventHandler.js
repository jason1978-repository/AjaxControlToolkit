Type.registerNamespace("Sys.Extended.UI.HTMLEditor");Sys.Extended.UI.HTMLEditor.DesignPanelEventHandler=function(b){var Z="'></span>",R="<span id='",ib="StyleForTyping",Q="EMBED",P="BR",D="\n",O="text",N="span",k="",M="LI",x="P",H="undefined",w="BODY",C="control",hb="function",B="keypress",e=null,j="keydown",Y="mousedown",c=false,m=true,f=this;try{var a=f;if(a._editPanel!=Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel)return m;if(Sys.Extended.UI.HTMLEditor.isIE)try{var Db=f._doc.selection,Ib=f._createRange(Db)}catch(Mb){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}(b.type==Y||b.type=="dblclick")&&f._focus(m);if(!Sys.Extended.UI.HTMLEditor.isIE&&b.type==j&&b.keyCode==Sys.UI.Key.tab&&f._editPanel.get_suppressTabInDesignMode()){Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel=e;return m}if(f.isPopup()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}var gb=c;if(a._contextElement&&a._contextElement!=e){Function.createDelegate(f,Sys.Extended.UI.HTMLEditor.RemoveContextMenu)();if(b.type==j||b.type==B){Sys.Extended.UI.HTMLEditor._stopEvent(b);return}gb=m}if(typeof a.captureInDesign==hb)if(a.captureInDesign(b)===c){Sys.Extended.UI.HTMLEditor._stopEvent(b);return}if(Sys.Extended.UI.HTMLEditor.isIE&&b.type==Y&&b.ctrlKey){var l=a._getSelection(),zb=b.clientX,Ab=b.clientY;setTimeout(function(){var c=a._getSelection();if(c.type.toLowerCase()!=C){var d=a._doc.body.createTextRange();d.moveToPoint(zb,Ab);d.select()}c=a._getSelection();var d=a._createRange(c),b=Sys.Extended.UI.HTMLEditor.getSelParent(a);while(b!=e&&b.tagName.toUpperCase()!=w){if(b.tagName.toUpperCase()=="A"&&b.href!=e&&typeof b.href!=H&&b.href.length>0){window.open(b.href,"LinkViewWindow");break}b=b.parentNode}},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}var h=!Sys.Extended.UI.HTMLEditor.isIE?b.target:b.srcElement;if(h.tagName!=e&&typeof h.tagName!=H&&(h.tagName.toUpperCase()=="HTML"||h.tagName.toUpperCase()==w)){if(a.__kkoka!=m){a.__kkoka=m;setTimeout(function(){if(a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel)if(!a.toEndOfProtected())try{a.focusEditor()}catch(b){}a.__kkoka=c},0)}}else Sys.Extended.UI.HTMLEditor.contentEditable(h)!=e&&setTimeout(function(){a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel&&a.toEndOfProtected()},0);if(gb&&Sys.Extended.UI.HTMLEditor.isIE){var ub=f._getSelection(),Ib;try{Ib=f._createRange(ub);if(ub.type.toLowerCase()==C){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}catch(Lb){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}var F=Sys.Extended.UI.HTMLEditor.isIE&&b.type==j||b.type==B,Kb=b.type+"--"+F;if(F&&!f._editPanel.get_keyboardEnabled()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}var p=String.fromCharCode(Sys.Extended.UI.HTMLEditor.isIE?b.keyCode:b.charCode).toLowerCase();if(F&&a._editPanel.get_hotkeys()!=e)if(a._editPanel.get_hotkeys().length>0){var Cb=a._editPanel.get_hotkeys().length,ob=p;if(b.keyCode==18||b.keyCode==17||b.keyCode==16)ob=e;for(var eb=0;eb<Cb;eb++){var G=a._editPanel.get_hotkeys()[eb];if(G[1]==ob&&G[2]==b.altKey&&G[3]==b.shiftKey&&G[4]==b.ctrlKey){typeof G[0]==hb&&setTimeout(function(){G[0](a);a.onContentChanged();a.focusEditor()},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}}if(F&&b.shiftKey&&b.keyCode==45)f._commonPaste(b);else if(F&&b.ctrlKey&&b.altKey&&b.keyCode==Sys.UI.Key.home){var V=e,h=Sys.Extended.UI.HTMLEditor.getSelParent(a);while(h&&(h.nodeType==3||h.tagName&&h.tagName.toUpperCase()!=w)){if(h.nodeType==3||!h.tagName){h=h.parentNode;continue}var t=h.tagName.toUpperCase();if(!Sys.Extended.UI.HTMLEditor.canBeInsideP(h)&&t!=x){if(t=="TD")while(t!="TABLE"){h=h.parentNode;t=h.tagName.toUpperCase()}else if(t==M)while(t!="OL"&&t!="UL"){h=h.parentNode;t=h.tagName.toUpperCase()}V=h;break}h=h.parentNode}if(V!=e){var l=a._getSelection(),d=a._createRange(l),s=a._doc.createTextNode(k);V.parentNode.insertBefore(s,V);if(Sys.Extended.UI.HTMLEditor.isIE){var ab=a._createRange(l),lb=a._createRange(l),bb=a._doc.createElement(N),U=a._doc.createElement(N);s.parentNode.insertBefore(bb,s);if(s.nextSibling)s.parentNode.insertBefore(U,s.nextSibling);else s.parentNode.appendChild(U);try{ab.moveToElementText(bb);lb.moveToElementText(U);ab.setEndPoint("EndToEnd",lb);ab.select()}catch(Mb){}s.parentNode.removeChild(bb);s.parentNode.removeChild(U)}else{a._removeAllRanges(l);d.setStart(s,0);d.setEnd(s,0);a._selectRange(l,d)}}}else if(Sys.Extended.UI.HTMLEditor.isIE&&b.keyCode>=33&&b.keyCode<=40&&!b.shiftKey){var yb=b.keyCode==Sys.UI.Key.pageDown||b.keyCode==Sys.UI.Key.end||b.keyCode==Sys.UI.Key.right||b.keyCode==Sys.UI.Key.down;setTimeout(function(){var f=a._getSelection(),d=a._createRange(f);if(f.type.toLowerCase()==C){var b=d.item(0);if(!b.contentEditable||b.contentEditable=="false"){d.remove(0);f.empty();d=a._createRange(f);var c=a._doc.createElement("SPAN");c.appendChild(a._doc.createTextNode(k));if(yb)if(b.nextSibling==e)b.parentNode.appendChild(c);else b.parentNode.insertBefore(c,b.nextSibling);else b.parentNode.insertBefore(c,b);d.moveToElementText(c);d.select();setTimeout(function(){a.focusEditor();c.parentNode.removeChild(c)},0)}}},0)}else if((F&&!Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isSafari&&b.type==j)&&b.ctrlKey&&!b.altKey){a._a_prize=c;var l=e,d=e,p=String.fromCharCode(Sys.Extended.UI.HTMLEditor.isIE||Sys.Extended.UI.HTMLEditor.isOpera||Sys.Extended.UI.HTMLEditor.isSafari?b.keyCode:b.charCode).toLowerCase(),u=e,K=e;if((Sys.Extended.UI.HTMLEditor.isIE||Sys.Extended.UI.HTMLEditor.isSafari)&&b.keyCode==17)return c;else if(!Sys.Extended.UI.HTMLEditor.isIE&&b.keyCode==Sys.UI.Key.end&&!b.shiftKey)a._setToEnd();else if(b.keyCode==46&&f.isShadowed()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}else if(b.keyCode==46||b.keyCode==Sys.UI.Key.backspace)(Sys.Extended.UI.HTMLEditor.isIE&&b.type==j||!Sys.Extended.UI.HTMLEditor.isIE&&b.type==B)&&f._saveContent();else switch(p){case"a":if(!Sys.Extended.UI.HTMLEditor.isIE){l=f._getSelection();f._removeAllRanges(l);d=f._createRange();d.selectNodeContents(f._doc.body);f._selectRange(l,d);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}else a._a_prize=m;break;case"z":f.undo();Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;break;case"p":if(!Sys.Extended.UI.HTMLEditor.isIE){setTimeout(function(){a._contextMenuCallP()},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}break;case"y":f.redo();Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;break;case"x":if(f.isShadowed()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}f._saveContent();if(Sys.Extended.UI.HTMLEditor.isIE)if(b.type==j){a.openWait();setTimeout(function(){a._copyCut(p,c);a.closeWait()},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}break;case"c":if(f.isShadowed()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}if(Sys.Extended.UI.HTMLEditor.isIE)if(b.type==j){a.openWait();setTimeout(function(){a._copyCut(p,c);a.closeWait();setTimeout(function(){a._ifShadow()},0)},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}break;case"v":if(f.isShadowed()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}if(Sys.Extended.UI.HTMLEditor.isIE){f._saveContent();return m}f._commonPaste(b);break;case"b":f._execCommand("bold",c,K);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;case"i":f._execCommand("italic",c,K);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;case"u":f._execCommand("underline",c,K);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;case"s":f._execCommand("strikethrough",c,K);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;case"l":u="justifyleft";break;case"e":u="justifycenter";break;case"r":u="justifyright";break;case"j":u="justifyfull";break;case"q":alert(f._doc.body.innerHTML);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;break;case"0":var Gb="Your browser:\n\n"+navigator.userAgent;alert(Gb);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c;break;case"9":if(!Sys.Extended.UI.HTMLEditor.isIE){var l=a._getSelection(),d=a._createRange(l),g=d.startContainer,A=d.endContainer,y=k;y+="startContainer: "+(g.nodeType==1?g.tagName:O)+D;y+="endContainer  : "+(A.nodeType==1?A.tagName:O)+D;if(g==A){y+="startOffset: "+d.startOffset+D;y+="endOffset  : "+d.endOffset+D;if(g.nodeType==1){g=g.childNodes.item(d.startOffset);if(g&&g.nodeType){y+="startOffset node: "+(g.nodeType==1?g.tagName:O)+D;if(d.startOffset!=d.endOffset){g=A.childNodes.item(d.endOffset);if(g&&g.nodeType)y+="endOffset node: "+(g.nodeType==1?g.tagName:O)+D}}else y+=g}}alert(y)}else{var l=a._getSelection(),d=a._createRange(l);alert("boundingLeft: "+d.boundingLeft+" boundingTop: "+d.boundingTop+D+"boundingWidth: "+d.boundingWidth+" boundingHeight: "+d.boundingHeight)}Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}if(u){f._execCommand(u,c,K);if(u=="formatblock"&&!Sys.Extended.UI.HTMLEditor.isIE){f._saveContent();f._undo(c)}Sys.Extended.UI.HTMLEditor._stopEvent(b);(u=="delete"||u=="paste")&&f._clearP()}}else if(F||(Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isOpera)&&b.type==j){if(Sys.Extended.UI.HTMLEditor.isIE&&f._tryForward){var d=f._createRange(f._getSelection());d.select();f._tryForward=c}var p=String.fromCharCode(Sys.Extended.UI.HTMLEditor.isIE?b.keyCode:b.charCode).toLowerCase();if(a._a_prize){a._a_prize=c;function Bb(){var c=a._createRange(a._getSelection()),b=c.parentElement();if(b&&b.nodeType==1&&b.tagName.toUpperCase()==x){while(b.firstChild)b.parentNode.insertBefore(b.firstChild,b);b.parentNode.removeChild(b)}}setTimeout(Bb,0)}if(f.isShadowed()){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}switch(b.keyCode){case Sys.UI.Key.tab:if((Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isOpera)&&b.type!=j)break;if(!f._editPanel.get_suppressTabInDesignMode()){!f.isControl()&&f.insertHTML("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");Sys.Extended.UI.HTMLEditor._stopEvent(b)}else{Sys.Extended.UI.HTMLEditor.isSafari&&Sys.Extended.UI.HTMLEditor._stopEvent(b);Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel=e;return m}break;case 46:case Sys.UI.Key.backspace:if((Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isOpera)&&b.type!=j)break;((Sys.Extended.UI.HTMLEditor.isIE||Sys.Extended.UI.HTMLEditor.isSafari)&&b.type==j||!Sys.Extended.UI.HTMLEditor.isIE&&b.type==B)&&f._saveContent();if(!Sys.Extended.UI.HTMLEditor.isIE){var d=f._createRange(f._getSelection()),g=d.startContainer,A=d.endContainer;if(b.type==B)if(Sys.Extended.UI.HTMLEditor.contentEditable(g)!=e||Sys.Extended.UI.HTMLEditor.contentEditable(A)!=e){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}if(g==A&&g.nodeType==1&&g.tagName.toUpperCase()=="TD"&&d.startOffset==d.startOffset&&g.childNodes.item(d.startOffset)&&g.childNodes.item(d.startOffset).tagName&&g.childNodes.item(d.startOffset).tagName.toUpperCase()==P){var tb=g.childNodes.item(d.startOffset),qb=0,nb=0,z;z=tb.previousSibling;while(z){qb++;z=z.previousSibling}z=tb.nextSibling;while(z){nb++;z=z.nextSibling}if(b.keyCode==46&&nb==0||b.keyCode==Sys.UI.Key.backspace&&qb==0){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}else if(b.keyCode==46&&g.firstChild==g.lastChild&&g.firstChild.nodeType==1){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}if(g==A&&g.nodeType==3&&d.startOffset==d.endOffset&&!Sys.Extended.UI.HTMLEditor.isOpera){var Fb=g.data+k;if(b.keyCode==46)if(d.startOffset==Fb.length&&!(g.nextSibling&&g.nextSibling.nodeType==3)){if(g.nextSibling){g.parentNode.removeChild(g.nextSibling);a.onContentChanged()}Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}if(b.keyCode==Sys.UI.Key.backspace)if(d.startOffset==0&&!(g.previousSibling&&g.previousSibling.nodeType==3)){if(g.previousSibling){g.parentNode.removeChild(g.previousSibling);a.onContentChanged()}Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}if(b.keyCode==Sys.UI.Key.backspace&&g.nodeType==1&&g==A&&d.startOffset==d.endOffset){var v=g.childNodes.item(d.startOffset);if(v!=e&&v.nodeType==1&&v.tagName.toUpperCase()==P){v=v.previousSibling;if(v!=e&&v.nodeType!=3){v.parentNode.removeChild(v);a.onContentChanged();Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}}setTimeout(function(){var j=a._getSelection(),b=a._createRange(j),h=b.startContainer,l=b.endContainer;if(Sys.Extended.UI.HTMLEditor.contentEditable(h)!=e||Sys.Extended.UI.HTMLEditor.contentEditable(l)!=e){a._undo(c);return}if(Sys.Extended.UI.HTMLEditor.isOpera&&h==l&&h.nodeType==3&&h.data.length==0)h.parentNode.removeChild(h);else if(h==l&&h.nodeType==1&&Sys.Extended.UI.HTMLEditor.isStyleTag(h.tagName)&&b.startOffset==b.endOffset&&h.childNodes.length==0){while(h.parentNode.nodeType==1&&Sys.Extended.UI.HTMLEditor.isStyleTag(h.parentNode.tagName)&&h.parentNode.childNodes.length==1)h=h.parentNode;var d=h.nextSibling,f=h.previousSibling,i=h.parentNode;i.removeChild(h);a.onContentChanged();if(d==e&&f==e){b.setStart(i,0);b.setEnd(i,0)}else if(d!=e&&f!=e)if(d.nodeType==3&&f.nodeType==3){var g=(k+f.data+k).length;f.appendData(d.data);i.removeChild(d);b.setStart(f,g);b.setEnd(f,g)}else if(f.nodeType==3){var g=(k+f.data+k).length;b.setStart(f,g);b.setEnd(f,g)}else if(d.nodeType==3){b.setStart(d,0);b.setEnd(d,0)}else if(d.childNodes.length>0){b.setStart(d,0);b.setEnd(d,0)}else{var g=Sys.Extended.UI.HTMLEditor.__getIndex(d);b.setStart(i,g);b.setEnd(i,g)}else if(f!=e)if(f.nodeType==3){var g=(k+f.data+k).length;b.setStart(f,g);b.setEnd(f,g)}else{var g=f.childNodes.length;if(g>0){b.setStart(f,g);b.setEnd(f,g)}else{g=Sys.Extended.UI.HTMLEditor.__getIndex(f);b.setStart(i,g);b.setEnd(i,g)}}else if(d!=e)if(d.nodeType==3){b.setStart(d,0);b.setEnd(d,0)}else{var g=d.childNodes.length;if(g>0){b.setStart(d,g);b.setEnd(d,g)}else{g=Sys.Extended.UI.HTMLEditor.__getIndex(d);b.setStart(i,g);b.setEnd(i,g)}}a._removeAllRanges(j);a._selectRange(j,b)}},0)}else{var l=a._getSelection();if(l.type.toLowerCase()==C){if(b.keyCode==8){setTimeout(function(){a._ifShadow();a.onContentChanged()},0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return}var r=a._createRange(l),W=r.item(0);if(W.tagName.toUpperCase()==Q){W.src=k;W.parentNode.removeChild(W);while(r.length>0)r.remove(0);try{r.collapse(c)}catch(Mb){}Sys.Extended.UI.HTMLEditor._stopEvent(b);a._saveContent();setTimeout(function(){a._undo(c);a.onContentChanged()},0);return}}var fb=a._doc.body.getElementsByTagName(Q).length;if(fb>0){var mb=a._body.ownerDocument.createElement("div");a._body.appendChild(mb);var Jb=b.keyCode;setTimeout(function(){a._body.removeChild(mb);var b=a._doc.body.getElementsByTagName(Q);if(fb!=b.length){a._saveContent();setTimeout(function(){a._undo(c);a.onContentChanged()},0)}},0)}setTimeout(function(){a._clearP()},0)}break;case Sys.UI.Key.enter:if((Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isOpera)&&b.type==j)break;(!Sys.Extended.UI.HTMLEditor.isIE&&b.type==B||Sys.Extended.UI.HTMLEditor.isIE&&b.type==j)&&f._saveContent();if(Sys.Extended.UI.HTMLEditor.isIE&&b.type==j){var l=a._getSelection();if(l.type.toLowerCase()==C)break;var r=a._createRange(l);if(!b.shiftKey){var i=r.parentElement();if(i.tagName.toUpperCase()=="TEXTAREA")break;while(i&&i.tagName&&i.tagName.toUpperCase()!=w&&Sys.Extended.UI.HTMLEditor.isStyleTag(i.tagName))i=i.parentNode;if(i&&i.tagName){var t=i.tagName.toUpperCase();if(t==x||t==M){if(t==M){function Hb(){r=a._createRange(a._getSelection());var b=r.parentElement();while(b&&b.tagName&&b.tagName.toUpperCase()!=w&&Sys.Extended.UI.HTMLEditor.isStyleTag(b.tagName))b=b.parentNode;if(b&&b.nodeType==1&&b.tagName.toUpperCase()==x){var d=a._doc.createElement(N),f=a._doc.createTextNode(" "),c=b;while(c.firstChild!=e&&c.firstChild.nodeType==1)c=c.firstChild;if(c.nodeType==1){c.appendChild(f);c.appendChild(d);while(b.firstChild)b.parentNode.insertBefore(b.firstChild,b)}else{b.parentNode.insertBefore(f,b);b.parentNode.insertBefore(d,b)}b.parentNode.removeChild(b);r.moveToElementText(d);r.select();d.parentNode.removeChild(d);a.onContentChanged()}}setTimeout(Hb,0)}break}}try{var db=Sys.Extended.UI.HTMLEditor.smartClassName+"_middle_add",n=e,I="<span id="+db+"></span>";function wb(){var c=a._getSelection(),b=a._createRange(c);if(n!=e){n.innerHTML="&nbsp;";b.moveToElementText(n);b.select();n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n);a.onContentChanged()}}r.pasteHTML(I);var S=c;n=a._doc.getElementById(db);if(n!=e){var E=n.nextSibling,J=n.parentNode;while(E==e&&J!=e&&Sys.Extended.UI.HTMLEditor.isStyleTag(J.tagName)){E=J.nextSibling;J=J.parentNode}if(E!=e&&!Sys.Extended.UI.HTMLEditor.isInlineElement(E)&&E.tagName!=e&&typeof E.tagName!=H){var X=E.tagName.toUpperCase();if(X!=P&&X!="UL"&&X!="OL"&&X!=x)S=m}n.parentNode.removeChild(n)}r.pasteHTML("<br/>"+(S?I:k));if(S)n=a._doc.getElementById(db);r.select();if(S){setTimeout(wb,0);Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}}catch(Lb){}}else break;Sys.Extended.UI.HTMLEditor._stopEvent(b)}else if(!b.shiftKey&&(Sys.Extended.UI.HTMLEditor.isSafari||Sys.Extended.UI.HTMLEditor.isOpera)){var i=Sys.Extended.UI.HTMLEditor.getSelParent(f);if(i.nodeType==3)i=i.parentNode;while(i&&i.tagName&&i.tagName.toUpperCase()!=w&&Sys.Extended.UI.HTMLEditor.isStyleTag(i.tagName))i=i.parentNode;if(i&&i.tagName&&(i.tagName.toUpperCase()==x||i.tagName.toUpperCase()==M))break;var I="<br />";if(Sys.Extended.UI.HTMLEditor.isOpera){var l=a._getSelection(),d=a._createRange(l);if(d.startContainer==d.endContainer)if(d.startContainer.nodeType==1){var kb=d.startContainer.childNodes.item(d.startOffset);if(kb.nodeType==1&&kb.tagName.toUpperCase()==P)I+="<br />"}else if(d.startContainer.nodeType==3&&d.startOffset==d.endOffset&&d.startContainer.data.length==d.endOffset&&!(d.startContainer.nextSibling&&d.startContainer.nextSibling.nodeType==3))I+="&nbsp;"}f.insertHTML(I);Sys.Extended.UI.HTMLEditor._stopEvent(b);if(Sys.Extended.UI.HTMLEditor.isOpera){var l=a._getSelection(),d=a._createRange(l);if(d.startContainer==d.endContainer&&d.startContainer.nodeType==3&&d.startOffset==d.endOffset&&d.startContainer.data.length==0){var rb=d.startContainer.previousSibling;d.startContainer.parentNode.removeChild(d.startContainer);a._removeAllRanges(l);d=a._createRange();d.setStart(rb,0);d.setEnd(rb,1);a._selectRange(l,d)}}a.onContentChanged()}else if(Sys.Extended.UI.HTMLEditor.isSafari){f.insertHTML("<br/>");Sys.Extended.UI.HTMLEditor._stopEvent(b);a.onContentChanged()}}}else a._a_prize=c;if(Sys.Extended.UI.HTMLEditor.isIE&&b.type==B&&!b.ctrlKey){var p=b.keyCode,sb=a._getSelection(),T=a._createRange(sb);if(T.text.length>0){var L=String.fromCharCode(p),pb=Sys.Extended.UI.HTMLEditor.capLock(b),Eb=b.shiftKey&&!pb||pb;if(!Eb)L=L.toLowerCase();var q=Sys.Extended.UI.HTMLEditor.smartClassName+ib,o=a._doc.getElementById(q);if(o!=e){L=R+q+Z+L+R+q+q+Z;o.parentNode.removeChild(o)}T.pasteHTML(L);if(o!=e){a.trickWithStyles(q);o=a._doc.getElementById(q+q);o.parentNode.removeChild(o)}Sys.Extended.UI.HTMLEditor._stopEvent(b);a.onContentChanged();return c}}if(b.type=="mouseup"||b.type==Y||b.type==j){var xb=m;if(b.type==j&&!b.ctrlKey){var p=b.keyCode;if(p>=48&&p<=90||p==32||p==13||p>=186&&p<=222||p>=96&&p<=111)if(a._StyleForTyping!=e){a.n_arr=[];for(var cb=0;cb<a._StyleForTyping.length;cb++)a.n_arr.push(a._StyleForTyping[cb]);var q=Sys.Extended.UI.HTMLEditor.smartClassName+ib,jb=m;if(!Sys.Extended.UI.HTMLEditor.isIE)a.insertHTML(R+q+Z);else{a.insertHTML(R+q+"'>&nbsp;</span>");var o=a._doc.getElementById(q);if(o&&o.nextSibling&&o.nextSibling.nodeType==3){jb=c;var sb=a._getSelection(),T=a._createRange(sb);T.moveToElementText(a._doc.getElementById(q));T.select()}else o&&o.removeChild(o.firstChild)}jb&&setTimeout(function(){a.trickWithStyles(q);a.onContentChanged()},0)}}if(xb||!Sys.Extended.UI.HTMLEditor.isIE)if(!a._updated_now){if(a._updateTimer){clearTimeout(a._updateTimer);a._updateTimer=e}a._updateTimerLimit=3;function vb(){if(a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel)try{if(Sys.Extended.UI.HTMLEditor.isIE){try{var b=a._doc.selection}catch(d){return c}if(a._getSelection().type=="None"&&a._doc.queryCommandValue("backcolor")==0&&a._doc.queryCommandValue("forecolor")==0){a._updateTimerLimit--;if(a._updateTimerLimit>0){a._updateTimer=setTimeout(vb,100);return}}}a._updated_now=m;a._editPanel.updateToolbar();a._updated_now=c;a._updateTimer=e;!Sys.Extended.UI.HTMLEditor.isIE&&a.focusEditor()}catch(d){}}a._updateTimer=setTimeout(vb,300)}}if(!(!Sys.Extended.UI.HTMLEditor.isIE&&(b.type==j||b.type=="keyup")||Sys.Extended.UI.HTMLEditor.isIE&&(b.type==j||b.type=="keyup")&&(b.keyCode==16||b.keyCode==20)))a._StyleForTyping=e;Sys.Extended.UI.HTMLEditor.isSafari&&setTimeout(function(){a._createRange(a._getSelection())},0);!Sys.Extended.UI.HTMLEditor.isIE&&setTimeout(function(){if(a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel){var c=a._getSelection(),b=a._createRange(c);if(b.startContainer.nodeType!=3&&b.startContainer==b.endContainer)if(b.startOffset==b.endOffset)if(b.startContainer.childNodes.item(b.startOffset))if(b.startContainer.childNodes.item(b.startOffset).nodeType==3){var d=b.startContainer.childNodes.item(b.startOffset);c.collapseToEnd();a._removeAllRanges(c);c=a._getSelection();b=a._createRange(c);b.setStart(d,0);b.setEnd(d,0);a._selectRange(c,b)}}},0);if(!Sys.Extended.UI.HTMLEditor.isIE){var l=a._getSelection(),d=a._createRange(l);a._saved_startContainer=d.startContainer;a._saved_startOffset=d.startOffset}setTimeout(function(){try{a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel&&a._ifShadow()}catch(b){}},0);if(b.type==j)if(a._AfterOnContentChanged==e||typeof a._AfterOnContentChanged==H||!a._AfterOnContentChanged){a._AfterOnContentChanged=m;setTimeout(function(){if(a._editPanel==Sys.Extended.UI.HTMLEditor.LastFocusedEditPanel){a.onContentChanged();a._AfterOnContentChanged=c}},0)}return m}catch(Lb){Sys.Extended.UI.HTMLEditor._stopEvent(b);return c}};