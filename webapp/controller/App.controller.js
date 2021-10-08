sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/CSSSize"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, CSSSize) {

        // strict 모드 설정시 잠재적인 코딩 문제를 감지하는 데 도움이 된다.
        // 변수가 사용되기 전에 변수가 선언되는지 확인해서 JavaScript 코딩시 오류 예방하는 데 도움이 되므로 strict 모드를 사용하는 것을 권장한다.
		"use strict";

		return Controller.extend("walkthrough.controller.App", {
			onInit: function () {

            },
            
            // sap.ui.define에 sap.m.MessageToast를 종속성으로 추가 한다.
            // Controller와 MessageToast 모듈이 모두 로드되면 콜백 함수가 호출되고 함수에 전달 된 매개 변수에 액세스하여 두 객체를 모두 사용할 수 있다.

            onShowHello : function () {
                MessageToast.show("Hello World",{
                    width: "5em",
                    autoClose: false
                });
            }
		});
    });
    

