// Modified from here:
// https://gist.github.com/tdsymonds/23917215f591a9e1442a38783c77f0f0
$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
});

$('div.modal').on('hidden.bs.modal', function() {
    var hash = this.id;
    history.replaceState('', document.title, window.location.pathname);
});

// when close button clicked simulate back
$('div.modal [data-dismiss="modal"]').on('click', function(){
    window.history.back();
})

// when esc pressed when modal open simulate back
$('div.modal').keyup(function(e) {
    if (e.keyCode == 27){
        window.history.back();
    }
});