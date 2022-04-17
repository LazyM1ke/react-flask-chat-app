from Anti_SQL_Injection import SQLSecurity

main_dict = {'data': {
    'username': 'testusername',
    'password': 'testpass'
}}

secure = SQLSecurity()
secure.add_args(main_dict)
print(secure.check_sql_names())


main_dict_2 = {'data': {
    'username': 'SELECT',
    'password': 'testpass'
}}

secure_2 = SQLSecurity()
secure_2.add_args(main_dict_2)
print(secure_2.check_sql_names())