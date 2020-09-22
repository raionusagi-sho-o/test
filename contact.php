<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>CONTACT</title>
  <link rel="stylesheet" href="style.css" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c" rel="stylesheet">
</head>

<body>
<!---固定のメニュー--------->
  <header>
    <h1 id="HP-title title"><a href="home.php">RUANN</a></h1>
    <nav id="top-nav">
     <ul>
       <li><a href="home.php">HOME</a></li>
       <li><a href="news.php">NEWS</a></li>
       <li><a href="live.php">LIVE</a></li>
       <li><a href="#biography">BIOGRAPHY</a></li>
       <li><a href="discography.php">DISCOGRAPHY</a></li>
       <li><a href="runndy.php">RUNNDY</a></li>
       <li><a href="https://www.youtube.com/channel/UC0x0dCEZkltvaPQHd9kuXIQ">YouTube</a></li>
       <li><a href="contact.php">CONTACT</a></li>
      </ul>
    </nav>
  </header>

<!--メインコンテンツ-------------------------------------------------------------------->
 <main id="home-main contact_main">
   <section class="site-width">
     <h2 class="title_contact">CONTACT</h2>
   <script type="text/javascript">
       <!--
        function disp(){
         window.alert('この内容で送信してよろしいですか？');}
       -->
     </script>
      <form>
  <!--名前---------------------------------->
     <div class="form_group ">
       <label>名前（※必須　ニックネーム可）<span class="err_msg"></span><br>
        <input type="text" class="input_width valid_name" name="name" placeholder="名前（又はニックネーム）">
       </label>
     </div>
  <!--電話番号----------------------------------------->
     <div class="form_group">
       <label>電話番号（任意）<span class=""></span><br>
         <input type="phone" class="input_width valid_phone" name="phone" placeholder="電話番号(任意)">
       </label>
     </div>
  <!--メールアドレス------------------------------------>
     <div class="form_group">
       <label>メールアドレス（※必須 半角英数字、email形式で入力して下さい）<span class="err_msg"></span><br>
         <input type="email" class="input_width valid_email" name="email" placeholder="メールアドレス">
       </label>
     </div>
  <!--件名-------------------------------------------->
     <div class="form_group">
       <label>件名（※必須　20文字以内）<span class="err_msg"></span><br>
         <input type="text" class="input_width valid_subject" name="subject" placeholder="件名" >
         <div class="sub_count_err"><span class="sub_conut">0</span>/20</div>
       </label>
   </div>
  <!--本文-------------------------------------------->
   <div class="form_group">
     <label>お問い合わせ内容（※必須）<span class="err_msg"></span><br>
       <textarea cols="100" rows="20" name="contact" class="valid_text"  placeholder="お問い合わせ内容"></textarea>
     </label>
   </div>
  <!--送信-------------------------------------------->
     <input type="submit" name="submit" value="送信" onClick="disp()">
    </form>
  </section>
 </main>
  <footer>
    ©︎<a href="https://www.ruanngogoworld.com/">RUANN.Official site</a>
  </footer>
  <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
  <script src="contact.js"></script>
</body>
</html>
