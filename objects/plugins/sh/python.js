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
		this.regexList=[
			{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:'comments'},
			{regex:/^\s*@\w+/gm,css:'decorator'},
			{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
			{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
			{regex:/(['\"]{3})([^\1])*?\1/gm,css:'string'},
			{regex:/\b\d+\.?\w*/g,css:'value'},
			{regex:new RegExp(this.getKeywords('and as assert break class continue def del elif else except exec finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'),'gmi'),css:'keyword'},
			{regex:new RegExp(this.getKeywords('None True False cls class_ self'),'gm'),css:'constants'},
			{regex:new RegExp(this.getKeywords('__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip'),'gm'),css:'functions'}

		]
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)
	}
	Brush.prototype=new SyntaxHighlighter.Highlighter()
	Brush.aliases=['py','python']
	SyntaxHighlighter.brushes.Python=Brush
	typeof(exports)!='undefined'?exports.Brush=Brush:null
})()