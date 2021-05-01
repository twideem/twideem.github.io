addEventListener('keydown',function(x){
    switch(x.which){
        case 'Admin'.charCodeAt(0):
            location.href='https://github.com/twideem/twideem.github.io/tree/master/'
            break
        case 'Clean'.charCodeAt(0):
            localStorage.removeItem('Xfile')
            break
        case 'Drive'.charCodeAt(0):
            location.href='https://onedrive.live.com'
            break
        case 'Emulator'.charCodeAt(0):
            location.href='pages/bluesky/index.html#anchor'
            break
        case 'Game'.charCodeAt(0):
            location.href='https://igg-games.com'
            break
        case 'Home'.charCodeAt(0):
            location.href='home.html#anchor'
            break
        case 'Lotto'.charCodeAt(0):
            location.href='https://www.nongli.info/huangli/'
            break
        case 'Mail'.charCodeAt(0):
            location.href='https://outlook.live.com'
            break
        case 'ROMs'.charCodeAt(0):
            location.href='https://wowroms.com/en/all-roms/'
            break
        case 'Testcase'.charCodeAt(0):
            if(!Web.hosting()) location.href='../localhost/objects/testcase/chapter.html'
            break
        case 'Unicode'.charCodeAt(0):
            location.href='pages/overcast/20140717A.html'
            break
        case 'Watch'.charCodeAt(0):
            location.href='pages/overcast/18850901A.html'
            break
        case 'Xfile'.charCodeAt(0):
            if(!localStorage.Xfile) localStorage.Xfile=prompt('請設定網址，日後可按 C 鍵清除資料：','pages/instantcoffee/20061211A.html')
            location.href=localStorage.Xfile
    }
})