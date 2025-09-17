/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Opens modal with link that contains its id
$(document).ready(function() {
  var location = window.location.href;

  var urls = [
    ["index.html#applicationModal0", "apply/application.html"],
    ["index.html#journalModal1", "publications/Fast_Hardware_Construction_and_Refitting_of_Quantized_Bounding_Volume_Hierarchies.html"],
    ["index.html#journalModal0", "publications/MergeTree_A_Fast_Hardware_HLBVH_Constructor_for_Animated_Ray_Tracing.html"],
    ["index.html#publicationModal7", "publications/Sparse_Sampling_for_Real-Time_Ray_Tracing.html"],
    ["index.html#publicationModal6", "publications/Foveated_Instant_Preview_for_Progressive_Rendering.html"],
    ["index.html#publicationModal5", "publications/Foveated_Path_Tracing_A_Literature_Review_and_a_Performance_Gain_Analysis.html"],
    ["index.html#publicationModal4", "publications/Multi_Bounding_Volume_Hierarchies_for_Ray_Tracing_Pipelines.html"],
    ["index.html#publicationModal3", "publications/Half-Precision_Floating-Point_Ray_Traversal.html"],
    ["index.html#publicationModal2", "publications/MergeTree_A_HLBVH_Constructor_for_Mobile_Systems.html"],
    ["index.html#publicationModal1", "publications/Using_Half-Precision_Floating-Point_Numbers_for_Storing_Bounding_Volume_Hierarchies.html"],
    ["index.html#publicationModal0", "publications/Programmable_and_Scalable_Architecture_for_Graphics_Processing_Units.html"],
    ["index.html#thesisModal1", "theses/Real-Time_Noise_Removal_in_Foveated_Path_tracing.html"],
    ["index.html#thesisModal0", "theses/Software-Based_Ray_Tracing_for_Mobile_Devices.html"]
  ];

  urls.map( function(url) {
    if(location.endsWith(url[0])){
      location = location.replace(url[0], url[1]);
      window.location.replace(location);
    }
  })
});
