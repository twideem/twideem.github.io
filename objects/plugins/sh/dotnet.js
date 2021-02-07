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
            {regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},
            {regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
            {regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
            {regex:/\b\d+\.?\w*/g,css:'value'},
            {regex:/^ *#.*/gm,css:'preprocessor'},
            {regex:new RegExp(this.getKeywords('abstract add as ascending async await base break by case catch checked class const continue default delegate descending do else enum equals event explicit extern false finally fixed for foreach from get goto group if implicit in interface internal is join let lock namespace new null on operator orderby out override params partial private protected public readonly ref remove return sealed select set sizeof stackalloc static struct switch this throw true try typeof unchecked unsafe using value virtual volatile when where while yield'),'gm'),css:'keyword'},
            {regex:new RegExp(this.getKeywords('bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void'),'gm'),css:'variable'}
        ]
    }
    Brush.prototype=new SyntaxHighlighter.Highlighter()
    Brush.aliases=['cs']
    SyntaxHighlighter.brushes.Cpp=Brush
    typeof(exports)!='undefined'?exports.Brush=Brush:null
})()