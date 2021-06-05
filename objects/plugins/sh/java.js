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
			{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},
			{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},//{regex:/\/\*([^\*][\s\S]*)?\*\//gm,css:'comments'},
			{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
			{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
			{regex:/\b\d+\.?\w*/g,css:'value'},
			{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:'preprocessor'},
			{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:'preprocessor'},
			{regex:/\@interface\b/g,css:'preprocessor'},
			{regex:new RegExp(this.getKeywords('abstract assert break case catch class const continue default do double else enum extends false final finally for goto if implements import instanceof interface native new null package private protected public return static strictfp super switch synchronized this throw throws true transient try volatile while'),'gm'),css:'keyword'},
			{regex:new RegExp(this.getKeywords('boolean byte char float int long short void'),'gm'),css:'variable'},
			{regex:new RegExp(this.getKeywords('Appendable AutoCloseable CharSequence Cloneable Comparable Iterable Readable Runnable Boolean Byte Character Class ClassLoader ClassValue Compiler Double Enum Float InheritableThreadLocal Integer Long Math Number Object Package Process ProcessBuilder Runtime RuntimePermission SecurityManager Short StackTraceElement StrictMath String StringBuffer StringBuilder System Thread ThreadGroup ThreadLocal Throwable Void Exception'),'gm'),css:'functions'}
		]
		this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g})
	}
	Brush.prototype=new SyntaxHighlighter.Highlighter()
	Brush.aliases=['java']
	SyntaxHighlighter.brushes.Java=Brush
	typeof(exports)!='undefined'?exports.Brush=Brush:null
})()