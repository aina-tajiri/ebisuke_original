$(window).on('load',function(){
    var loading = function(){
      $('.load').fadeOut('fast');
      $('.wrap').fadeIn('slow');
    };
    setTimeout(loading,3000); // setTimeoutを使って表示時間を設定する
  });