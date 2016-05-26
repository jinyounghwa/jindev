requirejs.config({ // 기본 주소를 설정하는 파일이다.
  waitSeconds : 0,
  baseUrl: '../js', // 'js' 라는 폴더를 기본 폴더로 설정한다.

  paths:{
    // 플랫폼
    jquery: ["../vendor/jquery-1.11.3.min", "../vendor/jquery.min"],
    react: "../vendor/react-with-addons.min",
    reactDom: "../vendor/react-dom.min",
    underscore: "../vendor/underscore-min",

    // jsx 해석
    babel: "../vendor/browser.min",
    jsx: "../vendor/jsx",
    text: "../vendor/text",

    // documentReady 대체
    domReady: "../vendor/domReady"

  },

  shim : {// paths와 이어지는 것으로 paths로 불러오고 의존성(deps,exports) 등을 선언한다.
    jquery: {
      exports: "jQuery" // jquery가 이미 불러져 있다면 그대로 가져다 사용한다.
    }
  },

  jsx: {
    transformer: "babel",
    babelOptions: {
      sourceMaps: 'inline'
    }
  }

});

// 여기에서 shim 설정에 의해 jquery와 bootstrap, bootstrapSelect를 다 불러온다.
// require(["bootstrap", "bootstrapSelect"], function() {

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    // $('.selectpicker').selectpicker();
  // }

// });
