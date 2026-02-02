(function(){
	typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null;

	function Brush()
	{
		this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},
						{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},
						{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
						{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
						{regex:/\b\d+\.?\w*/g,css:'value'},
						{regex:/^ *#.*|^ *\[.*\]/gm,css:'preprocessor'},
						{regex:new RegExp(this.getKeywords('abstract add as ascending async await base break by case catch checked class const continue default delegate descending do else enum equals event explicit extern false finally fixed for foreach from get global goto group if implicit in interface internal is join let lock namespace new null on operator orderby out override params partial private protected public readonly ref remove return sealed select set sizeof stackalloc static struct switch this throw true try typeof unchecked unsafe using virtual volatile when where while yield'),'gm'),css:'keyword'},
						{regex:new RegExp(this.getKeywords('bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void'),'gm'),css:'variable'},
						{regex:new RegExp(this.getKeywords('args value'),'gm'),css:'constants'},
						{regex:/(&amp;)|(&lt;)|(&gt;)|(!)|(\*)|(\^)|(\{)|(\})|(\[)|(\])|(\()|(\))|[-=+|;:,./]/g,css:'symbol'}];
	}

	Brush.prototype=new SyntaxHighlighter.Highlighter();
	Brush.aliases=['cs'];
	SyntaxHighlighter.brushes.Cpp=Brush;
	typeof(exports)!='undefined'?exports.Brush=Brush:null;
})();