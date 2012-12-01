var pageUrl = null;

window.addEventListener('load', function () {
    var appcontent = document.getElementById('appcontent');

    if (appcontent) {
        appcontent.addEventListener('DOMContentLoaded', function (e) {
            var doc = e.originalTarget;
            pageUrl = doc.location.href;
        }, true);
    } else {
    	pageUrl = null;
    }
}, false);

function qBidButtonClicked() {
	if (pageUrl) {
		alert('Current page url: ' + pageUrl);

		var xhr = new XMLHttpRequest();

		xhr.open('GET', 'http://www.ya.ru', true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					// alert('Request has being send');
				}
			}
		};

		xhr.send('');
	}
}