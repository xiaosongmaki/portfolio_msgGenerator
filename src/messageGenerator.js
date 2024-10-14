// 消息生成器函数
function generateMessage() {
    const messages = [
        "为什么程序员不喜欢大自然？因为那里有太多的bug。",
        "程序员的妻子让他去超市买一个面包，如果有鸡蛋就买六个。他回来时带了六个面包。",
        "有一个程序员走进一家酒吧，点了一杯浮点啤酒。老板说：'对不起，我们只卖整数啤酒。'",
        "为什么程序员喜欢黑暗？因为光明会消耗他们的能量。",
        "程序员的三大谎言：1. 这个bug很容易修复。2. 我们已经完成了90%。3. 注释是不必要的，代码是自解释的。",
        "一个程序员走进一家酒吧，要了一杯HTML。老板说：'对不起，我们不提供标记语言。'",
        "为什么程序员总是单身？因为他们把 1 和 0 看得太重要了。",
        "程序员最喜欢的食物是什么？培根，因为它是 bacon。",
        "为什么程序员总是混淆万圣节和圣诞节？因为 Oct 31 == Dec 25。",
        "程序员最讨厌什么动物？蟒蛇，因为它总是缩进。"
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

// 直接输出一个消息
console.log(generateMessage());

// 导出函数以便其他文件可以使用
module.exports = generateMessage;
