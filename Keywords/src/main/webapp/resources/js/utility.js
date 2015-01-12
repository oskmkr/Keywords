if(typeof console == "undefined"){
	console = {
		log : function(){},
		debug : function(){}
	};
}

oskm = (typeof oskm !== "undefined") ? oskm : {};
oskm.Utility = (function() {

	_onEvent : function(we){
		if(this.checkEvent(we)){
			this.processEvent(we, this);
		}
	},

	_clickHelper : function(we, sMethod){
		arguments = $A(arguments).slice(2, arguments.length).$value();
		this[sMethod].apply(this, arguments);
	},

	_stopEvent : function(we){
		we.stopDefault();
	},

	/**
	 * �쇱뿕由щ㉫�몄쓽 媛믪쓣 �먮컮�ㅽ겕由쏀듃�� 媛앹껜濡� 諛섑솚�쒕떎.
	 * 
	 * @param {HTMLElement}
	 *            elForm �쇱뿕由щ㉫��
	 * @return {Object} �쇱뿕由щ㉫�몄쓽 媛앹껜��
	 */
	getFormObject : function(elForm){
		var oParam = {};
		for(var i=0, nLength = elForm.elements.length ; i<nLength ; i++){
			var element = elForm.elements[i];
			if(!element.type || !element.name){continue;}
			switch(element.type.toLowerCase()){
				case "radio" :
					oParam[element.name] = element.checked ? element.value : oParam[element.name];
					break;
				case "checkbox" :
					oParam[element.name] = element.checked;
					break;
				default :
					oParam[element.name] = element.value;
					break;
			}
		}
		return oParam;
	},

	/**
	 * 
	 */
	attachSelectPrevent : function(){
		if(this._htWfAttach){
			this.detachSelectPrevent();
		}
		this._htWfAttach = {};
		this._htWfAttach["contextmenu"] = $Fn(this._stopEvent,this).attach(document,"contextmenu");		
		this._htWfAttach["dragstart"] = $Fn(this._stopEvent,this).attach(document,"dragstart");		
		this._htWfAttach["selectstart"] = $Fn(this._stopEvent,this).attach(document,"selectstart");
		if ( document.body.style.MozUserSelect != undefined ){
			document.body.style.MozUserSelect = "none";
		}
	},

	/**
	 * 
	 */
	detachSelectPrevent : function(){
		if(!this._htWfAttach){return;}
		this._htWfAttach["contextmenu"].detach(document,"contextmenu");		
		this._htWfAttach["dragstart"].detach(document,"dragstart");		
		this._htWfAttach["selectstart"].detach(document,"selectstart");		
		if (document.body.style.MozUserSelect != undefined) {
			document.body.style.MozUserSelect = "";
		}
		this._htWfAttach = null;
	},
	/**
	 * �대옒�ㅻЦ�먯뿴濡� 遺�� �뚮씪誘명꽣瑜� 諛곗뿴�� 由ы꽩�쒕떎.
	 * 
	 * @param {String}
	 *            sClassName �대옒�� 臾몄옄��
	 * @param {String}
	 *            sEvent
	 */
	getParam : function(sClassName, sEvent){
		if(sClassName){
			sEvent = sEvent || "param"
			var rxParam = new RegExp("_" + sEvent + "\\((.*?)\\)");
			var aMatch = sClassName.match(rxParam);
			if(aMatch && aMatch[0] && aMatch[1]){
				return aMatch[1].split("|");
			}
		}
		return null;
	},

	/**
	 * �섎━癒쇳듃 湲곗��쇰줈 �곸쐞 �섎━癒쇳듃瑜� 李얜뒗 硫붿냼��
	 * 
	 * @param {HTMLElement}
	 *            el 湲곗� �섎━癒쇳듃
	 * @param {String}
	 *            sTagName 李얘퀬�� �섎뒗 �쒓렇 �ㅼ엫
	 * @param {String}
	 *            sClassName 李얘퀬�� �섎뒗 �대옒�ㅻ챸
	 * @return {HTMLElement} 李얠� �섎━癒쇳듃
	 */
	getElement : function(el, sTagName, sClassName){
		if(!el || !el.tagName){return;}
		var sElTagName = el.tagName.toLowerCase();
		if(typeof sClassName == "undefined"){
			if (sElTagName == sTagName) {
				return el;
			}
			else {
				return $$.getSingle("!" + sTagName, el);
			}
		}else{
			if (sElTagName == sTagName && $Element(el).hasClass(sClassName)) {
				return el;
			}
			else {
				return $$.getSingle("!" + sTagName + "." + sClassName, el);
			}
		}
	},

	/**
	 * 媛앹껜 Deep Copy �⑥닔
	 * 
	 * @param {Object}
	 *            oSourceTarget 蹂듭궗�� 媛앹껜
	 * @return {Object} 蹂듭궗�� 媛앹껜
	 */
	cloningObject : function(oSourceTarget){
		var sConstructor;
		var oDestinationTarget;
		var key;

		if((typeof oSourceTarget == "object") && (sConstructor = this.getConstructorName(oSourceTarget))){
			oDestinationTarget = eval('new ' + sConstructor + '()');

			if(oSourceTarget.prototype){
				for (key in oSourceTarget.prototype) {
					oDestinationTarget.prototype[key] = this.cloningObject(oSourceTarget.prototype[key]);
				}
			}
			for (key in oSourceTarget) {
				oDestinationTarget[key] = this.cloningObject(oSourceTarget[key]);
			}
			return oDestinationTarget;
		}

		oDestinationTarget = oSourceTarget;
		return oDestinationTarget;
	},

	/**
	 * �대깽�� 泥섎━湲�
	 * 
	 * @param {$Event}
	 *            we �⑺븨�� �대깽��
	 * @param {Object}
	 *            oContext 而⑦뀗�ㅽ듃 媛앹껜
	 */
	processEvent : function(we, oContext){
		var wel = $Element(we.element);
		var aParam, welBtn, fFunc;
		welBtn = $Element(this.getElement(wel.$value(), "a")) || $Element(this.getElement(wel.$value(), "button"));
		welNode = $Element(this.getElement(wel.$value(), "li"));
		aParam = this.getParam(welBtn ? welBtn.attr("class") : wel.attr("class"), we.type);
		aParam = (!aParam || aParam.length === 0) && welNode ? this.getParam(welNode.attr("class"), we.type) : aParam;
		if ((aParam && aParam[0]==oContext.name) && (
			wel.attr("class").indexOf("_"+we.type)>-1 ||
			(welBtn && welBtn.attr("class").indexOf("_"+we.type) > -1) || 
			(welNode && welNode.attr("class").indexOf("_"+we.type) > -1) )) {
			fFunc = oContext["_" + we.type + aParam[1]];
			if(typeof fFunc == "function"){
				aParam = aParam.slice(2, aParam.length);
				aParam.unshift(we);
				fFunc.apply(oContext, aParam);
			}
		}		
	},

	checkEvent : function(we){
		var wel = $Element(we.element);
		var welAnchor = $Element(this.getElement(we.element, "a"));
		if(wel.hasClass("_stopDefault") || (welAnchor && welAnchor.hasClass("_stopDefault"))){
			we.stopDefault();
		}
		if(wel.hasClass("_stopBubble") || (welAnchor && welAnchor.hasClass("_stopBubble"))){
			we.stopBubble();
		}
		if(wel.hasClass("_disabled") || (welAnchor && welAnchor.hasClass("_disabled"))){
			return false;
		}
		return true;
	},

	convertToInteger : function(oSource, oConvert){
		for(var sKey in oSource){
			if(oConvert[sKey]){
				oSource[sKey] = parseInt(oSource[sKey], 10);
			}
		}
		return oSource;
	},

	/**
	 * JSON Object 諛섑솚
	 * 
	 * @param {Object}
	 *            sJson
	 */
	getJsonData : function(sJson){
		var oData = null;
		try{
			oData = new Function('', 'return ' + sJson + ';')();
		}catch(me){}
		return oData;
	},
	
	/**
	 * �� �앹뾽�� �꾩슫��.
	 * 
	 * @param
	 */
	openWindow : function(url, name, width, height, feature) {
		var oWnd;
		if ($Agent().navigator().ie && width < window.screen.width && height < window.screen.height){
			var windowX = Math.ceil( (window.screen.width  - width) / 2 );
			var windowY = Math.ceil( (window.screen.height - height) / 2 );
			oWnd = window.open(url, name, feature+",width=" + width +",height=" + height+",left="+windowX+",top="+windowY );
		}else {
			oWnd = window.open(url, name, feature+",width=" + width +",height=" + height );
		}
		
		return oWnd;
	},
	
	/**
	 * �� �앹뾽�� �뱀젙 �꾩튂�� �꾩슫��.
	 * 
	 * @param
	 */
	openWindowInPlace : function(url, name, width, height, left, top, feature) {
		var oWnd;
		if (width < window.screen.width && height < window.screen.height){
			oWnd = window.open(url, name, feature + ",width=" + width + ",height=" + height+ ",left=" + left + ",top=" + top);
		} else {
			oWnd = window.open(url, name, feature + ",width=" + width + ",height=" + height);
		}
		
		return oWnd;
	},
	
	/**
	 * 臾몄옄�� �섎줈 �먮Ⅴ�� 硫붿냼��
	 * 
	 * @param {String}
	 *            sString
	 * @param {Number}
	 *            nMaxLength
	 * @param {String}
	 *            sTail
	 */
	cutString : function(sString, nMaxLength, sTail){
		var sSource = (typeof sString != "String") ? sString.toString() : sString,
			nLimit = parseInt(nMaxLength, 10),
			sAdd = sTail || "";
		
		return (sSource.length > nLimit) ? sSource.substring(0, nLimit) + sAdd : sSource;
	},
	
	/**
	 * �섎━癒쇳듃 由ъ뒪�몃� 留먯쨪�� �쒕떎.
	 * 
	 * @param {Object}
	 *            htParam
	 */
	ellipsisElementList : function(htParam){
		var aEl = htParam.aEl,
			sTail = htParam.sTail,
			nWidth = htParam.nWidth,
			sQuery = htParam.sQuery,
			nEllipsisWidth = nWidth,
			welTemp = $Element('<span style="font-size:12px;"></span>').appendTo(document.body);

		for(var i=0, nLen=aEl.length ; i<nLen ; i++){
			var wel = $Element(aEl[i]);
			welTemp.text(wel.text());
			if(sQuery){
				var welDiff = $Element(wel.query(sQuery));
				nEllipsisWidth = nWidth - (welDiff ? welDiff.width() : 0);
			}
			this.ellipsis(welTemp, nEllipsisWidth, sTail);
			wel.text(welTemp.text());
		}
		welTemp.leave();
	},
	
	/**
	 * �앹뾽 �ъ씠利덈� 議곗젅�쒕떎. section_popup_layout.jsp �먯꽌 window load �� �몄텧 �섎룄濡�
	 * �섏뼱 �덉쑝誘濡�, �앹뾽 �섏씠吏�� decorator 濡� section_popup �� 吏�뺥븷 寃�.
	 * 
	 * @param w -
	 *            document.body.width
	 * @param h -
	 *            document.body.height
	 * @return
	 */
	setClientSize : function( w, h ) { 
		var oDocument = document.getElementsByTagName('HTML')[0];
		var oBody = document.getElementsByTagName('BODY')[0];	
		var oRuler = document.body.appendChild(document.createElement('DIV'));
		with(oRuler.style) {
			position = 'absolute'; left = top = 0; width = height = '100%';
		}
		var nTargetHeight = oBody.scrollHeight || h;
		var nDifferentHeight = $Agent().navigator().ie ? nTargetHeight - Math.max(oDocument.offsetHeight, oRuler.offsetHeight) : nTargetHeight - oRuler.offsetHeight;
		
	    if(navigator.userAgent.indexOf("MSIE") != -1)  
	    { 
			var divEl = document.createElement("div");
			divEl.style.position = "absolute";
			divEl.style.left = "0px";
			divEl.style.top = "0px";
			divEl.style.width = "100%";
			divEl.style.height = "100%";
			document.body.appendChild(divEl);
			divEl.innerHTML = '&nbsp;';
				
			window.resizeBy( w - divEl.offsetWidth, nDifferentHeight);
			
			document.body.removeChild(divEl);
	    } 	
	    else 
	    { 
			window.resizeBy(w-window.innerWidth, nDifferentHeight); 
	    }
	    
	    document.body.removeChild(oRuler);
	},
	
	/**
	 * ��됱뀡�ㅼ젙
	 * 
	 * @param {HTMLElement}
	 *            el
	 * @param {Number}
	 *            nStart
	 * @param {Number}
	 *            nEnd
	 */
    setSelection : function (el, nStart, nEnd) {
        if (el.setSelectionRange) {
            el.setSelectionRange(nStart, nEnd);
        } else {
            if (el.createTextRange) {
                var c = el.createTextRange();
                c.collapse(true);
                c.moveStart("character", nStart);
                c.moveEnd("character", nEnd - nStart);
                c.select();
            }
        }
    },
	
	/**
	 * 肄붾━�� �대┃ PV 痢≪젙�� �꾪븳 硫붿냼��
	 */
	requestPV : function(){
		$Element(['<iframe height="0" frameborder="0" width="0" scrolling="no" src="/PV.nhn?rnd=', (new Date()).getTime(), '" onload="var el = this;setTimeout(function(){$Element(el).leave();}, 0);"></iframe>'].join('')).appendTo(document.body);
	},
	
	/**
	 * 怨듯넻 Ajax �몄텧
	 * 
	 * @param {String}
	 *            sUrl
	 * @param {Function}
	 *            fCallback
	 * @param {Object}
	 *            htParam
	 */
	requestAjax : function(sUrl, fCallback, htParam, fHandler){
		return $Ajax(sUrl, {
			method : "post",
			onload : fCallback,
			onerror : fHandler
		}).request(htParam);
	},
	
	alertRos : function(){
		alert("二꾩넚�⑸땲��.\n移댄럹 �쒕퉬�� �먭� 以묒엯�덈떎.\n�먭� �쒓컙 �숈븞 湲곕뒫 �댁슜�� �쒗븳�⑸땲��.\n�먯꽭�� �댁슜� 移댄럹怨듭�瑜� �뺤씤�� 二쇱꽭��.");
	},
	
	_clickRosRestrict : function(we) {
		this.alertRos();
	},
	
	/**
	 * 而대쭏 蹂��
	 * 
	 * @param {String|Number}
	 *            sText,
	 * @return {String}
	 */
	convertCurrency : function(sText) {
		sText = sText+"";
		var nDot = 0,
			sReturn = "",
			nDotPosition = sText.indexOf("."),
			nLastPosition = sText.length;
			
		if (nDotPosition > -1) {
			nLastPosition = nDotPosition - 1;
		}
		
		// �몄옄由щ쭏�� ,李띿뼱 �듯솕�뺤떇�쇰줈 留뚮뱾湲�
		for (var i = sText.length; i >= 0; i--) {
			var sChar = sText.charAt(i);
			if (i > nLastPosition) {
				sReturn = sChar + sReturn;
				continue;
			}
			if (/[0-9]/.test(sChar)) {
				if (nDot >= 3) {
					sReturn = ',' + sReturn;
					nDot = 0;
				}
				nDot++;
				sReturn = sChar + sReturn;
			} else if (sChar == '\u0000' || sChar == '\uFFFF') {
				sReturn = sChar + sReturn;
			}
		}
		
		return sReturn;
	},
	
	checkSearchKeyword : function(elInput){
		elInput = $(elInput);
	    if ($S(elInput.value).trim().$value() == "") {
	        alert("寃�됱뼱瑜� �낅젰�섏꽭��.");
	        elInput.focus();
			return false;
		}
		return true;
	},

	/**
	 * ClickCr �대깽�� �몃뱾��
	 * 
	 * @param {$Event}
	 *            we
	 * @param {String}
	 *            sArea
	 * @param {String}
	 *            sCId
	 * @param {String}
	 *            sRank
	 * @example class="_click(Utility|ClickCr|sArea|sCId|sRank)"
	 */
	_clickClickCr : function(we, sArea, sCId, sRank){
		this.wrapperClickCr.apply(this, arguments);
	},

	/**
	 * ClickCr �⑺븨 硫붿냼��
	 * 
	 * @param {$Event}
	 *            we
	 * @param {String}
	 *            sArea
	 * @param {String}
	 *            sCId
	 * @param {String}
	 *            sRank
	 * @example oUtil.wrapperClickCr(we, "amy.adm");
	 */
	wrapperClickCr : function(we, sArea, sCId, sRank){
		var elTarget = this.getElement(we.element, "a") || we.element,
			oEvent = we.$value();
		clickcr(elTarget, sArea||"", sCId||"", sRank||"", oEvent);
	},

	/**
	 * LCS �곸슜 (send: LCS ��� �щ�, lcs_etc: LCS etc
	 * 
	 * @param {boolean}
	 *            bSend
	 * @param {String}
	 *            sLcsEtc
	 */
	wrapperLcsDo : function(bSend, sLcsEtc) {
		var	oEtc;
		if (bSend) {
			if (sLcsEtc != '') {
				oEtc = eval('(' + sLcsEtc + ')');
			}
			lcs_do(oEtc);
		}
	},

	/**
	 * �몃뵒耳�댄꽣 �몄텧
	 * 
	 * @param {Object}
	 *            htParam
	 */	
	showIndicator : function(htParam){
		var sLayerId = htParam.sLayerId,
			aLink = htParam.aLink,
			elBasis = $(htParam.sBasis),
			nTop = htParam.nTop,
			sPosition = htParam.sPosition;

		oLayer.hideLayer(sLayerId);
		oLayer.showLayer({
			sLayerId : sLayerId,
			aLink : aLink,
			htPos : {
				elBasis : elBasis,
				sPosition : sPosition ||"inside-top",
				sAlign : "center",
				nTop : nTop || 0
			},
			onShow :function(){
				$Element(htParam.sHideArea).css("visibility", "hidden");
			},
			onHide : function(){
				$Element(htParam.sHideArea).css("visibility", "visible");
			}
		});

		clearTimeout(this._htLoadingTimer[htParam.sHideArea]);
		this._htLoadingTimer[htParam.sHideArea] = setTimeout(function(){
			oLayer.hideLayer(sLayerId);
			$Element(htParam.sHideArea).css("visibility", "visible");
		}, 2000);
	},
	
	/**
	 * 怨듯넻 �먮윭 泥섎━ 2011.01.13 濡쒓렇�� �ㅽ뙣�� �뱀뀡�덉쑝濡� �대룞
	 * 
	 * @param {Number}
	 *            nErrorCode
	 */
	errorCheck : function(oRes){
		switch(oRes.errorCode){
			case ERROR_LOGIN_FAIL:
				this.redirectSectionHome();
				break;
		}
		return oRes.isSuccess;
	},
	
	/**
	 * �뱀뀡 硫붿씤 由щ떎�대젆�� 硫붿냼��
	 */
	redirectSectionHome : function(){
		document.location.href = g_sCafeSectionUrl;
	},
	
	/**
	 * 濡쒓렇�� �섏씠吏 由щ떎�대젆�� 硫붿냼��
	 */
	redirectLogin : function(){
		document.location.href = g_sLoginUrl + "/nidlogin.login?mode=form&url=" + encodeURIComponent(document.location.href.replace(/#.*$/, ""));
	},
	
	/**
	 * �ㅻ챸 �몄쬆 �섏씠吏濡� �대룞
	 */
	toCertPage : function(rurl, surl) {
		if (rurl == null || rurl == '')
	        rurl = document.location.href;
	        
	    var url = "https://nid.naver.com/cert.nhn?todo=cert_start&rurl=" + rurl;
	    
	    if(surl != null && surl != '')
	    	url += "&surl="+surl;
	    
	    document.location.href = url;
	},
	    
    /**
	 * 履쎌�蹂대궡湲� �섏씠吏濡� �대룞�쒕떎.
	 */
    toNoteSendPage : function (noteSendUrl) {
    	var rurl = encodeURIComponent(document.location.href);  
    	var url = noteSendUrl + "&returnUrl=" + rurl;
    	document.location.href = url;
    },
	
	/**
	 * 踰꾩쟾 �뺣낫瑜� 鍮꾧탳�섏뿬 寃곌낵瑜� 諛섑솚�쒕떎.
	 * 
	 * @return v1 > v2�대㈃ -1, v1 == v2 �대㈃ 0, v1 < v2 �대㈃ 1�� 諛섑솚�쒕떎.
	 */
	versionCompare : function (v1, v2) {
	    var v1parts = v1.split('.');
	    var v2parts = v2.split('.');
	    
	    var nMaxLen = Math.max(v1parts.length, v2parts.length); 
	        
	    this.adjustLength(v1parts, nMaxLen);
	    this.adjustLength(v2parts, nMaxLen);
	    
	    for (var i = 0; i < v1parts.length; ++i) {
	    	var n_v1part = parseInt(v1parts[i], 10), n_v2part = parseInt(v2parts[i], 10);
	    	
	        if (n_v1part == n_v2part) {
	            continue;
	        } else if (n_v1part > n_v2part) {
	            return -1;
	        } else {
	            return 1;
	        }
	    }
	    
	    if (v1parts.length != v2parts.length) {
	        return 1;
	    }
	    
	    return 0;
	},
    
    adjustLength : function (verParts, size) {
    	if(verParts.length != size) {
    		for(i = verParts.length; i < size; i++) {
    			verParts[i] = '0';
    		}
    	}
    },
    
	/**
	 * �대�吏 object瑜� ��븯�� 寃쎌슦 url濡� �대룞�쒕떎. �대�吏 object�� 遺紐쭼ode媛 Anchor
	 * Tag�� 寃쎌슦 �대룞�섏� �딄퀬 return �쒕떎.
	 */
    _clickThumbView : function (we, newUrl) {
    	var imgObj = we.element;
    	var clubid = oArticleRead.clubid;
    	var oWnd;
        if (typeof imgObj == 'object' && imgObj.parentNode != "undefined" && imgObj.src != "undefined") {
            if (imgObj.parentNode.tagName == 'A') {
            	return;
            }
            oWnd = window.open("/ImageView.nhn?clubid="+ clubid +"&imageUrl=" + newUrl);
            return oWnd;
        }
    },
    
	/**
	 * 媛앹껜媛 鍮� 媛믪씤 吏 �뺤씤�쒕떎. wrapping �� 媛앹껜�먮뒗 �ъ슜�섏� 留먭쾬.
	 * 
	 * 湲곕낯 isEmpty(null) // true isEmpty(undefined) // true
	 * 
	 * String isEmpty('') // true isEmpty(' ') // false isEmpty('bob') // false
	 * isEmpty(' bob ') // false
	 * 
	 * Object isEmpty({}) // true isEmpty({'key' : 'value'}) // false
	 * isEmpty([]) // true isEmpty(['a']) // false
	 * 
	 * @param {Object}
	 *            obj
	 * @author oskm
	 */
	isEmpty : function(obj) {
		if(!obj){
			return true;
		}

		if(typeof obj === 'string'){
			if(obj === ''){
				return true;
			}else{
				return false;
			}
		}

		for( var name in obj){
			return false;
		}
		return true;
	},
    
	escapeHTML : function(sString) {
		if(this.isEmpty(sString)){
			return '';
		}
		return ($S(sString).escapeHTML().$value()).replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
	},

	escapeLtGt : function(sString) {
		if(this.isEmpty(sString)){
			return '';
		}
		return sString.replace(/</g, '&lt;').replace(/>/g, '&gt;');
	}
});

CookieBaseAction = $Class({
	$init: function(htOptions) {
		this.sCookieName = htOptions["sCookieName"];
		this.nCookieDuration = htOptions["nCookieDuration"] || 1;
	},
	
	runWhenCookieExist: function(fCallback, oThis) {
		if ($Cookie().get(this.sCookieName)) {
			fCallback.apply(oThis);
		}
		
		return this;
	},
	
	runWhenCookieNotExist: function(fCallback, oThis) {
		if (!$Cookie().get(this.sCookieName)) {
			fCallback.apply(oThis);
		}
		
		return this;
	},
	
	click: function(sElementId) {
		return new this.ClickRuleBuilder(this, sElementId);
	},
	
	ClickRuleBuilder: $Class({
		$init: function(oParent, sElementId) {
			this.oParent = oParent;
			this.sElementId = sElementId;
		},
		
		run: function(fCallback, oThis) {
			
			$Fn(function(event) {
				$Cookie().set(this.oParent.sCookieName, 1, this.oParent.nCookieDuration);
				fCallback.call(oThis, event);
			}, this).attach($Element(this.sElementId), "click");
			
			return this.oParent;
		}
	})
})();