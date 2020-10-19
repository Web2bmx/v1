export default function dataManager() {
    var trackClick = function (ide) {
        ga('send', 'event', 'Navigation', 'click', ide);
    }
    return {
		trackClick : trackClick
	};
}