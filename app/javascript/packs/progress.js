// // progressbar.js@1.0.0 version is used
// // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
import ProgressBar from 'progressbar.js'

var progressElements = document.querySelectorAll('.progress')

progressElements.forEach((progress) => {

  var bar = new ProgressBar.Circle(progress, {
    color: '#EB5757',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 6,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3600,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#EB5757', width: 1 },
    to: { color: '#EB5757', width: 6 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('0%');
      } else {
        circle.setText(`${value}%`);
      }

    }
  });
  bar.text.style.fontFamily = '"Quicksand", sans-serif';
  bar.text.style.fontSize = '2rem';

  var amountRaised = progress.getAttribute('data-integer')

  setTimeout(function() {
    bar.animate(amountRaised);  // Number from 0.0 to 1.0
  })
})



