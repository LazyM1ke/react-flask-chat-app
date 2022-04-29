from requests import post, get
import json
# print(post('http://localhost:5000/reg',
#            json={'title': 'Заголовок',
#                  'content': 'Текст новости',
#                  'user_id': '1',
#                  'is_private': 'dfsfs'}))


print(post('http://127.0.0.1:5000/api/get_messages', json={'from': 'kekus',
                                                           'to': 'mishasok',
                                                           }).json())

a = {'messages': [{'content': 'test message', 'created_date': 'Sun, 17 Apr 2022 13:10:23 GMT', 'fromself': 'True'},
                  {'content': 'test message', 'created_date': 'Sun, 17 Apr 2022 13:10:40 GMT', 'fromself': 'True'},
                  {'content': 'jsdhfkjsdhf', 'created_date': 'Sun, 17 Apr 2022 13:57:30 GMT', 'fromself': 'True'},
                  {'content': 'sjkdhfkjsdfh', 'created_date': 'Sun, 17 Apr 2022 13:57:52 GMT', 'fromself': 'True'}]}
