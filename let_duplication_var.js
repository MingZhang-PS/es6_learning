


// 不允许在函数内重复声明变量
(function func(arg) {
    let arg; // 报错
  }()); 
  
(function func(arg) {
    {
      let arg; // 为什么不报错？这是一个新的作用域。。。
    }
  }());