let obj = {};
Object.defineProperty(obj, 'school', {
    // 可配置，那么就可以被删除
    configurable: true,
    // 可写
    writable: true,
    // 可枚举
    enumerable: true,
    value: 'zfpx'
});

// 删除属性
delete obj.school;

// 枚举所有属性
for (const key in obj) {
    console.log(key);  
}

// vue特点不能新增不存在的属性，不能存在的属性没有get和set


// 什么是深度响应
// 深度响应，因为每次赋予一个新对象



