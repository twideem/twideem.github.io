(function(){
	typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null;

	function Brush()
	{
		this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},
						{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},
						{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
						{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
						{regex:/\b\d+\.?\w*/g,css:'value'},
						{regex:/\/\*(?!\*\/)\*[\s\S]*?\*\//gm,css:'preprocessor'},
						{regex:/(?!\@interface\b)\@[\$\w]+\b/g,css:'preprocessor'},
						{regex:/\@interface\b/g,css:'preprocessor'},
						{regex:new RegExp(this.getKeywords('abstract assert break case catch class const continue default do double else enum extends false final finally for goto if implements import instanceof interface native new null package permits private protected public record return sealed static strictfp super switch synchronized this throw throws true transient try volatile while'),'gm'),css:'keyword'},
						{regex:new RegExp(this.getKeywords('boolean Bloolean byte Byte char Character double Double float Float int Integer long Long Object short Short String var void'),'gm'),css:'variable'},
						{regex:/(&amp;)|(&lt;)|(&gt;)|(!)|(\*)|(\^)|(\{)|(\})|(\[)|(\])|(\()|(\))|[-=+|;:,./]/g,css:'symbol'}];
		this.forHtmlScript({left:/(&lt;|<)%[@!=]?/g,right:/%(&gt;|>)/g});
	}

	Brush.prototype=new SyntaxHighlighter.Highlighter();
	Brush.aliases=['java'];
	SyntaxHighlighter.brushes.Java=Brush;
	typeof(exports)!='undefined'?exports.Brush=Brush:null;
})();