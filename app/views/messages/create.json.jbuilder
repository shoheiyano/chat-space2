json.user_name @message.user.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @message.content
json.image @message.image_url #urlがないと投稿した後に画像が表示されなくなる。と思う。後で確認する