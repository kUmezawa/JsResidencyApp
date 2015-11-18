/**
 * jQuery画面で利用するjsです
 */
$(function(){
	var isPushed=true;
	/**
	 * 検索ボタンが押下されたときの処理です
	 */
	$(document).on('click','#search',function(){
		if($('form')[0].checkValidity()){
			if(isPushed){
				isPushed=false;
				var data = $('form').serialize();
				$.ajax({
					type : "post",
					url : "JsResidensy/softwareProduct/search",
					data:data,
					beforeSend : function(){
						$common.startLoading();
					}
				}).done(function(data, textStatus, jqXHR){
					$('#resultArea').show();
				    $('#resultTable').DataTable({
				    	//列幅オート指定
				    	"bAutoWidth":false,
				    	//表示件数の変更
				    	"bLengthChange":true,
				    	//表示行数
				    	"iDisplayLength":10,
				    	//日本語対応
				    	"language": {
				    		  "emptyTable" : "データが登録されていません。",
				    		  "info" : "_TOTAL_ 件中 _START_ 件から _END_ 件までを表示",
				    		  "infoEmpty" : "",
				    		  "infoFiltered" : "(_MAX_ 件からの絞り込み表示)",
				    		  "infoPostFix" : "",
				    		  "thousands" : ",",
				    		  "lengthMenu" : "1ページあたりの表示件数: _MENU_",
				    		  "loadingRecords" : "ロード中",
				    		  "processing" : "処理中...",
				    		  "search" : "検索:",
				    		  "zeroRecords" : "該当するデータが見つかりませんでした。",
				    		  "paginate" : {
				    		    "first" : "先頭",
				    		    "previous" : "前へ",
				    		    "next" : "次へ",
				    		    "last" : "末尾"
				    		  }
				    	},
				    	//複数ファイルアップロードされたときにテーブルを刷新します
				    	destroy: true,
				    	//サーバーからのJSONデータ
				        data: data,
				        aoColumns: [
				            { sTitle:'製品名',mData: 'name',"sWidth":"25%"},
				            { sTitle:'カテゴリ',mData: 'type',"sWidth":"25%"},
				            { sTitle:'発表年月日',mData: 'ymd',"sWidth":"25%"},
				            { sTitle:'製造者名',mData: 'maker',"sWidth":"25%"}
				        ]
				    });
				    $('#resultTable').removeClass('display').addClass('table table-striped table-bordered');
				}).fail(function(data, textStatus, errorThrown){
					//今回はこのロジックを省略
				}).always(function(){
					isPushed=true;
					$common.endLoading();
				});
			}
		}
	});
});