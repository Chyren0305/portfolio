var resources = {
    "tw": {
        "translation": {
            "title": "我的作品集",
            "name": "黃聖元",
            "job": "前端工程師",
            "ProjectsTitle": { "title": "作品", "online": "線上作業", "udacity": "線上課程作品","github":"GitHub" },
            "option": {
                "open": "開啟",
                "close": "關閉"
            },
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
            },{
                "title": "Codecademy",
                "href": "我的codecademy學習歷程",
                "about": "關於Codecademy",
                "content": "進資策會前，我到了這個網站，這也開啟我的前端旅程，這個如遊戲般又較簡單易上手的學習網站，讓人上癮，之後才決定進入資策會與其他相關學習資源徹底學習！"                
            },{
                "title": "FreeCodeCamp",
                "href": "我的FreeCodeCamp學習歷程",
                "about": "關於FreeCodeCamp",
                "content": "2015年冬季時節，上了某社群網站看到有人分享了這個網站，於是乎，決定從2016年就拿來這個當每個星期的作業練習！"                
            },{
                "title": "線上互動履歷",
                "href": "互動履歷",
                "about": "關於互動履歷",
                "content": "這個互動履歷目前只有英文版，它是由udacity課程Javascript Basics裡的作業教學，所完成的一個專案。"                
            },{
                "title": "青蛙過河小遊戲",
                "href": "線上演示",
                "about": "關於小遊戲",
                "content": "這個HTML5的青蛙過小遊戲是由udacity課程object oriented javascript裡教學做出來的，在這裡我學會了canvas與一些簡單的設計模式。此遊戲只能在電腦上玩。"                
            },{
                "title": "響應式網頁",
                "href": "線上演示",
                "about": "關於響應式網頁",
                "content": "這個響應式部落格網頁是由udacity課程Response Images與RWD兩個課程介紹，主要是RWD的作業，在這裡我學會使用grunt以及如何將圖片更有效利用與最佳化。不過主要只有圖片最佳化。"                
            }],
            "valueTrans": "值"
        }
    },
    "en": {
        "translation": {
            "title": "My Portfolio",
            "name": "Rex Huang",
            "job": "Front-end Ninja",
            "ProjectsTitle": { "title": "portfolio", "online": "OnlineCourse Homework","udacity": "OnlineCourse Projects" },
            "option": {
                "open": "open",
                "close": "close"
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
                "title": "Future Codecademy",
                "href": "link to my codecademy",
                "about": "My Codecademy Personal Info",
                "content": "In this online course I learned a lot and decided to be an great Front-end developer"                
            },{
                "title": "FreeCodeCamp",
                "href": "link to my FreeCodeCamp",
                "about": "My FreeCodeCamp Homework Solution",
                "content": "In this online course I learned a lot and decided to be an great Front-end developer"                
            },{
                "title": "Resume",
                "href": "Interational Resume",
                "about": "My Interational Resume",
                "content": "In this online course I learned many JQuery function and used it"                
            },{
                "title": "udacity Frogger Game",
                "href": "Demo",
                "about": "My First HTML5 Game",
                "content": "In this online course I learned oriented object Javascript and some design patterns"                
            },{
                "title": "RWD",
                "href": "Demo",
                "about": "this is my FreeCodeCamp homework solution",
                "content": "In this online course I learned Response Website design basic concepts"                
            }],
            "valueTrans": "value"
        }
    }
};

$(document).ready(function() {
    i18n.init({
        "lng": 'tw',
        "resStore": resources,
        "fallbackLng": 'tw'
    }, function(t) {
        $(document).i18n();
    });

    $('.lang').click(function() {
        var lang = $(this).attr('data-lang');
        i18n.init({
            lng: lang
        }, function(t) {
            $(document).i18n();
        });
    });
});
