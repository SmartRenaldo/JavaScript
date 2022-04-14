window.addEventListener('load', function() {
    // classList 返回元素的类名
    var div = document.querySelector('div');
    // console.log(div.classList[1]);
    // 1. 添加类名  是在后面追加类名不会覆盖以前的类名 注意前面不需要加.
    div.classList.add('three');
    console.log(div.classList);
    // 2. 删除类名
    div.classList.remove('two');
    console.log(div.classList);
    // 3. 切换类
    var btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        document.body.classList.toggle('bg');
    })
})