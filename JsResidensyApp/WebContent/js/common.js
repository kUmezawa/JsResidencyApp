/**
 * 共通処理に利用します。
 */

var $common = {
		/**
		 * loadingを開始します
		 */
		startLoading : function() {
			$(".loading").html("<img src='image/gif-load.gif'/>");
			$('.loading').css({
				'background-size' : 'cover',
				'position' : 'absolute',
				'top' : '50%',
				'left' : '50%',
				'z-index': '6'
			});

		},
		/**
		 * loadingを終了します。
		 */
		endLoading : function() {
			$(".loading").empty();
			$('.loading').css({
				'background-size' : '',
				'position' : '',
				'top' : '',
				'left' : '',
				'z-index': ''
			});
		}
};