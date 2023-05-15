import sqlite3

conn = sqlite3.connect('database.db')
print ("Opened database successfully")

conn.execute('CREATE TABLE Users (id Integer primary key autoincrement,name nvbarchar(20), account nvbarchar(40), password nvbarchar(40))')
print ("Table created successfully")
conn.close()