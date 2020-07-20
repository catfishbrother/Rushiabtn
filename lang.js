var arrLang = {
    "zh-ch": {
      "title": "欢迎来到Rushia吸毒网",
      "content": "觉得人生好难吗?工作下班回家好没动力吗?想要来点死灵法师吗?点下去吧！按下这些按钮并且大口大口的吸吧！",
      "聲音控制選項":"声音控制选项",
      "stop":"暂停",
      "可愛可愛愛":"可爱可爱爱",
      "叫啊!":"叫啊!",
      "名言佳句":"名言佳句",
      "粽子唱歌":"粽子唱歌",
      "自我介紹": "自我介紹",
      "波音波音波音":"波音波音波音",
      "nanodesu":"nanodesu",
      "阿呀呀":"阿呀呀",
      "大哥哥大姊姊":"大哥哥大姊姊",
      "我回來了":"我回来了",
      "喵":"喵",
      "我愛你":"我爱你",
      "大騙子":"大骗子",
      "RushiRushi":"RushiRushi",
      "JOJOJOJO":"JOJOJOJO",
      "神啊!":"神啊!",
      "RRRRRRRR":"RRRRRRRR",
      "RRRRRRRR2":"RRRRRRRR.2",
      "@$%^#%^@@":"@$%^#%^@@",
      "開甚麼玩笑!!!!(耳膜注意)":"开什么玩笑!!!!(耳膜注意)",
      "為什麼騙我 吶!":"为什么骗我 呐!",
      "你是誰?":"你是谁?",
      "約定好了啊":"约定好了啊",
      "認清現實吧":"认清现实吧",
      "看啊!看啊!":"看啊!看啊!",
      "你給我記住":"你给我记住",
      "永不放棄":"永不放弃",
      "起床鬧鐘":"起床闹钟",
      "別認輸":"别认输",
    },
    "zh-tw": {
      "title": "歡迎來到Rushia吸毒網",
      "content": "覺得人生好難嗎?工作下班回家好沒動力嗎?想要來點死靈法師嗎?點下去吧！按下這些按鈕並且大口大口的吸吧！",
      "聲音控制選項":"聲音控制選項",
      "stop":"暫停",
      "可愛可愛愛":"可愛可愛愛",
      "叫啊!":"叫啊!",
      "名言佳句":"名言佳句",
      "粽子唱歌":"粽子唱歌",
      "自我介紹": "自我介紹",
      "波音波音波音":"波音波音波音",
      "nanodesu":"nanodesu",
      "阿呀呀":"阿呀呀",
      "大哥哥大姊姊":"大哥哥大姊姊",
      "我回來了":"我回來了",
      "喵":"喵",
      "我愛你":"我愛你",
      "大騙子":"大騙子",
      "RushiRushi":"RushiRushi",
      "JOJOJOJO":"JOJOJOJO",
      "神啊!":"神啊!",
      "RRRRRRRR":"RRRRRRRR",
      "RRRRRRRR2":"RRRRRRRR.2",
      "@$%^#%^@@":"@$%^#%^@@",
      "開甚麼玩笑!!!!(耳膜注意)":"開甚麼玩笑!!!!(耳膜注意)",
      "為什麼騙我 吶!":"為什麼騙我 吶!",
      "你是誰?":"你是誰?",
      "約定好了啊":"約定好了啊",
      "認清現實吧":"認清現實吧",
      "看啊!看啊!":"看啊!看啊!",
      "你給我記住":"你給我記住",
      "永不放棄":"永不放棄",
      "起床鬧鐘":"起床鬧鐘",
      "別認輸":"別認輸",
    },
    "en-gb":{
      "title": "Welcome to Rushia Drug Network",
      // "content": "Do you think life is so difficult? Is it so unmotivated to go home from get off work? Do you want some necromancer? Click it! Press these buttons and suck it!",
      // "聲音控制選項":"Sound control options",
      // "stop":"Stop",
      // "可愛可愛愛":"Cute",
      // "叫啊!":"Roar!",
      // "名言佳句":"Inspirational quotes",
      // "粽子唱歌":"Zongzi singing",
      // "自我介紹": "Self introduction",
      // "波音波音波音":"BoingBoingBoing",
      // "nanodesu":"nanodesu",
      // "阿呀呀":"Ayah",
      // "大哥哥大姊姊":"Brother and sister",
      // "我回來了":"I am back",
      // "喵":"Meow~",
      // "我愛你":"I love you",
      // "大騙子":"Cheater",
      // "RushiRushi":"RushiRushi",
      // "JOJOJOJO":"JOJOJOJO",
      // "神啊!":"God!",
      // "RRRRRRRR":"RRRRRRRR",
      // "RRRRRRRR2":"RRRRRRRR.2",
      // "@$%^#%^@@":"@$%^#%^@@",
      // "開甚麼玩笑!!!!(耳膜注意)":"What a joke!!!!(Eardrum attention)",
      // "為什麼騙我 吶!":"Why lie to me na!",
      // "你是誰?":"Who are you?",
      // "約定好了啊":"It's agreed",
      // "認清現實吧":"Recognize reality",
      // "看啊!看啊!":"Look! Look!",
      // "你給我記住":"Just you remember",
      // "永不放棄":"Never give up",
      // "起床鬧鐘":"Wake up alarm clock",
      // "別認輸":"Don't give up",
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