// NAVBAR
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {	

        // Get the target from the "data-target" attribute
        burgerMenu = document.querySelector('.navbar-menu');

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        burgerMenu.classList.toggle('is-active');
      });
    });
  }
});

// KAKAOMAP

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.536293, 126.943946), //지도의 중심좌표.
  draggable: false,
	level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.536293, 126.943946); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// MOBILE NAVBAR BURGER
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if (vw<=1024) {
	document.getElementById("hide-on-mobile1").remove();
	document.getElementById("hide-on-mobile2").remove();
	document.getElementById("hide-on-mobile3").remove();
	document.getElementById("hide-on-mobile4").remove();
}

window.onload = function() {
	scrolly();
}; 