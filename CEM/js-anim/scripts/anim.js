function techFunc() {
  var basicTimeline = anime.timeline();
  basicTimeline
  // Anime #1
  .add({
    targets: "#anime1-1 .dot",
    translateX: [{
      value: 231,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 80,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime1-2 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime1-3 .dot",
    translateX: [{
      value: -320,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime1-4 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime1-5 .dot",
    translateX: [{
      value: -231,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -80,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })

  // Anime #2
  .add({
    targets: "#anime2-1 .dot",
    translateX: [{
      value: 131,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 167,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime2-2 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime2-3 .dot",
    translateX: [{
      value: -320,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime2-4 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime2-5 .dot",
    translateX: [{
      value: -131,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -167,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })

  // Anime #3
  .add({
    targets: "#anime3-1 .dot",
    translateY: [{
      value: 198,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime3-2 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime3-3 .dot",
    translateX: [{
      value: -320,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime3-4 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime3-5 .dot",
    translateY: [{
      value: -198,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })

  // Anime #4
  .add({
    targets: "#anime4-1 .dot",
    translateX: [{
      value: -131,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 167,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime4-2 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime4-3 .dot",
    translateX: [{
      value: -320,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime4-4 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime4-5 .dot",
    translateX: [{
      value: 131,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -167,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })

  // Anime #5
  .add({
    targets: "#anime5-1 .dot",
    translateX: [{
      value: -231,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 80,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime5-2 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime5-3 .dot",
    translateX: [{
      value: -320,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime5-4 .dot",
    translateX: [{
      value: 161,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -161,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
  .add({
    targets: "#anime5-5 .dot",
    translateX: [{
      value: 231,
      duration: 700,
      easing: "linear"
    }],
    translateY: [{
      value: -80,
      duration: 700,
      easing: "linear"
    }],
    opacity: [{
      value: 1,
      duration: 100,
      easing: "linear"
    }, {
      value: 0,
      duration: 300,
      delay: 700,
      easing: "easeOutQuint"
    }]
  })
}

var body = document.querySelector('body');

if (body.classList.contains('body-tech')) {
  body.addEventListener('click', function () {
    techFunc();
    // 
    document.querySelector('.tech__image1').classList.add('hide');
    document.querySelector('.tech__image2').classList.add('show');
    document.querySelector('.text__4').classList.add('show');
    document.querySelector('.text__5').classList.add('show');
    document.querySelector('.text__6').classList.add('hide');
    document.querySelector('.text__6-2').classList.add('show');
    document.querySelector('.text__8').classList.add('hide');
    document.querySelector('.text__8-2').classList.add('show');
    document.querySelector('.cog-wheels').classList.add('show');
    // document.querySelector('.text__1').classList.add('anime');
    // document.querySelector('.text__2').classList.add('anime');
    // document.querySelector('.text__3').classList.add('anime');
    // document.querySelector('.text__4').classList.add('anime');
    // document.querySelector('.text__5').classList.add('anime');
  });
}

if (body.classList.contains('body-cem')) {
  body.addEventListener('click', function () {
    // Anime #1
    var loop1 = anime({
      targets: "#anime1-5 .dot",
      translateX: [{
        value: -231,
        duration: 700,
        easing: "linear"
      }],
      translateY: [{
        value: -80,
        duration: 700,
        easing: "linear"
      }],
      opacity: [{
        value: 1,
        duration: 100,
        easing: "linear"
      }, {
        value: 0,
        duration: 300,
        delay: 700,
        easing: "easeOutQuint"
      }],
      loop: 5
    });
  
    // Anime #2
    var loop2 = anime({
      targets: "#anime2-5 .dot",
      translateX: [{
        value: -131,
        duration: 700,
        easing: "linear"
      }],
      translateY: [{
        value: -167,
        duration: 700,
        easing: "linear"
      }],
      opacity: [{
        value: 1,
        duration: 100,
        easing: "linear"
      }, {
        value: 0,
        duration: 300,
        delay: 700,
        easing: "easeOutQuint"
      }],
      loop: 5
    });
  
    // Anime #3
    var loop3 = anime({
      targets: "#anime3-5 .dot",
      translateY: [{
        value: -198,
        duration: 700,
        easing: "linear"
      }],
      opacity: [{
        value: 1,
        duration: 100,
        easing: "linear"
      }, {
        value: 0,
        duration: 300,
        delay: 700,
        easing: "easeOutQuint"
      }],
      loop: 5
    });
  
    // Anime #4
    var loop4 = anime({
      targets: "#anime4-5 .dot",
      translateX: [{
        value: 131,
        duration: 700,
        easing: "linear"
      }],
      translateY: [{
        value: -167,
        duration: 700,
        easing: "linear"
      }],
      opacity: [{
        value: 1,
        duration: 100,
        easing: "linear"
      }, {
        value: 0,
        duration: 300,
        delay: 700,
        easing: "easeOutQuint"
      }],
      loop: 5
    });
  
    // Anime #5
    var loop5 = anime({
      targets: "#anime5-5 .dot",
      translateX: [{
        value: 231,
        duration: 700,
        easing: "linear"
      }],
      translateY: [{
        value: -80,
        duration: 700,
        easing: "linear"
      }],
      opacity: [{
        value: 1,
        duration: 100,
        easing: "linear"
      }, {
        value: 0,
        duration: 300,
        delay: 700,
        easing: "easeOutQuint"
      }],
      loop: 5
    });
  });
}




