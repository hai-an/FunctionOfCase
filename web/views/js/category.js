$( function ()
{
    // tab点击切换事件
    $( '.sidebar-item' ).on( 'click', 'li', function ( e )
    {
        e.preventDefault()
        // 除掉 active类的小li
        $( '.sidebar-item li.active' ).removeClass( "active" )
        // 让当前的小li添加active
        $( this ).addClass( "active" )
        // 获取点击的序号
        let index = $( this ).index()
        console.log( index );
        // let li = document.querySelector( 'li.active' )
        // console.log( li.dataset.id )


        // 让对应序号的内容显示
        $( '.main-coniner .main-coniner-box' ).eq( index ).show().siblings().hide()

    } )
} )
