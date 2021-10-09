sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
    
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast, JSONModel) {

        // strict 모드 설정시 잠재적인 코딩 문제를 감지하는 데 도움이 된다.
        // 변수가 사용되기 전에 변수가 선언되는지 확인해서 JavaScript 코딩시 오류 예방하는 데 도움이 되므로 strict 모드를 사용하는 것을 권장한다.
		"use strict";

		return Controller.extend("walkthrough.controller.App", {

            // onInit은 컨트롤러 생성시 프레임 워크에서 호출하는 SAPUI5의 라이프 사이클 메소드 중 하나이며 컨트롤의 생성자 함수와 유사하다.
			onInit: function () {

                // view에 모델 추가하기
                // 함수 내부에서 JSON 모델을 인스턴스화한다. 모델의 데이터에는 "recipient"에 대한 단일 속성만 포함되며 내부에는 이름에 대한 하나의 추가 속성이 추가된다.
                var oData = {
                    recipient : {
                        name : "World"
                    }
                };

                //XML 뷰 내에서이 모델을 사용하려면 뷰에서 setModel 함수를 호출하고 새로 생성 된 모델을 전달하면 모델이 뷰에 설정된다.
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "test");

                },
                
                // sap.ui.define에 sap.m.MessageToast를 종속성으로 추가 한다.
                // Controller와 MessageToast 모듈이 모두 로드되면 콜백 함수가 호출되고 함수에 전달 된 매개 변수에 액세스하여 두 객체를 모두 사용할 수 있다.

                onShowHello : function () {
                    MessageToast.show("Hello World",{
                        width: "5em",
                        autoClose: false,
                        animationDuration: 2000,
                        my: "right top",
                        at: "center top"

                });
            }
		});
    });
    

