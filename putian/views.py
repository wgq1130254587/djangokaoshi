import hashlib
import random

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from putian.models import lunbo1, Lunbo2, Content1, Content2, Content3, Content4, Content5, User


def index(request):
    # 获取用户信息

    token = request.session.get('token')

    data = {}

    user = None
    if token:
        user = User.objects.get(token=token)
        # data['token'] = user.token
        # data['name'] = user.name
        # print(token)

    putian_lunbo1s = lunbo1.objects.all()
    putian_lunbo2s = Lunbo2.objects.all()
    putian_content1 = Content1.objects.all()
    putian_content2 = Content2.objects.all()
    putian_content3 = Content3.objects.all()
    putian_content4 = Content4.objects.all()



    data = {
        'putian_lunbo1s': putian_lunbo1s,
        'putian_lunbo2s': putian_lunbo2s,
        'putian_content1': putian_content1,
        'putian_content2': putian_content2,
        'putian_content3': putian_content3,
        'putian_content4': putian_content4,
        # 'token':user.token,
        'user':user
    }

    return render(request, 's_index.html',context=data)

import time
def generate_token():
    md5 = hashlib.md5()
    temp = str(time.time()) + str(random.random())
    md5.update(temp.encode('utf-8'))
    return  md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()


def regsiter(request):

    if request.method == 'GET':
        return render(request, 'shopping_regsiter.html')
    elif request.method == 'POST':
        user = User()
        user.email = request.POST.get('email')
        user.password = generate_password(request.POST.get('password'))
        user.name = request.POST.get('name')
        user.phone = request.POST.get('phone')
        user.qqname = request.POST.get('qqname')
        # 状态保持
        user.token = generate_token()
        user.save()
        request.session['token'] = user.token
    return redirect('pt:index')


def login(request):
    # return render(request, 'shopping_login.html')
    if request.method == 'GET':
        return render(request, 'shopping_login.html')
    elif request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        print(generate_password(password))

        try:
            # 不存在，会抛出异常
            # 多个时，会抛出异常　【email是唯一约束】
            user = User.objects.get(email=email)
            if user.password == generate_password(password):
                user.token = generate_token()
                user.save()
                request.session['token'] = user.token
                return redirect('pt:index')
            else:
                return render(request, 'shopping_login.html', context={'p_err': '密码错误'})
        except:
            return render(request, 'shopping_login.html', context={'u_err': '账号不存在'})


def chaincart(request):
    return render(request, 'chainCart.html')


def introduce(request):
    putian_content5 = Content5.objects.all()

    data = {
        'putian_content5': putian_content5,
    }

    return render(request, 'shop_introduce.html', context=data)


def logout(request):
    request.session.flush()
    return redirect('pt:index')


def checkemail(request):

    # 邮箱
    email = request.GET.get('email')

    users = User.objects.filter(email=email)
    if users.exists():
        return JsonResponse({'msg': '账号已被占用!', 'status': 0})
    else:
        return JsonResponse({'msg': '账号是可以使用!', 'status': 1})


def addcart(request):
    # 获取token  >> user
    token = request.session.get('token')

    # 获取商品id
    goodsid = request.GET.get('goodsid')
    print(goodsid)

    data = {}

    if token:   # 登录
        # 获取用户
        user = User.objects.get(token=token)
        # 获取商品
        goods = Goods.objects.get(pk=goodsid)

        # 1、 第一次添加的商品是不存在的，要往数据库中添加一条新记录
        # 2、 商品已存在，即修改商品数量

        # 判断需要添加的商品是否存在
        carts = Cart.objects.filter(user=user).filter(goods=goods)
        if carts.exists():  # 存在
            cart = carts.first()
            cart.number = cart.number + 1
            cart.save()
        else:   # 不存在
            cart = Cart()
            cart.user = user
            cart.goods = goods
            cart.number = 1
            cart.save()

        return JsonResponse({'msg':'{},添加购物车成功'.format(goods.productlongname), 'number':cart.number, 'status': 1})

    else:   # 没登录
        # ajax操作中，不能重定向
        # ajax异步请求操作，数据的传输
        # 即ajax请求，如果想页面跳转(服务器重定向不了)，客户端处理
        # return redirect('axf:login')
        data['msg'] = '请登录后操作!'
        data['status'] = -1
        return JsonResponse(data)