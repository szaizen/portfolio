
/*
関数概要：モーダルを表示する処理
引数：modaltitle：タイトル, modalcontent：表示内容のテキスト
*/
function showModal(modaltitle,modalcontent){
	if($(".co-modal-overlay")[0]) return false ;//新しくモーダルウィンドウを起動しない
	$("body").append('<div class="co-modal-content"><div class="co-modal-title">' + modaltitle + '</div><p>' + modalcontent
	+'</p><a id="co-modal-close" class="co-modal-close_icon"></a></div><div class="co-modal-overlay"></div>'); //モーダル用_背景オーバーレイ
	$(".co-modal-overlay").fadeIn();
	$(".co-modal-content").fadeIn();
    centeringModal();
};

//モーダルを閉じる
$(document).on("click", ".co-modal-overlay,#co-modal-close", function () {
	$(".co-modal-content,.co-modal-overlay").fadeOut("slow",function(){
		$(".co-modal-overlay").remove();
	});
});

//モーダル中央寄せ（中央の位置を計算してleftとTopを設定する）
function centeringModal(){
	var pxleft = (($(window).width() - $(".co-modal-content").outerWidth()) / 2);
	var pxtop = (($(window).height() - $(".co-modal-content").outerHeight()) / 2);
	$(".co-modal-content").css({"left": pxleft + "px"}).css({"top": pxtop + "px"});
}
