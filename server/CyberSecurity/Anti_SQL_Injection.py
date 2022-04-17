class SQLSecurity:
    def __init__(self):
        self.login = None
        self.password = None
        self.args = False
        self.sql_names = ['SELECT', 'UPDATE', 'DELETE', 'INSERT INTO', 'CREATE DATABASE', 'ALTER DATABASE',
                          'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE', 'CREATE INDEX', 'DROP INDEX']

    def add_args(self, json):
        self.args = True
        self.password = json['data']['password']
        self.login = json['data']['username']

    def check_sql_names(self):
        if self.args:
            try:
                password = self.password
                password_list = self.password.upper().split()
                for i in password_list:
                    if i in self.sql_names:
                        return {'sql_security': {
                            'status': 'False',
                            'description': 'Была обнаружена SQL инъекция',
                            'location': 'password'}
                        }
                login = self.login
                login_list = self.login.upper().split()
                for i in login_list:
                    if i in self.sql_names:
                        return {'sql_security': {
                            'status': 'False',
                            'description': 'Была обнаружена SQL инъекция',
                            'location': 'username'}
                        }
            except Exception as Error:
                print('SQL Security Error:', Error)
        else:
            print('SQL Security: No args was added. Use add_args method to fix it')
            return None
        return {'sql_security': {
            'status': 'True',
            'description': 'SQL иъекций не было обнаружено'}
        }

    def change_username(self, login):
        try:
            self.login = login
        except Exception as Error:
            print(f'SQL Security change_username error: {Error}')

    def change_password(self, password):
        try:
            self.password = password
        except Exception as Error:
            print(f'SQL Security change_password error: {Error}')

    def clear_args(self):
        if self.args:
            self.login = None
            self.password = None
            self.args = False
        else:
            print('Nothing to clear')
            self.login = None
            self.password = None
            self.args = False


def check_sql_injections(username, password):
    secure = SQLSecurity()
    main_dict = {'data': {
        'username': username,
        'password': password
    }}
    secure.add_args(main_dict)
    res = secure.check_sql_names()
    return res


# Пример json для добавления аргументов
'''
{
    data: {
    username: testlogin
    password: testpass
    }
} 
'''
