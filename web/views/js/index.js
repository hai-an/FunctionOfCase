$( function ()
{

    function getData ()
    {
        console.log( '怎么会这样呢?' );

        $.get( 'http://127.0.0.1:3001/getAllCourse',
            function ( res )
            {
                // if ( res.status !== 200 )
                // {
                //     return alert( '获取数据失败!' )
                // }
                var data = res.result
                console.log( data )
                let htmlStr = template( 'tpl-list', data )
                $( '#microClass-container' ).html( htmlStr )
            }
        )
    }
    getData()
} )
