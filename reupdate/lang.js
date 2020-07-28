var arrLang = {
    "zh-ch": {
        "renew":"2020.6.29，目前为半成品，持续更新中，对不起我就烂(┛`д´)┛",
        "renew2":"2020.6.30 试着用google drive分享此网成功了，目前只有获取此网址的人能使用此网",
        "renew3":"2020.7.1 UI优化，新增免责声明",
        "renew4":"2020.7.2 UI再优化，新增背景图作者连结、少许音档",
        "renew5":"2020.7.3 更改按钮样式，增加文字清析度​​，新增8个按钮",
        "renew6":"2020.7.13 新增网域并藉由github同步更新",
        "renew7":"2020.7.14 修正navbar跑位问题",
        "renew8":"2020.7.15 新增全声音的控制鈕&少许音档",
        "renew9":"2020.7.19 新增简繁语言转换",
        "renew10":"2020.7.28 新增开台&关台动画",
        "renew0":"更新日誌"

    },
    "zh-tw" :{
        "renew":"2020.6.29，目前為半成品，持續更新中，對不起我就爛(┛`д´)┛",
        "renew2":"2020.6.30 試著用google drive分享此網成功了，目前只有獲取此網址的人能使用此網",
        "renew3":"2020.7.1 UI優化，新增免責聲明",
        "renew4":"2020.7.2 UI再優化，新增背景圖作者連結、少許音檔",
        "renew5":"2020.7.3 更改按鈕樣式，增加文字清析度，新增8個按鈕",
        "renew6":"2020.7.13 新增網域並藉由github同步更新",
        "renew7":"2020.7.14 修正navbar跑位問題",
        "renew8":"2020.7.15 新增全聲音的控制鈕&少許音檔",
        "renew9":"2020.7.19 新增簡繁語言轉換",
        "renew10":"2020.7.28 新增開台&關台動畫",
        "renew0":"更新日誌"
    },
    "en-gb":{
        "renew":"2020.6.29，It is currently a semi-finished product and is being updated continuously. I'm suck(┛`д´)┛",
        "renew2":"2020.6.30 I tried to share this website with google drive successfully. At present, only people who get this URL can use this website",
        "renew3":"2020.7.1 UI optimization, new disclaimer",
        "renew4":"2020.7.2 UI is re-optimized, adding a link to the author of the background image and a few audio files",
        "renew5":"2020.7.3 Change the button style, increase text clarity, and add 8 buttons",
        "renew6":"2020.7.13 Add domains and update them via github",
        "renew7":"2020.7.14 Fixed navbar problem",
        "renew8":"2020.7.15 Added full-sound control buttons & some audio files",
        "renew9":"2020.7.19 Added simplified and traditional language conversion",
        "renew10":"2020.7.28 Added opening & closing animation",
        "renew0":"Update log",
    }
};

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
})