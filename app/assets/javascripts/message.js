$(function(){

  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      var html = `<div class="message">
      <div class="upper-message">
      <div class="upper-message__user-name">
      ${message.user_name}
      </div>
      <div class="upper-message__date">
      ${message.created_at}
      </div>
      </div>
      <div class="lower-message">
      ${message.content}
      <img class="lower-message__image" src="${message.image}">
      </div>
      </div>`
    } else {
      var html = `<div class="message">
      <div class="upper-message">
      <div class="upper-message__user-name">
      ${message.user_name}
      </div>
      <div class="upper-message__date">
      ${message.created_at}
      </div>
      </div>
      <div class="lower-message">
      <p class="lower-message__content">
      ${message.content}
      </p>
      
      </div>
      </div>`
    }
    return html
  }
  
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var url = $(this).attr('action');
    var formData = new FormData(this);
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('form')[0].reset();
      $('.send-btn').prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});