from flask import Flask,render_template,request

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/login", methods=['GET','POST'])
def login():
    if request.method == 'POST':
        account = request.form.get('account')
        password = request.form.get('password')
        if account == 'admin' and password == '1234':
            type = '登入成功'
            return render_template('page.html',type = type)
        else:
            return render_template('login.html',type='登入失敗')
    return render_template('login.html')

@app.route("/name/<name>")
def name(name):
    print('Type:',type(name))
    return name

@app.route("/number/<int:number>")
def number(number):
    print('Type:',type(number))
    return str(number)

@app.route("/page")
def email():
    email=request.args.get('email')
    password=request.args.get('password')
    return f'{email},{password}'


if  __name__ == '__main__':
    app.run(debug=True)