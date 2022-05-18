/**
 * @file Object.create()  创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
 */


/**
 * 
 * @param {*} obj 提供指向原型的对象
 * @returns 返回新的对象
 */
function myObjCreate(obj){
    // 新建一个对象
    let result = {};
    // 让新建对象的隐式原型指向传入的对象
    result.__proto__ = obj;
    // 返回新建的对象
    return result;
}


// 实例
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = myObjCreate(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();