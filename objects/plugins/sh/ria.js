/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 *
 * @declaration
 * 本原始碼程式已經過 Twideem Civs 修改，改爛的部份是我個人偏好，與原作者無關。
 * 原本程式碼是很嚴謹的，使用 strict equality operators 比對資料，且兼具可讀性，使用 explaining variable 解釋邏輯。
 */
;(function(){
    typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null
    function Brush(){
        function process(match){
            var constructor=SyntaxHighlighter.Match,code=match[0],tag=new XRegExp('(&lt;|<)[\\s\\/\\?]*(?<name>[:\\w-\\.]+)','xg').exec(code),result=[]
            if(match.attributes!=null){
                var attributes,regex=new XRegExp('(?<name> [\\w:\\-\\.]+)\\s*=\\s*(?<value> ".*?"|\'.*?\'|\\w+)','xg')
                while(eval(attributes=regex.exec(code))){
                    result.push(new constructor(attributes.name,match.index+attributes.index,'variable'))
                    result.push(new constructor(attributes.value,match.index+attributes.index+attributes[0].indexOf(attributes.value),'string'))
                }
            }
            if(tag!=null) result.push(new constructor(tag.name,match.index+tag[0].indexOf(tag.name),'keyword'))
            return result
        }
        this.regexList=[
            {regex:new XRegExp('(\\&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](\\&gt;|>)','gm'),css:'color1'},
            {regex:SyntaxHighlighter.regexLib.xmlComments,css:'comments'},
            {regex:new XRegExp('(&lt;|<)[\\s\\/\\?]*(\\w+)(?<attributes>.*?)[\\s\\/\\?]*(&gt;|>)','sg'),func:process}
        ]
    }
    Brush.prototype=new SyntaxHighlighter.Highlighter()
    Brush.aliases=['htm','html','xml']
    SyntaxHighlighter.brushes.Xml=Brush
    typeof(exports)!='undefined'?exports.Brush=Brush:null
})()
;(function(){
    typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null
    function Brush(){
        function getKeywordsCSS(str){
            return '\\b([a-z_]|)'+str.replace(/ /g,'(?=:)\\b|\\b([a-z_\\*]|\\*|)')+'(?=:)\\b'
        }
        function getValuesCSS(str){
            return '\\b'+str.replace(/ /g,'(?!-)(?!:)\\b|\\b()')+'\:\\b'
        }
        this.regexList=[
            {regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},
            {regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
            {regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
            {regex:/\#[a-fA-F0-9]{3,6}/g,css:'value'},
            {regex:/(-?\d+)(\.\d+)?(px|em|pt|\:|\%|)/g,css:'value'},
            {regex:/!important/g,css:'color1'},
            {regex:new RegExp(getKeywordsCSS('ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border bottom cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height left letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes right richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align top text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index'),'gm'),css:'keyword'},
            {regex:new RegExp(getValuesCSS('above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow'),'g'),css:'value'},
            {regex:new RegExp(this.getKeywords('[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif [cC]ourier mono sans serif'),'g'),css:'variable'}
        ]
        this.forHtmlScript({left:/(&lt;|<)\s*style.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*style\s*(&gt;|>)/gi})
    }
    Brush.prototype=new SyntaxHighlighter.Highlighter()
    Brush.aliases=['css']
    SyntaxHighlighter.brushes.CSS=Brush
    typeof(exports)!='undefined'?exports.Brush=Brush:null
})()
;(function(){
    typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null
    function Brush(){
        var r=SyntaxHighlighter.regexLib
        this.regexList=[
            {regex:r.singleLineCComments,css:'comments'},
            {regex:r.multiLineCComments,css:'comments'},
            {regex:r.multiLineDoubleQuotedString,css:'string'},
            {regex:r.multiLineSingleQuotedString,css:'string'},
            {regex:/(`)([^\1])*?\1/gm,css:'string'},
            {regex:/(\/)([^\1])*?\1/gm,css:'string'},
            {regex:/\b\d+\.?\w*/g,css:'value'},
            {regex:new RegExp(this.getKeywords('await async break case catch continue default delete do else export extends false finally for if import in instanceof new of return super switch this throw true try typeof undefined void while with yield'),'gm'),css:'keyword'},
            {regex:new RegExp(this.getKeywords('class const function let var'),'gm'),css:'variable'},
        ]
        this.forHtmlScript(r.scriptScriptTags)
    }
    Brush.prototype=new SyntaxHighlighter.Highlighter()
    Brush.aliases=['es','js']
    SyntaxHighlighter.brushes.ECMAScript=Brush
    typeof(exports)!='undefined'?exports.Brush=Brush:null
})()
;(function(){
    typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null
    function Brush(){}
    Brush.prototype=new SyntaxHighlighter.Highlighter()
    Brush.aliases=['txt','text']
    SyntaxHighlighter.brushes.Plain=Brush
    typeof(exports)!='undefined'?exports.Brush=Brush:null
})()