from requests import post, get

# print(post('http://localhost:5000/reg',
#            json={'title': 'Заголовок',
#                  'content': 'Текст новости',
#                  'user_id': '1',
#                  'is_private': 'dfsfs'}))

print(get('http://127.0.0.1:5000/api/v2/users/5'))