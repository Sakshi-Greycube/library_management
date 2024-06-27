$('#article').submit(e=>{
    e.preventDefault();
    makecall();
    console.log(e.target)
})   

let makecall = async()=>{
    let formdata = $('#article').serializeArray().reduce(
        (obj, item)=>(obj[item.name]=item.value, obj),{}
    );
    console.log(formdata)

    let imagedata = $('#image')[0].files[0];  //image

    let imagefile = new FormData()
    if(imagedata){
        imagefile.append('file', imagedata);    //file:image
    }

    if(formdata){
        let res = await $.ajax({
            url: '/api/resource/Article',
            type: 'POST',
            credentials:include,
            headers: {
                'Content-Type': 'application/json',
                'X-Frappe-CSRF-Token': frappe.csrf_token
            },
            data: JSON.stringify(formdata),
            success: function(data){
                return data
            },
            error: function(data){ //
                return data
            }
        })
        console.log(res);


        if(res.data && imagedata){
            let imgres = await fetch('/api/method/upload_file',{
                headers:{
                    'X-Frappe-CSRF-Token': frappe.csrf_token
                },
                method: 'POST',
                body: imagefile
            })
            .then(res=>res.json()) //c
            .then(data=>{
                console.log(data);

                if(data.message){
                    $.ajax({
                        url: `/api/resource/Article/${res.data.name}`,  
                        type: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Frappe-CSRF-Token': frappe.csrf_token
                        },
                        data: JSON.stringify({image:data.message.file_url}),  
                        success: function(data){ //
                            return data
                        },
                        error: function(data){
                            return data
                        }
                    })
                }
            })
        }
    }
}
