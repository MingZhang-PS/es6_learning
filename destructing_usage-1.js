let obj = {
    p: [
      'Hello',
      { y: 'World' }
    ]
  };
  // 浅拷贝
  let { p, p: [x, { y }] } = obj;
 
  p.push('ming')
  console.log(p);
  console.log(obj);