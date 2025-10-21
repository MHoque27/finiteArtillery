(function(window, _) {
  window.finiteArtillery = window.finiteArtillery || {
    numz: {
        calculateDistance(player1, player2) {
            var dx = player2.x - player1.x;
            var dy = player2.y - player1.y;
            var pythag = (dx * dx) + (dy * dy);
            var distance = pythag**(1/2);
            return distance;
        }
    },
    phyz: {},
  };
}(window, window._));
finiteArtillery.numz.calculateDistance() 