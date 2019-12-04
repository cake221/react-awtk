console.log("wenyufei 温宇飞");

std.evalScript("console.log('wenyufei 温宇飞 123')")
os.setTimeout("123",0)

function test_timer()
{
    var th, i;

    /* just test that a timer can be inserted and removed */
    th = [];
    for(i = 0; i < 3; i++)
        th[i] = os.setTimeout(function () {
            console.log("wenyufe 开始", i)
        }, 1000);
    for(i = 0; i < 3; i++)
        os.clearTimeout(th[i]);
}

test_timer();
