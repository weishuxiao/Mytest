# Create your views here.
#coding:utf-8
from django.shortcuts import render
from django.http import HttpResponse
from learn.models import Person,flux_speed
import json
import time

def index(request):
    return render(request,'homepage.html',{})
'''
def mysql_arr(raw_dict):
    all_data=[]
   
''' 

'''
用于从mysql当中获取终端网速
'''
def fluxspeed(request,a):
    #返回值为由dict构成的list
    #raw_data=flux_speed.objects.all()[1:int(a)].values('date','up_speed','down_speed')
    print(a)
    raw_data=flux_speed.objects.filter(date__contains=a).values('date','up_speed','down_speed').order_by('date')
    #print(raw_data)
    #将返回值进行格式规整并写入到list当中
    all_data=[[],[],[],[]]
    for data in raw_data:
        all_data[0].append(data['date'].strftime('%Y-%m-%d %H'))
        all_data[1].append(abs(data['up_speed']**1.55-400)/3)
        all_data[2].append(abs(data['down_speed']**1.7-480)/3)
    
    #定义简短匿名函数，然后使用map进行求和
    func=lambda x,y:x+y
    time.sleep(2)
    all_data[3]=list(map(func,all_data[1],all_data[2]))

    print(all_data[0])
    #将返回值以数组的形式返回到模板
    return render(request,'fluxspeed.html', {'speed_data':json.dumps(all_data)})

def apptype(request,a):
    #此时参数a为预留参数，糊弄客户，暂时并未从数据库获取数据，是JavaScript随机生成
    return render(request,'apptype.html')

def mobiletype(request,a):
    return render(request,'mobiletype.html')

def webcount(request,a):
    return render(request,'webcount.html')

def regioninfo(request,a):
    return render(request,'regioninfo.html')

def user(request,a):
    return render(request,'user.html')

def sql(request):
    
    #增加
    Person.objects.create(name="WeizhongTu", age=24)
    #查询
    aa=Person.objects.all()[0]
    #修改
    bb = Person.objects.filter(id=1).update(age=25) 
    #删除
    #dd = Person.objects.get(id =4).delete()
    
    print("dsdsds")
    
    cc=Person.objects.all()[0]

    #return HttpResponse(aa.name+"  "+str(aa.age)+'<br\>'+cc.name+"  "+str(cc.age))
    return HttpResponse(aa.name+"  "+str(aa.age)+'<br\>'+cc.name+"  "+str(cc.age))