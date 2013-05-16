<script type="text/javascript" src='//code.jquery.com/jquery-1.9.1.min.js'></script>
<script type="text/javascript" src="http://npeasy.com:3000/public/javascripts/engine.io-dev.js"></script>
<script type="text/javascript">
    var socket=new eio.Socket('ws://npeasy.com:3000/',{
        "upgrade":true
    })
    socket.on('open',function(){
        console.log(socket.id)
        var rts_identity_url="http://npeasy.com:3000/identity?conn_id="+socket.id+"&from_site=http://npeasy.com:3001"
        $('body').append("<iframe src='"+rts_identity_url+"'></iframe>")
        socket.on('message',function(data){
            $('body').append(data+"<br />")
        })
        socket.on('close',function(){
            console.log('close')
        })
    })
</script>