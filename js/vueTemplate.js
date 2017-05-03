window.onload = function() {
    // body...
    var app = new Vue({
        el: 'p#aboutMe',
        data: {
            message: '歡迎光臨！'
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


                ]
            }
        }
    });


}
