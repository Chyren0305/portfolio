window.onload = function() {
    // 原本放vue模版的 但很lag而且常讀不到 所以...
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

}
