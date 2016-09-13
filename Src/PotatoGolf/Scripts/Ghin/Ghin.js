var mainurl = 'http://widgets.ghin.com/'

var scripts = document.getElementsByTagName('script');
var myScript = scripts[scripts.length - 1];
var widget_count = 0;

var iFrameList = document.getElementsByTagName("iframe");
if (iFrameList) widget_count = iFrameList.length;
    
var queryString = myScript.src.replace(/^[^\?]+\??/, '');

var params = parseQuery(queryString);

function parseQuery(query) {
    var Params = new Object();
    if (!query) return Params; // return empty object
    var Pairs = query.split(/[;&]/);
    for (var i = 0; i < Pairs.length; i++) {
        var KeyVal = Pairs[i].split('=');
        if (!KeyVal || KeyVal.length != 2) continue;
        var key = unescape(KeyVal[0]);
        key = key.toLowerCase();
        var val = unescape(KeyVal[1]);
        val = val.replace(/\+/g, ' ');
        Params[key] = val;
    }
    return Params;
}

// Find the script tag this is
var scriptEl = document.getElementsByTagName("script");
var container;

if (scriptEl)
    container = scriptEl[scriptEl.length - 1].parentNode;

// Get Widget specific info
var url, width, height, dynamicHeight, iFrameScrolling;
iFrameScrolling = 'no';

if (params['widget'] && params['widget'] != '') {
    eval("WidgetInfo_" + params['widget'] + "();");

    url = url + '?' + queryString;

    // make the master DIV where we'll put the widget and also we'll put the branding
    var divGHIN = document.createElement('DIV');
    divGHIN.style.lineHeight = "0px";
    divGHIN.id = "ghinwidget_div_GHIN_" + widget_count;
    divGHIN.style.width = width + 'px';
    divGHIN.style.textAlign = 'center';
    container.appendChild(divGHIN);

    //now get the DIV where the actual widget will reside.  This allows
    //us to use the DIV just above to "brand" our widget
    var divWidget = document.createElement('DIV');
    divWidget.id = "ghinwidget_div_widget_" + widget_count;
    divWidget.style.width = width + 'px';
    //if (dynamicHeight == 0)
    divWidget.style.height = height + 'px';
    divWidget.style.backgroundImage = 'url(' + mainurl + 'indicator.gif)';
    divWidget.style.backgroundRepeat = 'no-repeat';
    divWidget.style.backgroundPosition = 'center';

    //add the widget div to the parent div
    divGHIN.appendChild(divWidget);

    //inject the IFrame
    var iFrame = document.createElement('IFRAME');
    iFrame.id = "ghinwidget_iFrame_" + widget_count;
    iFrame.setAttribute("name", iFrame.id);
    iFrame.setAttribute("allowTransparency", "true");
    iFrame.setAttribute("hspace", "0");
    iFrame.setAttribute("vspace", "0");
    iFrame.setAttribute("marginHeight", "0");
    iFrame.setAttribute("marginWidth", "0");
    iFrame.setAttribute("border", "0");
    iFrame.setAttribute("scrolling", iFrameScrolling);
    iFrame.setAttribute("frameBorder", "0");
    iFrame.style.border = "0";
    iFrame.setAttribute('src', url);
    iFrame.setAttribute("width", width);
    iFrame.style.width = width + 'px';

    //if (dynamicHeight == 0) {
    iFrame.setAttribute("height", height);
    iFrame.style.height = height + 'px';
    //}

    // for firefox, we need to issue this onload.
    var szLoadAttrib = "document.getElementById('" + divWidget.id + "').style.backgroundImage = '';"

    // if height is 0, we want dynamic sizing
    if (dynamicHeight == 1)
        szLoadAttrib += "resizeIframe('" + iFrame.id + "', '" + divWidget.id + "');";

    iFrame.setAttribute("onload", szLoadAttrib);

    //add the iframe to it's div
    divWidget.appendChild(iFrame);

    //inject an image for the loading image
    if (container != document.body && (!container.style.width || container.style.width == ''))
        container.style.width = iFrame.style.width;

    // set this timeout call for IE
    setTimeout("checkIFrame('" + iFrame.id + "','" + divWidget.id + "', " + dynamicHeight + ");", 100);
}

// this method will decide, in IE if we can stop showing the loading message and also resize the iframe if needed
function checkIFrame(iframeID, divWidget, dynamicHeight) {
    var iFrame = document.getElementById(iframeID);
    if (iFrame) {
        if (iFrame.readyState != 'complete')
            setTimeout("checkIFrame('" + iframeID + "','" + divWidget + "', " + dynamicHeight + ");", 100);
        else {
            document.getElementById(divWidget).style.backgroundImage = '';
            if (dynamicHeight == 1)
                resizeIframe(iframeID, divWidget);
        }
    }
}

// determine firefox version    
var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
var FFextraHeight=parseFloat(getFFVersion)>=0.1? 11 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

function resizeIframe(frmID, divID) {
    var currentfr = document.getElementById(frmID);
    var currentdiv = document.getElementById(divID);

    if (currentfr && !window.opera) {
        currentfr.style.display = "block"
        if (currentfr.contentDocument && currentfr.contentDocument.body.offsetHeight) //ns6 syntax
        {
            currentfr.height = currentfr.contentDocument.body.offsetHeight + FFextraHeight;
            currentfr.style.height = currentfr.height + 'px';
            //currentfr.width = currentfr.contentDocument.body.offsetWidth + FFextraHeight;
            currentdiv.style.height = currentfr.height + 'px';
            //currentdiv.style.width = currentfr.width + 'px';

        }
        else if (currentfr.Document && currentfr.Document.body.scrollHeight) //ie5+ syntax
        {
            currentfr.height = currentfr.Document.body.scrollHeight + (currentfr.Document.body.offsetHeight - currentfr.Document.body.clientHeight);
            currentfr.style.height = currentfr.height + 'px';
            
            //currentfr.style.width = currentfr.Document.body.scrollWidth + (currentfr.Document.body.offsetWidth - currentfr.Document.body.clientWidth);
            currentdiv.style.height = currentfr.style.height;
            //currentdiv.style.width = currentfr.style.width;
        }
    }
}

function WidgetInfo_ScoreHistory() {
    url = mainurl + 'HandicapLookupResults.aspx';

    if (params['small'] && params['small'] == 1) {
        width = 454;
        height = 711;
    }
    else {
        width = 558;
        height = 752;
    }

    if (params['dynamic'] && params['dynamic'] == 1)
        dynamicHeight = 1;
    else
        dynamicHeight = 0;

    // if the widget hides the name, it then needs to remove 23 from it's height
    if (params['hidename'] && params['hidename'] == 1)
        height -= 23;

    if (params['showmsg'] && params['showmsg'] == 1)
        height += 24;

    if (params['showheader'] && params['showheader'] == 0)
        height += 19;

    if (params['showtabheader'] && params['showtabheader'] == 0)
        height += 14;

    // if the widget has the scrollbar changed, let's change the iframe size here.
     if (params['scrollheight'] && parseInt(params['scrollheight']))
        height += (parseInt(params['scrollheight']) - 70);
}

function WidgetInfo_GSIScoreHistory() {
    //url = 'http://dev.widgets.ghinconnect.com/GSIScoreHistory.aspx';
    //url = 'http://localhost:1446/GHINWidgets/GSIScoreHistory.aspx';
    url = mainurl + 'GSIScoreHistoryScroll.aspx';

    height = 592 //576;
    width = 740;
    dynamicHeight = 0;
}

function WidgetInfo_ContactInfo() {
    url = mainurl + 'ContactInfo.aspx';

    if (params['width'] && parseInt(params['width']) > 200)
        width = parseInt(params['width']);
    else
        width = 300;
    if (params['height'] && parseInt(params['height']) > 100)
        height = parseInt(params['height']);
    else
        height = 200;
    dynamicHeight = 0;
    iFrameScrolling = 'auto';
}

function WidgetInfo_EmailUpdate() {
    url = mainurl + 'Email.aspx';

    if (params['width'] && parseInt(params['width']) > 200)
        width = parseInt(params['width']);
    else
        width = 300;
    if (params['height'] && parseInt(params['height']) > 125)
        height = parseInt(params['height']);
    else
        height = 125;
    dynamicHeight = 0;
    iFrameScrolling = 'auto';
}

function WidgetInfo_ScorePosting() {
    url = mainurl + 'ScorePosting.aspx';

    if (params['width'] && parseInt(params['width']) > 250)
        width = parseInt(params['width']);
    else
        width = 400;
    if (params['height'] && parseInt(params['height']) > 300)
        height = parseInt(params['height']);
    else
        height = 575;
    dynamicHeight = 0;
    iFrameScrolling = 'auto';
}

function WidgetInfo_HandicapLookup() {
    url = mainurl + 'HandicapLookup.aspx';

    if (params['small'] && params['small'] == 1) {
        width = 454;
        height = 711;
    }
    else {
        width = 558;
        height = 752;
    }

//    if (params['dynamic'] && params['dynamic'] == 1)
//        dynamicHeight = 1;
//    else
        dynamicHeight = 0;

    //Change the height if needed
    if (params['showheader'] && params['showheader'] == 0)
        height += 19;
    
    iFrameScrolling = 'auto';
}

function WidgetInfo_HandicapLookupEntry() {
    url = mainurl + 'HandicapLookupEntry.aspx';

    if (params['small'] && params['small'] == 1) {
        width = 454;
        height = 711;
    }
    else {
        width = 558;
        height = 752;
    }

//    if (params['dynamic'] && params['dynamic'] == 1)
//        dynamicHeight = 1;
//    else
        dynamicHeight = 0;

    //Change the height if needed
    if (params['showheader'] && params['showheader'] == 0)
        height += 19;
    
    iFrameScrolling = 'auto';
}

function WidgetInfo_ScoreListing() {
    url = mainurl + 'ScoreListing.aspx';
    
    if (params['small'] && params['small'] == 1) {
        width = 454;
        if (params['scoretype'] && params['scoretype'].toLowerCase == 'tscores')
            height = 63;
        else
            height = 297;
    }
    else {
        width = 558;
        if (params['scoretype'] && params['scoretype'].toLowerCase == 'tscores')
            height = 69;
        else
            height = 357;
    }

    if (params['dynamic'] && params['dynamic'] == 1)
        dynamicHeight = 1;
    else
        dynamicHeight = 0;

    if (params['showheader'] && params['showheader'] == 0)
        height += 19;
}