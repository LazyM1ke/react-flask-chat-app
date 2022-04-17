from requests import post, get

# print(post('http://localhost:5000/reg',
#            json={'title': 'Заголовок',
#                  'content': 'Текст новости',
#                  'user_id': '1',
#                  'is_private': 'dfsfs'}))


print(post('http://127.0.0.1:5000/api/add_message', json={'from': 'kekus',
                                                          'to': 'mishasok',
                                                          'message': 'test message'
                                                           }))
