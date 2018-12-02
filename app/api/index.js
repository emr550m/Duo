export function backendCall(request,method)
{
        return fetch('http://192.168.0.10:3005/' + method, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
          }).then((reply)=>{
              return reply.json();
          });
}

