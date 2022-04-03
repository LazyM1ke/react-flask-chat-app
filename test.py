from requests import post

# print(post('http://localhost:5000/reg',
#            json={'title': 'Заголовок',
#                  'content': 'Текст новости',
#                  'user_id': '1',
#                  'is_private': 'dfsfs'}))

print(post('http://localhost:5000/reg',
           json={'title': 'Заголовок',
                 'content': 'Текст новости',
                 'user_id': 1,
                 'is_private': 'False'}))
