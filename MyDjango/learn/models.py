from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=30)
    age = models.IntegerField()
    
    def __str__(self):
        return self.name
    
class flux_speed(models.Model):
    date=models.DateField()
    up_speed=models.FloatField()
    down_speed=models.FloatField()
    
    def __str__(self):
        return self.date

class apptype_count(models.Model):
    #用于业务名称
    appname=models.CharField(max_length=200)
    #用于标识业务类型 1.即时通讯  2.浏览器  3.网上商城 4.新闻客户端 5.交通地图 6.新闻客户端 7.游戏 8.视频 9.音乐 10.其它
    apptype=models.IntegerField()
    date=models.DateField()
    countnum=models.IntegerField()
    
    def __str__(self):
        return self.date

class website_count(models.Model):
    website=models.CharField(max_length=200)
    date=models.DateField()
    countnum=models.IntegerField()
    flux=models.FloatField()
    
    def __str__(self):
        return self.date
    
    