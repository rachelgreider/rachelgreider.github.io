function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '500%',
        triggerElement: '.random', 
        triggerHook: 0
    })
    .setPin('.random')/*.addIndicators()*/.addTo(controller);
/**************
    new ScrollMagic.Scene({
      //    AARON——using percents is already responsive, but it was set to the wrong value; 1000% to 500%
        duration: '500%',
        triggerElement: '.about-title',
        triggerHook: 0
        //offset: '100vh'
    })
    .setPin('.about-title').addIndicators().addTo(controller);
/**************/

/**************/
/**************/
/**************/
    $('.title').each(function () {
      // Create a scene for each project
      var myScene = new ScrollMagic.Scene({
        duration: '50%',
        triggerElement: this,
        triggerHook: .25,
        offset: 50        
      })
        .setPin(this)/*.addIndicators()*/.addTo(controller);
    });
/**************/
/**************/

$('.about-title').each(function () {
  // Create a scene for each project
  var myScene = new ScrollMagic.Scene({
    duration: '530%',
    triggerElement: this,
    triggerHook: .75,
    offset: 365      
  })
    .setPin(this)/**.addIndicators()**/.addTo(controller);
});

$('.navigation1').each(function () {
  // Create a scene for each project
  var myScene = new ScrollMagic.Scene({
    duration: '650%',
    triggerElement: this,
    triggerHook: 1,
    offset: 0        
  })
    .setPin(this,{pushFollowers: false})
    .addTo(controller);
});

}
splitScroll();




/** opacity fade in/out - not currently working 
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();

$(".project").each(function(i) {
  var titleDOM = $(this).find(".title");
  var tl = new TimelineMax();
  
  tl.from(titleDOM, 0.25, { opacity:0 });
  tl.to(titleDOM, 0.25, { opacity: 0}, 0.75);
  
  new ScrollMagic.Scene({
    triggerElement: titleDOM,
    triggerHook: 0.2,
    duration: '150%'
  })
    .setPin(this).setTween(tl).addIndicators().addTo(controller);
}); 
*/