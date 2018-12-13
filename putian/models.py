from django.db import models


# Create your models here.
class lunbo1(models.Model):
    img = models.CharField(max_length=100)

class Lunbo2(models.Model):
    img = models.CharField(max_length=100)

class Content1(models.Model):
    img = models.CharField(max_length=100)
    miaoshu = models.CharField(max_length=100)
    pricename = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

class Content2(models.Model):
    img = models.CharField(max_length=100)
    miaoshu = models.CharField(max_length=100)
    pricename = models.CharField(max_length=100)
    price = models.CharField(max_length=100)

class Content3(models.Model):
    img = models.CharField(max_length=100)
    miaoshu = models.CharField(max_length=100)
    pricename = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    idnamm = models.CharField(max_length=10)


class Content4(models.Model):
    img = models.CharField(max_length=100)
    miaoshu = models.CharField(max_length=100)
    pricename = models.CharField(max_length=100)
    price = models.CharField(max_length=100)


class Content5(models.Model):
    img = models.CharField(max_length=100)
    backgroundimg = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    idnamm = models.CharField(max_length=100)

# 用户 模型类
class User(models.Model):
    # 名字
    name = models.CharField(max_length=40)
    # 邮箱登录
    email = models.CharField(max_length=40, unique=True)
    # 密码
    password = models.CharField(max_length=256)
    # QQ
    qqname = models.CharField(max_length=20)
    # 手机号
    phone = models.CharField(max_length=20)
    # 令牌
    token = models.CharField(max_length=256)

# 购物车　模型类
class Cart(models.Model):
    # 用户
    user = models.ForeignKey(User)
    # 商品
    Content5 = models.ForeignKey(Content5)
    # 商品个数
    number = models.IntegerField()
    # 是否选中
    isselect = models.BooleanField(default=True)

    # 订单 模型类
    # 一个用户 对应 多个订单 【用户主表， 订单从表(声明关系)】


class Order(models.Model):
    # 用户
    user = models.ForeignKey(User)
    # 创建时间
    createtime = models.DateTimeField(auto_now_add=True)
    # 状态
    # -1 过期
    # 0 未付款
    # 1 已付款，未发货
    # 2 已付款，已发货， 【快递】
    # 3 已签收，未评价
    # 4 已评价
    status = models.IntegerField(default=0)
    # 订单号
    idenrifier = models.CharField(max_length=256)


# 订单商品 模型类
# 一个订单 对应 多个商品 【订单主表，订单商品从表(声明关系)】
class OrderGoods(models.Model):
    # 订单
    order = models.ForeignKey(Order)
    # 商品
    Content5 = models.ForeignKey(Content5)
    # 个数
    number = models.IntegerField()  # 1
    # 大小    # XL
    # 颜色    # 白色
    #
