$(document).ready(function() {

    //若想從另一個地方讀js的話
    // $.getScript("js/vueTemplate.js", function() {

    //     console.log('從這載入vueTemplate.js，好讓語言讀到');

    // });


    var app = new Vue({
        el: 'h4#welcome',
        data: {
            message: 'Welcome to The World', //只能用message
        }
    })


    // register modal component
    Vue.component('modal', {
        template: '#modal-template'
    })

    // start app
    new Vue({
        el: '#app',
        data: {
            showModal: false
        }
    })

    new Vue({
        el: "#apptest",
        data() {
            return {
                messages: ['hello', 'vue', 'js'],
                bios: [{
                        num:0,
                        target:"#otherDemos0",
                        image: 'img/udacity-resume.png',
                        url: '../udacity-resume',
                        source: 'https://github.com/chyren0305/udacity-resume',
                        sourceHref:'ProjectsTitle.github',
                        close:'option.close'
                    },
                    
                    { 
                        num:1,                      
                        target:'#otherDemos1',                      
                        image: 'img/udacity-game.png',
                        url: '../udacity-game',
                        source: 'https://github.com/chyren0305/udacity-game',
                        sourceHref:'ProjectsTitle.github',                        
                        close:'option.close'                                                
                    },
                    
                    {   
                        num:2,                      
                        target:'#otherDemos2',                      
                        image: 'img/rwd.png',
                        url: 'udacity-rwd',
                        source:'https://github.com/chyren0305/udacity-rwd',
                        sourceHref:'ProjectsTitle.github',                      
                        close:'option.close'                        

                    },
                    {   
                        num:3,                      
                        target:'#otherDemos3',                      
                        image: 'img/calculator.png',
                        url: 'https://codepen.io/Chyren0305/project/full/AdgvrX/',
                        source:'https://codepen.io/Chyren0305/project/editor/AdgvrX/',
                        sourceHref:'ProjectsTitle.codepen',                     
                        close:'option.close'                        

                    },
                    {   
                        num:4,                      
                        target:'#otherDemos4',                      
                        image: 'img/randomQuote.png',
                        url: 'https://chyren0305.github.io/RandomQuote/',
                        source:'https://github.com/Chyren0305/RandomQuote/',
                        sourceHref:'ProjectsTitle.github',                     
                        close:'option.close'                        

                    },
                    {   
                        num:5,                      
                        target:'#otherDemos5',                      
                        image: 'img/catClick.png',
                        url: '../udacity-game',
                        source:'#',
                        sourceHref:'ProjectsTitle.github',                     
                        close:'option.close'                        

                    },


                ]
            }
        }
    });



    //初始化 語言
    languageInit()





    $('.lang').click(function() {
        var lang = $(this).attr('data-lang');
        i18n.init({
            lng: lang
        }, function(t) {
            $(document).i18n()
        });
    });

    DemoTemplate(languageInit('zh_TW'))







});


//各個功能
function languageInit(lang) {




    i18n.init({
        load: 'current',
        lng: lang,
        resStore: resources,
        fallbackLng: lang,
        // debug:true
    }, function(t) {

        $(document).i18n()

    })
}

//作品模版 使用jQuery
function DemoTemplate() {
    //Demo

    $.getJSON("js/contact.json", function(data) {

        //難怪說JQuery難維護 一旦版型改變就難弄了這...
        var infoHtml = '';
        $.each(data, function(template, detail) {

            infoHtml += '<div class="col-sm-4 blur"> ';
            // h4
            infoHtml += '<h4><a href="' + detail.href + '"';
            infoHtml += 'data-i18n="projects.' + template + '.href" target="_blank"></a></h4>';
            //img
            infoHtml += '<img src="' + detail.mainImg + '" class="img-responsive href" data-toggle="modal" data-target="#project' + template + '">';
            // h4
            infoHtml += '<h4 data-i18n="projects.' + template + '.title"></h4></div>';

            //modal    
            infoHtml += '<div class="modal fade" id="project' + template + '" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">';

            //dialog
            infoHtml += '<div class="modal-dialog"><div class="modal-content"><div class="modal-header">';
            // h4
            infoHtml += '<h4 class="modal-title" id="myModalLabel" data-i18n="projects.' + template + '.about"></h4></div>';

            //body
            infoHtml += '<div class="modal-body"><a href="' + detail.href + '" target="_blank">';
            infoHtml += '<img class="img-responsive" src="' + detail.img + '"></a><p data-i18n="projects.' + template + '.content"></p></div>';

            //footer            
            infoHtml += '<div class="modal-footer">' +
                '<button type="button" class="btn btn-default" data-dismiss="modal" data-i18n="option.close">Close</button>' + '</div></div></div></div>';

        });

        // modal


        $('#allProject').html(infoHtml);

        $("#allProject").i18n();
    });


}

// http://140.115.236.72/demo-personal/YD802/web/C1400155/code/demo/GoogleMap_Me.html GoogleMe
// https://bit.ly/2pZaELA

//內容
var resources = {
    "zh_TW": {
        "translation": {
            "title": "ColorFuel",
            "name": "",
            "job": "流水下山非有意，片雲歸洞本無心；<br/>人生若得如雲水，鐵樹開花遍界春。",
            "menu": ["關於我", "作品集", "題庫本", "微專案", "聯絡我"],
            "ProjectsTitle": {
                "aboutme": "關於我",
                "title": "作品",
                "online": "題庫本",
                "udacity": "微專案",
                "contact": "聯絡我",
                "github": "GitHub",
                "codepen": "codepen",
                "demo": "一些作品"
            },
            "option": {
                "open": "開啟",
                "close": "關閉",
                "submit": "送出",
                "reset": "重設"
            },
            "contact": {
                "name": "姓名",
                "email": "電子郵件",
                "phone": "電話",
                "msn": "留言"

            },
            "article":{
                "title":"出生於新竹市，中小學時成長於苗栗頭份，高中在新竹，大學則在桃園，兒時至今，總喜歡偶爾隨意畫個插畫，總想了解世界萬物的運作原理。結果就是小時候很多東西被我拆開，有組裝回去的，也有因此而壞掉的。因喜歡機器人，而主修科目為機械系，畢業後輾轉流連於各地工作。"+
                        "其興趣廣泛，不只機器人，也熱愛布袋戲，平時也愛看運動比賽跟科幻類影劇，是一個喜好運動與聽故事的客家子弟！", 
                "begin":"在<a href='https://bit.ly/2pZaELA' target='_blank'>這裡</a>是我生長場所，以前這裡只是個小鎮，隨著各種發展，日前它也變成苗栗唯二人口增長的場所。" +
                          "都市發發展有好有壞，但也由於發展讓這裡許多事便利許多，由於近年來網路快速發展，現今也比較喜歡在網路上漫遊而非出遠遊，但一旦出門旅遊，也不願走馬看花，寧可細細品嚐旅程中各種滋味，看盡那人生百態。"+
                        "在人生的道路上，每個人的人生旅程不盡相同，有很多人很早的時候就知道自己想幹什麼，也有很多人在尋尋覓覓，在那乍暖還寒之時，才驚覺那人終在燈火闌珊處"+
                        "；而我，大概，就是屬於後者。",
                "middle": "為何開始想做這些呢？ 因近年科技進步，網路日新月異，開始想了解資訊相關議題。人生在世，也想留下什麼，創造什麼，所以" + 
                          "個人未來目標：希望可以將LeetCode、Paiza、FreeCodeCamp的題庫完成5成以上" +
                          "，學會使用推薦系統與自動化處理。", 

                "end":"<h6><i>Maybe Someday the World has Forgotten People, People has also Forgotten Me<i></h6>" + 
                      "<h6><i>and least leave these stuff, Only To Prove I have existed and there have been traces in this World!<i></h6>"
            }, 



            //作品
            "projects": [{
                "title": "資策會個人作品",
                "href": "山貓美式餐廳",
                "about": "這是在資策會第一個作品",
                "content": "此作品是我正式學會何謂HTML5與CSS3，也第一次聽聞JQuery這個library!可能對專家來說，這並不是個好作品，但對初學者來說，這是本人第一個完成的作品。"

            }, {
                "title": "資策會團體專題",
                "href": "走吧~旅行社!",
                "about": "關於日本自助遊專題網站",
                "content": "這個專題為使每個人都會負責前端跟後端部份，各分配一部份給人做，最初資料庫規規畫與各個使用者設計流程討論完，再將依分配的部份與其各自組員互相配合。我是負責旅遊分享的部份與後端資料的部份。"

            }, {
                "title": "版本控制系統",
                "href": "我個人的GitHub",
                "about": "關於Git與GitHub",
                "content": "進資策會前，曾到過github的網站，那時並不清楚是做什麼用的，直到資策會的友人告訴我後，才漸漸認真學這個。之後專案工作，也有用到這個，算是惠我良多。"
            }, {
                "title": "投票網站",
                "href": "投票吧",
                "about": "關於這個投票吧",
                "content": "這是今年過年完，買了跟django相關的書，三月開始練習的投票網站，"+
                            "也由於這個專案對於MVC架構與python的後端框架有更進一步的認識，"+
                            "在這裡學習到什麼叫做ORM，也在這裡學會使用unbuntu系統與如何在Heroku上線"
            }, {
                "title": "線上直播",
                "href": " Youtube線上直播",
                "about": "為何要做這",
                "content": "只是個人私心想把常看的電視頻道方便拿來看而已，藉由這個專案對python的Django更為熟悉"
            }, {
                "title": "laravel部落格",
                "href": "laravel部落格",
                "about": "關於這個laravel部落格",
                "content": "由於月月友說要學，跟著一起學的，不過貌似他忙於工作，最後自己一個人完成了些許部份，"+
                           "在這裡專案學到了如何使用laravel，明白什麼是現代PHP，也試著實作CRUD。目前這個網站尚末加入SSL，非必要請勿隨意登入！", 
            }, {
                "title": "樂心牙醫",
                "href": "線上演示",
                "about": "關於這個網站",
                "content": ""
            }, {
                "title": "運動日誌",
                "href": "線上演示",
                "about": "關於響應式網頁",
                "content": ""
            }],

            //demo
            "QuizBanks": [{
                "title": "Codecademy",
                "href": "我的codecademy學習歷程",
                "about": "關於Codecademy",
                "content": "進資策會前，我到了這個網站，這也開啟我的前端旅程，這個如遊戲般又較簡單易上手的學習網站，讓人上癮，之後才決定進入資策會與其他相關學習資源徹底學習！"
            }, {
                "title": "FreeCodeCamp",
                "href": "我的FreeCodeCamp學習歷程",
                "about": "關於FreeCodeCamp",
                "content": "2015年冬季時節，上了某社群網站看到有人分享了這個網站，於是乎，決定從2016年就拿來這個當每個星期的作業練習！"
            },{
                "title": "Paiza",
                "href": "日本語言學習站-paiza",
                "about": "關於Paiza",
                "content": "這是日本的一個學習程式語言的網站，裡面也有遊戲化的學習，有興趣可以試一試。"
            },{
                "title": "LeetCode",
                "href": "軟體工程師的面試題庫",
                "about": "關於LeetCode",
                "content": "這個網站大概是軟體工程師都大約聽過，就不多介紹了！"
            }],
            "otherDemos": [{
                "title": "線上互動履歷",
                "href": "互動履歷",
                "about": "關於互動履歷",
                "content": "這個互動履歷目前只有英文版，它是由udacity課程Javascript Basics裡的作業教學，所完成的一個專案。"
            }, {
                "title": "青蛙過河小遊戲",
                "href": "線上演示",
                "about": "關於小遊戲",
                "content": "這個HTML5的青蛙過小遊戲是由udacity課程object oriented javascript裡教學做出來的，在這裡我學會了canvas與一些簡單的設計模式。此遊戲只能在電腦上玩。按鍵盤上下鍵。"
            }, {
                "title": "響應式網頁",
                "href": "線上演示",
                "about": "關於響應式網頁",
                "content": "這個響應式部落格網頁是由udacity課程Response Images與RWD兩個課程介紹，主要是RWD的作業，在這裡我學會使用grunt以及如何將圖片更有效利用與最佳化。不過主要只有圖片最佳化。"
            }, {
                "title": "計算機",
                "href": "線上演示",
                "about": "關於這個計算機",
                "content": "這是那個freecodecamp的課程作業，因為做了這個有大致了解計算機原理，雖然不是指電腦的..."
            }, {
                "title": "隨機名言錄",
                "href": "線上演示",
                "about": "關於這個隨機名言錄",
                "content": "這也是那個freecodecamp的課程作業，原課程是使用jquey，這裡因想練習vue因而混搭使用"
            }, {
                "title": "貓貓點擊去",
                "href": "線上演示",
                "about": "關於這個小作品",
                "content": "這是來自udacity的作品，大約是2015下旬做的，藉由這個我總算對MVC架構有些許了解..."
            }],
            "valueTrans": "值"
        }
    },
    "en": {
        "translation": {
            "title": "My Portfolio",
            "name": "Chyren Huang",
            "job": "Front-end Ninja",
            "menu": ["About", "Project", "Quiz", "Demo", "Contact"],
            "ProjectsTitle": {
                "aboutme": "About Me",
                "title": "Portfolio",
                "online": "OnlineCourse Homework",
                "udacity": "OnlineCourse Projects",
                "contact": "Contact"
            },
            "option": {
                "open": "open",
                "close": "close",
                "submit": "submit",
                "reset": "reset"
            },
            "contact": {
                "name": "Name",
                "email": "E-mail",
                "phone": "TelePhone",
                "msn": "Messenger"

            },
            "article":{
                "title":
                        "Hi, This is Huang, I was born in HsingChu, Taiwan and grew up in Miaoli called Mountain city, As the word meaning" + 
                        ", There are many Moutain in this, if you like Moutain, you must visit it."+
                        "<a href='https://bit.ly/2pZaELA' target='_blank'> there </a>" +
                        " is my living place in childhood" ,
                "begin":"My interests are manifold. I like painting and sports, and  Listen to a wide variety of the story in the world. I found the way which " +
                        "let me do everything, that is creative. so i have decided to creative those I want and I could But...",        

                "middle": "Sorry about that! I don't have good experience and educational background, " +
                        "All the things I could do, Only I have to put even a little on a little," + 
                        " and do this often and often, then make this would become bigger and bigger",        

                "end":"<h6><i>Maybe Someday the World has Forgotten People, People has also Forgotten Me<i></h6>" + 
                      "<h6><i>and least leave these stuff, Only To Prove I have existed and there have been traces in this World!<i></h6>"
            },
            "projects": [{
                "title": "The past!",
                "href": "Q_Q My Bad portfolio!",
                "about": "The Past WebPage",
                "content": " This was my first project in this class. I learned a lot about HTML and CSS.and I know how to use the Javascript!This is a Bad portfolio! And those photos are not my own created! 0rzzzz!!!"

            }, {
                "title": "Japan travel",
                "href": "Team Work for iii",
                "about": "TeamWork for iii learning",
                "content": " This was my first project in this class. I learned a lot about HTML and CSS."
            }, {
                "title": "Now CAT to Git",
                "href": "Link to github",
                "about": "Git and GitHub",
                "content": " This was my github. :D In 2014 I learned so many about git and github!"
            }, {
                "title": "VoteBar",
                "href": "this is a voteSite",
                "about": "About this VoteBar",
                "content": "this is an exercise for voteSite and Django, cause this, I learned what is ORM, MVC and Python"
            }, {
                "title": "onlineTV",
                "href": " Youtube live TV",
                "about": "Why I do this? 0rz!",
                "content": "just I want to watch TV program on my Computer or SmartPhone"
            }, {
                "title": "laravelBlog",
                "href": " laravelBlog",
                "about": "About this laravelBlog",
                "content": "I have learned this framework with myfriend."+
                            " by this demo, I have learned a lot, like route, seed, and Modern PHP!! ATTENTION!!" +
                            "This is demo has no https it is not secure now"
            }],

            //Quiz
            "QuizBanks": [{
                "title": "Future Codecademy",
                "href": "link to my codecademy",
                "about": "My Codecademy Personal Info",
                "content": "In this online course I learned a lot and decided to be an great Front-end developer"
            }, {
                "title": "FreeCodeCamp",
                "href": "link to my FreeCodeCamp",
                "about": "My FreeCodeCamp Homework Solution",
                "content": "In this online course I learned a lot and decided to be an great Front-end developer"
            }, {
                "title": "Paiza",
                "href": "link to Paiza",
                "about": "What about Paiza",
                "content": "Paiza from Japan, you can learn many code language in there"
            }, {
                "title": "LeetCode",
                "href": "link to LeetCode",
                "about": "What about LeetCode",
                "content": "LeetCode is a platform for preparing technical coding interviews."
            }],

            //otherDemo
            "otherDemos": [{
                "title": "Resume",
                "href": "Interational Resume",
                "about": "My Interational Resume",
                "content": "In this online course I learned many JQuery function and used it"
            }, {
                "title": "udacity Frogger Game",
                "href": "Demo",
                "about": "My First HTML5 Game",
                "content": "In this online course I learned oriented object Javascript and some design patterns"
            }, {
                "title": "RWD",
                "href": "Demo",
                "about": "this is my FreeCodeCamp homework solution",
                "content": "In this online course I learned Response Website design basic concepts"
            }, {
                "title": "caculator",
                "href": "Demo",
                "about": "about this calculator",
                "content": "this is  a homework for freecodecamp, cause this i learned  more about Principles of Computer"
            }, {
                "title": "RandomQuote",
                "href": "Demo",
                "about": "about this Quote",
                "content": "I use this mashape free api for quote and learn about vue.js and jquery css effect..."
            }, {
                "title": "CatClick",
                "href": "Demo",
                "about": "about this CatClick",
                "content": "this demo from udacity, i made this in 2015, and I finally have learned what about MVC"
            }],

            "valueTrans": "value"
        }
    }
};

