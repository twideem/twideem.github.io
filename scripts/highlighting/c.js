(function(){
	typeof(require)!='undefined'?SyntaxHighlighter=require('shCore').SyntaxHighlighter:null;

	function Brush()
	{
		this.regexList=[
			{regex:SyntaxHighlighter.regexLib.singleLineCComments,css:'comments'},
			{regex:SyntaxHighlighter.regexLib.multiLineCComments,css:'comments'},
			{regex:SyntaxHighlighter.regexLib.doubleQuotedString,css:'string'},
			{regex:SyntaxHighlighter.regexLib.singleQuotedString,css:'string'},
			{regex:/\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,css:'value'},
			{regex:/^ *#.*/gm,css:'preprocessor'},
			{regex:new RegExp(this.getKeywords('auto break case const continue default do else enum extern for goto if NULL register return sizeof static struct switch typedef union volatile while'),'gm'),css:'keyword'},
			{regex:new RegExp(this.getKeywords('char double float int long short signed unsigned void'),'gm'),css:'variable'},
			{regex:new RegExp(this.getKeywords('main assert isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper errno localeconv setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell fwrite getc getchar gets perror printf putc putchar puts remove rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs mbtowc qsort rand realloc srand strtod strtol strtoul system wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr strcmp strcoll strcpy strcspn strerror strlen strncat strncmp strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime clock ctime difftime gmtime localtime mktime strftime time _sleep'),'gm'),css:'functions'}
		];
	};

	Brush.prototype=new SyntaxHighlighter.Highlighter();
	Brush.aliases=['c'];
	SyntaxHighlighter.brushes.Cpp=Brush;
	typeof(exports)!='undefined'?exports.Brush=Brush:null;
})();