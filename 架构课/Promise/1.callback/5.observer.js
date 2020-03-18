//观察者模式。观察者和被观察者有关联，观察者需要将自己放到被观察者之上，当被观察者状态改变时 需要通知所有的观察者

class Subject { //被观察者
    constructor(name){
        this.name = name;
        this.state = '开心'; //m默认状态
        this.observers = []; //观察者
    }
    attach(o){ //需要将注册者放到自己身上
        this.observers.push(o); //  on 
    }
    setState(newState){
        this.state = newState;//更新被观察者的状态
        this.observers.forEach(o => { // 相当于emit传参
            o.update(this);
        })
    }
}
class Observer{ //观察者
    constructor(name){
        this.name = name;
    }
    update(sbj){ //被观察者的状态变化时会调用此方法
        console.log(this.name + ' 看到 ' + sbj.name + ' 当前是 ' + sbj.state + ' 的 ');
    }
}
let baby = new Subject('宝宝');
let father = new Observer('爸爸');
let mather = new Observer('妈妈');
baby.attach(father);
baby.attach(mather);
baby.setState('不开心');
