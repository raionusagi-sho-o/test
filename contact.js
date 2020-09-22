$(function(){
////////////////////////////////////////

 //バリデーションチェック
 const ERR_MSG_EMPTY = "入力必須だよ！";
 const ERR_MSG_SUBJECT_MAX = "20文字以内で入力してね！";
 const ERR_MSG_EMAIL ="半角英数字、又はemailの形式じゃないよ！";

  //各フォームの入力必須チェック////////
  //電話番号のハイフン、半角英数字自動
  //件名の２０文字以内チェック/////////
  //email形式チェック///////////////

/////////////////////////////////////////////////
//名前入力フォーム
 //１、入力必須チェック
 $('.valid_name').keyup(function(){
   var form_g = $(this).closest('.form_group');
   if($(this).val().length === 0){
     form_g.removeClass('has_success').addClass('has_error');
     form_g.find('.err_msg').text(ERR_MSG_EMPTY);
   }else{
     form_g.removeClass('has_error').addClass('has_success');
     form_g.find('.err_msg').text('');
   }
 });

//電話番号入力フォーム(任意入力)///////////////////////////////////////////////////////
 //1,自動で半角英数字、ハイフン入力
 $('.valid_phone').change(function(){
   //入力された値を取得
   var phone_valid_before = $(this).val();

   //ハイフン入力されていた場合にハイフン削除して変数に格納
   phone_valid_before = phone_valid_before.replace('-','');
   //半角英数字に変換
   phone_valid_after = phone_valid_before.replace(/[Ａ-Ｚａ-ｚ０-９]/g,function(s){return String.fromCharCode(s.charCodeAt(0)-0xFEE0)});
   //入力された文字数が１１文字だった場合
   if(phone_valid_after.length === 11){
     //ハイフンを挿入して要素内を置き換える
     //今回は携帯電話の番号を想定
     $(this).val(phone_valid_after.substr(0,3)+'-'+phone_valid_after.substr(3,4)+'-'+phone_valid_after.substr(7,4));
   }else{
     $(this).val(phone_valid_after);
   }
 });

//メールアドレス入力フォーム////////////////////////////////////////////////////////////
 $('.valid_email').keyup(function(){
   var form_g = $(this).closest('.form_group');

   //１、入力必須チェック
   if($(this).val().length === 0){
     form_g.removeClass('has_success').addClass('has_error');
     form_g.find('.err_msg').text(ERR_MSG_EMPTY);

   //２、半角英数字かつemail形式チェック
   }else if($(this).val().length > 50 || !$(this).val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9])+([a-zA-Z0-9\._-])+$/)){
     form_g.removeClass('has_success').addClass('has_error');
     form_g.find('.err_msg').text(ERR_MSG_EMAIL);

    }else{
      form_g.removeClass('has_error').addClass('has_success');
      form_g.find('.err_msg').text('');
    }
 });

//件名入力フォーム/////////////////////////////////////////////////////////////////////
 $('.valid_subject').keyup(function(){
   var form_g = $(this).closest('.form_group');
   //1、文字カウント
    var count_valid_subject = $(this).val().length;
    var counter_valid_subject = $('.sub_conut');
    counter_valid_subject.text(count_valid_subject);
   if(count_valid_subject > 20){
     //２０文字オーバーのカウント色警告
    $('.sub_count_err').css('color','#FFFF00');
    $('.sub_conut').css('color','#FFFF00');
    //２０文字以上のエラー表示
    form_g.find('.err_msg').text(ERR_MSG_SUBJECT_MAX).css('color','#FFFF00');
  }else if(count_valid_subject === 0){
    form_g.removeClass('has_success').addClass('has_error');
    form_g.find('.err_msg').text(ERR_MSG_EMPTY);
    $('.sub_count_err').css('color','');
    $('.sub_conut').css('color','');
  }else{
    form_g.removeClass('has_error').addClass('has_success');
    form_g.find('.err_msg').text('');
    $('.sub_count_err').css('color','');
    $('.sub_conut').css('color','');
  }
 });
//お問い合わせ入力フォーム////////////////////////////////////////////////////////////////
 //１、入力必須チェック
  $('.valid_text').keyup(function(){
    var val_text = $(this).val().length;
    var form_g = $(this).closest('.form_group');
    if(val_text === 0){
      form_g.removeClass('has_success').addClass('has_error');
      form_g.find('.err_msg').text(ERR_MSG_EMPTY);
    }else{
      form_g.removeClass('has_error').addClass('has_success');
      form_g.find('.err_msg').text('');
    }
  });
////////////////////////////////////////
});
