(function(){
	typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null;

	function Brush()
	{
		this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:'comments'},
						{regex:/^\s*@\w+/gm,css:'decorator'},
						{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
						{regex:/([\"]{1,3})([^\1])*?\1/gm,css:'string'},
						{regex:/\b\d+\.?\w*/g,css:'value'},
						{regex:new RegExp(this.getKeywords('and as assert break class continue def del elif else except exec finally for from global if import in is lambda nonlocal not or pass raise return try while with yield'),'gmi'),css:'keyword'},
						{regex:new RegExp(this.getKeywords('None True False cls class_ self'),'gm'),css:'constants'},
						{regex:new RegExp(this.getKeywords('__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip'),'gm'),css:'functions'},
						{regex:/(&amp;)|(&lt;)|(&gt;)|(!)|(\*)|(\^)|(\{)|(\})|(\[)|(\])|(\()|(\))|[-=+|;:,./]/g,css:'symbol'}];
		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	}

	Brush.prototype=new SyntaxHighlighter.Highlighter();
	Brush.aliases=['py'];
	SyntaxHighlighter.brushes.Python=Brush;
	typeof(exports)!='undefined'?exports.Brush=Brush:null;
})();